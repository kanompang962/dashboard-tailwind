import React from "react";
import Widget from "../components/Widget";
import { widgetItems } from "../content/content";
import Right from "../components/Right";
import Chart from "../components/Chart";
import Table from "../components/Table";

const Analytics = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-8 px-8 mb-10">
      {/* Main */}
      <div className=" flex flex-col flex-1 gap-4 ">
        {/* Header */}
        <div className="flex md:flex-row flex-col justify-between w-full gap-4">
          {widgetItems.map((item) => (
            <Widget key={item.id} {...item} />
          ))}
        </div>
        {/* Center */}
        <p className="text-xl font-semibold">Last 6 Months (Revenue)</p>
        <div className="bg-white w-full h-full  flex flex-col justify-center  p-4 md:p-8 rounded-xl">
          <Chart />
        </div>
        {/* Bottom */}
        <p className="text-xl font-semibold">Latest transitions</p>
        <div className="bg-white max-w-[65vw] p-8">
          <Table />
        </div>
      </div>
      {/* Right */}
      <Right />
    </div>
  );
};

export default Analytics;
