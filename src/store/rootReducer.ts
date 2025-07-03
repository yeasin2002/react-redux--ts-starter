// src/store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers here
});

export default rootReducer;
