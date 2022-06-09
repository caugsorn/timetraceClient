import Tracker from "./cards/Tracker";
import TotalHours from "./cards/TotalHours";
import AverageHour from "./cards/AverageHour";
import CurrentLogs from "./cards/CurrentLogs";
import TotalTasks from "./cards/TotalTasks";
import TasksCard from "./cards/TasksCard";

function DashboardContainer() {
  return (
    // <div className="h-11/12">
    <div className="grid grid-cols-3 grid-rows-4 gap-3 mx-4 h-5/6 pt-20 pb-3">
      <div className="card row-start-1 col-span-1 row-span-2">
        <Tracker />
      </div>
      <div className="card col-start-2 col-span-1 row-start-1  row-span-1">
        <TotalHours />
      </div>
      <div className="card col-start-2 col-span-1 row-start-2 row-span-1">
        <AverageHour />
      </div>

      <div className="card col-span-2 row-span-2">
        <CurrentLogs />
      </div>

      <div className="card col-span-1 row-start-1 row-span-3">
        <TasksCard />
      </div>

      <div className="card col-span-1 row-span-1">
        <TotalTasks />
      </div>
    </div>
    // </div>
  );
}

export default DashboardContainer;
