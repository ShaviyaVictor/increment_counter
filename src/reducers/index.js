import { combineReducers } from "redux";

const counter = (state=0,action) => {
  if (action.type === 'INCREMENT') {
    // This will increase the value of the counter by the value passed to the increment value
    return state+action.inc;
  }
  // Returns the updated value of the state
  return state;
}

const myReducers = combineReducers({counter});

export default myReducers;