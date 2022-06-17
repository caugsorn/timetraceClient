import {useContext, useState, useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import LogsFilter from "./cards/LogsFilter";
import Logcard from "./cards/Logcard";
import LogPagination from "./cards/LogPagination";
import { LogContext } from "../../contexts/LogContext";

export default function LogContainer() {
  const ctx = useContext(LogContext);
  const param = useParams()

  
      const [filterCategory, setFilterCategory] = useState({})
        // console.log(filterCategory)

      // console.log(ctx.categoryByDate)
      useEffect(()=> {
        const categoryKeys = Object.keys(ctx.categoryByDate)
        const categoryKeysObj = categoryKeys.reduce((acc, curr) =>  {
          // console.log(acc)
          // console.log(curr)
          acc[curr] = true
          return acc
        }, {})
        // console.log(categoryKeysObj)
        setFilterCategory(categoryKeysObj)
    },[ctx.categoryByDate])


  



  // const [categoryNow, setCategoryNow] = useContext([])
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

  const allLog = Object.values(ctx.logByDate)
  
 

  

  return (
    <div className="mx-8 space-y-4 mt-12 h-screen">
        <div className="card row-start-1 col-span-full h-20">
        <LogPagination />
      </div>

      <div className="grid grid-cols-3 space-x-4 w-full h-3/5">
        <div className="card">
            <h3 className="mt-4 mb-1">Filter</h3>
           <ul>
           {/* {console.log(filterCategory)} */}
            {Object.keys(ctx.categoryByDate).map((el) => { 
              return <LogsFilter key={el} name={el} setFilterCategory={setFilterCategory} filterCategory={filterCategory}/>}
            )}

          </ul> 
        </div>
         <div className="card col-span-2 h-full overflow-y-auto">
        {/* {Object.entries(ctx.logByDate).map((element,idx) => { 
          console.log(element)
          // element.filter(()=> filterCategory[element.cate])  
        return <Logcard key={idx} element={element[1]}/>
        })} */}
         {(Object.values(ctx.logByDate).map((element,idx) => <Logcard key={element} element={element} filterCategory={filterCategory}/>))}

      </div>
      {/* </div> */}
     
      </div>

      
    </div>
  );
}
