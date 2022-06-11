import axios from '../../config/axios';

export const createNewLog = ({timeStart, timeEnd, category, day, time}) => {
  return axios.post("/logs", { timeStart, timeEnd, category, day, time }).then((res) => {
    return res.data.log;
  });
};

// export const getLogs = () => {
//     return axios.get('/logs').then((res) => {
//         return res.data.log;
//     })
// }

// {timeStart, category, day, time}