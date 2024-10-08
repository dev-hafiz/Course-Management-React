import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import CourseDetails from "../pages/course-details/CourseDetails";
import Dashboard from "../Layout/Dashboard";
import StudentDashboard from "../student-dashboard/StudentDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
      },
    ],
  },

  // Dashboard Route
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <StudentDashboard />,
      },
    ],
  },
]);
