// import React from "react";
// import e from "express";
// import { DateTime } from "luxon";
// import { useEffect } from "react";
import { useState, useContext } from "react";
import { createNewTask } from "../api/tasks";
import { TaskContext } from "../../contexts/TaskContext";

function NewTask() {
  // const [newTask, setNewTask] = useState("");
  const {setIsNeedFetchingCard,isNeedFetchingCard} = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(0);
  // const [taskList, setTaskList] = useState([]);

  function setColor(value) {
    return `${value > priority ? "text-silver" : "text-purple"}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = createNewTask(title, priority);
    task
      .then(() => {
        // const newTaskList = [newTask.data.tasks, ...taskList];
        // setTaskList(newTaskList);
        setTitle("");
        setPriority(0);
        setIsNeedFetchingCard(!isNeedFetchingCard);
      })
      .catch((err) => {
        console.log(err);
      });
    setTitle("");
    // const thisWeek = DateTime.now().weekNumber
    // console.log('set in')
    // setWeek(thisWeek)
  };

  return (
    <div>
      <div className="flex items-center  justify-between mb-1 w-full bg-[#E8EDF1]  font-light rounded-lg bg-silver-100 text-[#768396]">
        <p className="text-silver text-sm font-medium pl-2">Set Priority</p>
        <div className="fire">
          <button onClick={() => setPriority(1)}>
            <i className={`fa-solid fa-fire ${setColor(2)}`} />
          </button>

          <button onClick={() => setPriority(2)}>
            <i className={`fa-solid fa-fire ${setColor(2)}`} />
          </button>

          <button onClick={() => setPriority(3)}>
            <i className={`fa-solid fa-fire ${setColor(3)}`} />
          </button>

          <button onClick={() => setPriority(4)}>
            <i className={`fa-solid fa-fire ${setColor(4)}`} />
          </button>

          <button onClick={() => setPriority(5)}>
            <i className={`fa-solid fa-fire ${setColor(5)}`} />
          </button>
        </div>
      </div>
      <form className="flex gap-2 h-8" onSubmit={handleSubmit}>
        <input
          className="w-full h-full rounded-lg bg-[#E8EDF1] text-black placeholder:pl-2 placeholder:text-sm"
          type="text"
          placeholder="Create new task..."
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <button className="px-2 rounded-lg buttonSecondary">
          {/* <i className="fa-solid fa-check text-xs" /> */}
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewTask;
