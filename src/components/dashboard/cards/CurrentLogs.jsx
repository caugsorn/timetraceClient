import { useContext, useEffect } from "react";
import Logs from "../../log/Logs";
import { LogContext } from "../../../contexts/LogContext";

export default function CurrentLogs() {
  const ctx = useContext(LogContext);

  return (
    <div className="h-full flex flex-col justify-evenly">
      <h3 className="pl-6">Most recent log(s) group by category</h3>
      <div className="flex flex-col gap-1 items-center h-4/5 overflow-hidden">
        {Object.values(ctx.logByCat)
          .slice(0, 3)
          .map((el, idx) => (
            <Logs
              key={idx}
              timeStart={el[0].time_start}
              timeSpan={el[0].time_span}
              category={el[0].category}
              onLogPage={false}
              timeEnd={el[0].time_end}
            />
          ))}
      </div>
    </div>
  );
}
