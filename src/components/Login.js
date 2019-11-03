import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    // Handle login here
  }

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
    </header>
  );
}
