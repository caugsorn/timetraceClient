import React from "react";
import NewTask from "../../Tasks/NewTask";
import Tasks from "../../Tasks/Tasks";
import TopPriorityTasks from "../../Tasks/TopPriorityTasks";

export default function TasksCard() {
  const Taskss = [
    {
      id: 1,
      title: "Read database design",
      completed: false,
      highlighted: true,
    },
    {
      id: 2,
      title: "Read database design",
      completed: false,
      highlighted: false,
    },
    {
      id: 3,
      title: "Read database design",
      completed: false,
      highlighted: true,
    },
    {
      id: 4,
      title: "Read database design",
      completed: false,
      highlighted: false,
    },
    {
      id: 5,
      title: "Read database design",
      completed: false,
      highlighted: false,
    },
  ];

  return (
    <div className="flex flex-col items-center ">
      {/* Top priority  */}
      <div className="w-10/12 flex flex-col gap-3">
      <h3 className="pt-3">Tasks</h3>
      <div className="flex flex-col items-center">
        <div className="w-full h-20 bg-lavender rounded-md">
          <ul>
            {/* //if el priority sorted asc top = top3 must proped highlighted */}
            {Taskss.map((el) => {
              return el.highlighted ? (
                <TopPriorityTasks
                  id={el.id}
                  title={el.title}
                  completed={el.completed}
                />
              ) : (
                <></>
              );
            })}
            
          </ul>
        </div>
        </div>

        {/* newTask */}
        <div>
          <h3>New Task</h3>
          <NewTask />
        </div>

          {/* allTasks */}
        <div className="overflow-y-auto">
          <h3>All Tasks</h3>
          <ul>
            {Taskss.map((el) => {
              if (!el.highlighted) {
                return (
                  <Tasks id={el.id} title={el.title} completed={el.completed} />
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
