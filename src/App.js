import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Confirm from "./components/Confirm";
import Rollecall from "./components/Rollecall";
import Yay from "./components/Yay";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/confirm">
          <Confirm/>
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/rollecall">
          <Rollecall />
        </Route>
        <Route path="/yay">
          <Yay />
        </Route>
        <Route path="/">
          <div class="list-container">
            <Header />
            <Form />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
