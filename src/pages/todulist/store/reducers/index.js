
// import { combineReducers } from 'redux';
import { combineReducers } from '../../../../utils/createStore';
import todoList from './toduList';
import countNum from './countNum';

export default combineReducers({
  todoList,
  countNum
})
