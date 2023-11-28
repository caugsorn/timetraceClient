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

  const [startTime, setStartTime] = useState({});
  const [endTime, setEndTime] = useState({});
  const [category, setCategory] = useState(null);
  const [day, setDay] = useState("");
  const [week, setWeek] = useState(0);
  const [time, setTime] = useState(0);
  const [mainButton, setMainButton] = useState(true);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [log, setLog] = useState({});

  // const createLog = ({timeStart, category, day, time}) => {
  //     const timeEnd = timeStart.plus({seconds: '222312'})

  //     const value = {
  //         timeStart,
  //         timeEnd,
  //         category,
  //         timeSpan: time,
  //         day
  //     }
  //     console.log(time)
  //     console.log(timeStart)
  //     console.log(timeEnd)
  //     createNewLog(value)
  //   };
  const createLog = ({ timeStart, category, day, week, time }) => {
    const timeEnd = timeStart.plus({ seconds: time });
    const sendCatergory = category === null ? "Untitled..." : category;
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

  const startTimer = (button) => {
    let dt = DateTime.local();
    let dtJS = new Date();
    console.log("in start timer button:", button);
    if (!button) {
      setStartTime(dt);
      const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      setDay(weekDay[dtJS.getDay()]);
      const getWeek = dt.weekNumber;
      setWeek(getWeek);
      console.log("in button", button, Object.keys(startTime));
      if (Object.keys(startTime).length !== 0) {
        createLog({ timeStart: startTime, category, day, week, time });
        setCategory(null);
      }
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
        startTimer,
        startTime,
        setStartTime,
        stopwatchRunning,
        setStopwatchRunning,
        setTime,
        time,
        category,
        setCategory,
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
        mainButton,
        setMainButton,
      }}
    >
      {children}{" "}
    </LogContext.Provider>
  );
}

export { LogContext, LogContextProvider };
