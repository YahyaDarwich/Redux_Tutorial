import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  render() {
    return (
      <>
        <p>Counter:</p>
        <button onClick={this.props.increment}>+</button>
        <div>{this.props.counter}</div>
        <button onClick={this.props.decrement}>-</button>
        <p>
          <button onClick={this.props.reset}>Reset</button>
        </p>
      </>
    );
  }
}

// It receives the entire store state, and return an object of data this component needs.
// It is called every time the store state changes.
function mapStateToProps(state) { // state returned from reducer
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }), // dispatch take an action (a javaScript object)
                                                      // each action must have a property (type)
                                                      // Each field in the object will become a separate prop
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // (connect) to make connection between Counter component & reducer
