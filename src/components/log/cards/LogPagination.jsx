import { DateTime } from "luxon";
import { useEffect } from "react";
import { useContext, useState } from "react";
import {
  Navigate,
  Link,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { LogContext } from "../../../contexts/LogContext";

export default function LogPagination() {
  const navigate = useNavigate();
  const param = useParams();

  const weekNow = DateTime.now().weekNumber;
  const [pathWeekId, setPathWeekId] = useState(null);

  useEffect(() => {
    if (param.weekId) {
      setPathWeekId(+param.weekId);
    } else {
      setPathWeekId(weekNow);
    }
  }, [param.weekId]);

  const ctx = useContext(LogContext);
  const decreaseWeek = async () => {
    setPathWeekId((prev) => prev - 1);
    navigate(`/logs/${pathWeekId - 1}`);
  };
  const increaseWeek = async () => {
    setPathWeekId((prev) => prev + 1);
    navigate(`/logs/${pathWeekId + 1}`);
  };

  useEffect(() => {
    console.log("pathWeekId ", pathWeekId);
    if (pathWeekId) {
      ctx.setWeekId(pathWeekId);
      ctx.getLog(pathWeekId);
      ctx.setWeekId(pathWeekId);
    }
  }, [pathWeekId]);

  return (
    <div className="flex justify-around items-center w-full h-full">
      <button onClick={() => decreaseWeek()}>
        <i className="fa-solid fa-angle-left" />
      </button>
      <div>
        <span>week #</span>
        <span>{pathWeekId}</span>
      </div>
      <button onClick={() => increaseWeek()}>
        <i className="fa-solid fa-angle-right" />
      </button>
    </div>
  );
}
