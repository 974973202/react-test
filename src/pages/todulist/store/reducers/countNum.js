const init = {
  num: 10
}

export default (state = init, action) => {
  const newState = JSON.parse( JSON.stringify(state) );
  switch (action.type) {
    case 'ADDNUM_TYPE':
      newState.num++;
      return newState;
    default:
      console.log('none add')
      return newState;
  }
}