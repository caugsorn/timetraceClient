import React from "react";

export default function TotalTasks() {
  return (
    <div className=" h-full w-full flex flex-col justify-around">
      <h5 className="m-auto pt-8 text-3xl text-purple">7</h5>
      <h6 className="self-end text-right pr-4 pb-4 whitespace-nowrap">
        task(s) <br />
        completed this week
      </h6>
    </div>
  );
}
