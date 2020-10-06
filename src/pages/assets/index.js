import React, { Fragment, useEffect, useState } from "react";
import { SideSheet, Spinner } from "evergreen-ui";
import MetalComponent from "./metal";
import { post } from "../../components/auth/transport";
// import ParentComponent from "../biography/parent";
import LandComponent from "./land";
import AutomobileComponent from "./automobile";
import InsuranceComponent from "./insurance";
import BankComponent from "./bank";

const years = [];
for (let i = 2000; i <= 2020; i++) {
  years.push(i);
}

const header = (key, newString) => {
  if (newString.hasOwnProperty("description")) return "Landed Property";
  if (newString.hasOwnProperty("chasisNumber")) return "Automobile";
  if (newString.hasOwnProperty("karat")) return "Precious Metal";
  if (newString.hasOwnProperty("branch")) return "Bank Account";
  return "Life Insurance";
};

const AssetsComponent = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");
  const [user] = useState(localStorage.getItem("eaze-token"));
  const fetchAssets = async () => {
    try {
      setLoading(true);
      let results = await post("/fetchUser", {
        id: JSON.parse(user).id,
      });
      setLoading(false);
      setData(results.data?.data?.assets);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      if (user) {
        setLoading(true);
        await fetchAssets();
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div
            onClick={() => {
              setShow(true);
            }}
            style={{ cursor: "pointer" }}
            className={
              "w-full bg-gray-100 flex font-light text-sm hover:bg-gray-200 justify-center items-center p-3"
            }
          >
            Add Asset
          </div>
          {loading && (
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
                <Spinner />
              </div>
            </Fragment>
          )}
          {data ? (
            <div className="mt-6 grid grid-cols-1 mx-3 row-gap-6 col-gap-4 sm:grid-cols-6">
              {Object.entries(data).map(([key, value], i) => {
                return (
                  <div key={i} className="sm:col-span-6">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {header(key, value)}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                          Personal details and application.
                        </p>
                      </div>
                      <div>
                        <dl>
                          {Object.entries(value).map(
                            ([newKey, newValue], j) => {
                              return (
                                <Fragment key={j}>
                                  <div
                                    className={`${
                                      j % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                                  >
                                    <dt className="text-sm leading-5 font-medium text-gray-500">
                                      {newKey}
                                    </dt>
                                    <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                      {newValue}
                                    </dd>
                                  </div>
                                </Fragment>
                              );
                            }
                          )}
                        </dl>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
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
                No data...
              </div>
            </Fragment>
          )}
        </div>
      </main>
      <SideSheet
        isShown={show}
        width={400}
        onCloseComplete={() => {
          setShow(false);
        }}
      >
        <Fragment>
          <div className="md:flex md:items-center md:justify-between border-b p-5">
            <div className="flex-1 min-w-0">
              <p className="text-2xl font-bold leading-7 text-gray-500 sm:leading-9 sm:truncate">
                Add Asset
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <span className="shadow-sm rounded-md lg:hidden sm:block">
                <button
                  type="button"
                  onClick={() => {
                    setShow(false);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Close
                </button>
              </span>
            </div>
          </div>
          <div className="px-3">
            <div className="mt-3 rounded-md shadow-sm">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={""}>Property Type</option>
                <option value={"metal"}>Precious Metal</option>
                <option value={"land"}>Landed Property</option>
                <option value={"automobile"}>Automobile</option>
                <option value={"insurance"}>Life Insurance</option>
                <option value={"bank"}>Bank Account</option>
              </select>
            </div>
          </div>
          {type === "metal" && (
            <MetalComponent
              fetch={fetchAssets}
              show={setShow}
              setData={setData}
              data={data && data}
              user={user && user}
            />
          )}
          {type === "land" && (
            <LandComponent
              fetch={fetchAssets}
              show={setShow}
              setData={setData}
              data={data && data}
              user={user && user}
            />
          )}
          {type === "automobile" && (
            <AutomobileComponent
              fetch={fetchAssets}
              show={setShow}
              setData={setData}
              data={data && data}
              user={user && user}
            />
          )}
          {type === "insurance" && (
            <InsuranceComponent
              fetch={fetchAssets}
              show={setShow}
              setData={setData}
              data={data && data}
              user={user && user}
            />
          )}
          {type === "bank" && (
            <BankComponent
              fetch={fetchAssets}
              show={setShow}
              setData={setData}
              data={data && data}
              user={user && user}
            />
          )}
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default AssetsComponent;
