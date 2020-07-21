import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddFaq from "./add";
import EditFaq from "./edit";
import axios from "axios";
import matchSorter from "match-sorter";

function snapshotToArray(snapshot) {
  var returnArr = [];

  Object.entries(snapshot).forEach(function ([key, snap], i) {
    var item = snap;
    item.key = key;

    returnArr.push(item);
  });

  return returnArr;
}

const ManageFaqs = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [data, setData] = useState(null);
  const [faqs, setFaqs] = useState(null);
  const [holdFaq, setHoldFaq] = useState(null);
  const [loadFaqs, setLoadFaqs] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Manage Faqs | Easy Will";
  });

  useEffect(() => {
    if (holdFaq) {
      let filtered = matchSorter(holdFaq, search, {
        keys: ["question", "answer"],
      });
      console.log(filtered);
      setFaqs(filtered);
    }
  }, [holdFaq, search]);

  const fetchFaqs = () => {
    setLoadFaqs(true);
    axios("https://us-central1-samansiwill.cloudfunctions.net/faqs")
      // axios("http://localhost:5001/samansiwill/us-central1/faqs")
      .then((res) => res.data)
      .then((result) => {
        setLoadFaqs(false);
        let a = snapshotToArray(result.data);
        setFaqs(a);
        setHoldFaq(a);
      })
      .catch((e) => {
        setLoadFaqs(false);
        console.log("Error", e);
      });
  };

  useEffect(() => {
    fetchFaqs();
  }, []);
  return (
    <Fragment>
      <div className={"mb-5"}>
        <div>
          <nav className="sm:hidden">
            <Link
              to="/admin"
              className="flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              <svg
                className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </Link>
          </nav>
          <nav className="hidden sm:flex items-center text-sm leading-5 font-medium">
            <Link
              to="/admin"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <svg
              className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <Link
              to="/admin/faqs"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Manage Faqs
            </Link>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Manage Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <span className="ml-3 shadow-sm rounded-md">
              <button
                type="button"
                onClick={() => setShow(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add Faq
              </button>
            </span>
          </div>
        </div>
      </div>
      {loadFaqs && (
        <div
          style={{ height: "50vh" }}
          className={"flex items-center justify-center"}
        >
          Loading ...
        </div>
      )}

      {!loadFaqs && !faqs && (
        <div
          style={{ height: "50vh" }}
          className={"flex items-center justify-center"}
        >
          No faq added ...
        </div>
      )}
      {!loadFaqs && holdFaq && holdFaq.length !== 0 && (
        <dl>
          <input
            id="text"
            onChange={(e) => setSearch(e.target.value)}
            className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
            placeholder="Search by question or answer ..."
          />
          {faqs &&
            faqs.map((member, i) => {
              return (
                <Fragment>
                  <div
                    onClick={() => {
                      setData({
                        id: member?.key,
                        answer: member?.answer,
                        question: member?.question,
                      });
                      setShowEdit(true);
                    }}
                    class="mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8"
                  >
                    <dt class="text-base leading-6 font-medium cursor-pointer text-gray-900 md:col-span-5">
                      {member?.question}
                    </dt>
                    <dd class="mt-2 md:mt-0 md:col-span-7 cursor-pointer">
                      <p class="text-base leading-6 text-gray-500">
                        {member?.answer}
                      </p>
                    </dd>
                  </div>
                </Fragment>
              );
            })}
        </dl>
      )}

      <AddFaq show={show} setShow={setShow} faqs={faqs} setFaqs={setFaqs} />
      <EditFaq
        show={showEdit}
        setShow={setShowEdit}
        data={data}
        fetchFaqs={fetchFaqs}
      />
    </Fragment>
  );
};

export default ManageFaqs;
