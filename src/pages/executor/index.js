import React, { Fragment, useEffect, useState } from "react";
import { post } from "../../components/auth/transport";
import { Spinner, toaster } from "evergreen-ui";
import EditExecutor from "./form";

const ExecutorComponent = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState("");
  const [user] = useState(localStorage.getItem("eaze-token"));

  useEffect(() => {
    (async () => {
      if (user) {
        setLoading(true);
        try {
          let results = await post("/fetchUser", {
            id: JSON.parse(user).id,
          });
          setData(results.data?.data?.executor);
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      }
    })();
  }, [user]);

  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Executor
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
            <EditExecutor data={data && data} />
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default ExecutorComponent;
