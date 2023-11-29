import { useContext, useEffect, useState } from "react";
import NewTask from "../../Tasks/NewTask";
import Tasks from "../../Tasks/Tasks";
import { TaskContext } from "../../../contexts/TaskContext";

const Task = ({ listTasks, deleteMode }) => {
  return (
    <>
      {listTasks.map((el) => (
        <Tasks
          key={el.id}
          {...el} 
          deleteMode={deleteMode}
        />
      ))}
    </>
  );
};

const TasksCard = () => {
  const [deleteMode, setDeleteMode] = useState(false);
  const { taskList } = useContext(TaskContext);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="w-10/12 h-full flex flex-col gap-3">
        <div className="py-5 h-1/3">
          <h3>New Task</h3>
          <NewTask />
        </div>

        <div className="h-2/3">
          <div className="flex justify-between">
            <h3>All Tasks</h3>
            <button onClick={() => setDeleteMode(!deleteMode)}>
              <i
                className={`text-silver ${
                  deleteMode ? "fa-solid fa-list-check" : "fa-solid fa-trash"
                }`}
              />
            </button>
          </div>
          <ul className="overflow-y-auto">
            {taskList.length > 0 && (
              <Task listTasks={taskList} deleteMode={deleteMode} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
