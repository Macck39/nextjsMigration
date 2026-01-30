import axios from 'axios';

const BASE_URL = '/api';

const authAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Custom error handler
const handleApiError = (error) => {
  if (error.response) {
    const errorMessage = error.response.data.message || 'An error occurred';
    const statusCode = error.response.status;
    return Promise.reject({ message: errorMessage, statusCode });
  } else if (error.request) {
    return Promise.reject({ message: 'No response from server', statusCode: 0 });
  } else {
    return Promise.reject({ message: 'Request setup error', statusCode: 0 });
  }
};
export const handleLogin = (credentials) => 
  authAxios.post('/auth/login', credentials).catch(handleApiError);
  
export const createRequest = (data) =>
  authAxios.post('/requests', data).catch(handleApiError);

export const getRequests = () =>
  authAxios.get('/requests').catch(handleApiError);

  export const getAllUsers = () => 
    authAxios.get('/users').catch(handleApiError);
  
  export const getUserProfile = () => 
    authAxios.get('/auth/me').catch(handleApiError);
  export const logout = () => 
    authAxios.post('/auth/logout').catch(handleApiError);
  
  // Add more API functions as needed
  export const createPost = (postData) => 
    authAxios.post('/posts', postData).catch(handleApiError);
  
  export const getPosts = () => 
    authAxios.get('/posts').catch(handleApiError);

