import axios from '../../config/axios';
import { DateTime } from 'luxon';
const weekNow = DateTime.now().weekNumber

export const createNewLog = async ({timeStart, timeEnd, timeSpan, category, day, week,  userId, date}) => {
  const res = await axios.post("/logs/", { timeStart, timeEnd, timeSpan, category, day, week, userId, date})
  return res.data.log;
};

export const getLogs = async (weekId = weekNow) => {
  const res = await axios.get(`/logs/${weekId}`)
        return {logsByDate: res.data.logGroupByDate, category: res.data.categoryForFilter}
    }


export const getSum = async () => {
    const res = await axios.get("/logs/analytics/sum")
    return res.data.sum;
}

export const compareToAverage = async () => {
  const res = await axios.get('/logs/analytics/average')
  return res.data.averageCompared
}

export const graphAverage = async () => {
  const res = await axios.get('/logs/graph/average')
  return {averageWeek: res.data.averageLogData, thisWeek: res.data.thisWeekLogData};
}

export const graphCategory = async () => {
  const res = await axios.get('/logs/graph/category')
  return res.data.categoryData
}