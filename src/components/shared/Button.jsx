/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ children }) => {
  return (
    <div className="flex items-center justify-center text-white px-4 gap-3 bg-gradient-to-r from-[#FF888A] to-[#FD5586] cursor-pointer py-3 text-center rounded-md hover:bg-gradient-to-r hover:from-[#FD5586] hover:to-[#FF888A] hover:shadow-lg transition-all duration-[3000ms] ease-linear">
      {children} <FaArrowRightLong />
    </div>
  );
};

export default Button;
