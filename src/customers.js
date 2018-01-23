import axios from 'axios';
import apiURL from './api.js';

export const getCustomerList = () => {
    return axios.get(apiURL).then(response => response.data);
};

export const postCustomer = (customerObj) => {
    return axios.post(apiURL,customerObj).then(response => response.data)
};


