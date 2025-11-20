import React, { useState } from "react";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target;

    // 👉 LET THE BROWSER VALIDATE FIRST
    if (!form.checkValidity()) {
      return; // Browser will show: "Please fill out this field."
    }

    // 👉 ONLY PREVENT DEFAULT IF VALID
    e.preventDefault();

    // Now the fields are valid, so check credentials
    if (username === "user" && password === "password") {
      setLoggedIn(true);
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2>XLogin</h2>
      {/* Error below form only */}
          {message === "Invalid username or password" && (
            <div className="error-message">{message}</div>
          )}
      {!loggedIn && (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>
          </form>
        </>
      )}

      {loggedIn && <div className="message">{message}</div>}
    </div>
  );
}

export default App;