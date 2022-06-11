import axios from '../../config/axios';

export const createNewLog = async ({timeStart, timeEnd, category, day, timeSpan, userId}) => {
  return await axios.post("/logs/", { timeStart, timeEnd, category, day, userId }).then((res) => {
    return res.data.log;
  });
};

// export const getLogs = () => {
//     return axios.get('/logs').then((res) => {
//         return res.data.log;
//     })
// }

