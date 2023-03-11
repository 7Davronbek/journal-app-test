import axios from "axios";
import { TOKEN, API_PATH } from "../constants";

axios.defaults.baseURL = API_PATH;

axios.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem(TOKEN));
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
