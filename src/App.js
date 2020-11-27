import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Form from "./Form";
import Message from "./Message";

const initialState = {
  message: null,
  loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.message };

    case "SET_LOADING":
      return {...state, loading: action.isLoading}

    default:
      return state;
  }
}

const identity = (store) => (next) => (action) => {
  return next(action);
};

const logger = (store) => (next) => (action) => {
  console.log("action", action);
  return next(action);
};


const store = createStore(reducer, applyMiddleware(identity, thunk, logger));

export default function App() {
  return (
    <Provider store={store}>
      <Message />
      <Form />
    </Provider>
  );
}
