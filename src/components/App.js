import { useState } from "react";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";

function App() {
  const [auth, setAuth] = useState(true);
  return <div>{!auth ? <LogIn auth={auth} setAuth={setAuth}/> : <Dashboard />}</div>;
}

export default App;
