import { createSlice } from "@reduxjs/toolkit";

const enrolledCoursesSlice = createSlice({
  name: "enrolledCourses",
  initialState: {
    items: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      const courseExists = state.items.some(
        (course) => course._id === action.payload._id
      );
      if (!courseExists) {
        state.items.push({ ...action.payload, complete: false });
      }
    },

    toggleCourseCompletion: (state, action) => {
      const course = state.items.find(
        (course) => course._id === action.payload
      );
      if (course) {
        course.complete = !course.complete;
      }
    },
  },
});

export const { enrollCourse, toggleCourseCompletion } =
  enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
