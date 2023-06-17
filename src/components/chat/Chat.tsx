import React from "react";
import "./Chat.scss";
import ChatHeader from "./ChatHeader";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Message } from "@mui/icons-material";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />

      {/* chatMessage */}
      <div className="chatMessages">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>

      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutlineIcon />
        <form>
          <input type="text" placeholder="Udemyへのメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
