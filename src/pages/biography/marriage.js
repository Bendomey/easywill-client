import React, { Fragment, useState } from "react";
import countries from "../../components/data/countries";
import regions from "../../components/data/regions";
import { post } from "../../components/auth/transport";
import { toaster } from "evergreen-ui";

const MarriageComponent = ({ data, user }) => {
  const [spousefamilyname, setFamilyName] = useState(
    data?.spousefamilyname || ""
  );
  const [spousefirstname, setFirstName] = useState(data?.spousefirstname || "");
  const [spousemiddlename, setOtherName] = useState(
    data?.spousemiddlename || ""
  );
  const [spousegender, setGender] = useState(data?.spousegender || "");
  const [spousebirthdate, setDob] = useState(data?.spousebirthdate || "");
  const [spousebirthcountry, setBirthCountry] = useState(
    data?.spousebirthcountry || ""
  );
  const [spousebirthstate, setBirthState] = useState(
    data?.spousebirthstate || ""
  );
  const [spousebirthcity, setBirthCity] = useState(data?.spousebirthcity || "");
  const [spousephonenumber, setPhone] = useState(data?.spousephonenumber || "");
  const [spouseaddresscountry, setCountry] = useState(
    data?.spouseaddresscountry || ""
  );
  const [spouseaddressstate, setRegion] = useState(
    data?.spouseaddressstate || ""
  );
  const [spouseaddresscity, setCity] = useState(data?.spouseaddresscity || "");
  const [loading, setLoading] = useState(false);

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addMarriageInformation", {
        id: JSON.parse(user).id,
        spousefamilyname,
        spousefirstname,
        spousemiddlename,
        spousegender,
        spousebirthdate,
        spousebirthcountry,
        spousebirthstate,
        spousebirthcity,
        spousephonenumber,
        spouseaddresscountry,
        spouseaddressstate,
        spouseaddresscity,
      });
      setLoading(false);
      toaster.success("Hurray", {
        description: "Marriage Information updated successfully",
      });
    } catch (e) {
      console.log(e);
      // toaster.warning("Error", {
      //   description: e.response.data.error,
      // });
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 grid mx-3 grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Spouse's Family Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={spousefamilyname}
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
              Spouse's First Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={spousefirstname}
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
              Spouse's Middle Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={spousemiddlename}
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
                value={spousegender}
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
                value={spousebirthdate}
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
              Country Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={spousebirthcountry}
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
              Region Of Birth
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              {spousebirthcountry === "Ghana" ? (
                <select
                  value={spousebirthstate}
                  onChange={(e) => setBirthState(e.target.value)}
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
                  value={spousebirthstate}
                  onChange={(e) => setBirthState(e.target.value)}
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
                value={spousebirthcity}
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
              Phone Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={spousephonenumber}
                onChange={(e) => setPhone(e.target.value)}
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
                value={spouseaddresscountry}
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
              {spouseaddresscountry === "Ghana" ? (
                <select
                  value={spouseaddressstate}
                  onChange={(e) => setRegion(e.target.value)}
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
                  value={spouseaddressstate}
                  onChange={(e) => setRegion(e.target.value)}
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
                value={spouseaddresscity}
                onChange={(e) => setCity(e.target.value)}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
        <div className="bg-white mt-5 pt-2 border-t border-gray-200 flex mx-3 justify-end ">
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

export default MarriageComponent;
