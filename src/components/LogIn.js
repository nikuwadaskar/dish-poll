import React, { useState } from "react";
import users from "./Users";
function LogIn({ setAuth, username, setUsername }) {
  const [password, setPassword] = useState("");

  // doing authentification
  function authentification(e) {
    let status = 0;
    for (const element of users) {
      if (element.username === username) {
        if (element.password !== password) {
          alert("Enter Correct Password");
        } else {
          setAuth(element.password === password);
        }
      } else {
        status++;
      }
    }
    if (status === 5) {
      alert("Please Enter Correct UserName");
    }
  }
  // Log in page UI
  return (
    <>
      <div id="main" className="main-container">
        <div className="box">
          <h2>Login</h2>
          <div className="input-box">
            <input
              id="user-name"
              type="text"
              name=""
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <input
              id="user-pass"
              type="password"
              name=""
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <input
            id="submit"
            type="submit"
            name=""
            value="Submit"
            onClick={authentification}
          />
        </div>
      </div>
    </>
  );
}

export default LogIn;
