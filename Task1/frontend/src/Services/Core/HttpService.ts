import axios from "axios";

// Global Axios Settings
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

axios.interceptors.response.use(
    (value:any) => Promise.resolve(value),
    (error:any) => {
        return Promise.reject(error);
    }
);

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
};

export default http;
