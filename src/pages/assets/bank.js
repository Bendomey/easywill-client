import React, { Fragment, useState } from "react";
import { toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";

const BankComponent = ({ data, user, fetch, show }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAcountType] = useState("");
  const [branch, setBranch] = useState("");

  const handleInit = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addBankInformation", {
        id: JSON.parse(user).id,
        name,
        accountNumber,
        accountType,
        branch,
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
              Name Of Bank
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              Account Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
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
              Type Of Account
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={accountType}
                onChange={(e) => setAcountType(e.target.value)}
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
              Branch
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
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

export default BankComponent;
