// initial state
const initState = {
  counter: 0,
};

// create a reducer, it's a function that take 2 parameters (intial state, action)
// used to change the state of the app, based on an action
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 0 };
    default:
      return state;
  }
};

export default reducer;
