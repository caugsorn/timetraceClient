import { useState, useContext } from "react";
import TimeFormat from "../time/TimeFormat";
import { DateTime } from "luxon";
import { LogContext } from "../../contexts/LogContext";

export default function Logs({
  timeStart,
  timeEnd,
  timeSpan,
  category,
  onLogPage,
}) {
  const ctx = useContext(LogContext);
  const formatDateTime = (props) => {
    const propsToDateTime = DateTime.fromISO(props);
    const result = propsToDateTime.toLocaleString(
      DateTime.TIME_24_WITH_SECONDS
    );
    return result;
  };

  const handleClick = () => {
    ctx.setIsRunning(true);
    ctx.setCategory(category);
  };
  return (
    <div className="w-11/12 h-[56px] bg-[#F1F0F9] rounded-2xl overflow-hidden flex items-center justify-between">
      <div className="h-full flex flex-row items-center ">
        {!onLogPage ? (
          <>
            <button onClick={() => handleClick()}>
              <i className="fa-solid fa-play playButton" />
            </button>
          </>
        ) : (
          <></>
        )}
        <div className="flex flex-col pl-2">
          <h2 className="text-purple text-semibold">{category}</h2>

          <h6 className="text-xs flex">
            {" "}
            {formatDateTime(timeStart)} - {formatDateTime(timeEnd)}{" "}
          </h6>
        </div>
      </div>
      <div className="">
        <h5 className="pr-3">
          <TimeFormat time={timeSpan} />
        </h5>
      </div>
    </div>
  );
}
