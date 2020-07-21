import React, { Fragment, useState } from "react";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";
import { SideSheet, toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";
import moment from "moment";

const ChildrenComponent = ({ data, user, fetch, setData }) => {
  const [show, setShow] = useState(false);
  const [familyname, setFamilyName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [othername, setOtherName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [state, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [child, setChild] = useState("");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInit = () => {
    setFamilyName("");
    setFirstName("");
    setOtherName("");
    setGender("");
    setDob("");
    setCountry("");
    setRegion("");
    setCity("");
    setChild("");
    setEdit(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let results = await post("/addChildInformation", {
        id: JSON.parse(user).id,
        familyname,
        othername,
        firstname,
        gender,
        dob,
        country,
        state,
        city,
      });
      setLoading(false);
      await fetch();
      toaster.success("Hurray", {
        description: "Child added successfully",
      });
      setData({
        ...data,
        children: {
          ...data.children,
          [results?.data?.data.id]: results?.data?.data,
        },
      });

      setShow(false);
      handleInit();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/editChildInformation", {
        id: JSON.parse(user).id,
        child,
        familyname,
        othername,
        firstname,
        gender,
        dob,
        country,
        state,
        city,
      });
      setLoading(false);
      await fetch();
      toaster.success("Hurray", {
        description: "Child added successfully",
      });
      setShow(false);
      handleInit();
    } catch (e) {
      toaster.warning("Error", {
        description: e.response.data.error,
      });
    }
  };
  return (
    <Fragment>
      <div
        onClick={() => {
          setShow(true);
        }}
        style={{ cursor: "pointer" }}
        className={
          "w-full bg-gray-100 flex font-light text-sm hover:bg-gray-200 justify-center items-center p-3"
        }
      >
        Add Child
      </div>
      {!data.children ? (
        <Fragment>
          <div
            style={{
              height: "50vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            No children added...
          </div>
        </Fragment>
      ) : (
        <div className={"mt-4"}>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              {Object.entries(data?.children).map(([key, value], i) => {
                return (
                  <Fragment key={i}>
                    <li className={`${i > 0 && "border-t border-gray-200"}`}>
                      <span
                        onClick={() => {
                          setChild(key);
                          setFirstName(value?.firstname);
                          setOtherName(value?.othername);
                          setFamilyName(value?.familyname);
                          setGender(value?.gender);
                          setDob(value?.dateofbirth);
                          setCountry(value?.country);
                          setCity(value?.city);
                          setRegion(value?.state);
                          setEdit(true);
                          setShow(true);
                        }}
                        className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        <div className="flex items-center px-4 py-4 sm:px-6">
                          <div className="min-w-0 flex-1 flex items-center">
                            <div className="flex-shrink-0">
                              <img
                                className="h-12 w-12 rounded-full"
                                src={require("../../assets/male.jpeg")}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                              <div>
                                <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                                  {value?.familyname} {value?.firstname}{" "}
                                  {value?.othername}
                                </div>
                                <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                  <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-user"
                                  >
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  <span className="truncate ml-3">
                                    {value.gender}
                                  </span>
                                </div>
                              </div>
                              <div className="hidden md:block">
                                <div>
                                  <div className="text-sm leading-5 text-gray-900">
                                    Born on{" "}
                                    <time dateTime="2020-01-07">
                                      {moment(value?.dateofbirth).format(
                                        "MMMM, Do YYYY"
                                      )}
                                    </time>
                                  </div>
                                  <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-map-pin"
                                    >
                                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                      <circle cx={12} cy={10} r={3} />
                                    </svg>
                                    <span className={"ml-4"}>
                                      {value.country}, {value.city} (
                                      {value.state})
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <svg
                              className="h-5 w-5 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </span>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <SideSheet
        isShown={show}
        width={400}
        onCloseComplete={() => {
          setEdit(false);
          setShow(false);
          handleInit();
        }}
      >
        <Fragment>
          <div className="md:flex md:items-center md:justify-between border-b p-5">
            <div className="flex-1 min-w-0">
              <p className="text-2xl font-bold leading-7 text-gray-500 sm:leading-9 sm:truncate">
                Add Child
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <span class="shadow-sm rounded-md lg:hidden sm:block">
                <button
                  type="button"
                  onClick={() => {
                    handleInit();
                    setEdit(false);
                    setShow(false);
                  }}
                  class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
          <form onSubmit={edit ? handleEdit : handleSubmit}>
            <div className="mt-6 mx-3 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Child's Family Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={familyname}
                    onChange={(e) => setFamilyName(e.target.value)}
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
                  Child's First Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
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
                  Child's Middle Name
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={othername}
                    onChange={(e) => setOtherName(e.target.value)}
                    required={false}
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required={true}
                    className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  >
                    <option value={""}>Please select</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Date Of Birth
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required={true}
                    type={"date"}
                    className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required={true}
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
              <div className="sm:col-span-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Region
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  {country === "Ghana" ? (
                    <select
                      value={state}
                      onChange={(e) => setRegion(e.target.value)}
                      required={true}
                      className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    >
                      <option value={""}>Please select</option>
                      {regions.map((region, i) => (
                        <Fragment key={i}>
                          <option value={region}>{region}</option>
                        </Fragment>
                      ))}
                    </select>
                  ) : (
                    <input
                      value={state}
                      onChange={(e) => setRegion(e.target.value)}
                      required={true}
                      className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  )}
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  City
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                {loading ? "Adding..." : edit ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default ChildrenComponent;
