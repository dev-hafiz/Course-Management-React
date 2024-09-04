/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unknown-property */
import Searchbar from "../../components/Searchbar";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/shared/Button";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  console.log("Courses", courses);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  return (
    <div className="mx-5 md:mx-32 mt-10 mb-44 flex flex-col justify-center items-center gap-4">
      <Searchbar />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {courses?.slice(0, 4).map((course, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-6  lg:col-span-3 mb-5"
          >
            <img
              src={course?.thumbnail}
              alt="course image"
              className="w-[386px] h-[236px] object-cover  rounded-tl-lg rounded-tr-lg"
            />
            <div className="relative p-5">
              <div className="bg-[#FD6387] absolute right-5 -top-4 text-white w-[80px] py-1 flex justify-center  gap-2 items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>

                <span className="font-semibold">{course?.rating}</span>
              </div>
              <h2 className="font-roboto font-bold text-xl">{course?.name}</h2>
              <p className="font-roboto font-normal text-sm my-2 text-[#282938]">
                {course?.description.length > 105
                  ? `${course.description.slice(0, 105)}...`
                  : course?.description}
              </p>

              {/* Duration & location  */}
              <div className="mt-3 flex gap-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span className="text-[#282938] text-sm ml-2 font-semibold">
                    {course?.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <span className="text-[#282938] text-sm ml-2 font-semibold">
                    {course?.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 -mt-2 flex justify-between">
              <div className="flex items-center gap-3 ">
                <div className="w-[40px] h-[40px] rounded-full">
                  <img
                    src={course?.instructorImg}
                    alt="teacher"
                    className="w-auto h-auto rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-roboto font-medium text-sm">
                    {course?.instructor}
                  </h2>
                  <p className="bg-[#FFCB3B] text-white rounded-md text-center text-xs ">
                    Instructor
                  </p>
                </div>
              </div>
              {/* Button  */}
              <Button children={"Details"} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[200px] my-8 ">
        <Button children={"Course Listing Page"} />
      </div>
    </div>
  );
};

export default Courses;
