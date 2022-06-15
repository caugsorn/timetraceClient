import axios from '../../config/axios';

export const createNewLog = async ({timeStart, timeEnd, timeSpan, category, day, week,  userId}) => {
 
  return await axios.post("/logs/", { timeStart, timeEnd, timeSpan, category, day, week, userId}).then((res) => {
    return res.data.log;
  });
};

// export const getLogs = () => {
//     return axios.get('/logs').then((res) => {
//         return res.data.log;
//     })
// }

export const getSum = async () => {
    const res = await axios.get("/logs/sum")
    console.log(res.data.sum)
    return res.data.sum;
}

export const compareToAverage = async () => {
  const res = await axios.get('/logs/average')
  return res.data.averageCompared
}

export const graphAverage = async () => {
  const res = await axios.get('/logs/graph/average')
  return {averageWeek: res.data.averageWeekData, thisWeek: res.data.thisWeekData};
}

export const graphCategory = async () => {
  const res = await axios.get('/logs/graph/category')
  return res.data.categoryData
}