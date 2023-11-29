import axios from "../../config/axios";

export const createNewLog = async ({
  timeStart,
  timeEnd,
  timeSpan,
  category,
  day,
  week,
  userId,
  date,
}) => {
  const res = await axios.post("/logs/", {
    timeStart,
    timeEnd,
    timeSpan,
    category,
    day,
    week,
    userId,
    date,
  });
  return res.data.log;
};

export const getLogs = async (weekId) => {
  const res = await axios.get(`/logs/${weekId}`);
  return {
    logsByDate: res.data.logGroupByDate,
    category: res.data.categoryForFilter,
  };
};

export const getCurLogsByCat = async () => {
  const res = await axios.get("/logs/home/category");
  console.log(res);
  return res.data.logGroupbyCategory;
};

export const getSum = async () => {
  const res = await axios.get("/logs/analytics/sum");
  return res.data.sum;
};

export const compareToAverage = async ({ week }) => {
  const res = await axios.get("/logs/analytics/average");
  return res.data;
};

export const graphAverage = async () => {
  const res = await axios.get("/logs/graph/average");
  return {
    averageWeek: res.data.averageLogData,
    thisWeek: res.data.thisWeekLogData,
  };
};

export const graphCategory = async () => {
  const res = await axios.get("/logs/graph/category");
  return res.data.categoryData;
};
