import { createContext, useEffect, useState } from "react";
import { DateTime, diff } from "luxon";
import { createNewLog } from "../components/api/logs";
import {
  getSum,
  getLogs,
  compareToAverage,
  getCurLogsByCat,
  graphCategory,
  graphAverage,
} from "../components/api/logs";

const LogContext = createContext();

function LogContextProvider({ children }) {
  const [logByDate, setLogByDate] = useState([]);
  const [categoryByDate, setCategoryByDate] = useState([]);
  const [logByCat, setLogByCat] = useState([]);
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);
  const [averageCompared, setAverageCompared] = useState(0);
  const [averageGraphData, setAverageGraphData] = useState([]);
  const [thisWeekGraphData, setThisWeekGraphData] = useState([]);
  const [categoryGraphData, setCategoryGraphData] = useState([]);
  const [weekId, setWeekId] = useState(DateTime.now().weekNumber);
  const [startTime, setStartTime] = useState({});
  const [timeSpan, setTimeSpan] = useState(0);
  const [category, setCategory] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      setStartTime(DateTime.local());
      interval = setInterval(() => {
        setTimeSpan((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimeSpan(0);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const createLog = ({ timeStart, category, day, week, timeSpan }) => {
    const timeEnd = timeStart.plus({ seconds: timeSpan });
    const sendCatergory = category === "" ? "Untitled..." : category;
    const value = {
      timeStart,
      timeEnd,
      timeSpan: timeSpan,
      category: sendCatergory,
      week,
      day,
    };
    setCategory("");
    createNewLog(value);
  };

  const logEnded = (timeStart, timeSpan, category) => {
    const weekDayShortname = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const dt = DateTime.now();
    const day = weekDayShortname[dt.weekday - 1];
    const week = dt.weekNumber;
    if (Object.keys(timeStart).length !== 0) {
      console.log("hey time", timeSpan);
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
    const getLogByCat = async () => {
      const curLogs = await getCurLogsByCat();
      setLogByCat(curLogs);
    };
    getLogByCat();
  }, [isRunning]);

  useEffect(() => {
    const getTotal = async () => {
      const totalHour = await getSum();
      setSum(totalHour);
    };
    getTotal();
  }, [isRunning]);

  useEffect(() => {
    const getAverage = async ({ week }) => {
      const res = await compareToAverage(week);
      setAverageCompared(res.averageCompared.toFixed(2));
      setAverage(res.average.toFixed(2));
    };
    const week = DateTime.now().weekNumber;
    getAverage(week);
  }, [isRunning]);

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

  return (
    <LogContext.Provider
      value={{
        startTime,
        setStartTime,
        timeSpan,
        average,
        setTimeSpan,
        category,
        setCategory,
        isRunning,
        setIsRunning,
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
      }}
    >
      {children}{" "}
    </LogContext.Provider>
  );
}

export { LogContext, LogContextProvider };
