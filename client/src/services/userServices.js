import axios from "axios";
import {
  USER_LOGIN,
  USER_PR_DETAILS,
  USER_CP_DETAILS,
  REGISTER_USER,
  GET_ALL_COMPLAINTS,
  ADD_COMPLAINT,
} from "../constants/ApiRputes";
import {} from "./adminServices";
import { getToken } from "./authServices";

export const registerUser = (userData) =>
  axios.post(REGISTER_USER, userData);

export const userLogin = (loginCredentials) =>
  axios.post(USER_LOGIN, loginCredentials);

export const getUserDetails= userId=> axios.get(`${USER_PR_DETAILS}/${userId}`);

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

export const addComplaint = (complaintData) =>
  axios.post(ADD_COMPLAINT, complaintData);

export const getComplaintDetails = (complaintID) =>
  axios.get(`${USER_CP_DETAILS}/${complaintID}`);

export const getAllComplaints=userId=> axios.get(GET_ALL_COMPLAINTS,userId);

export const editComplaint = (complaintID,complaintData) =>
  axios.put(`${USER_CP_DETAILS}/${complaintID}`,complaintData);

export const deleteComplaint = (complaintID) =>
  axios.delete(`${USER_CP_DETAILS}/${complaintID}`);