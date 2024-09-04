import { useLoaderData } from "react-router-dom";
import SectionTab from "../../components/shared/SectionTab";
import shape from "../../../src/assets/Line 48.png";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log("course --->", course);
  return (
    <div>
      <SectionTab details="details" />
      <div className="px-0 md:px-32 mb-20">
        <div className="mt-16 p-5 flex flex-col gap-4">
          <h2 className="text-4xl font-serif font-medium">{course?.name}</h2>
          <div>
            <div className="flex items-center gap-3 ">
              <div className="w-[50px] h-[50px] rounded-full">
                <img
                  src={course?.instructorImg}
                  alt="teacher"
                  className="w-auto h-auto rounded-full"
                />
              </div>
              <div>
                <h2 className="font-roboto font-medium text-xl">
                  {course?.instructor}
                </h2>
                <p className="bg-gradient-to-r from-[#FF888A] to-[#FD5586]  py-1 text-white rounded-full text-center text-sm font-medium ">
                  Instructor
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 p-5 w-3/5 h-auto">
          <img
            className="w-full h-auto rounded-lg"
            src={course?.thumbnail}
            alt="course image"
          />
        </div>
        <div className="p-5">
          <img src={shape} className="hidden md:block absolute" alt="shape" />
          <h2 className="text-3xl font-serif mt-7 relative mb-2 md:mb-0">
            Description
          </h2>
          <hr className="block md:hidden" />
        </div>
        <div className="p-5">
          <p className="mt-16 mb-5 text-xl font-serif">{course?.description}</p>
          <h3 className="mt-16 text-3xl font-serif">Prerequisites:</h3>
        </div>
        <div className="pl-10">
          <ul>
            {course?.prerequisites?.map((skill, index) => (
              <li key={index} className="font-serif text-xl">
                {index + 1}. {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* table  */}
        <div className="w-full md:w-3/6  mt-10">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-xl">
              <thead>
                <tr className="bg-blue-gray-100 text-gray-700">
                  <th className="py-3 px-4 text-left">Details</th>
                  <th className="py-3 px-4 text-left">Availability</th>
                </tr>
              </thead>
              <tbody className="text-blue-gray-900">
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4 font-serif">Enrollment status</td>
                  <td className="py-3 px-4">
                    <p className="w-3/6 bg-gradient-to-r from-[#75db7c] to-[#49e249]  py-1 text-white rounded-full text-center text-sm font-medium ">
                      {course?.enrollmentStatus}
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4 font-serif">Course Duration</td>
                  <td className="py-3 px-4">
                    <p className="w-3/6 bg-gradient-to-r from-[#7583db] to-[#2b63c4]  py-1 text-white rounded-full text-center text-sm font-medium ">
                      {course?.duration}
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4 font-serif">Location</td>
                  <td className="py-3 px-4">
                    <p className="w-3/6 bg-gradient-to-r from-[#75db7c] to-[#49e249]  py-1 text-white rounded-full text-center text-sm font-medium ">
                      {course?.location}
                    </p>
                  </td>
                </tr>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4 font-serif">Schedule</td>
                  <td className="py-3 px-4">
                    <p className="w-3/6 bg-gradient-to-r from-[#5e6fde] to-[#2068e4]  py-1 text-white rounded-full text-center text-sm font-medium ">
                      {course?.schedule}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Accordian  */}
        <div>
          <h2 className="text-3xl font-serif mt-7">Syllabus:</h2>
          {course?.syllabus?.map((chapter, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-[#EEF4FA] text-black mt-5 "
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <p>
                  Week :{chapter?.week} {chapter?.content}
                </p>
              </div>
              <div className="collapse-content">
                <p>{chapter?.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
