import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Widget = ({ title, amount, per, color }) => {
  return (
    <div className="flex justify-center items-center bg-white shadow-3xl rounded-xl w-full h-[130px]">
      <div className="flex w-full items-center flex-row justify-between p-8 gap-6">
        <div>
          <h3>{title}</h3>
          <p className="text-2xl font-bold">
            ${parseInt(amount).toLocaleString()}
          </p>
        </div>
        <div className="w-[80px] h-[80px]">
          <CircularProgressbar
            value={per}
            strokeWidth={12}
            text={`${per}%`}
            styles={buildStyles({
              textColor: "#677483",
              pathColor: color,
              trailColor: "#f6f6f9",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Widget;
