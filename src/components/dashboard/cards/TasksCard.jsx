import {useContext, useState} from 'react'
import NewTask from "../../Tasks/NewTask";
import Tasks from "../../Tasks/Tasks";
import {TaskContext} from '../../../contexts/TaskContext'
// import TopPriorityTasks from "../../Tasks/TopPriorityTasks";

export default function TasksCard() {
  const [deleteMode, setDeleteMode] = useState(false);
  const ctx = useContext(TaskContext);
// console.log(ctx)
  return (
    <div className="flex flex-col items-center ">
      {/* Top priority  */}
      <div className="w-10/12 flex flex-col gap-3">
      <h3 className="pt-3">Tasks</h3>
      <div className="flex flex-col items-center">
        <div className="w-full h-20 bg-lavender rounded-md">
          <ul>
            {/* //if el priority sorted asc top = top3 must proped highlighted */}
            {/* {Taskss.map((el) => {
              return el.highlighted ? (
                <TopPriorityTasks
                  id={el.id}
                  title={el.title}
                  completed={el.completed}
                />
              ) : (
                <></>
              );
            })} */}
            
          </ul>
        </div>
        </div>
        <div>
          <h3>New Task</h3>
          <NewTask />
           
        </div>

          {/* allTasks */}
        <div>
          <div className='flex justify-between'>
          <h3>All Tasks</h3>
          <button onClick={() => setDeleteMode(!deleteMode)}>
          <i className={`text-silver ${deleteMode ? 'fa-solid fa-list-check' : 'fa-solid fa-trash'}`} />
            </button>
          </div>
          <ul className='overflow-y-auto h-24'>
            {ctx.taskList.map((el) => {
              if (!el.highlighted) {
                return (
                  <Tasks key={el.id} id={el.id} title={el.title} completed={el.completed} priority={el.priority} deleteMode={deleteMode}/>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
