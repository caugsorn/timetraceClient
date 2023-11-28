import axios from "../../config/axios";

export const getAllTasks = async () => {
  return axios.get("/tasks").then((res) => res.data.tasks);
};

export const getTaskCount = async () => {
  const res = await axios.get(`/tasks/count`);
  return res.data.count;
};

export const getGraphAverageGraph = async () => {
  const res = await axios.get(`/tasks/graph/average`);
  return res.data.averageCompared;
};

export const getGraphCategory = async () => {
  const res = await axios.get(`/tasks/graph/category`);
  return res.data.categoryData;
};

export const createNewTask = async (title, priority, week) => {
  return axios.post("/tasks", { title, completed: false, priority, week });
};

export const updateTask = async (id, title, completed, priority, week) => {
  await axios
    .patch(`/tasks/${id}`, { title, completed, priority, week })
    .then((res) => {
      return res.data.tasks;
    });
};

export const deleteTask = async (id) => {
  await axios.delete(`/tasks/${id}`).then((res) => {
    return res.data.tasks;
  });
};
