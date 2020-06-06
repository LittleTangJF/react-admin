import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home"; // 引入home
import About from "./views/About"; // 引入home

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  reader() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
