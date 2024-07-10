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
  getComplaintDetails, getAllComplaints
} from "../../services/userServices";

const ComplaintList = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [complaintDetails, setComplaintDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = async (user) => {
    setOpen(true);
    setSelectedUser(user);
    setLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedUser) {
        const complaint = await getAllComplaints(selectedUser);
        setComplaintDetails(await getComplaintDetails(complaint[0].complaint_id));
      }
    };
    fetchData()
  }, [selectedUser]);

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    setComplaintDetails(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>UserID</TableCell>
              <TableCell>MobileNo</TableCell>
              <TableCell>EmailID</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.UserID}>
                <TableCell>{user.UserID}</TableCell>
                <TableCell>{user.MobileNo}</TableCell>
                <TableCell>{user.EmailID}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(user.UserID)}
                  >
                    View Complaint Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedUser && (
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
            {complaintDetails && (
              <Typography id="complaint-details-modal-description" sx={{ mt: 2 }}>
                Complaint ID : {complaintDetails[0].complaint_id}
                <br />
                Category : {complaintDetails[0].category}
                <br />
                Description : {complaintDetails[0].description}
                <br />
                Branch : {complaintDetails[0].branch}
                <br />
                Status : {complaintDetails[0].status}
              </Typography>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ComplaintList;
