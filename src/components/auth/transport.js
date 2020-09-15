import axios from "axios";
import { toaster } from "evergreen-ui";

axios.defaults.baseURL = "https://us-central1-samansiwill.cloudfunctions.net";
// axios.defaults.baseURL = "http://localhost:5001/samansiwill/us-central1"; //

const config = {
  headers: {},
};

function notifyError(msg) {
  toaster.danger(msg, {
    id: "network-id",
  });
}

const errorhandler = (error) => {
  if (error.message === "Network Error") {
    notifyError("Network connection lost. Check and try again");
    return;
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};

const setToken = (config = {}) => {
  // const token = Auth.getToken();
  // if (token) {
  //     // alert("Bearer " + JSON.parse(token));
  //     config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
  // }
  config.headers["Accept"] = "application/json";
  config.headers["Content-Type"] = "application/json";
  return config;
};

axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorhandler(error)
);

axios.interceptors.request.use(
  (config) => setToken(config),
  (error) => Promise.reject(error)
);

export const post = (route, payload) =>
  new Promise(function (resolve, reject) {
    axios
      .post(route, payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export const patch = (route, payload) =>
  new Promise(function (resolve, reject) {
    axios
      .patch(route, payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export const get = (route) =>
  new Promise((resolve, reject) => {
    axios
      .get(route, config)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export const delete_request = (route) => {
  new Promise((resolve, reject) => {
    axios
      .delete(route)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const all = (routes) => {
  new Promise((resolve, reject) => {
    axios
      .all(routes)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
