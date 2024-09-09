import useAuthStore from '../store/authStore';
import instance from '../utils/axiosConfig';

const useAuth = () => {
  const { setAuth, clearAuth, accessToken, refreshToken } = useAuthStore();

  const login = async (email, password) => {
    try {
        const response = await instance.post('/auth/login', { email, password }, { withCredentials: true });
        setAuth({ accessToken: response.data.accessToken, refreshToken: response.data.refreshToken });
        return { success: true, message: response.data.message, data: response.data };
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;
            return { success: false, statusCode: status, message: data.message };
        } else if (error.request) {
            return { success: false, message: 'No response received from server' };
        } else {
            return { success: false, message: error.message };
        }
    }
  };

  const logout = async () => {
    try {
      await axios.post('/logout', {}, { withCredentials: true });
      clearAuth();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post('/refresh', {}, { withCredentials: true });
      setAuth({ accessToken: response.data.accessToken, refreshToken });
    } catch (error) {
      console.error('Token refresh failed', error);
      clearAuth();
    }
  };

  return {
    login,
    logout,
    refreshAccessToken,
    accessToken,
    isAuthenticated: !!accessToken
  };
};

export default useAuth;
