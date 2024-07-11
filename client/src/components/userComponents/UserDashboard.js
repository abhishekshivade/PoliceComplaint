import React, { useEffect, useState } from "react";
import { ComplaintTable } from "./ComplaintTable";
import { getUserId, getToken } from "../../services/authServices";
import {
  getPersonalDetails,
  getAllComplaints,
  getComplaintDetails,
  getUserDetails,
} from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { ADD_COMPLAINT, BASE_ROUTE } from "../../constants/AppRoutes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const UserDashboard = () => {
  const [personalDetails, setPersonalDetails] = useState([]);
  const [complaintList, setComplintList] = useState([]);
  const [compalintDetails, setCompalintDetails] = useState([]);
  const [compalintId, setCompalintId] = useState();

  const userId = getUserId();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const personalData = await getUserDetails(userId);
        setPersonalDetails(personalData.data);

        const complaints = await getAllComplaints(userId);
        setComplintList(complaints.data);

        if (complaints.data.length > 0) {
          const firstComplaintId = complaints.data[0].complaintId;
          console.log("cID : ",firstComplaintId)
          setCompalintId(firstComplaintId);

          const compalintData = await getComplaintDetails(firstComplaintId);
          console.log("ComplaintData : ",compalintData)
          setCompalintDetails(compalintData);
        }
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchCompalintDetails = async () => {
      if (compalintId) {
        try {
          const compalintData = await getComplaintDetails(compalintId);
          setCompalintDetails(compalintData);
        } catch (error) {
          // console.error("Error fetching complaint details:", error);
        }
      }
    };

    fetchCompalintDetails();
  }, [compalintId]);

  useEffect(() => {}, [compalintDetails]);

  const handleComplaintChange = (e) => setCompalintId(e.target.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) navigate(BASE_ROUTE);
  });

  return (
    <div className="w-screen text-center">
      <div className="flex items-center pt-5 px-5">
        <h1 className="text-2xl font-bold w-10/12">User Dashboard</h1>

        <button onClick={()=>navigate(ADD_COMPLAINT)} className="mr-16 w-36 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">Add Complaint</button>

        <div className="w-1/12">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Compalint ID
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={complaintList.length > 0 ? compalintId : "Complaint ID"}
              name="compalintId"
              label="Complaint ID"
              onChange={handleComplaintChange}
              required
            >
              {complaintList.map(() => {
                return (
                  <MenuItem key={compalintId} value={compalintId}>
                    {compalintId}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-start h-auto lg:h-72 mt-10 gap-2">
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md mb-5 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="text-left space-y-2">
            {personalDetails ? (
              <>
                <div>
                  <strong>User ID : </strong>{" "}
                  {personalDetails.userId}
                </div>
                <div>
                  <strong>Mobile Number : </strong>
                  {personalDetails.contact}
                </div>
                <div>
                  <strong>Email ID : </strong> {personalDetails.email}
                </div>
              </>
            ) : (
              <p>Missing Personal Details</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Compalint Details</h2>
          <div className="text-left space-y-2">
            {compalintDetails.data ? (
              <>
                <div>
                  <strong>Compalint ID : </strong>{" "}
                  {compalintDetails.data.complaintId}
                </div>
                <div>
                  <strong>Name : </strong>
                  {compalintDetails.data.name}
                </div>
                <div>
                  <strong>Category : </strong>
                  {compalintDetails.data.category}
                </div>
                <div>
                  <strong>Branch : </strong>
                  {compalintDetails.data.branch}
                </div>
                <div>
                  <strong>City : </strong>
                  {compalintDetails.data.city}
                </div>
                <div>
                  <strong>Description : </strong> {compalintDetails.data.description}
                </div>
                <div>
                  <strong>Date : </strong> {compalintDetails.data.date}
                </div>
              </>
            ) : (
              <p>No Complaint details found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
