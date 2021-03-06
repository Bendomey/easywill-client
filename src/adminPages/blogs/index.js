import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toaster, SideSheet } from "evergreen-ui";
import { storage } from "../../components/upload";
import { v4 } from "uuid";
import moment from "moment";
import axios from "axios";
import ViewBlog from "./view";
import matchSorter from "match-sorter";

const truncateWord = (text, truncate = null) => {
  let htmlFiltered = text.replace(/(<([^>]+)>)/gi, "");
  if (truncate) {
    if (htmlFiltered.split("").length > truncate) {
      return htmlFiltered.split("").slice(0, truncate).join("") + "...";
    }

    return htmlFiltered;
  }
  return htmlFiltered;
};

function snapshotToArray(snapshot) {
  var returnArr = [];
  Object.entries(snapshot).forEach(function ([key, snap], i) {
    var item = snap;
    item.key = key;

    returnArr.push(item);
  });
  return returnArr;
}

const BLOGS = (props) => {
  useEffect(() => {
    document.title = "Manage Blog | Easy Will";
  });
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [picURL, setPicURL] = useState(null);
  const [loading, setLoading] = useState(false);

  const [faqs, setFaqs] = useState(null);
  const [faqsHold, setFaqsHold] = useState(null);
  const [loadFaqs, setLoadFaqs] = useState(false);
  const [search, setSearch] = useState("");

  const [openPost, setOpenPost] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (faqsHold) {
      let filtered = matchSorter(faqsHold, search, {
        keys: ["title", "description"],
      });
      setFaqs(filtered);
    }
  }, [faqsHold, search]);

  const fetchFaqs = () => {
    axios("https://us-central1-samansiwill.cloudfunctions.net/blogs")
      .then((res) => res.data)
      .then((result) => {
        setLoadFaqs(false);
        let a = snapshotToArray(result.data);
        setFaqs(a);
        setFaqsHold(a);
      })
      .catch((e) => {
        setLoadFaqs(false);
        console.log("Error", e);
      });
  };

  useEffect(() => {
    setLoadFaqs(true);

    fetchFaqs();
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0] !== undefined) {
      setPicURL(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setPicURL(URL.createObjectURL(file));
      setFile(file);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    //validation
    if (!file)
      return toaster.warning("Error", {
        description: "Please add an image",
      });

    if (title.trim().length === 0)
      return toaster.warning("Error", {
        description: "Please add title to the blog",
      });

    if (description.trim().length === 0)
      return toaster.warning("Error", {
        description: "Please add a description to the blog",
      });

    setLoading(true);
    let newImageName = v4();
    const upload = storage
      .ref(`blogs/${newImageName}.${file.name.split(".")[1]}`)
      .put(file);
    upload.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        toaster.warning("Error", {
          description: error?.message,
        });
        setLoading(true);
      },
      () => {
        storage
          .ref(`blogs`)
          .child(`${newImageName}.${file.name.split(".")[1]}`)
          .getDownloadURL()
          .then((imageData) => {
            //data that is uploaded
            axios({
              method: "POST",
              url: `https://us-central1-samansiwill.cloudfunctions.net/addBlogs`,
              headers: {
                "Content-Type": "application/json",
              },
              data: {
                title,
                description,
                image: imageData,
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
                  description: "Blog Added successfully",
                });
                setFaqs({
                  ...faqs,
                  [newImageName]: {
                    title,
                    description,
                    image: imageData,
                  },
                });
                setShow(false);
                setTitle("");
                setDescription("");
                setFile(null);
                setPicURL(null);
                // fetchFaqs();
              })
              .catch((e) => {
                setLoading(false);
                console.log(e);
                toaster.warning("Error", {
                  description: e?.message,
                });
              });
          });
      }
    );
  }

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
              to="/admin/blog"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out"
            >
              Manage Blog
            </Link>
          </nav>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
              Manage Blog
            </h2>
          </div>
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            <span className="ml-3 shadow-sm rounded-none">
              <button
                type="button"
                onClick={() => setShow(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add Post
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
          No data here ...
        </div>
      )}

      {!loadFaqs && faqsHold && faqsHold.length !== 0 && (
        <div>
          <input
            id="text"
            onChange={(e) => setSearch(e.target.value)}
            className="form-input rounded-none block w-full sm:text-sm sm:leading-5"
            placeholder="Search by title or description ..."
          />
          <div className="flex flex-col mt-5">
            <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {faqs &&
                faqs.map((post, i) => {
                  return (
                    <Fragment key={i}>
                      <div
                        onClick={() => {
                          setData({
                            id: post?.key,
                            ...post,
                          });
                          setOpenPost(true);
                        }}
                        class="col-span-1 cursor-pointer max-w-sm rounded-none overflow-hidden shadow-sm border border-gray-300"
                      >
                        <img class="w-full h-48" src={post?.image} alt="blog" />
                        <div class="px-6 py-2">
                          <div class="font-bold text-lg truncate">
                            {truncateWord(post?.title)}
                          </div>
                        </div>
                        <div class="px-6 pb-2">
                          <span className="text-indigo-500">
                            {moment(new Date(post?.createdAt)).format(
                              "Do MMMM YYYY hh:mm a"
                            )}
                          </span>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
            </ul>
          </div>
        </div>
      )}

      <SideSheet isShown={show} onCloseComplete={() => setShow(false)}>
        <Fragment>
          <div className={"bg-gray-50 p-5"}>Add Post</div>
          <form onSubmit={handleSubmit} className={"p-5"}>
            <div className={"mb-3"}>
              <div className="flex-shrink-0 h-full w-full flex justify-around items-center flex-col">
                <img
                  style={{ width: 150, height: 150 }}
                  className="rounded-full"
                  src={!picURL ? require("../../assets/default.png") : picURL}
                  alt=""
                />
                <div className="mt-2 relative shadow-sm">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="form-input block w-full sm:text-sm sm:leading-5"
                    placeholder="file here ..."
                  />
                </div>
              </div>
            </div>
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
                  value={title}
                  required={true}
                  onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                rows={10}
                required={true}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={"Your detailed description here"}
              ></textarea>
            </div>
            <div className={"mt-3 flex flex-end"}>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-half flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                {loading ? "Loading..." : "Add News"}
              </button>
            </div>
          </form>
        </Fragment>
      </SideSheet>
      <ViewBlog
        show={openPost}
        setShow={setOpenPost}
        data={data}
        fetchFaqs={fetchFaqs}
        setLoadFaqs={setLoadFaqs}
      />
    </Fragment>
  );
};

export default BLOGS;
