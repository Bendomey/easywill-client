import React, { Fragment, useState } from "react";
import { toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";

const InsuranceComponent = ({ data, user, fetch, show }) => {
  const [loading, setLoading] = useState(false);
  const [insuranceCompany, setCompany] = useState("");
  const [policy, setPolicy] = useState("");
  const [valueOfPolicy, setValuePolicy] = useState("");

  const handleInit = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addInsuranceInformation", {
        id: JSON.parse(user).id,
        insuranceCompany,
        policy,
        valueOfPolicy,
        typeOfAsset: "insurance",
      });
      setLoading(false);
      await fetch();
      toaster.success("Hurray", {
        description: "Asset added successfully",
      });
      show(false);
      handleInit();
    } catch (e) {
      toaster.warning("Error", {
        description: e.response.data.error,
      });
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 grid grid-cols-1 mx-3 row-gap-6 col-gap-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Name Of Insurance Company
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={insuranceCompany}
                onChange={(e) => setCompany(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Policy Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={policy}
                onChange={(e) => setPolicy(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Value of Policy
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={valueOfPolicy}
                onChange={(e) => setValuePolicy(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
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

export default InsuranceComponent;
