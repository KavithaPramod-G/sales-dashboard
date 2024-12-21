import React from "react";
import { FiTag, FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCards = () => {
  return (
    <>
      <Card
        title="CONSULTATIONS"
        value="24"
        pillText="2.75%"
        trend="up"
      />
      <Card
        title="ORDERS PLACED"
        value="12"
        pillText="1.01%"
        trend="down"
        icon="<FiTag />"
      />
      <Card
        title="CONVERSION"
        value="50%"
        pillText="15%"
        trend="down"
        icon="<FiTag />"
      />
      <Card
        title="TOTAL SALES VALUE"
        value="$2,400"
        pillText="60.75%"
        trend="up"
      />
      <Card
        title="AVERAGE ORDER VALUE"
        value="$240"
        pillText="60.75%"
        trend="up"
      />
      <Card
        title="COMMISSION PAID"
        value="$240"
        pillText="15%"
        trend="up"
      />
    </>
  );
};

const Card = ({
  title,
  value,
  pillText,
  trend,
  icon,
}) => {
  return (
    <div className="col-span-2 rounded-2xl border border-stone-300 p-6">
      {/* <div className="flex mb-8 items-start justify-between"> */}
        
      <span className="inline-flex"><FiTag className="fill-gray-500" /> <h3 className="text-stone-300 mb-2 text-sm font-bold">{title}</h3></span>
          <p className="text-3xl font-semibold">{value}</p>
       

        <span
          className={`text-xs inline-flex items-center gap-1 font-medium px-2 py-1 m-2 rounded left-0 ${
            trend === "up"
              ? "text-green-700"
              : "text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </span>
        <span className="text-stone-500">{`${trend=="up"? 'increase': 'decrease'}`}</span>
      {/* </div> */}
    </div>
  );
};
