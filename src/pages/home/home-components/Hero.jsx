/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import Button from "../../../components/shared/Button";
import heroImage from "../../../assets/heroImage1.png";
import shape1 from "../../../assets/shape1.png";
import shape2 from "../../../assets/shape2.png";

const Hero = () => {
  return (
    <div className="w-full px-5 md:px-32 flex flex-col md:flex-row-reverse justify-center items-center bg-gradient-to-l from-[#1C1E53] to-[#151640] text-white min-h-screen">
      <div className="grid grid-cols-12 gap-4 w-full items-center ">
        <div className="col-span-12 md:col-span-6  order-last md:order-first">
          <div className="absolute right-[880px] top-[310px] ">
            <img
              src={shape1}
              className="w-[100px] animate-bubble hidden md:block"
              alt="shape"
            />
          </div>
          <div className="absolute right-[900px] bottom-[320px] ">
            <img
              src={shape2}
              className="w-[100px] hidden md:block"
              alt="shape"
            />
          </div>
          <h1
            className="font-serif text-4xl md:text-6xl font-normal"
            style={{ lineHeight: "77px" }}
          >
            Ignite Your Potential, Online Courses for Lifelong Learning
          </h1>
          <p className="py-6 text-justify">
            Embark on a transformative learning experience. Explore a vast
            library of courses, connect with <br />
            learners, and achieve your goals. Our platform offers flexible
            learning options to fit your busy life.
          </p>
          <div className="mt-6 w-[160px]">
            <Button children={"Get Started"} />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 p-4 flex flex-col justify-end items-end">
          <img src={heroImage} className="w-[700px] h-auto animate-bubble" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
