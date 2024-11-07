import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Password = () => {
  return (
    <div className="px-4 sm:px-8  lg:w-[650px] lg:h-screen md:h-[650px] sm:h-[540px] ">
      <h1 className="font-medium text-lg sm:text-xl py-2 sm:py-4">
        Password and Security
      </h1>
      <div>
        <h3 className="font-medium text-lg sm:text-[20px]">Login & Recovery</h3>
        <p className="font-thin text-sm">Manage your password</p>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>Change your password</span>
            <IoIosArrowForward />
          </div>
          <div className="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>2FA</span>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div>
        <h3>Security Checks</h3>
        <p>More info about security</p>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>Login Activity</span>
            <IoIosArrowForward />
          </div>
          <div className="flex justify-between items-center bg-white p-4 rounded-xl">
            <span>More Info</span>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
