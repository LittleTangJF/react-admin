import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// 引用组件
import Login from './views/login/Index';
import todoList from './views/todoList/index'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <BrowserRouter>
        <Switch>
        <Route exact component={todoList} path="/" />
          <Route exact component={Login} path="/Login" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
