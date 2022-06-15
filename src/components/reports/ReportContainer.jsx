import React from "react";
import ReportSummary from "./contents/ReportSummary";
import CompareToAverage from "./contents/CompareToAverage";
import WeeklyHours from "./contents/WeeklyHours";
// import HoursPerCategory from "./contents/HoursPerCategory";
export default function ReportContainer() {
  return (
    <div className="card w-11/12 flex flex-col items-center justify-evenly mx-4 my-20 gap-9">
      <div className="w-11/12 mt-6">
        <ReportSummary />
        <CompareToAverage />
      </div>
      <div className="w-11/12">
        <WeeklyHours />
      </div>
      {/* <div className="w-11/12 mb-4">
        <HoursPerCategory />
      </div> */}
    </div>
  );
}
