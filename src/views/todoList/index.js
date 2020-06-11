import React, { Component } from "react";
import store from "./../../store/index";
import TodoListUi from './todoList'
export class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.delectItem=this.delectItem.bind(this)
    store.subscribe(this.storeChange); //f订阅
  }
  render() {
    return (
        <TodoListUi 
        inputValue={this.state.inputValue}
        changeValue={this.changeValue}
        addItem={this.addItem}
        data={this.state.data}
        delectItem={this.delectItem}
        ></TodoListUi>
    );
  }
  //f订阅
  storeChange = () => {
    this.setState(store.getState());
  };
  // 输入changeInput
  changeValue = (e) => {
    console.log(e.target.value);
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  };
  // 增加item
  addItem = () => {
    const action = {
      type: "additem",
    };
    store.dispatch(action);
  };
  // 删除item
  delectItem(index){
    const action = {
      type: "delectItem",
      index,
    };
    store.dispatch(action);
  };
}

export default todoList;
