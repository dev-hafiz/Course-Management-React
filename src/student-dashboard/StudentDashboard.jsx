import { useState } from "react";
import course from "../assets/course1.png";
import instructorImg from "../assets/user.png";

const StudentDashboard = () => {
  const [complete, setComplete] = useState(false);
  console.log(complete);

  return (
    <div className="bg-[#f2f5f8] h-screen  mx-0 md:mx-5 rounded-md pt-16 px-10">
      <div className="w-3/6 ">
        <h2 className="text-xl mt-1 mb-5 font-medium font-serif text-gray-800">
          Enrolled Courses
        </h2>
        <hr />
      </div>
      <div>
        <div className="flex flex-col float-start">
          <div className="group mt-10 grid max-w-screen-md grid-cols-1  overflow-hidden rounded-lg border text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
            <div className="col-span-2 text-left text-gray-600 hover:text-gray-700">
              <div className="group relative h-full w-full overflow-hidden">
                <img
                  src={course}
                  alt="course image"
                  className="h-full w-full border-none object-cover text-gray-700 transition group-hover:scale-125"
                />
                <span className="absolute top-2 left-2 py-0.5 rounded-full bg-gradient-to-r from-[#FF888A] to-[#FD5586] px-2 text-xs font-semibold text-white">
                  Open
                </span>
                <img
                  src="/images/AnbWyIjnwNbW9Wz6c_cja.svg"
                  className="absolute inset-1/2 w-10 max-w-full -translate-x-1/2 -translate-y-1/2 transition group-hover:scale-125"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-3 flex flex-col pl-5 space-y-3 pr-8 text-left">
              <h2 className="mt-3 overflow-hidden text-2xl font-semibold font-roboto">
                How to make open world with C#
              </h2>

              <div className="flex flex-col gap-2 h-fit  text-sm font-medium">
                <p className="font-roboto mb-4 ">Due Date : 9 Nov 2024</p>

                {!complete ? (
                  <progress
                    className="progress   progress-warning w-56"
                    value="40"
                    max="100"
                  ></progress>
                ) : (
                  <progress
                    className="progress progress-success w-56"
                    value="100"
                    max="100"
                  ></progress>
                )}
              </div>

              <div className="flex items-center flex-col text-gray-700 sm:flex-row">
                <div className="flex items-center gap-3 ">
                  <div className="w-[45px] h-[45px] rounded-full">
                    <img
                      src={instructorImg}
                      alt="teacher"
                      className="w-auto h-auto rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="font-roboto font-medium text-sm">
                      Dino Arabella
                    </h2>
                    <p className="rounded-full bg-green-200 px-2 py-0.5 text-green-800 text-sm font-semibold">
                      Instructor
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setComplete(true)}
                  className="my-5 flex items-center gap-2 rounded-md cursor-pointer px-5 py-2 text-center transition  bg-gradient-to-r from-[#FF888A] to-[#FD5586] hover:from-[#FD5586] hover:to-[#FF888A] hover:shadow-lg text-white sm:ml-auto"
                >
                  {!complete ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
