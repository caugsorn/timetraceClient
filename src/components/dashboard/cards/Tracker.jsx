import {useState, useEffect, useContext} from "react";
import {DateTime} from "luxon";
import { LogContext } from '../../../contexts/LogContext'

export default function Tracker() {
  const {createLog} = useContext(LogContext);

  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});
  const [category, setCategory] = useState("");
  const [day, setDay] = useState('')
  const [button, setButton] = useState(true)


  const handleClick = () => {
    if (!startTime) {
      setButton(false)
      setStartTime(DateTime.now())

      const weekDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
      const dayStart = new Date()
      setDay(weekDay[dayStart.getDay()]
      
      
      ) 
    } 
    if (startTime && !endTime) {
      setEndTime(DateTime.now())
      setButton(true)
      createLog({timeStart: startTime, timeEnd: endTime, category, day})
    }
  }



console.log(startTime)
  return (
    <>

      <h3 className="p-6 ">Tracking</h3>
      <div className="flex flex-col items-center justify-center h-3/5">
        <form className="flex flex-col items-center">
          <div className="w-11/12">
            <h4 className="text-silver text-xs  text-center tracking-widest font-semibold w-max">I'm working on...</h4>
          <input className="h-3/5 " onChange={(e) => {setCategory(e.target.value)}}  />
            {/* <label>
            I'm working on.....
            </label> */}
            </div>
          <h2 className="text-3xl tracking-decentlyWide">00:08.15</h2>
        </form>
        <button onClick={()=> handleClick}>
    <i className={`${button ? "fa-solid fa-play playButton" : "fa-solid fa-stop playButton"}`} />
            </button>
      </div>
    </>
  );
}


          {/* // onClick1 = timeStart && new dateObject && set Icon to 'end'
// onClick2 = timeEnd && set Icon to 'start'


{/* // createLog({timeStart, timeEnd, category}) */}

{/* // category???? ตอนเริ่มอาจจะยังไม่ได้ใส่ อาจจะใส่หลังกดเล่นได้ ควรส่งค่าไปเมื่ออัดเสร็จ */}
