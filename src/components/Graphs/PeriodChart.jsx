"use client";

import React from "react";
import { FiBarChart, FiMessageCircle, FiUser } from "react-icons/fi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
  ComposedChart,
  Bar,
  Area,
  Legend,
  BarChart,
  Scatter,
} from "recharts";

const data = [
  {
    name: 'This Week',
    consultaions: 50,
    ordersClosed: 10,
  },
  {
    name: 'Last Week',
    consultaions: 30,
    ordersClosed: 10,
  }
];


export const Period = () => {
  return (
    <>
        <div className="mx-3 col-span-1 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium text-stone-500">
         <FiBarChart /> VS PAST PERIOD
        </h3>
      </div>

      <div className="h-64 px-4 md:grid-cols-1  lg:grid-cols-4 md:justify-between lg:justify-between">
        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5"  strokeDasharray="3 3"/>
          <XAxis dataKey="name" 
          axisLine={false}
          tickLine={false}/>
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="ordersClosed" barSize={50} fill="#0f766e" />
          <Bar dataKey="consultaions" barSize={50} fill="#99f6e4" />
          <Legend />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

