import React, { useState } from "react";
import {
  useAuthContext,
  loginSuccess,
  loginFail
} from "../contexts/AuthContext";
import { apiLogin } from "../api/auth";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { auth, dispatch } = useAuthContext();

  // Handle login will call the login API and dispatch actions
  // depending on the result
  async function handleLogin() {
    setLoading(true);
    try {
      await apiLogin(name);
      setLoading(false);
      dispatch(loginSuccess(name));
    } catch (error) {
      setLoading(false);
      dispatch(loginFail(error.message));
    }
  }

  // If user is already logged in redirect to Todos page
  if (auth.isLoggedIn) return <Redirect to="/todos" />;

  if (loading) return <p>Loading..</p>;

  return (
    <header className="App-header">
      <h2>Login</h2>
      <div className="Item">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
        <button onClick={handleLogin}>Login</button>
      </div>
      {auth.error && <p>{auth.error}</p>}
    </header>
  );
}
