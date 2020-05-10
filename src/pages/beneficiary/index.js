import React, { Fragment } from "react";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";

const BeneficiaryComponent = (props) => {
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Beneficiaries
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid mx-3 grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Beneficiary's Family Name
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
                Beneficiary's First Name
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
                Beneficiary's Middle Name
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
                Beneficiary's Gender
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
                Beneficiary's Date Of Birth
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
                  type={"text"}
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Country Of Birth
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <select
                  id="country"
                  className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option value={""}>Please select</option>
                  {countries.map((country, i) => (
                    <Fragment key={i}>
                      <option value={country.country}>{country.country}</option>
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
                Region Of Birth
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
                City Of Birth
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
                Relation
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <select
                  id="country"
                  className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option value={""}>Please select</option>
                  <option value={"Brother"}>Brother</option>
                  <option value={"Cousin"}>Cousin</option>
                  <option value={"Daughter"}>Daughter</option>
                  <option value={"Nephew"}>Nephew</option>
                  <option value={"Niece"}>Niece</option>
                  <option value={"Sister"}>Sister</option>
                  <option value={"Son"}>Son</option>
                  <option value={"Uncle"}>Uncle</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default BeneficiaryComponent;
