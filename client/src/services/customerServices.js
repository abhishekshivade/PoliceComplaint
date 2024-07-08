import axios from "axios";
import {
  CUSTOMER_AC_DETAILS,
  CUSTOMER_LOGIN,
  CUSTOMER_PR_DETAILS,
  CUSTOMER_TR_DETAILS,
  GET_ALL_CUSTOMERS,
  REGISTER_CUSTOMER,
  GET_ALL_ACCOUNTS,
} from "../constants/ApiRputes";
import {} from "./adminServices";
import { getToken } from "./authServices";

export const registerCustomer = (customerData) =>
  axios.post(REGISTER_CUSTOMER, customerData);

export const customerLogin = (loginCredentials) =>
  axios.post(CUSTOMER_LOGIN, loginCredentials);

export const getTransactionDetails = (accountNumber) =>
  axios.get(CUSTOMER_TR_DETAILS, accountNumber);

export const getPersonalDetails = async (customerID) => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };

  const data = {
    customerID: customerID,
  };

  try {
    const response = await axios.post(CUSTOMER_PR_DETAILS, data, config);
    return response.data;
  } catch (error) {
    // console.error("Error fetching personal details:", error);
    throw error;
  }
};

export const getAllAccounts = async (customerID) => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };

  const data = {
    customerID: customerID,
  };

  try {
    const response = await axios.post(GET_ALL_ACCOUNTS, data, config);
    return response.data;
  } catch (error) {
    // console.error("Error fetching account list:", error);
    throw error;
  }
};

export const getAccountDetails = async (accountNo) => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };

  const data = {
    accountNumber: accountNo,
  };

  try {
    const response = await axios.post(CUSTOMER_AC_DETAILS, data, config);
    return response.data;
  } catch (error) {
    // console.error("Error fetching account details:", error);
    throw error;
  }
};

export const getCustomers = async() => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };
  const response =await axios.post(GET_ALL_CUSTOMERS,{},config);
  return response.data
};
