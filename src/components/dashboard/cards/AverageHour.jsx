import {useContext} from "react";
import { LogContext } from "../../../contexts/LogContext";

export default function AverageHour() {
  const ctx = useContext(LogContext);
  return (

    <div className="grid grid-cols-2 grid-rows-2 h-full">
      <h5 className="col-start-1 row-start-1 text-right self-end text-2xl">
        {ctx.averageCompared}%
      </h5>
      <h6 className="col-span-full row start-2  text-right pr-4  whitespace-nowrap">
        increase <br />
        from average.
      </h6>
    </div>
  );
}
