import React from "react";
import Logs from "../Logs";

export default function Logcard() {
  return (
    <div className="mb-6">
      <div className="w-full flex flex-col gap-2 pb-5">
        <h3 className="pl-6 pt-6">Today</h3>
        <div className="flex flex-col gap-1 items-center">
          <Logs />
          <Logs />
          <Logs />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <h3 className="pl-6 pt-2">Yesterday</h3>
        <div className="flex flex-col gap-1 items-center">
          <Logs />
          <Logs />
          <Logs />
        </div>
      </div>
    </div>
  );
}
