import React, { Fragment, useEffect, useState } from "react";
import moment from "moment";
import { post } from "../../components/auth/transport";
import { SideSheet, Spinner } from "evergreen-ui";
import AddBeneficiaryComponent from "./add";

const BeneficiaryComponent = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user] = useState(localStorage.getItem("eaze-token"));
  const fetchBeneficiaries = async () => {
    console.log(JSON.parse(user).id);
    try {
      setLoading(true);
      let results = await post("/fetchUser", {
        id: JSON.parse(user).id,
      });
      setLoading(false);
      setData(results.data?.data?.beneficiaries);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      if (user) {
        await fetchBeneficiaries();
      }
    })();
  }, [user]);
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Beneficiaries
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
            Add Beneficiary
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
                  <Fragment>
                    <div className=" mt-5 flex flex-col">
                      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                          <table className="min-w-full">
                            <thead>
                              <tr>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Name
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Relation
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  Date Of Birth
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                  gender
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(data).map(([key, value], i) => {
                                return (
                                  <Fragment key={i}>
                                    <tr
                                      className={`${
                                        i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                      }`}
                                    >
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                        {value?.firstname} {value?.othername}
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                        {value?.relation}
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                        {moment(value?.dateofbirth).format(
                                          "Do MMMM YYYY "
                                        )}
                                      </td>
                                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                                        {value?.gender}
                                      </td>
                                    </tr>
                                  </Fragment>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </Fragment>
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
          <div>
            <AddBeneficiaryComponent
              fetch={fetchBeneficiaries}
              data={data && data}
              setData={setData}
              user={user && user}
              show={setShow}
            />
          </div>
        </Fragment>
      </SideSheet>
    </Fragment>
  );
};

export default BeneficiaryComponent;
