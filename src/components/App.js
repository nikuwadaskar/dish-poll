import { useState } from "react";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodcardRanker from "./FoodcardRanker";

function App() {
  const [auth, setAuth] = useState(true);
  const [username, setUsername] = useState("Guest");

  let rankers = {
    name: username,
    first: [],
    second: [],
    third: [],
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/* {!auth ? (
        <LogIn
          auth={auth}
          setAuth={setAuth}
          username={username}
          setUsername={setUsername}
        />
      ) : (
        <Dashboard username={username} rankers={rankers} />
      )} */}
          <Route exact path="/" element={<Dashboard username={username} rankers={rankers}/>}/>
          <Route exact path="/poll" element={<FoodcardRanker username={username} rankers={rankers}/>}/>
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
