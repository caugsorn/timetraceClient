import React from "react";
import Logs from "../Logs";
import { DateTime } from "luxon";

export default function Logcard({element, timeStart, timeEnd, timeSpan, category, day, week}) {
const formatDateTime = (props) => {
  const propsToDateTime = DateTime.fromISO(props);
  const result = propsToDateTime.toLocaleString({month: 'short', day: 'numeric'});
  return result
}
// console.log(element[0].col+'######'+element[0].time_start)

  return (
    <div className="mb-6">
      <div className="w-full flex flex-col gap-2 pb-5">
        <h3 className="pl-6 pt-6 font-semibold">{formatDateTime(element[0].time_start)}</h3>
        <div className="flex flex-col gap-1 items-center">
          {element.map((el)=> 
          <Logs timeStart={el.time_start} timeSpan={el.time_span} category={el.category} onLogPage={true} timeEnd={el.time_end}/>
)}
        </div>
      </div>
    </div>
  );
}
