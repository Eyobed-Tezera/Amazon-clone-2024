import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ec584/us-central1/api",
  baseURL: "https://api-bpkgyk2m7a-uc.a.run.app",
});
export default axiosInstance;
