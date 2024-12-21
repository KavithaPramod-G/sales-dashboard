import React from "react";
import { StatCards } from "./StatCards";

export const Grid = () => {
  return (
    <>
     <h3 className="flex items-center gap-1.5 text-3xl font-bold mb-3 p-4">
            At a Glance
        </h3>
    <div className="px-3 grid gap-6 md:grid-cols-1  lg:grid-cols-6 md:justify-between lg:justify-between">
      <StatCards />
    </div>
    </>
  );
};
