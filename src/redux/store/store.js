import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../slices/coursesSlice";
import enrolledCoursesReducer from "../../redux/slices/enrolledCoursesSlice ";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    enrolledCourses: enrolledCoursesReducer,
  },
});

export default store;
