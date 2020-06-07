import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/login/Index.js"; // 引入home

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
