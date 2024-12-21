import React from "react";
import { TopBar } from "./TopBar";
import { Grid } from "./Grid";
import { Orders } from "../Orders/Orders";
import { Insights } from "../Graphs/insights";
import { Orders1 } from "../Orders/Orders copy";
import { Period } from "../Graphs/PeriodChart";
import { MyChatBot } from "../Orders/NewChat";
export const Dashboard = () => {
  
const steps = [
  {
      id: '0',
      message: 'Hey Geek!',
      end: true
  }
];

  return (
    <div className="bg-white rounded-lg pb-4 shadow">
      <TopBar />
      <Grid />
      <div className="col-span-12"> 
      <h3 className="flex gap-1.5 text-3xl font-bold mt-4 px-3">
            Insights
        </h3>
        <div className="grid grid-cols-[1fr,1fr] grid-auto-rows gap-4  sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 md:justify-between lg:justify-between">
        <Insights />
      {/* <Orders /> */}
      <Period />
        </div>
     
      </div>
      <Orders1 />
      <MyChatBot />
    </div>
  );
};
