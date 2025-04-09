import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageTypeSlice";

export const store = configureStore({
  reducer: {
    pageType: pageReducer,
  },
});
