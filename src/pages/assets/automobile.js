import React, { Fragment, useState } from "react";
import { toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";

const years = [];
for (let i = 2000; i <= 2020; i++) {
  years.push(i);
}

const AutomobileComponent = ({ data, user, fetch, show, setData }) => {
  const [loading, setLoading] = useState(false);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [chasisNumber, setChasisNumber] = useState("");

  const handleInit = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let results = await post("/addAutomobileInformation", {
        id: JSON.parse(user).id,
        make,
        model,
        year,
        color,
        chasisNumber,
      });
      setLoading(false);
      console.log({
        ...data,
        [results?.data?.data.id]: results?.data?.data,
      })
      // setData({
      //   ...data,
      //   [results?.data?.data.id]: results?.data?.data,
      // });
      await fetch();
      toaster.success("Hurray", {
        description: "Asset added successfully",
      });
      show(false);
      handleInit();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 grid grid-cols-1 mx-3 row-gap-6 col-gap-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Make
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={make}
                onChange={(e) => setMake(e.target.value)}
                required={true}
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
                <option value={"Nissan"}>Nissan</option>
                <option value={"Toyota"}>Toyota</option>
                <option value={"Kia"}>Kia</option>
                <option value={"Chevrolet"}>Pearls</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Model
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={model}
                onChange={(e) => setModel(e.target.value)}
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
              Year
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required={true}
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
                {years.map((term, i) => (
                  <Fragment key={i}>
                    <option value={term}>{term}</option>
                  </Fragment>
                ))}
              </select>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Color
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={color}
                onChange={(e) => setColor(e.target.value)}
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
              Chasis Number
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={chasisNumber}
                onChange={(e) => setChasisNumber(e.target.value)}
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
            {loading ? "Adding..." : "Submit"}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default AutomobileComponent;
