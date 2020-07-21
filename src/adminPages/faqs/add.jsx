import React, { Fragment, useState } from "react";
import { SideSheet, toaster } from "evergreen-ui";
import axios from "axios";
import { v4 } from "uuid";

const AddFaq = ({ show, setShow, faqs, setFaqs }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImageName = v4();

    setLoading(true);
    axios({
      method: "POST",
      url: `https://us-central1-samansiwill.cloudfunctions.net/addFaq`,
      // url: `http://localhost:5001/samansiwill/us-central1/addFaq`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        question,
        answer,
        gen: newImageName,
      },
    })
      .then((data) => {
        setLoading(false);
        if (data.data.ok === false) {
          setLoading(false);
          toaster.warning("Error", {
            description: data.data.error,
          });
          return;
        }
        toaster.success("Hurray", {
          description: "Faq Added successfully",
        });
        setFaqs([
          {
            id: newImageName,
            question,
            answer,
          },
          ...faqs,
        ]);
        setShow(false);
        setQuestion("");
        setAnswer("");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        toaster.warning("Error", {
          description: e?.message,
        });
      });
  };
  return (
    <Fragment>
      <SideSheet isShown={show} onCloseComplete={(e) => setShow(false)}>
        <Fragment>
          <div className={"bg-gray-50 p-5"}>Add A Faq</div>
          <form onSubmit={handleSubmit} className={"p-5"}>
            <div className={"mb-3"}>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Title
              </label>
              <div className="mt-1 relative shadow-sm">
                <input
                  id="text"
                  value={question}
                  required={true}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
                  placeholder="title ..."
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Description
              </label>
              <textarea
                className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
                value={answer}
                rows={5}
                required={true}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder={"Your detailed description here"}
              ></textarea>
            </div>
            <div className={"mt-3 flex flex-end"}>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-half flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                {loading ? "Loading..." : "Add Faq"}
              </button>
            </div>
          </form>
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default AddFaq;
