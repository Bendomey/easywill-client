import React, { Fragment, useState } from "react";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";
import { post } from "../../components/auth/transport";
import { toaster } from "evergreen-ui";

const ParentComponent = ({ data, user }) => {
  const [fatherfamilyname, setFamilyName] = useState(
    data?.fatherfamilyname || ""
  );
  const [fatherfirstname, setFirstName] = useState(data?.fatherfirstname || "");
  const [fathermiddlename, setOtherName] = useState(
    data?.fathermiddlename || ""
  );
  const [fatherbirthdate, setDob] = useState(data?.fatherbirthdate || "");
  const [fatherbirthcountry, setBirthCountry] = useState(
    data?.fatherbirthcountry || ""
  );
  const [fatherbirthstate, setBirthState] = useState(
    data?.fatherbirthstate || ""
  );
  const [fatherbirthcity, setBirthCity] = useState(data?.fatherbirthcity || "");
  const [fatherphonenumber, setPhone] = useState(data?.fatherphonenumber || "");

  const [motherfamilyname, setMotherFamilyName] = useState(
    data?.motherfamilyname || ""
  );
  const [motherfirstname, setMotherFirstName] = useState(
    data?.motherfirstname || ""
  );
  const [mothermiddlename, setMotherOtherName] = useState(
    data?.mothermiddlename || ""
  );
  const [motherbirthdate, setMptherDob] = useState(data?.motherbirthdate || "");
  const [motherbirthcountry, setMotherBirthCountry] = useState(
    data?.motherbirthcountry || ""
  );
  const [motherbirthstate, setMotherBirthState] = useState(
    data?.motherbirthstate || ""
  );
  const [motherbirthcity, setMotherBirthCity] = useState(
    data?.motherbirthcity || ""
  );
  const [motherphonenumber, setMotherPhone] = useState(
    data?.motherphonenumber || ""
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addParentInformation", {
        id: JSON.parse(user).id,
        fatherfamilyname,
        fatherfirstname,
        fathermiddlename,
        fatherbirthdate,
        fatherbirthcountry,
        fatherbirthstate,
        fatherbirthcity,
        fatherphonenumber,
        motherfamilyname,
        motherfirstname,
        mothermiddlename,
        motherbirthdate,
        motherbirthcountry,
        motherbirthstate,
        motherbirthcity,
        motherphonenumber,
      });
      setLoading(false);
      toaster.success("Hurray", {
        description: "Parent Information updated successfully",
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
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Father's Family Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={fatherfamilyname}
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
              Father's First Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={fatherfirstname}
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
              Father's Middle Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={fathermiddlename}
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
              Father's Date Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={fatherbirthdate}
                onChange={(e) => setDob(e.target.value)}
                type={"date"}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Father's Country Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                id="country"
                value={fatherbirthcountry}
                onChange={(e) => setBirthCountry(e.target.value)}
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
              Father's Region Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                id="country"
                value={fatherbirthstate}
                onChange={(e) => setBirthState(e.target.value)}
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
              Father's City Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={fatherbirthcity}
                onChange={(e) => setBirthCity(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Father's Phone Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={fatherphonenumber}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mother's Family Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={motherfamilyname}
                onChange={(e) => setMotherFamilyName(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mother's First Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={motherfirstname}
                onChange={(e) => setMotherFirstName(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mother's Middle Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={mothermiddlename}
                onChange={(e) => setMotherOtherName(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mother's Date Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={motherbirthdate}
                onChange={(e) => setMptherDob(e.target.value)}
                type={"date"}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mother's Country Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                id="country"
                value={motherbirthcountry}
                onChange={(e) => setMotherBirthCountry(e.target.value)}
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
              Mother's Region Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                id="country"
                value={motherbirthstate}
                onChange={(e) => setMotherBirthState(e.target.value)}
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
              Mother's City Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={motherbirthcity}
                onChange={(e) => setMotherBirthCity(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Mother's Phone Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                value={motherphonenumber}
                onChange={(e) => setMotherPhone(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
        <div className="bg-white mt-5 pt-2 border-t border-gray-200 flex justify-end mx-3 ">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-600 active:bg-blue-600 transition duration-150 ease-in-out"
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ParentComponent;
