import axios from "axios";

/*
THIS IS FOR FRONTEND TO USE I THINK
*/

export default axios.create({
  baseURL: "http://localhost:3306",
  headers: {
    "Content-type": "application/json"
  }
});

// change the baseURL that depends on REST APIs url our Server configures.