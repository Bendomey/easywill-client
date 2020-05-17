import React, { Fragment, useState } from "react";
import { post } from "../../components/auth/transport";
import { toaster } from "evergreen-ui";

const AddDistributor = ({ user, fetch, data, setData }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let results = await post("/addDistributor", {
        id: JSON.parse(user).id,
      });
      setLoading(false);
      await fetch();
      toaster.success("Hurray", {
        description: "Distribution added successfully",
      });
      setData({
        ...data,
        [results?.data?.data.id]: results?.data?.data,
      });
    } catch (e) {
      toaster.warning("Error", {
        description: e.response.data.error,
      });
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 mx-3 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Assets
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                id="country"
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Beneficiary
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                id="country"
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Distribution Condition
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                rows={5}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="bg-white my-5 pt-2 border-t mx-3 border-gray-200 flex justify-end ">
          <button
            disabled={loading}
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-600 active:bg-blue-600 transition duration-150 ease-in-out"
          >
            {loading ? "Adding..." : "Submit"}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default AddDistributor;
