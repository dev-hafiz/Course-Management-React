import { createSlice } from "@reduxjs/toolkit";

// Create a slice to manage enrolled courses
const enrolledCoursesSlice = createSlice({
  name: "enrolledCourses",
  initialState: {
    items: [], // Store enrolled courses here
  },
  reducers: {
    enrollCourse: (state, action) => {
      // Add the course only if it is not already in the enrolled courses
      const courseExists = state.items.some(
        (course) => course._id === action.payload._id
      );
      if (!courseExists) {
        state.items.push(action.payload);
      }
    },
    unenrollCourse: (state, action) => {
      // Remove the course from enrolled courses
      state.items = state.items.filter(
        (course) => course._id !== action.payload._id
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
