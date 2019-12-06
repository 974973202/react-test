const init = {
  inputVal: '',
  inputValList: ['12'],
}

export default (state = init, action) => {
  const newState = JSON.parse( JSON.stringify(state) );
  switch (action.type) {
    case 'CHANGE_TYPE':
      newState.inputVal = action.value;
      return newState;
    case 'CLICK_TYPE':
      newState.inputValList = [...newState.inputValList, action.value];
      newState.inputVal = '';
      return newState;
    case 'DELETE_TYPE':
      newState.inputValList.splice(action.value, 1);
      return newState;
    default:
      console.log('none')
      return newState;
  }
}