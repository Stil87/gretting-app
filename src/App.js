import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Form from "./Form";
import Message from "./Message";

const initialState = {
  message: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, message: action.message };

    default:
      return state;
  }
}

const identity = (store) => (next) => (action) => {
  return next(action);
};

const logger = (store) => (next) => (action) => {
  console.log("action", action);
  next(action);
  console.log("state", store.getState());
};

const thunk = (store) => (next) => (action) => {
  if(typeof action === "function") {
    action(store.dispatch);
  } else {
    next(action);
  }
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