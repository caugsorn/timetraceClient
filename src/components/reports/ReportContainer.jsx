import React from "react";
import ReportSummary from "./contents/ReportSummary";
import CompareToAverage from "./contents/CompareToAverage";
import WeeklyHours from "./contents/WeeklyHours";
import HoursPerCategory from "./contents/HoursPerCategory";
export default function ReportContainer() {
  return (
    // w-11/12 h-11/12  flex flex-col justify-start
    <div className="card flex flex-col p-20 overflow-y-auto">
      <div className="flex flex-col justify-center items-stretch gap-9 w-11/12">
        <div className="">
          <ReportSummary />
          <div className="p-20 flex flex-col items-center justify-center w-full gap-20">
            <CompareToAverage />
            <HoursPerCategory />
          </div>
        </div>
      </div>
    </div>
  );
}
