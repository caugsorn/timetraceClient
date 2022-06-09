import React from "react";

function TopPriorityTasks({ title, completed }) {
  return (
    <div className="w-full">
      <div className="card rounded-md bg-lavender">
        <li>{title}</li>
      </div>
    </div>
  );
}

export default TopPriorityTasks;
