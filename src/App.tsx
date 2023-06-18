import React from "react";
import "./App.scss";
import "./components/sidebar/Sidebar.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
