import React, { Fragment, useState, useEffect } from "react";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";
import { toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";

const BiographySingleComponent = ({ data, user }) => {
  const [idType, setIDType] = useState(data?.idnumtype || "");
  const [idNum, setIDNum] = useState(data?.idnum || "");
  const [tinNum, setTin] = useState(data?.tinnumber || "");
  const [familyName, setFamilyName] = useState(data?.familyname || "");
  const [firstName, setFirstName] = useState(data?.firstname || "");
  const [otherName, setOtherName] = useState(data?.othername || "");
  const [gender, setGender] = useState(data?.gender || "");
  const [dob, setDob] = useState(data?.dateofbirth || "");
  const [birthCountry, setBirthCountry] = useState(data?.birthcountry || "");
  const [birthState, setBirthState] = useState(data?.birthstate || "");
  const [birthCity, setBirthCity] = useState(data?.birthcity || "");
  const [phone, setPhone] = useState(data?.phonenumber || "");
  const [country, setCountry] = useState(data?.addresscountry || "");
  const [region, setRegion] = useState(data?.addressstate || "");
  const [city, setCity] = useState(data?.addresscity || "");
  const [loading, setLoading] = useState(false);

  console.log(data?.addresscity);

  useEffect(() => {
    if (data) {
      setIDType(data?.idnumtype);
      setIDNum(data?.idnum);
      setTin(data?.tinnumber);
      setFamilyName(data?.familyname);
      setFirstName(data?.firstname);
      setOtherName(data?.othername);
      setGender(data?.gender);
      setDob(data?.dateofbirth);
      setBirthCountry(data?.birthcountry);
      setBirthState(data?.birthstate);
      setBirthCity(data?.birthcity);
      setPhone(data?.phonenumber);
      setCountry(data?.addresscountry);
      setRegion(data?.addressstate);
      setCity(data?.addresscity);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addPersonalInformation", {
        id: JSON.parse(user).id,
        idType,
        idNum,
        tinNum,
        familyName,
        firstName,
        otherName,
        gender,
        dob,
        birthCountry,
        birthState,
        birthCity,
        phone,
        country,
        region,
        city,
      });
      setLoading(false);
      toaster.success("Hurray", {
        description: "Personal Information updated successfully",
      });
    } catch (e) {
      toaster.warning("Error", {
        description: e.response.data.error,
      });
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 mx-3 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Identification Type
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={idType}
                onChange={(e) => setIDType(e.target.value)}
                required={true}
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
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Identification Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={idNum}
                onChange={(e) => setIDNum(e.target.value)}
                required={true}
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
                value={tinNum}
                onChange={(e) => setTin(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Family Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              First Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Middle Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="last_name"
                required={false}
                value={otherName}
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
                required={true}
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
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required={true}
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
              Country Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={birthCountry}
                onChange={(e) => setBirthCountry(e.target.value)}
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
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Region Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              {birthCountry === "Ghana" ? (
                <Fragment>
                  <select
                    required={false}
                    value={birthState}
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
                </Fragment>
              ) : (
                <input
                  value={birthState}
                  onChange={(e) => setBirthState(e.target.value)}
                  required={true}
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
              City Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={birthCity}
                onChange={(e) => setBirthCity(e.target.value)}
                required={true}
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
                type={"number"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={true}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Address (Country)
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
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Address (Region)
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              {country === "Ghana" ? (
                <select
                  value={region}
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
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required={true}
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
              Address (City)
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
        <div className="bg-white mt-5 pt-2 border-t mx-3 border-gray-200 flex justify-end ">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-600 active:bg-blue-600 transition duration-150 ease-in-out"
          >
            {loading ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default BiographySingleComponent;
