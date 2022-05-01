import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.css";
import counterReducer from "./reducers/CounterReducer";
import GetCounter from "./components/GetCounter";

// each store must have at least one reducer
const store = createStore(counterReducer);

function App() {
  return (
    <div className="App">
      {/* <provider></provider> to make redux store available to the rest components, 
      all components inside provider can access store
      or you can add <App></App> to provider in index.js*/}
      <Provider store={store}> 
        <Counter />
        <GetCounter/>
      </Provider>
    </div>
  );
}

export default App;
