import React from "react";
import { AccountToggle } from "./AccountToggle";
import { FiHome } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <div>
      <div className="mt-2 top-4">
        <AccountToggle />
        <FiHome size={30} className="bg-white"/>
      </div>

      {/* <Plan /> */}
    </div>
  );
};
