import { createContext, useEffect, useState } from "react";
import { DateTime, diff } from "luxon";
import { createNewLog } from "../components/api/logs";
import {
  getSum,
  getLogs,
  compareToAverage,
  graphCategory,
  graphAverage,
} from "../components/api/logs";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const [logByDate, setLogByDate] = useState([]);
  const [categoryByDate, setCategoryByDate] = useState([]);
  const [logByCat, setLogByCat] = useState([]);
  const [sum, setSum] = useState(0);
  const [averageCompared, setAverageCompared] = useState(0);
  const [averageGraphData, setAverageGraphData] = useState([]);
  const [thisWeekGraphData, setThisWeekGraphData] = useState([]);
  const [categoryGraphData, setCategoryGraphData] = useState([]);
  const [weekId, setWeekId] = useState(DateTime.now().weekNumber);

  

  const createLog = ({ timeStart, category, day, week, time }) => {
    const timeEnd = timeStart.plus({ seconds: time });
    const sendCatergory = category === "" ? "Untitled..." : category;
    const value = {
      timeStart,
      timeEnd,
      timeSpan: time,
      category: sendCatergory,
      week,
      day,
    };
    console.log("about to create new log");
    createNewLog(value);
  };

  const logEnded = (timeStart, timeSpan, category) => {
    const weekDayShortname = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const dt = DateTime.now();
    const day = weekDayShortname[dt.weekday - 1];
    const week = dt.weekNumber;
    if (Object.keys(timeStart).length !== 0) {
      createLog({ timeStart: timeStart, category, day, week, timeSpan });
    }
  };
  const getLog = async (week) => {
    const inputWeek = week || DateTime.now().weekNumber;
    const allLog = await getLogs(weekId);
    setLogByDate(allLog.logsByDate);
    setCategoryByDate(allLog.category);
  };

  useEffect(() => {
    const getTotal = async () => {
      const totalHour = await getSum();
      setSum(totalHour);
    };
    getTotal();
  }, []);

  useEffect(() => {
    const getAverage = async () => {
      const average = await compareToAverage();
      setAverageCompared(average.toFixed(2));
    };
    getAverage();
  }, []);

  useEffect(() => {
    const getCategoryGraph = async () => {
      const categoryData = await graphCategory();
      setCategoryGraphData(categoryData);
    };
    getCategoryGraph();
  }, []);

  useEffect(() => {
    const getWeeklyData = async () => {
      const weeklyData = await graphAverage();

      setAverageGraphData(weeklyData.averageWeek);
      setThisWeekGraphData(weeklyData.thisWeek);
    };
    getWeeklyData();
  }, []);

  // useEffect(()=> {
  //     getLog(weekId)
  //     // console.log(weekId)
  // }, [])

  return (
    <LogContext.Provider
      value={{
        // startTimer,
        // startTime,
        // setStartTime,
        // stopwatchRunning,
        // setStopwatchRunning,
        // setTime,
        // time,
        // category,
        // setCategory,
        logEnded,
        logByDate,
        logByCat,
        createLog,
        sum,
        averageCompared,
        categoryGraphData,
        averageGraphData,
        thisWeekGraphData,
        weekId,
        setWeekId,
        getLog,
        categoryByDate,
        // mainButton,
        // setMainButton,
      }}
    >
      {children}{" "}
    </LogContext.Provider>
  );
}

export { LogContext, LogContextProvider };
