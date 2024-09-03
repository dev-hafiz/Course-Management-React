import Navbar from "../../components/shared/Navbar";
import Courses from "../courses/Courses";
import Hero from "./home-components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
    </div>
  );
};

export default Home;
