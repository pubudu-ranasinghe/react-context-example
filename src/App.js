import React from "react";
import Todos from "./components/Todos";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { TodoProvider } from "./contexts/TodoContext";
import { AuthProvider, useAuthContext, logout } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Greeting />
          <Switch>
            <PrivateRoute path="/todos">
              <TodoProvider>
                <Todos />
              </TodoProvider>
            </PrivateRoute>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

function Greeting() {
  const { auth, dispatch } = useAuthContext();

  if (auth.isLoggedIn)
    return (
      <p>
        Hello, {auth.name}!
        <button onClick={e => dispatch(logout())}>Logout</button>
      </p>
    );
  return <p>You are not logged in</p>;
}

export default App;
