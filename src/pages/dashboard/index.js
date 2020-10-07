import React, { Fragment, useEffect, useState } from "react";
import { post } from "../../components/auth/transport";
import { Link } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { toaster } from "evergreen-ui";
import download from "downloadjs";

const DashboardComponent = (props) => {
  const initializePayment = usePaystackPayment({
    reference: JSON.parse(localStorage.getItem("eaze-token"))?.id,
    email: JSON.parse(localStorage.getItem("eaze-token"))?.email,
    amount: 0.01 * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    currency: "GHS",
  });
  const [data, setData] = useState(null);
  const [transact, setTransact] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generatePDFLoad, setDeneratePDFLoad] = useState(false);
  const [user] = useState(localStorage.getItem("eaze-token"));

  const fetchData = async () => {
    try {
      setLoading(true);
      let results = await post("/fetchUser", {
        id: JSON.parse(user).id,
      });
      setLoading(false);
      setData(results.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  // you can call this function anything
  const onClose = () => {};

  const generate = async () => {
    if (data) {
      setDeneratePDFLoad(true);
      let results = await post(
        "/generateWill",
        {
          id: JSON.parse(user).id,
        },
        {
          responseType: "blob",
        }
      );
      download(results.data, "will.pdf", "application/pdf");
      setDeneratePDFLoad(false);
      return;
    } else
      return toaster.warning("Something happened", {
        description: "Users information is not set. Please wait...",
      });
  };
  useEffect(() => {
    document.title = "Welcome - Ezwill";
    (async () => {
      if (user) {
        setLoading(true);
        await fetchData();
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (transact === true) {
        setLoading(true);
        await fetchData();
        setLoading(false);
        setTransact(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transact]);
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                Dashboard
              </h2>
            </div>
            <div class="mt-4 flex md:mt-0 md:ml-4">
              {loading ? (
                "Loading..."
              ) : data?.paymentInformation ? (
                <span class="ml-3 shadow-sm rounded-md">
                  <button
                    onClick={generate}
                    disabled={generatePDFLoad}
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
                  >
                    {generatePDFLoad ? "Generating will..." : "Download Will"}
                  </button>
                </span>
              ) : (
                <span class="shadow-sm rounded-md">
                  <button
                    onClick={() =>
                      initializePayment(() => {
                        setTransact(true);
                      }, onClose)
                    }
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Go Premium
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Link
                  to={"biography"}
                  className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        Biography
                      </dt>
                      <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : data?.personalInformation
                          ? "Done"
                          : "Pending"}
                      </dd>
                    </dl>
                  </div>
                </Link>
                <Link
                  to={"assets"}
                  className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        Assets
                      </dt>
                      <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : data?.assets
                          ? "Done"
                          : "Pending"}
                      </dd>
                    </dl>
                  </div>
                </Link>
                <Link
                  to={"beneficiaries"}
                  className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        Beneficiaries
                      </dt>
                      <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : data?.beneficiaries
                          ? "Done"
                          : "Pending"}
                      </dd>
                    </dl>
                  </div>
                </Link>
                <Link
                  to={"executor"}
                  className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        Executor
                      </dt>
                      <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : data?.executor
                          ? "Done"
                          : "Pending"}
                      </dd>
                    </dl>
                  </div>
                </Link>
                <Link
                  to={"asset_distribution"}
                  className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        Asset Distribution
                      </dt>
                      <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                        {loading
                          ? "Loading..."
                          : data?.distribution
                          ? "Done"
                          : "Pending"}
                      </dd>
                    </dl>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default DashboardComponent;
