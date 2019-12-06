// import { createStore } from 'redux';
import { createStore } from '../../../utils/createStore';
import reducer from './reducers/index';
console.log('bigreducer', reducer, reducer.length)
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;