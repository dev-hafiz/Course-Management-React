/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ children }) => {
  return (
    <div className="w-[160px] flex items-center justify-center  gap-3 bg-gradient-to-r from-[#FF888A] to-[#FD5586] cursor-pointer  py-3 text-center rounded-md">
      {children} <FaArrowRightLong />
    </div>
  );
};

export default Button;
