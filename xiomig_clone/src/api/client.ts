// api/client.ts
import axios from 'axios';
import type { AxiosInstance, AxiosError } from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// Crear instancia de Axios
export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para requests
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para responses
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error: AxiosError) => {
    console.error('API Error:', {
      status: error.response?.status,
      message: error.message,
      url: error.config?.url,
    });
    
    // Transformar el error para mejor manejo
    const customError = {
      message:  error.message || 'Error desconocido',
      status: error.response?.status,
    };
    
    return Promise.reject(customError);
  }
);

export default apiClient;