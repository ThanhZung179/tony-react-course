import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://tony-auth-express.vercel.app/api',
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  console.log('interceptor request: ', config)
  if(config.showLoading) { 
    // show loading

  }
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {

  console.log('interceptor response: ', response);

  if(response.config.showLoading) {
    // hide loading
  }

  // handle error
  if(response.status === 400) { 

  }

  if(response.status === 500) { 

  }

  if(response.status === 502) { 

  }


  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});