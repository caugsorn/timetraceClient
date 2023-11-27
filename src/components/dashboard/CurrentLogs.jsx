import {useContext, useEffect} from "react";
import Logs from "../log/Logs";
import { LogContext } from "../../contexts/LogContext";

export default function CurrentLogs() {
  const ctx = useContext(LogContext);
  useEffect(()=>{
    ctx.getLog()
  },[])
  console.log(ctx.logByDate)
  return (
    <div className="h-full ">
      <h3 className="pl-6 pt-6 pb-2">Log</h3>
      <div className="flex flex-col gap-2 items-center h-4/5 overflow-hidden">
        {(Object.values(ctx.logByDate).slice(0,3).map((el) => <Logs key={idx} timeStart={el.time_start} timeSpan={el.time_span} category={el.category} onLogPage={true} timeEnd={el.time_end}/>))}

      </div>
    </div>
  );
}
