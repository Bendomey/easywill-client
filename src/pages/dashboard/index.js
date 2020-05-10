import React, { Fragment,useEffect } from "react";

const DashboardComponent = (props) => {
    useEffect(()=>{
        document.title = "Welcome - Easywill"
    })
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

          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default DashboardComponent;
