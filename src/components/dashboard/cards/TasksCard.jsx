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
    <>
      <h3 className="pt-2 pl-4">Tasks</h3>
      <div className="flex flex-col items-center">
        <div className="card w-11/12 h-20 bg-lavender">
          <ul>
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
            )
          </ul>
        </div>
        <div className="w-11/12">
          <h3>New Task</h3>
          <NewTask />
        </div>
        <div className="w-11/12">
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
    </>
  );
}
