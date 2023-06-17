import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessages"></div>
      {/* chatInput */}
      <div className="chatInput"></div>
    </div>
  );
};

export default Chat;
