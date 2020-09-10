import React from "react";
import "./chats.styles.css";
import Chat from "../chat/chat.component";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="SpiderMan"
        message="whats up?"
        timestamp="20 minutes ago"
        profilepic="..."
      />
      <Chat
        name="SpiderMan"
        message="whats up?"
        timestamp="20 minutes ago"
        profilepic="..."
      />
      <Chat
        name="SpiderMan"
        message="whats up?"
        timestamp="20 minutes ago"
        profilepic="..."
      />
      <Chat
        name="SpiderMan"
        message="whats up?"
        timestamp="20 minutes ago"
        profilepic="..."
      />
      <Chat
        name="SpiderMan"
        message="whats up?"
        timestamp="20 minutes ago"
        profilepic="..."
      />
    </div>
  );
}

export default Chats;
