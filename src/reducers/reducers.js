const initialState = {
  value: 0,
  number: 1
};

const reducer = (state=initialState, action) => {
  const newState = {... state};

  switch (action.type) {
    case "NUMBER_PLUS":
      newState.value = newState.value + newState.number;
      break;
    case "NUMBER_MINUS":
      newState.value = newState.value - newState.number;
      break;
    case "CHANGER_NUMBER":
      newState.number = action.payload;
      break;
    default:
      return newState;
  }
  return newState;
}

export default reducer;
