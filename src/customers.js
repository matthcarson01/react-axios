import axios from 'axios';
import apiURL from './api.js';

export const getCustomerList = () => {
    return axios.get(apiURL).then(response => response.data);
};

export const postCustomer = (customerObj) => {
    return axios.post(apiURL,customerObj).then(response => response.data)
};

export const getCustomer = (id) => {
    return axios.get(apiURL + id).then(response => response.data);
};

export const updateCustomer = function(id, obj) {
  return axios.patch(apiURL + id, obj).then(response => response.data);
};
