import { React, useContext } from "react";
import { LogContext } from "../../../contexts/LogContext";
import TimeFormat from "../../time/TimeFormat";

export default function ReportSummary() {
  const {
    sum,
    average,
    averageCompared,
    categoryGraphData,
    thisWeekGraphData,
    averageGraphData,
  } = useContext(LogContext);
  console.log("catGraph", categoryGraphData, averageGraphData);
  console.log("eieie, thisWeekGraphData", thisWeekGraphData, average);
  return (
    <div className="flex flex-col gap-5 text-justify">
      <div>
        <h1 className="text-5xl font-bold tracking-decentlyWide">Hello,</h1>
        <p className="font-light tracking-decentlyWide">
          Here’s your overview report!
        </p>
      </div>
      <div className="font-light tracking-decentlyWide">
        You have worked for a total of 
        <span>
          <TimeFormat time={sum} />
        </span>{" "}
        hour(s) this week! Your weekly log is <span>{averageCompared}%</span>
        more than your average of
        <span>
          <TimeFormat time={average} />
        </span>
        hour(s).
      </div>
      <div className="font-light tracking-decentlyWide">
        It appears that you have logged most of your hours for
        <span>Database</span>, which accounted for
        <span> 64%</span> of the chart, following by <span>Bookclub (23%)</span>
        , and <span> Marketing(10%)</span>.
      </div>
    </div>
  );
}
