import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <p>chat Page</p>
          </Route>
          <Route path="/">
            <p>Home Page</p>
          </Route>
        </Switch>
        {/* Cards */}
        {/* Buttons below cards */}
        {/* Chats Screen */}
        {/* Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;
