import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./chatScreen.styles.css";

function ChatScreen(props) {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Peter",
      image: "...",
      message: "Hey, Whats up!?",
    },
    {
      name: "Peter",
      image: "...",
      message: "Hello??",
    },
    {
      image: "...",
      message: "Hi",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chat_screen">
      <p className="chat_timestamp">You matched with Peter on 9/11/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chat_screen_message">
            <Avatar
              className="chat_screen_avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chat_text">{message.message}</p>
          </div>
        ) : (
          <div className="chat_screen_message">
            <p className="chat_text_user">{message.message}</p>
          </div>
        )
      )}
      <form className="chat_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat_input_feild"
          placeholder="Type A message..."
          type="text"
        />
        <button
          type="submit"
          className="chat_input_button"
          onClick={handleSend}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
