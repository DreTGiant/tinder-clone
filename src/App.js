import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "./components/tinder-card/card.component";
import SwipeButtons from "./components/buttons/swipeButtons.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat"></Route>
          <Route path="/">
            <Card />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
