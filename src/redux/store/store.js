import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../slices/coursesSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
  },
});

export default store;
