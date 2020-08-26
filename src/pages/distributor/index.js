import React, { Fragment, useEffect, useState } from "react";
import { post } from "../../components/auth/transport";
import { SideSheet, Spinner } from "evergreen-ui";
// import AddBeneficiaryComponent from "../beneficiary/add";
import AddDistributor from "./add";

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
      setData(results.data?.data?.distribution);
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
                <Fragment>vkbv</Fragment>
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
            />
          </div>
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default DistributorComponent;
