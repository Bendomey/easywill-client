import React from "react";
import { Route, Redirect } from "react-router-dom";

const privateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          !localStorage.getItem("eaze-token") ||
          localStorage.getItem("eaze-token") === undefined
        ) {
          localStorage.clear("eaze-token");
          return <Redirect to={{ pathname: "/login" }} />;
        }
        return <Component />;
      }}
    />
  );
};

export default privateRoute;
