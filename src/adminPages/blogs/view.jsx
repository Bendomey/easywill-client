import React, { Fragment, useState, useEffect } from "react";
import { SideSheet, toaster } from "evergreen-ui";
import { storage } from "../../components/upload";
import axios from "axios";

const getExtension = (url) => {
  let imagePlusTrash = url?.split("/")[7];
  let imageURL = imagePlusTrash?.split("%")[1];
  let image = imageURL?.split("?")[0];
  return image?.split(".")[1];
};

const ViewPost = ({ show, setShow, data, setLoadFaqs, fetchFaqs }) => {
  const [id, setID] = useState("");
  const [picURL, setPicURL] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    setID(data?.id);
    setPicURL(data?.image);
    setFileURL(data?.image);
    setTitle(data?.title);
    setDescription(data?.description);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //delete old pic
    if (file) {
      try {
        const extension = getExtension(fileURL);
        await storage.ref(`blogs/${id}.${extension}`).delete();
        setShow(false);
      } catch (error) {
        toaster.warning("Error", {
          description: "Oops, something happened whiles deleting",
        });
      }

      const upload = storage
        .ref(`blogs/${id}.${file.name.split(".")[1]}`)
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
            .child(`${id}.${file.name.split(".")[1]}`)
            .getDownloadURL()
            .then((imageData) => {
              return update(imageData);
            });
        }
      );
    } else update();
  };

  const update = (imageData = null) => {
    return axios({
      method: "POST",
      //   url: `https://us-central1-samansiwill.cloudfunctions.net/addBlogs`,
      url: `http://localhost:5001/samansiwill/us-central1/editBlog`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title,
        description,
        image: imageData === null ? fileURL : imageData,
        id,
      },
    }).then((newData) => {
      setLoading(false);
      if (newData.data.ok === false) {
        toaster.warning("Error", {
          description: newData.data.error,
        });
        return;
      }
      setLoadFaqs(true);
      fetchFaqs();
      toaster.success("Hurray", {
        description: "Blog post updated successfully",
      });

      setShow(false);
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0] !== undefined) {
      setPicURL(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setPicURL(URL.createObjectURL(file));
      setFile(file);
    }
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    axios({
      method: "POST",
      // url: `https://us-central1-samansiwill.cloudfunctions.net/deleteBlog`,
      url: `http://localhost:5001/samansiwill/us-central1/deleteBlog`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id,
      },
    })
      .then(async (data) => {
        try {
          const extension = getExtension(fileURL);
          await storage.ref(`blogs/${id}.${extension}`).delete();
          setLoadFaqs(true);
          fetchFaqs();
          toaster.success("Success", {
            description: "Blog post successfully deleted",
          });
          setShow(false);
        } catch (error) {
          toaster.warning("Error", {
            description: "Oops, post could not be deleted",
          });
        }
      })
      .catch((e) => {
        toaster.warning("Error", {
          description: e?.message,
        });
      });
  };
  return (
    <Fragment>
      <SideSheet isShown={show} onCloseComplete={() => setShow(false)}>
        <Fragment>
          <div className={"bg-gray-50 p-5"}>View Post</div>
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
                {loading ? "Updating..." : "Update Post"}
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleteLoading}
                className="group ml-2 relative w-half flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-none text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
              >
                {deleteLoading ? "Deleting..." : "Delete Post"}
              </button>
            </div>
          </form>
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default ViewPost;
