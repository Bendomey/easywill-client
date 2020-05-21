import React, { Fragment, Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./pages/auth/login";
import Register from "./pages/auth/register/register";
import Layout from "./components/layout/layout";
import AdminLayout from "./components/admin/layout";

function loading() {
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
        Loading...
      </div>
    </Fragment>
  );
}

function App() {
  return (
    <Suspense fallback={loading()}>
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/login"
            name={"Login"}
            render={(props) => <Login {...props} />}
          />
          <Route
            exact={true}
            path="/register"
            name={"Register"}
            render={(props) => <Register {...props} />}
          />
            <Route
                path={"/admin"}
                render={(props) => <AdminLayout {...props} />}
            />
          <Route path={"/"} render={(props) => <Layout {...props} />} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
