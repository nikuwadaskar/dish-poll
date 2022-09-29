import { useState } from "react";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodcardRanker from "./FoodcardRanker";

function App() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("Guest");
  // chceking uthentification before rendering any page
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              !auth ? (
                <LogIn
                  auth={auth}
                  setAuth={setAuth}
                  username={username}
                  setUsername={setUsername}
                />
              ) : (
                <Dashboard username={username} />
              )
            }
          />

          <Route
            exact
            path="/poll"
            element={
              !auth ? (
                <LogIn
                  auth={auth}
                  setAuth={setAuth}
                  username={username}
                  setUsername={setUsername}
                />
              ) : (
                <FoodcardRanker username={username} auth={auth} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
