import axios from "axios";

const AxiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
});

export default AxiosInstance;
