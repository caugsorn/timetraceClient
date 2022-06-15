import {createContext, useEffect, useState} from 'react'
import { DateTime, diff } from 'luxon';
import { createNewLog } from '../components/api/logs';
import { getSum, compareToAverage,graphCategory, graphAverage } from '../components/api/logs';

const LogContext = createContext();

function LogContextProvider({children}) {
    const [log, setLog] = useState([]);
    const [sum, setSum] = useState(0);
    const [averageCompared, setAverageCompared] = useState(0);
   
//     {
//     "averageWeekData": [
//         {
//             "day": "TUE",
//             "sum": "5.8000"
//         },
//         {
//             "day": "SUN",
//             "sum": "3.5000"
//         },
//         {
//             "day": "MON",
//             "sum": "110.2143"
//         }
//     ],


//     "thisWeekData": [
//         {
//             "day": "MON",
//             "sum": "1543"
//         },
//         {
//             "day": "TUE",
//             "sum": "27"
//         }
//     ]
// }



//reduce ก้อน ถ้า averageWeekday(el.day === day )

   

    useEffect(() => {
        const getTotal = async () => {
            const totalHour = await getSum();
            setSum(totalHour);
        }
        getTotal();
    },[])


    useEffect(() => {
        const getAverage = async () => {
            const average = await compareToAverage();
            setAverageCompared(average.toFixed(2));
        }
        getAverage();
    },[])

    useEffect(() => {
        const getCategoryGraph = async () => {
            const cateforyData = await graphCategory();
            console.log(cateforyData)
        }
        getCategoryGraph();
    }, [])

    useEffect(() => {
        const getWeeklyData = async () => {
            const weeklyData = await graphAverage();
            console.log(weeklyData.averageWeek)
            const averageWeek = default0ForGraph(weeklyData.averageWeek);
            // console.log(averageWeekData)
        }
        getWeeklyData()
    }, [])

     const default0ForGraph = (data) => {

       

    }


    const createLog = ({timeStart, category, day, week, time}) => {
        const timeEnd = timeStart.plus({seconds: time}) 
        const value = {
            timeStart,
            timeEnd,
            timeSpan: time,
            category,
            week,
            day
        }
        createNewLog(value)
    }

    return (
        <LogContext.Provider value={{log, createLog,sum, averageCompared}}>{children} </LogContext.Provider>
    )

}

export { LogContext, LogContextProvider };
