import { useContext, useState } from "react";
import { LogContext } from "../../../contexts/LogContext";
import TimeFormat from "../../time/TimeFormat";
import { DateTime } from "luxon";

export default function Tracker() {
  const ctx = useContext(LogContext);
  const handleClick = () => {
    ctx.setIsRunning(!ctx.isRunning);
    const startTime = DateTime.now();
    if (ctx.isRunning) {
      ctx.logEnded(startTime, ctx.timeSpan, ctx.category);
    } else {
      ctx.setStartTime(startTime);
    }
  };
  return (
    <>
      <h3 className="p-6 ">Tracking</h3>
      <div className="flex flex-col items-center justify-center h-3/5">
        <form className="flex flex-col items-center">
          <div className="mb-3">
            <h4 className="text-silver text-xs tracking-widest font-medium w-max">
              I'm working on...
            </h4>
            <input
              className="h-3/5 "
              value={ctx.category}
              onChange={(e) => {
                ctx.setCategory(e.target.value);
              }}
            />
          </div>
          <div className="stopwatch mb-4">
            <TimeFormat time={ctx.timeSpan} />
          </div>
        </form>
        <button onClick={() => handleClick()}>
          <i
            className={`${
              ctx.isRunning
                ? "fa-solid fa-stop playButton"
                : "fa-solid fa-play playButton"
            }`}
          />
        </button>
      </div>
    </>
  );
}
