import React, { Fragment, useState } from "react";
import BiographySingleComponent from "./biography";
import MarriageComponent from "./marriage";
import ParentComponent from "./parent";
import ChildrenComponent from "./children";

const BiographyComponent = (props) => {
  const [active, setActive] = useState("biography");
  return (
    <Fragment>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Biographic Information
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div>
            <div className="sm:hidden mx-3">
              <select
                  onChange={(e)=>setActive(e.target.value)}
                aria-label="Selected tab"
                className="form-select block w-full"
              >
                <option value={"biography"}>Biography</option>
                <option value={"marriage"}>Marriage</option>
                <option value={"parent"}>Parent</option>
                <option value={"children"}>Children</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button
                    onClick={() => setActive("biography")}
                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm ${
                      active === "biography" ? "border-purple-500" : ""
                    } leading-5 text-${
                      active === "biography" ? "purple" : "gray"
                    }-500 hover:text-gray-700 hover:border-${
                      active === "biography" ? "purple" : "gray"
                    }-300 focus:outline-none focus:text-${
                      active === "biography" ? "purple" : "gray"
                    }-700 focus:border-${
                      active === "biography" ? "purple" : "gray"
                    }-300`}
                  >
                    <svg
                      className={`-ml-0.5 mr-2 h-5 w-5 text-${
                        active === "biography" ? "purple" : "gray"
                      }-500 group-focus:text-${
                        active === "biography" ? "purple" : "gray"
                      }-600`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Biography</span>
                  </button>
                  <button
                    onClick={() => setActive("marriage")}
                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm ${
                      active === "marriage" ? "border-purple-500" : ""
                    } leading-5 text-${
                      active === "marriage" ? "purple" : "gray"
                    }-500 hover:text-gray-700 hover:border-${
                      active === "marriage" ? "purple" : "gray"
                    }-300 focus:outline-none focus:text-${
                      active === "marriage" ? "purple" : "gray"
                    }-700 focus:border-${
                      active === "marriage" ? "purple" : "gray"
                    }-300`}
                  >
                    <svg
                      className={`-ml-0.5 mr-2 h-5 w-5 text-${
                        active === "marriage" ? "purple" : "gray"
                      }-500 group-focus:text-${
                        active === "marriage" ? "purple" : "gray"
                      }-600`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Marriage</span>
                  </button>
                  <button
                    onClick={() => setActive("parent")}
                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm ${
                      active === "parent" ? "border-purple-500" : ""
                    } leading-5 text-${
                      active === "parent" ? "purple" : "gray"
                    }-500 hover:text-gray-700 hover:border-${
                      active === "parent" ? "purple" : "gray"
                    }-300 focus:outline-none focus:text-${
                      active === "parent" ? "purple" : "gray"
                    }-700 focus:border-${
                      active === "parent" ? "purple" : "gray"
                    }-300`}
                  >
                    <svg
                      className={`-ml-0.5 mr-2 h-5 w-5 text-${
                        active === "parent" ? "purple" : "gray"
                      }-500 group-focus:text-${
                        active === "parent" ? "purple" : "gray"
                      }-600`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>parent</span>
                  </button>
                  <button
                    onClick={() => setActive("children")}
                    className={`ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm ${
                      active === "children" ? "border-purple-500" : ""
                    } leading-5 text-${
                      active === "children" ? "purple" : "gray"
                    }-500 hover:text-gray-700 hover:border-${
                      active === "children" ? "purple" : "gray"
                    }-300 focus:outline-none focus:text-${
                      active === "children" ? "purple" : "gray"
                    }-700 focus:border-${
                      active === "children" ? "purple" : "gray"
                    }-300`}
                  >
                    <svg
                      className={`-ml-0.5 mr-2 h-5 w-5 text-${
                        active === "children" ? "purple" : "gray"
                      }-500 group-focus:text-${
                        active === "children" ? "purple" : "gray"
                      }-600`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>Children</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div className={"mt-5"}>
            {active === "biography" && <BiographySingleComponent />}
            {active === "marriage" && <MarriageComponent />}
            {active === "parent" && <ParentComponent />}
            {active === "children" && <ChildrenComponent />}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default BiographyComponent;
