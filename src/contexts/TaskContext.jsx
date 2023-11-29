import { createContext, useEffect, useState } from "react";
import { createNewTasks, getTaskCount } from "../components/api/tasks";
import { getAllTasks } from "../components/api/tasks";
import axios from "../config/axios";

// export default function TaskContext() {

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [taskList, setTaskList] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [isNeedFetchingCard, setIsNeedFetchingCard] = useState(false);
  const [isNeedFetchingCount, setIsNeedFetchingCount] = useState(false);

  useEffect(() => {
    const tasks = getAllTasks();
    tasks
      .then((result) => {
        setTaskList(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isNeedFetchingCard]);

  const getUpdateListTasks = async () => {
    try {
      const tasks = await getAllTasks();
      setTaskList(tasks);
    } catch (error) {
      console.error("getUpdateListTasks error", error);
    }
  };
  const getUpdateCount = async () => {
    try {
      const count = await getTaskCount();
      setTaskCount(count);
    } catch (error) {
      console.error("getUpdateCount error", error);
    }
  };
 
  useEffect(() => {
    const fetchCount = async () => {
      const count = await getTaskCount();
      setTaskCount(count);
    };
    fetchCount();
  }, [isNeedFetchingCount]);

  const removeTask = (id) => {
    axios
      .delete(`/tasks/${id}`)
      .then(() => {
        const idx = taskList.findIndex((el) => el.id === id);
        const clonedTaskList = [...taskList];
        clonedTaskList.splice(idx, 1);
        setTaskList(clonedTaskList);
        getUpdateListTasks();
        getUpdateCount();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTask = (id, value) => {
    axios.patch(`/tasks/${id}`, value).then(() => {
      const idx = taskList.findIndex((el) => el.id === id);
      const clonedTaskList = [...taskList];
      clonedTaskList[idx] = { ...clonedTaskList[idx], value };
      setTaskList(clonedTaskList);
      // clonedTaskList[idx].completed = !clonedTaskList[idx].completed;
      getUpdateListTasks();
      getUpdateCount();
    });
  };

  return (
    <TaskContext.Provider
      value={{
        taskList,
        updateTask,
        taskCount,
        removeTask,
        isNeedFetchingCard,
        setIsNeedFetchingCard,
        isNeedFetchingCount,
        setIsNeedFetchingCount,
        getUpdateListTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
// }

export { TaskContext, TaskContextProvider };
