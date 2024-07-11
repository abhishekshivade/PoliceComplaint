import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import {
  getComplaintDetails, getAllComplaints,
  deleteComplaint,
  editComplaint
} from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import { EDIT_COMPLAINT } from "../../constants/AppRoutes";

const ComplaintList = ({ complaints }) => {
  const [open, setOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [complaintDetails, setComplaintDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();

  const handleOpen = async (user) => {
    setOpen(true);
    setSelectedComplaint(user);
    setLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedComplaint) {
        const complaint = await getAllComplaints(selectedComplaint);
        setComplaintDetails(await getComplaintDetails(selectedComplaint));
      }
    };
    fetchData()
  }, [selectedComplaint]);

  const handleClose = () => {
    setOpen(false);
    setSelectedComplaint(null);
    setComplaintDetails(null);
  };

  const handleDelete=async()=>{
    let deleted=await deleteComplaint(complaintDetails.data.complaintId)

    if(deleted.status === 200) handleClose()
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Compalint ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>EmailID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow key={complaint.complaintId}>
                {
                  // console.log(selectedComplaint)
                }
                <TableCell>{complaint.complaintId}</TableCell>
                <TableCell>{complaint.name}</TableCell>
                <TableCell>{complaint.email}</TableCell>
                <TableCell>{complaint.category}</TableCell>
                <TableCell>{complaint.date}</TableCell>
                <TableCell>{complaint.description}</TableCell>
                <TableCell>{complaint.city}</TableCell>
                <TableCell>{complaint.branch}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(complaint.complaintId)}
                  >
                    View Complaint Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedComplaint && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="complaint-details-modal"
          aria-describedby="complaint-details-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="complaint-details-modal" variant="h6" component="h2">
              Complaint Details
            </Typography>
            {complaintDetails && (<div>
              <Typography id="complaint-details-modal-description" sx={{ mt: 2 }}>
                Complaint ID : {complaintDetails.data.complaintId}
                <br />
                Name : {complaintDetails.data.name}
                <br />
                Email ID : {complaintDetails.data.email}
                <br />
                Category : {complaintDetails.data.category}
                <br />
                Date : {complaintDetails.data.date}
                <br />
                Description : {complaintDetails.data.description}
                <br/>
                City : {complaintDetails.data.city}
                <br />
                Branch : {complaintDetails.data.branch}
              </Typography>
              <div className="flex justify-around text-white pt-3">
                <button className="bg-yellow-500 hover:bg-yellow-600 rounded px-3 py-2" onClick={()=>navigate(EDIT_COMPLAINT)}>Edit</button>
                <button className="bg-red-500 hover:bg-red-600 rounded px-3 py-2" onClick={()=>handleDelete()}>Delete</button>
              </div>
              </div>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ComplaintList;
