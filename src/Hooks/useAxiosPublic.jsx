const { default: axios } = require("axios");

const axiosPublic = axios.create({
  baseURL: "http://localhost:5173",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
