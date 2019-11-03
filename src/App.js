import React from "react";
import Todos from "./components/Todos";
import Login from "./components/Login";
import { TodoProvider } from "./contexts/TodoContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Greeting />
        <Switch>
          <Route path="/todos">
            <TodoProvider>
              <Todos />
            </TodoProvider>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Greeting() {
  return <p>You are not logged in</p>;
}

export default App;
