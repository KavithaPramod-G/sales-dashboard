"use client";

import React from "react";
import { FiMessageCircle, FiUser } from "react-icons/fi";
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
    name: 'Mon',
    answered: 70,
    incoming: 100,
    consultaions: 50,
    expertsOnline: 10,
  },
  {
    name: 'Tue',
    answered: 90,
    incoming: 100,
    consultaions: 80,
    expertsOnline: 10,
  },
  {
    name: 'Wed',
    answered: 80,
    incoming: 100,
    consultaions: 60,
    expertsOnline: 20,
  },
  {
    name: 'Thu',
    answered: 90,
    incoming: 70,
    consultaions: 90,
    expertsOnline: 20,
  },
  {
    name: 'Fri',
    answered: 90,
    incoming: 100,
    consultaions: 60,
    expertsOnline: 460,
  },
  {
    name: 'Sat',
    answered: 100,
    incoming:100,
    consultaions: 100,
    expertsOnline: 20,
  },
  {
    name: 'Sun',
    answered: 90,
    incoming: 100,
    consultaions: 80,
    expertsOnline: 40,
  },
];


export const Insights = () => {
  return (
    <>
     {/* <h3 className="flex items-center gap-1.5 text-3xl font-bold mt-4 px-3">
            Insights
        </h3> */}
    <div className="mx-3 col-span-1 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium text-stone-500">
          <FiMessageCircle fill="text-stone-500"/> CONSULTATIONS
        </h3>
      </div>

      <div className="h-64 px-4">
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
          <YAxis type="number" dataKey="consultaions" 
          axisLine={false}
          tickLine={false} />
          <XAxis dataKey="name" 
          axisLine={false}
          tickLine={false}/>
          <YAxis type="number" dataKey="expertsOnline" 
          orientation="right" />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="expertsOnline" barSize={50} fill="#fef9c3" />
          <Line type="monotone" dataKey="incoming" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="answered" stroke="#22c55e" />
          {/* <Scatter dataKey="cnt" fill="red" /> */}
        </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

