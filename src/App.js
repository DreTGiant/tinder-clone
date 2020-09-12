import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/tinder-card/card.component";
import SwipeButtons from "./components/buttons/swipeButtons.component";
import Chats from "./components/chats/chats.component";
import ChatScreen from "./components/chat-screen/chatScreen.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Card />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
