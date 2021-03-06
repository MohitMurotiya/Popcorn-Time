import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//This create() func creates a new Axios instance to set custom defaults for application.
//In this I'm setting a baseURL for all the requests.
