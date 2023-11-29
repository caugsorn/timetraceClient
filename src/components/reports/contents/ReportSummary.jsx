import { React, useContext } from "react";
import { LogContext } from "../../../contexts/LogContext";
import TimeFormat from "../../time/TimeFormat";

export default function ReportSummary() {
  const { sum, average, averageCompared, categoryGraphData } =
    useContext(LogContext);
  const categoryCount = categoryGraphData.length;

  return (
    <div className="flex flex-col gap-5 text-justify">
      <div>
        <h1 className="text-5xl font-bold tracking-decentlyWide">Hello,</h1>
        <p className="font-light tracking-decentlyWide">
          Here’s your overview report!
        </p>
      </div>
      <div className="font-light tracking-decentlyWide">
        You have worked for a total of{" "}
        <span>
          <TimeFormat time={sum} />
        </span>{" "}
        hour(s) this week! Your weekly log is <span> {averageCompared} % </span>
        more than your average of
        <span>
          {" "}
          <TimeFormat time={average} />
        </span>{" "}
        hour(s).
      </div>

      {categoryCount >= 1 && (
        <div className="font-light tracking-decentlyWide">
          It appears that you have logged most of your hours for
          <span> {categoryGraphData[0].category} </span> ({" "}
          {<TimeFormat time={categoryGraphData[0].sum} />} )
          {categoryCount >= 2 && (
            <>
              , following by <span>{categoryGraphData[1].category} </span> ({" "}
              {<TimeFormat time={categoryGraphData[1].sum} />} )
            </>
          )}
          {categoryCount >= 3 && (
            <>
              , and <span> {categoryGraphData[2].category}</span> ({" "}
              {<TimeFormat time={categoryGraphData[2].sum} />} ).
            </>
          )}
        </div>
      )}
    </div>
  );
}
