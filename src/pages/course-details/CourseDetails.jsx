import { useLoaderData } from "react-router-dom";
import SectionTab from "../../components/shared/SectionTab";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log("course --->", course);
  return (
    <div>
      <SectionTab details="details" />
    </div>
  );
};

export default CourseDetails;
