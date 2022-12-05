import { applyMiddleware, combineReducers, createStore } from "redux";
import { newsReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  listNews: newsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))