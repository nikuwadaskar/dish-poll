import React, { useState } from "react";
import users from "./Users";
function LogIn({ auth, setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function authentification(e) {
    let status = false;
    for (const element of users) {
      if (element.username === username) {
        if (element.password !== password) {
          status = false;
        } else {
          status = true;
          setAuth(element.password === password);
        }
      } else {
        status = false;
      }
    }
    if (!status) {
      alert("sambhal ke babua ye kya karr raha hai");
    }
  }

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
