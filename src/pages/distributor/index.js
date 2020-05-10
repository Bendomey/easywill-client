import React, { Fragment } from "react";

const DistributorComponent = (props) => {
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Asset Distributor Information
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("hello");
            }}
          >
            <div className="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
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
              <div className="sm:col-span-3">
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
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default DistributorComponent;
