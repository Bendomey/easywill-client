import React, { Fragment, useEffect, useState } from "react";
import { post } from "../../components/auth/transport";
import {Link} from "react-router-dom";
import {Li} from "evergreen-ui";

const DashboardComponent = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    document.title = "Welcome - Easywill";
    (async () => {
      if (user) {
        setLoading(true);
        await fetchData();
        setLoading(false);
      }
    })();
  }, []);
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <Link to={"biography"} className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg">
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
                <Link to={"assets"} className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg">
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
                <Link to={"beneficiaries"} className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg">
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
                <Link to={"executor"} className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg">
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
                <Link to={"asset_distribution"} className="bg-white hover:bg-gray-50 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dl>
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        Asset Distributor
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
