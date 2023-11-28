import { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { DateTime } from "luxon";
import { useEffect } from "react";

export default function Task({ id, title, completed, priority, deleteMode}) {
  const {updateTask, removeTask, isNeedFetchingCount, setIsNeedFetchingCount} = useContext(TaskContext);
  const [week, setWeek] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const handleClick = async () => {
    setIsClick(!isClick);
    updateTask(id, { completed: !completed, week });
    setIsNeedFetchingCount(!isNeedFetchingCount);
  }

  useEffect(() => {const dt = DateTime.local().weekNumber
    setWeek(dt)}
    ,[isClick])

  return (
    <div className="w-full my-1">
      <li className="list-none ">
        <div className="flex justify-between">
        <div className="flex items-start">
        <button onClick={handleClick}>
        <i className={`w-max mx-1  ${completed ?'fa-solid fa-circle-check' : 'fa-regular fa-circle'}  `} />
        </button>
        <span className="break-all">{title}</span>
        </div>

        {deleteMode ?<button onClick={()=> removeTask(id) }>
                  <i className="fa-solid fa-xmark text-silver mx-2" />
                </button>
        :                
        <span className="text-purple mx-2">{priority}</span>
}
                
        </div>
        <div className="">
          {/* <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`} />
          <i className="fa-regular fa-trash-can" /> */}
        </div>
      </li>
    </div>
  );
}
