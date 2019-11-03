import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  const { auth } = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
}
