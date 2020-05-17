import React, { Fragment, useState } from "react";
import { post } from "../../components/auth/transport";
import { toaster } from "evergreen-ui";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";

const EditExecutor = ({ data }) => {
  const [loading, setLoading] = useState("");
  const [city, setCity] = useState(data?.city || "");
  const [country, setCountry] = useState(data?.country || "");
  const [dateofbirth, setDOB] = useState(data?.dateofbirth || "");
  const [familyname, setFamilyName] = useState(data?.familyname || "");
  const [firstname, setFirstName] = useState(data?.firstname || "");
  const [gender, setGender] = useState(data?.gender || "");
  const [othername, setOtherName] = useState(data?.othername || "");
  const [phonenumber, setPhoneNumber] = useState(data?.phonenumber || "");
  const [idnumber, setIDNum] = useState(data?.idnumber || "");
  const [idnumtype, setIDType] = useState(data?.idnumtype || "");
  const [state, setState] = useState(data?.state || "");
  const [address, setAddress] = useState(data?.address || "");
  const [user] = useState(localStorage.getItem("eaze-token"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addExecutorInformation", {
        id: JSON.parse(user).id,
        city,
        country,
        dateofbirth,
        familyname,
        firstname,
        gender,
        othername,
        phonenumber,
        idnumber,
        idnumtype,
        address,
        state,
      });
      setLoading(false);
      toaster.success("Hurray", {
        description: "Executor updated successfully",
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
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
                value={idnumtype}
                onChange={(e) => setIDType(e.target.value)}
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
                value={idnumber}
                onChange={(e) => setIDNum(e.target.value)}
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
                value={familyname}
                onChange={(e) => setFamilyName(e.target.value)}
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
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={othername}
                onChange={(e) => setOtherName(e.target.value)}
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
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
                value={dateofbirth}
                onChange={(e) => setDOB(e.target.value)}
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
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
              Region
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              {country === "Ghana" ? (
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                  onChange={(e) => setState(e.target.value)}
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              )}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
            {loading ? "Adding..." : "Submit"}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default EditExecutor;
