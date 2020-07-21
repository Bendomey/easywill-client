import React, { Fragment, useState, useEffect } from "react";
import { SideSheet, toaster, Dialog } from "evergreen-ui";
import axios from "axios";

const EditFaqs = ({ show, setShow, data, fetchFaqs }) => {
  const [id, setID] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [loadDelete, setDeleteLoad] = useState(false);

  useEffect(() => {
    if (data) {
      setID(data?.id);
      setQuestion(data?.question);
      setAnswer(data?.answer);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    axios({
      method: "POST",
      url: `https://us-central1-samansiwill.cloudfunctions.net/editFaq`,
      //   url: `http://localhost:5001/samansiwill/us-central1/editFaq`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id,
        question,
        answer,
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
          description: "Faq Updated successfully",
        });
        fetchFaqs();
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

  const handleDelete = () => {
    setDeleteLoad(true);
    axios({
      method: "POST",
      url: `https://us-central1-samansiwill.cloudfunctions.net/deleteFaq`,
      //   url: `http://localhost:5001/samansiwill/us-central1/deleteFaq`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id,
      },
    })
      .then((data) => {
        setDeleteLoad(false);
        if (data.data.ok === false) {
          setLoading(false);
          toaster.warning("Error", {
            description: data.data.error,
          });
          return;
        }
        toaster.success("Hurray", {
          description: "Faq deleted successfully",
        });
        fetchFaqs();
        setDeleteShow(false);
        setShow(false);
      })
      .catch((e) => {
        setDeleteLoad(false);
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
          <div className={"bg-gray-50 p-5"}>Update Faq</div>
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
                {loading ? "Loading..." : "Update Faq"}
              </button>
              <button
                type="button"
                onClick={() => setDeleteShow(true)}
                className="group relative w-half flex ml-2 justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
              >
                Delete
              </button>
            </div>
          </form>
        </Fragment>
      </SideSheet>

      <Dialog
        isShown={deleteShow}
        isConfirmLoading={loadDelete}
        isConfirmDisabled={loadDelete}
        onCloseComplete={() => setDeleteShow(false)}
        onConfirm={handleDelete}
        title={"Delete Faq"}
      >
        <Fragment>
          <span className={"text-gray-500"}>
            Are you sure you want to delete this faq?
          </span>
        </Fragment>
      </Dialog>
    </Fragment>
  );
};

export default EditFaqs;
