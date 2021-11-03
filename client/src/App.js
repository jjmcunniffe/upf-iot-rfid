import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import './App.css';

const ENDPOINT = "http://localhost:3001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("TagFound", data => {
      console.log(data);
      setResponse(data.sku);
    });
  }, []);
  return (
    <div className="App">
      <p>
        Tag found with id of {response}.
      </p>
    </div>
  );
}

export default App;
