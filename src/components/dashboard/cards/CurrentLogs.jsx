import React from "react";
import Logs from "../../log/Logs";

export default function CurrentLogs() {
  

  return (
    <div className="h-full flex flex-col justify-evenly">
      <h3 className="pl-6">Log</h3>
      <div className="flex flex-col gap-1 items-center h-4/5 overflow-hidden">
        {/* {timeStart, timeEnd, timeSpan, category, onLogPage} */}
        <Logs />
        <Logs />
        <Logs />
        <Logs />
      </div>
    </div>
  );
}
