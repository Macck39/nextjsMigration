import axios from 'axios';

const BASE_URL = 'http://localhost:9090/api/v1';

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
  authAxios.post('/user/login', credentials).catch(handleApiError);
  
export const createEnquiry = (data) => 
  authAxios.post('/enquiry/', data).catch(handleApiError);

export const callbackRequest = (data) => 
  authAxios.post('/request/', data).catch(handleApiError);

export const getCallbackRequests = () => 
    authAxios.get('/request/').catch(handleApiError);

export const getAllEnquiry = () => 
    authAxios.get('/enquiry').catch(handleApiError);

  export const getAllUsers = () => 
    authAxios.get('/user/all').catch(handleApiError);
  
  export const getUserProfile = () => 
    authAxios.get('/user/').catch(handleApiError);
  export const logout = () => 
    authAxios.get('/user/logout').catch(handleApiError);
  
  // Add more API functions as needed
  export const createPost = (postData) => 
    authAxios.post('/posts', postData).catch(handleApiError);
  
  export const getPosts = () => 
    authAxios.get('/posts').catch(handleApiError);

