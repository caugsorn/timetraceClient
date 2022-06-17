import {useContext, useState, useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import LogsFilter from "./cards/LogsFilter";
import Logcard from "./cards/Logcard";
import LogPagination from "./cards/LogPagination";
import { LogContext } from "../../contexts/LogContext";

export default function LogContainer() {
  const ctx = useContext(LogContext);
  const param = useParams()
  const category = [];
  // console.log(ctx.categoryByDate)
  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   const categories = []
  //   for (let key in ctx.logByDate) {
  //     ctx.logByDate[key].map((el) => {
  //       if (!categories.includes(el.category)) {
  //         return categories.push(el.category);
  //       }
  //     })
  //   setCategory(categories)
  // }},[])
  console.log(ctx.logByDate)

  return (
    <div className="mx-8 space-y-4 mt-12 h-screen">
        <div className="card row-start-1 col-span-full h-20">
        <LogPagination />
      </div>

      <div className="grid grid-cols-3 space-x-4 w-full h-3/5">
        <div className="card">
            <h3 className="mt-4 mb-1">Filter</h3>
           <ul>
            {Object.values(ctx.logByDate).map((el)=> {
             return  el.map((element) => {
                if(!category.includes(element.category)){
                  category.push(element.category)
                }})
              })}

          </ul> 
        </div>
         <div className="card col-span-2 h-full overflow-y-auto">
        {Object.entries(ctx.logByDate).map((element,idx) => {   
        return <Logcard key={idx} element={element[1]}/>
        })}
      </div>
      {/* </div> */}
     
      </div>

      
    </div>
  );
}
