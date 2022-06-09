import React from "react";
import Logs from "../log/Logs";

export default function CurrentLogs() {
  return (
    <div className="h-full ">
      <h3 className="pl-6 pt-6 pb-2">Log</h3>
      <div className="flex flex-col gap-2 items-center h-4/5 overflow-hidden">
        <Logs />
        <Logs />
        <Logs />
        <Logs />

      </div>
    </div>
  );
}
