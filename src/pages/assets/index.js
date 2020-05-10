import React, { Fragment, useState } from "react";

const years = [];
for (let i = 2000; i <= 2020; i++) {
  years.push(i);
}

const AssetsComponent = (props) => {
  const [type, setType] = useState("");
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Assets Information
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="mt-6 grid grid-cols-1 mx-3 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Property Type
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option value={""}>Please select</option>
                  <option value={"metal"}>Precious Metal</option>
                  <option value={"land"}>Landed Property</option>
                  <option value={"automobile"}>Automobile</option>
                  <option value={"insurance"}>Life Insurance</option>
                  <option value={"bank"}>Bank Account</option>
                </select>
              </div>
            </div>

            {type === "metal" && (
              <Fragment>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Type
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      <option value={"Gold"}>Gold</option>
                      <option value={"Silver"}>Silver</option>
                      <option value={"Diamond"}>Diamond</option>
                      <option value={"Pearls"}>Pearls</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Form
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      <option value={"Necklace"}>Necklace</option>
                      <option value={"Bracelet"}>Bracelet</option>
                      <option value={"Earrings"}>Earrings</option>
                      <option value={"Bar"}>Bar</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Karat
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      {[10, 12, 14, 18, 20, 22, 24].map((karat, i) => (
                        <Fragment key={i}>
                          <option value={`${karat} Karat`}>
                            {karat} Karat
                          </option>
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
                    Location
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
                    Other Information
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <textarea
                      id="last_name"
                      rows={5}
                      className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>
                </div>
              </Fragment>
            )}
            {type === "land" && (
              <Fragment>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Location
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
                    Location
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
                    Type of Ownership
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      <option value={"Lease"}>Lease</option>
                      <option value={"Sub Lease"}>Sub Lease</option>
                      <option value={"Assignment"}>Assignment</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Term
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((term, i) => (
                        <Fragment key={i}>
                          <option value={term}>{term}</option>
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
                    Description
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <textarea
                      id="last_name"
                      rows={5}
                      className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>
                </div>
              </Fragment>
            )}
            {type === "automobile" && (
              <Fragment>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Make
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      <option value={"Nissan"}>Nissan</option>
                      <option value={"Toyota"}>Toyota</option>
                      <option value={"Kia"}>Kia</option>
                      <option value={"Chevrolet"}>Pearls</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Model
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
                    Year
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <select className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                      <option value={""}>Please select</option>
                      {years.map((term, i) => (
                        <Fragment key={i}>
                          <option value={term}>{term}</option>
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
                    Color
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
                    Chasis Number
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="last_name"
                      className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </Fragment>
            )}

            {type === "insurance" && (
              <Fragment>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Name Of Insurance Company
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
                    Policy Number
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
                    Value of Policy
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="last_name"
                      className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </Fragment>
            )}

            {type === "bank" && (
              <Fragment>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Name Of Bank
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
                    Account Number
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
                    Type Of Account
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
                    Branch
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="last_name"
                      className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AssetsComponent;
