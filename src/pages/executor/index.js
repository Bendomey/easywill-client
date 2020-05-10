import React, { Fragment } from "react";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";

const ExecutorComponent = (props) => {
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Executor
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
            <div className="mt-6 mx-3 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Identification Type
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    id="country"
                    className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value={""}>Please select</option>
                    <option value={"Voter's ID"}>Voter's ID</option>
                    <option value={"Passport's ID"}>Passport's ID</option>
                    <option value={"Driver's License"}>Driver's License</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Identification Number
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Tax Identification Number
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Executor's Family Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Executor's First Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                    Executor's Middle Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    id="country"
                    className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value={""}>Please select</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Date Of Birth
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    type={"date"}
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Physical Address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    id="country"
                    className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value={""}>Please select</option>
                    {countries.map((country, i) => (
                      <Fragment key={i}>
                        <option value={country.country}>
                          {country.country}
                        </option>
                      </Fragment>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Region
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    id="country"
                    className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value={""}>Please select</option>
                    {regions.map((region, i) => (
                      <Fragment key={i}>
                        <option value={region}>{region}</option>
                      </Fragment>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  City
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="last_name"
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white mt-5 pt-2 border-t border-gray-200 mx-3 flex justify-end ">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-600 active:bg-blue-600 transition duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default ExecutorComponent;
