import {createContext, useEffect, useState} from 'react'
import { DateTime, diff } from 'luxon';
import { createNewLog } from '../components/api/logs';
import { getSum, getLogs, compareToAverage,graphCategory, graphAverage } from '../components/api/logs';

const LogContext = createContext();

function LogContextProvider({children}) {
    const [logByDate, setLogByDate] = useState([]);
    const [categoryByDate, setCategoryByDate] = useState([]);
    const [logByCat, setLogByCat] = useState([]);
    const [sum, setSum] = useState(0);
    const [averageCompared, setAverageCompared] = useState(0);
    const [averageGraphData, setAverageGraphData] = useState([]);
    const [thisWeekGraphData, setThisWeekGraphData] = useState([]);
    const [categoryGraphData, setCategoryGraphData] = useState([]);
    const [weekId, setWeekId] = useState(DateTime.now().weekNumber)

     const getLog = async (week) => {
            const inputWeek = week || DateTime.now().weekNumber
            const allLog = await getLogs(weekId);
            setLogByDate(allLog.logsByDate);
            setCategoryByDate(allLog.category)
        } 
   
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
            const categoryData = await graphCategory();
            setCategoryGraphData(categoryData)
        }
        getCategoryGraph();
    }, [])

    useEffect(() => {
        const getWeeklyData = async () => {
            const weeklyData = await graphAverage();
            
            setAverageGraphData(weeklyData.averageWeek)
            setThisWeekGraphData(weeklyData.thisWeek)    
        }
        getWeeklyData()
    }, [])

    // useEffect(()=> {
    //     getLog(weekId)
    //     // console.log(weekId)
    // }, [])


    const createLog = ({timeStart, category, day, week, time}) => {
        const timeEnd = timeStart.plus({seconds: time}) 
        const value = {
            timeStart,
            timeEnd,
            timeSpan: time,
            category,
            week,
            day,
        }
        createNewLog(value)
    }
    return (
        <LogContext.Provider value={{logByDate, logByCat, createLog,sum, averageCompared, categoryGraphData, averageGraphData, thisWeekGraphData, weekId, setWeekId, getLog, categoryByDate}}>{children} </LogContext.Provider>
    )

}

export { LogContext, LogContextProvider };
