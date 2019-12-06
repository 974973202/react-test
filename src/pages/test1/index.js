/* eslint-disable default-case */
import React,
  { 
    createContext, 
    useState, 
    useReducer, 
    useEffect, 
    useCallback,
    useContext,
    useMemo,
    memo,
 } from 'react';

 function reducer(state, action) {
  switch (action.type) {
    case 'incCount' :
      return {
        ...state,
        count: state.count + 1
      };
    case 'incStep':
      return {
        ...state,
        step: state.step + 1
      }
    default:
      return state;
  }
}

const Store = createContext(null);
let data = {
  count: 1,
  step: 1
}

function init(arg) {

  console.log(arg)
  return arg
}

function Parent() {
  const [state, dispatch] = useReducer(reducer, data, init);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {/* {
        1 7 6 8 2 3 4 5 
      } */}
      <Count />
      <Step />
    </Store.Provider>
  );
}

// const Count = memo(() => {
//   const { state, dispatch } = useContext(Store);
//   console.log('Count')
//   return (
//     <button onClick={() => dispatch({type: "incCount"})}>incCount {state.count}</button>
//   );
// });

// const Step = memo(() => {
//   console.log('Step')

//   const { state, dispatch } = useContext(Store);
//   return (
//     <button onClick={() => dispatch({type: "incStep"})}>incStep {state.step}</button>
//   );
// });

const Count = () => {
  const { state, dispatch } = useContext(Store);
  console.log('Count', state)
  return useMemo(
    () => (
      <button onClick={() => dispatch({type: "incCount"})}>
        incCount {state.count}
      </button>
    ),
    [state.count, dispatch]
  );
};

const Step = () => {
  const { state, dispatch } = useContext(Store);
  console.log('Step', state)
  return useMemo(
    () => (
      <button onClick={() => dispatch({type: "incStep"})}>incStep {state.step}</button>
    ),
    [state.step, dispatch]
  );
};

export default Parent;