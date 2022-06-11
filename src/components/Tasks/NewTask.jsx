// import React from "react";
import { useState } from "react";
import Priority from "./Priority";

function NewTask() {
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <div className="flex items-center  justify-between mb-1 w-full bg-[#E8EDF1]  font-light rounded-lg bg-silver-100 text-[#768396]">
        <p className="text-silver text-sm font-medium pl-2">Set Priority</p>
        <Priority />
      </div>

      <input
        className="w-full rounded-lg bg-[#E8EDF1] text-black placeholder:pl-2 placeholder:text-sm"
        type="text"
        placeholder="Create new task..."
        value={newTask}
        onChange={(ev) => setNewTask(ev.target.value)}
      />
    </div>
  );
}

export default NewTask;
