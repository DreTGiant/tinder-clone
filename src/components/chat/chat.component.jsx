import React from "react";
import "./chat.styles.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, profilepic, timestamp }) {
  return (
    <Link to={`chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt={name} src={profilepic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat_timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
