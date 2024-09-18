import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./image";
import statisticsReducer from "./statistics";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    image: imageReducer,
    statistics: statisticsReducer,
  },
  applyMiddleware: [thunk],
});

export default store;
