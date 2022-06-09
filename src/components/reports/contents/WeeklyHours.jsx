import { useState } from "react";
import BarChart from "../../graphs/BarChart";
import { LogsData } from "../../../data/Data";

export default function WeeklyHours() {
  //datetoday - 7, reduce(LogsData.timediff) to Mon Tue ....
  //
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayNow = new Date();
  let day = days[dayNow.getDay()];

  //loop until day =
  const logsPerDay = [];
  const [logsData, setLogsData] = useState({
    labels: days,
    datasets: [
      {
        label: "WeeklyHours",
        data: {},
      },
    ],
  });
  return (
    <div>
      <h1> {day} </h1>;
    </div>
  );
}
