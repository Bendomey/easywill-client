import React, { Fragment, Suspense, useState } from "react";
import routes from "../../routes";
import PrivateRoute from "../privateRoute";
import { useLocation, Link, Switch, useHistory } from "react-router-dom";
import { Spinner, CornerDialog } from "evergreen-ui";
// import { AuthContext } from "../../context/auth";

const loading = (props) => {
  return (
    <Fragment>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
    </Fragment>
  );
};
const Layout = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [logoutReguest, setLogoutRequest] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("eaze-token")));

  const handleLogout = () => {
    localStorage.removeItem("eaze-token");
    push("/login");
  };
  return (
    <Fragment>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-20 w-20"
                    src={require("../../assets/logo white.svg")}
                    alt="Workflow logo"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline">
                    <Link
                      to="/"
                      className={`px-3 py-2 rounded-md text-sm font-medium  ${
                        pathname === "/"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300"
                      } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/biography"
                      className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                        pathname === "/biography"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300"
                      } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
                    >
                      Biography
                    </Link>
                    <Link
                      to="/assets"
                      className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                        pathname === "/assets"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300"
                      } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
                    >
                      Assets
                    </Link>
                    <Link
                      to="/beneficiaries"
                      className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                        pathname === "/beneficiaries"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300"
                      } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
                    >
                      Beneficiaries
                    </Link>
                    <Link
                      to="/executor"
                      className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                        pathname === "/executor"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300"
                      } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
                    >
                      Executor
                    </Link>
                    <Link
                      to="/asset_distribution"
                      className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  ${
                        pathname === "/asset_distribution"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300"
                      } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
                    >
                      Asset distribution
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                        onClick={() => setShowProfile(!showProfile)}
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src={require("../../assets/male.jpeg")}
                          alt=""
                        />
                      </button>
                    </div>

                    {showProfile && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                        <div
                          className="py-1 rounded-md bg-white shadow-xs"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                        >
                          <Link
                            to="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Your Profile
                          </Link>
                          <Link
                            to="#/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Settings
                          </Link>
                          <Link
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            onClick={() => {
                              setLogoutRequest(!logoutReguest);
                              setShowProfile(false);
                            }}
                          >
                            Sign out
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="-mr-2 flex md:hidden"
                onClick={() => setShowMenu(!showMenu)}
              >
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className={`${showMenu === false && "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <Link
                to="/"
                className={`px-3 py-2 block rounded-md text-sm font-medium  ${
                  pathname === "/" ? "bg-gray-900 text-white" : "text-gray-300"
                } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
              >
                Dashboard
              </Link>
              <Link
                to="/biography"
                className={`px-3 py-2 block rounded-md text-sm font-medium  ${
                  pathname === "/biography"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
              >
                Biography
              </Link>
              <Link
                to="/assets"
                className={`px-3 py-2 rounded-md block text-sm font-medium  ${
                  pathname === "/assets"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
              >
                Assets
              </Link>
              <Link
                to="/beneficiaries"
                className={`px-3 py-2 rounded-md text-sm font-medium  ${
                  pathname === "/beneficiaries"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
              >
                Beneficiaries
              </Link>
              <Link
                to="/executor"
                className={`px-3 py-2 rounded-md block text-sm font-medium  ${
                  pathname === "/executor"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
              >
                Executor
              </Link>
              <Link
                to="/asset_distribution"
                className={`px-3 py-2 block rounded-md text-sm font-medium  ${
                  pathname === "/asset_distribution"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300"
                } hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
              >
                Asset distribution
              </Link>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={require("../../assets/male.jpeg")}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user?.otherNames} {user?.firstName}
                  </div>
                  <div className="mt-1 text-sm font-medium leading-none text-gray-400">
                    {user?.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Your Profile
                </Link>
                <Link
                  to="/"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Settings
                </Link>
                <Link className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Suspense fallback={loading()}>
          <Switch>
            {routes.map((screen, i) => (
              <PrivateRoute
                name={screen.name}
                key={i}
                component={screen.component}
                exact={screen.exact}
                path={screen.path}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
      <CornerDialog
        title="Logout Request"
        isShown={logoutReguest}
        onCloseComplete={() => setLogoutRequest(!setLogoutRequest)}
        onConfirm={handleLogout}
        confirmLabel={"Yes"}
      >
        Are you sure you want to logout?
      </CornerDialog>
    </Fragment>
  );
};

export default Layout;
