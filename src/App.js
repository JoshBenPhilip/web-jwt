import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;
