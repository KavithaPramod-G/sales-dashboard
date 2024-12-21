import React from "react";
import { FiCircle, FiMessageCircle, FiStopCircle, FiTag } from "react-icons/fi";
// import { FiCalendar } from "react-icons";

export const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center gap-4 p-0.5">
          <button  className="text-lg bg-teal-100 font-bold rounded-full">
            <span className="flex"><FiStopCircle/> Summary</span></button >
          <span className="flex text-lg block">
          <FiTag className="fill-gray-400" /> Sales
          </span>
          <span className="flex select-none text-lg">
          <FiMessageCircle fill="text-gray-400"/> Chats
          </span>

      </div>
    </div>
  );
};
