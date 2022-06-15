import {createContext, useEffect, useState} from 'react'
import { createNewTasks, getTaskCount } from '../components/api/tasks';
import { getAllTasks } from '../components/api/tasks';
import axios from '../config/axios'


// export default function TaskContext() {

const TaskContext = createContext();

function TaskContextProvider({children}) {
    const [taskList, setTaskList] = useState([]);
    const [taskCount, setTaskCount] = useState(0);


    useEffect(() => {
        const tasks = getAllTasks();
        tasks
        .then((result) => {
            setTaskList(result);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    //    useEffect(() => {
    //     const count = getTaskCount();
    //     count
    //     .then((result) => {
    //         console.log(`this is result ${result}`)
    //         setTaskCount(result);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }, []);

        useEffect(()=>{
            const fetchCount =async()=>{
                const count = await getTaskCount();
                setTaskCount(count);
            }
            fetchCount();
        },[])

     const removeTask = (id) => {
        console.log("first")
        console.log(id)
    axios
      .delete(`/tasks/${id}`)
      .then(() => {
                // console.log(id)
        const idx = taskList.findIndex((el) => el.id === id);
        const clonedTaskList = [...taskList];
        clonedTaskList.splice(idx, 1);
        setTaskList(clonedTaskList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTask = (id, value) => {
    axios
    .patch(`/tasks/${id}`, value)
    .then(() => {
        const idx = taskList.findIndex((el) => el.id === id);
        const clonedTaskList = [...taskList];
        clonedTaskList[idx] = { ...clonedTaskList[idx], value};
          setTaskList(clonedTaskList);
        // clonedTaskList[idx].completed = !clonedTaskList[idx].completed;
    })

  }


    return (
        <TaskContext.Provider value={{taskList, updateTask, taskCount, removeTask}}>{children} </TaskContext.Provider>
    )
}
// }

export { TaskContext, TaskContextProvider };
 
