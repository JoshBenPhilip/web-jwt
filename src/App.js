import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;
