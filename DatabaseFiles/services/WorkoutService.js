import http from "../http-common";

/*
THIS IS FOR FRONTEND TO USE I THINK
*/

// const getAll = () => {
//   return http.get("/workouts");
// };

const get = id => {
  return http.get(`/workouts/${id}`);
};

const create = data => {
  return http.post("/workouts", data);
};

// const update = (id, data) => {
//   return http.put(`/workouts/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/workouts/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/workouts`);
// };

// const findByTitle = title => {
//   return http.get(`/workouts?title=${title}`);
// };

const WorkoutService = {
  //getAll,
  get,
  create
  //update,
  //remove,
  //removeAll,
  //findByTitle
};

export default WorkoutService;

// This is the code called within the application!
// just need to figure out the correct urls to provide
