import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
