const defaultState = {
  data: ["今天星期一", "学习rudux", "下午23点钟"],
  inputValue: "write something",
};
export default (state = defaultState, action) => {
    console.log(action);
    // reducer里只能接受state,不能改变state
    if(action.type==='changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type==='additem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.unshift(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type==='delectItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.splice(action.index,1)
        return newState
    }
  return state;
};
