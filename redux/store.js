import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./image";
import statisticsReducer from "./statistics";
import planReducer from "./plan";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    image: imageReducer,
    statistics: statisticsReducer,
    plan: planReducer,
  },
  applyMiddleware: [thunk],
});

export default store;
