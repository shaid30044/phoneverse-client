const { default: axios } = require("axios");

const axiosPublic = axios.create({
  baseURL: "",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
