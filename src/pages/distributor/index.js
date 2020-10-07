import React, { Fragment, useEffect, useState } from "react";
import { post } from "../../components/auth/transport";
import { SideSheet, Spinner } from "evergreen-ui";
// import AddBeneficiaryComponent from "../beneficiary/add";
import AddDistributor from "./add";

const accceptedData = [
  "familyname",
  "firstname",
  "type",
  "form",
  "location",
  "make",
  "name",
  "policy",
  "accountNumber",
  "model",
  "condition",
];

const DistributorComponent = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [user] = useState(localStorage.getItem("eaze-token"));

  const fetchDistributor = async () => {
    try {
      setLoading(true);
      let results = await post("/fetchUser", {
        id: JSON.parse(user).id,
      });
      setLoading(false);
      setUserData(results?.data?.data);
      if (results.data?.data?.distribution) {
        let newData = [];
        Object.entries(results?.data?.data?.distribution).map(
          ([key, value]) => {
            newData.push({
              ...Object.entries(results?.data?.data?.assets).find(
                ([newKey, newValue], i) => newKey === value.asset
              )[1],
              ...Object.entries(results?.data?.data?.beneficiaries).find(
                ([newKey, newValue], i) => newKey === value.beneficiary
              )[1],
              condition: value.condition || "Not Specified",
            });
          }
        );
        setData(newData);
      } else setData([]);
      // setData(results.data?.data?.distribution);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      if (user) {
        await fetchDistributor();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Asset Distributor Information
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
            Add New Distribution
          </div>
          {loading ? (
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
          ) : (
            <Fragment>
              {!data ? (
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
              ) : (
                <Fragment>
                  <div className="mt-6 grid grid-cols-1 mx-3 row-gap-6 col-gap-4 sm:grid-cols-6">
                    {data.map((d, i) => (
                      <Fragment key={i}>
                        <div key={i} className="sm:col-span-6">
                          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                              <h3 className="text-lg leading-6 font-medium text-gray-900">
                                {/* {header(key, value)} */}
                              </h3>
                              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                                Distributed Asset Details
                              </p>
                            </div>
                            <div>
                              <dl>
                                {Object.entries(d).map(
                                  ([newKey, newValue], j) => {
                                    if (accceptedData.includes(newKey))
                                      return (
                                        <Fragment key={j}>
                                          <div
                                            className={`${
                                              j % 2 === 0
                                                ? "bg-gray-50"
                                                : "bg-white"
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
                      </Fragment>
                    ))}
                  </div>
                </Fragment>
              )}
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
              <p className="text-1xl font-medium leading-7 text-gray-500 sm:leading-9 sm:truncate">
                Add New Distributor
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
          <div>
            <AddDistributor
              fetch={fetchDistributor}
              data={data && data}
              setData={setData}
              user={user && user}
              userData={userData}
              setShow={setShow}
            />
          </div>
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default DistributorComponent;
