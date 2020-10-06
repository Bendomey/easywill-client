import React, { Fragment, useState } from "react";
import { toaster } from "evergreen-ui";
import { post } from "../../components/auth/transport";

const MetalComponent = ({ data, user, fetch, show }) => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [form, setForm] = useState("");
  const [karat, setKarat] = useState("");
  const [location, setLocation] = useState("");
  const [otherInformation, setOtherInformation] = useState("");

  const handleInit = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await post("/addPreciousMetalInformation", {
        id: JSON.parse(user).id,
        type,
        form,
        karat,
        location,
        otherInformation,
        typeOfAsset: "metal",
      });
      setLoading(false);
      await fetch();
      toaster.success("Hurray", {
        description: "Asset added successfully",
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
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Type
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required={true}
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
                <option value={"Gold"}>Gold</option>
                <option value={"Silver"}>Silver</option>
                <option value={"Diamond"}>Diamond</option>
                <option value={"Pearls"}>Pearls</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Form
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={form}
                onChange={(e) => setForm(e.target.value)}
                required={true}
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
                <option value={"Necklace"}>Necklace</option>
                <option value={"Bracelet"}>Bracelet</option>
                <option value={"Earrings"}>Earrings</option>
                <option value={"Bar"}>Bar</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Karat
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <select
                value={karat}
                onChange={(e) => setKarat(e.target.value)}
                required={true}
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Please select</option>
                {[10, 12, 14, 18, 20, 22, 24].map((karat, i) => (
                  <Fragment key={i}>
                    <option value={`${karat} Karat`}>{karat} Karat</option>
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
              Location
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
              Other Information
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                value={otherInformation}
                onChange={(e) => setOtherInformation(e.target.value)}
                rows={5}
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              ></textarea>
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

export default MetalComponent;
