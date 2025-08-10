import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

// 🔔 401 interceptor
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;
    if (status === 401) {
      // Token yok/bitmiş – kullanıcıyı bilgilendir
      toast.error("Oturumunuzun süresi dolmuş. Lütfen tekrar giriş yapın.");
    }
    return Promise.reject(err);
  }
);