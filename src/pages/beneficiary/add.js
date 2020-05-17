import React, { Fragment, useState } from "react";
import { toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";

const AddBeneficiaryComponent = ({ user, fetch, show, data, setData }) => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [dateofbirth, setDOB] = useState("");
  const [familyname, setFamilyName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [othername, setOtherName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [relation, setRelation] = useState("");
  const [state, setState] = useState("");

  const handleInit = () => {
    setCity("");
    setCountry("");
    setDOB("");
    setFamilyName("");
    setFirstName("");
    setGender("");
    setOtherName("");
    setPhoneNumber("");
    setRelation("");
    setState("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let results = await post("/addBeneficiaryInformation", {
        id: JSON.parse(user).id,
        city,
        country,
        dateofbirth,
        familyname,
        firstname,
        gender,
        othername,
        phonenumber,
        relation,
        state,
      });
      setLoading(false);
      await fetch();
      toaster.success("Hurray", {
        description: "Beneficiary added successfully",
      });
      setData({
        ...data,
        [results?.data?.data.id]: results?.data?.data,
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
              Beneficiary's Family Name
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
              Beneficiary's First Name
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
              Beneficiary's Middle Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={othername}
                onChange={(e) => setOtherName(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Beneficiary's Gender
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
              Beneficiary's Date Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={dateofbirth}
                onChange={(e) => setDOB(e.target.value)}
                required={true}
                type={"date"}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
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
                required={true}
                type={"text"}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Country Of Birth
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
                    <option value={country.country}>{country.country}</option>
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
              Region Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              {country === "Ghana" ? (
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                  onChange={(e) => setState(e.target.value)}
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
              City Of Birth
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
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Relation
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                required={true}
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

export default AddBeneficiaryComponent;
