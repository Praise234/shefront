import axios from 'axios';
import useAuthStore from '../store/authStore';


const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1/admin',
  withCredentials: true, // Send cookies with requests
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
