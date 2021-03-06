import React, { Fragment, useState, useEffect } from "react";
import { v4 } from "uuid";
import { toaster } from "evergreen-ui";
import { post } from "../../../components/auth/transport";
import { useHistory } from "react-router-dom";

const RegisterComponent = (props) => {
  const { push } = useHistory();

  const [first, setFirst] = useState("");
  const [other, setOther] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Register - Easywill";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm)
      return toaster.warning("Error", {
        description: "Passwords do not match",
      });
    let gen = v4();
    try {
      setLoading(true);
      let results = await post("/addUserAuth", {
        gen,
        first,
        other,
        email,
        password,
        location,
      });
      localStorage.setItem("eaze-token", JSON.stringify(results.data.data));
      push("/");
      toaster.success("Hurray", {
        description: "Your account was created successfully",
      });
      setLoading(false);
    } catch (e) {
      toaster.warning("Error", {
        description: e?.response?.data?.error,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={require("../../../assets/logo.svg")}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Register
            </h2>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Last Name"
                />
              </div>
              <div className="-mt-px">
                <input
                  type="text"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Other Names"
                />
              </div>
              <div className="-mt-px">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Address"
                />
              </div>
              <div className="-mt-px">
                <input
                  aria-label="Email address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Email address"
                />
              </div>
              <div className="-mt-px">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Password"
                />
              </div>
              <div className="-mt-px">
                <input
                  aria-label="Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition duration-150 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-purple-500 group-hover:text-purple-400 transition ease-in-out duration-150"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                {loading ? "Registering user..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterComponent;
