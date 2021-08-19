import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-deadeye.herokuapp.com",
});

export default instance;
