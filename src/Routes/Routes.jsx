import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import CourseDetails from "../pages/course-details/CourseDetails";

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
        loader: ({ params }) =>
          fetch(
            `https://course-management-node-server.vercel.app/courses/${params.id}`
          ),
      },
    ],
  },
]);
