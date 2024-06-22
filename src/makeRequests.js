import axios from "axios";

export const makeRequests = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers:{
    Authorization: "bearer" + import.meta.env.VITE_APP_API_TOKEN,
  }
});


export default makeRequests;