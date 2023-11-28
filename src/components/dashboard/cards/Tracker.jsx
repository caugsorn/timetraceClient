import { useState, useEffect, useContext } from "react";
import { DateTime } from "luxon";
import { LogContext } from "../../../contexts/LogContext";
import TimeFormat from "../../time/TimeFormat";

export default function Tracker() {
  const ctx = useContext(LogContext);

  const [button, setButton] = useState(true);

  const handleClick = () => {
    console.log(button);
    ctx.setMainButton(!ctx.mainButton);
    ctx.setStopwatchRunning(!ctx.stopwatchRunning);

    if (!ctx.mainButton && !ctx.stopwatchRunning) {
      ctx.startTimer(ctx.mainButton);
    }
  };

  useEffect(() => {
    let interval;
    if (ctx.stopwatchRunning) {
      interval = setInterval(() => {
        ctx.setTime((prev) => prev + 1);
      }, 1000);
    } else if (!ctx.stopwatchRunning) {
      clearInterval(interval);
      ctx.setTime(0);
    }
    return () => clearInterval(interval);
  }, [ctx.stopwatchRunning]);

  //trace Started/Ended time
  useEffect(() => {
    ctx.startTimer(ctx.mainButton);
  }, [ctx.mainButton]);
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
              value={ctx.category || ""}
              onChange={(e) => {
                ctx.setCategory(e.target.value);
              }}
            />
          </div>
          <div className="stopwatch mb-4">
            <TimeFormat time={ctx.time} />
          </div>
        </form>
        <button onClick={() => handleClick()}>
          <i
            className={`${
              !ctx.mainButton
                ? "fa-solid fa-stop playButton"
                : "fa-solid fa-play playButton"
            }`}
          />
        </button>
      </div>
    </>
  );
}
