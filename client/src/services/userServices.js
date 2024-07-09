import axios from "axios";
import {
  USER_LOGIN,
  USER_PR_DETAILS,
  USER_CP_DETAILS,
  GET_ALL_USERS,
  REGISTER_USER,
  GET_ALL_COMPLAINTS,
} from "../constants/ApiRputes";
import {} from "./adminServices";
import { getToken } from "./authServices";

export const registerUser = (userData) =>
  axios.post(REGISTER_USER, userData);

export const userLogin = (loginCredentials) =>
  axios.post(USER_LOGIN, loginCredentials);

export const getComplaintDetails = (complaintID) =>
  axios.get(USER_CP_DETAILS, complaintID);

export const getPersonalDetails = async (userID) => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };

  const data = {
    userID: userID,
  };

  try {
    const response = await axios.post(USER_PR_DETAILS, data, config);
    return response.data;
  } catch (error) {
    // console.error("Error fetching personal details:", error);
    throw error;
  }
};

export const getAllComplaints = async (userID) => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };

  const data = {
    userID: userID,
  };

  try {
    const response = await axios.post(GET_ALL_COMPLAINTS, data, config);
    return response.data;
  } catch (error) {
    // console.error("Error fetching account list:", error);
    throw error;
  }
};

export const getUsers = async() => {
  const config = {
    headers: {
      Auth: getToken(),
      "Content-Type": "application/json",
    },
  };
  const response =await axios.post(GET_ALL_USERS,{},config);
  return response.data
};
