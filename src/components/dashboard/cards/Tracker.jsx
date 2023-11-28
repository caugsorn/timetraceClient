import { useEffect, useContext, useState } from "react";
import { LogContext } from "../../../contexts/LogContext";
import TimeFormat from "../../time/TimeFormat";
import { DateTime } from "luxon";

export default function Tracker() {
  const ctx = useContext(LogContext);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState({});
  const [timeSpan, setTimeSpan] = useState(0);
  const [category, setCategory] = useState("");

  const handleClick = () => {
    //howToDeal with first time running?
    setIsRunning(!isRunning);
    console.log("out", isRunning);

    if (isRunning) {
      console.log("in");
      ctx.logEnded(startTime, timeSpan, category);
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      setStartTime(DateTime.local());
      interval = setInterval(() => {
        setTimeSpan((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimeSpan(0);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

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
              value={category || ""}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div className="stopwatch mb-4">
            <TimeFormat time={timeSpan} />
          </div>
        </form>
        <button onClick={() => handleClick()}>
          <i
            className={`${
              isRunning
                ? "fa-solid fa-stop playButton"
                : "fa-solid fa-play playButton"
            }`}
          />
        </button>
      </div>
    </>
  );
}
