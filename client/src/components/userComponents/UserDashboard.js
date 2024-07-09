import React, { useEffect, useState } from "react";
import { ComplaintTable } from "./ComplaintTable";
import { getUserId, getToken } from "../../services/authServices";
import {
  getPersonalDetails,
  getAllComplaints,
  getComplaintDetails,
} from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../constants/AppRoutes";
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
        const personalData = await getPersonalDetails(userId);
        setPersonalDetails(personalData);

        const complaints = await getAllComplaints(userId);
        setComplintList(complaints);

        if (complaints.length > 0) {
          const firstComplaintId = complaints[0].complaint_id;
          setCompalintId(firstComplaintId);

          const compalintData = await getComplaintDetails(firstComplaintId);
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
              {complaintList.map((compalintId) => {
                return (
                  <MenuItem value={compalintId.complaint_id}>
                    {compalintId.complaint_id}
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
            {personalDetails.length > 0 ? (
              <>
                <div>
                  <strong>User ID : </strong>{" "}
                  {personalDetails[0].UserID}
                </div>
                <div>
                  <strong>Name : </strong>
                  {personalDetails[0].UserName}
                </div>
                <div>
                  <strong>Mobile Number : </strong>
                  {personalDetails[0].MobileNo}
                </div>
                <div>
                  <strong>Email ID : </strong> {personalDetails[0].EmailID}
                </div>
                <div>
                  <strong>Address : </strong> {personalDetails[0].Address}
                </div>
                <div>
                  <strong>Aadhaar Number : </strong>{" "}
                  {personalDetails[0].AadharNo}
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
            {compalintDetails.length > 0 ? (
              <>
                <div>
                  <strong>Compalint ID : </strong>{" "}
                  {compalintDetails[0].complaint_id}
                </div>
                <div>
                  <strong>Branch Code : </strong>
                  {compalintDetails[0].branch_code}
                </div>
                <div>
                  <strong>Description : </strong> {compalintDetails[0].description}
                </div>
                <div>
                  <strong>Category : </strong>
                  {compalintDetails[0].category}
                </div>
                <div>
                  <strong>Date : </strong> {compalintDetails[0].date}
                </div>
                <div>
                  <strong>Status : </strong>
                  {compalintDetails[0].status}
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
