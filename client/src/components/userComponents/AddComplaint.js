import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addComplaint, registerUser } from "../../services/userServices";
import { USER_DASHBOARD, USER_LOGIN_ROUTE } from "../../constants/AppRoutes";
import validateUser from "../library/Validator";

const AddComplaint = () => {

  const [complaintData, setComplaintData] = useState({
    name: "",
    email: "",
    category: "",
    date: "",
    description: "",
    city: "",
    branch: "",
  });

  const [error, setError] = useState({
    nameErr: "",
    emailErr: "",
    categoryErr: "",
    descriptionErr: "",
    cityErr: "",
    branchErr: "",
    formErr: "",
  });

  const navigate = useNavigate();
  const validate = validateUser();

  const handleChange = (e) => {
    setComplaintData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  };

  const handleName = (e) => {
    e.preventDefault();

    const nameErr = validate.validateName(
      complaintData.name
    );

    setError({
      ...error,
      nameErr,
    });
  };

  const handleEmailId = (e) => {
    e.preventDefault();

    const emailErr = validate.validateEmail(complaintData.email);

    setError({
      ...error,
      emailErr,
    });
  };

  const handleCategory = (e) => {
    e.preventDefault();

    const categoryErr = validate.validateCategory(complaintData.category);

    setError({
      ...error,
      categoryErr,
    });
  };

  const handleDescription = (e) => {
    e.preventDefault();

    const descriptionErr = validate.validateDescription(
      complaintData.description
    );

    setError({
      ...error,
      descriptionErr,
    });
  };

  const handleCity = (e) => {
    e.preventDefault();

    const cityErr = validate.validateCityName(
      complaintData.city
    );

    setError({
      ...error,
      cityErr,
    });
  };

  const handleBranch = (e) => {
    e.preventDefault();

    const branchErr = validate.validateBranch(complaintData.branch);

    setError({
      ...error,
      branchErr,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await addComplaint(complaintData);
      if (response.status === 200) {
        navigate(USER_DASHBOARD);
      }
    } catch (error) {
      setError({ ...error, formErr: "Please enter correct data" });
    }
  };

  return (
    <Container className="mt-10">
      <Card className="w-1/2 mx-auto">
        <CardHeader
          title="Add Complaint"
          className="bg-blue-500 text-white text-center"
          titleTypographyProps={{ variant: "h5" }}
        />
        <CardContent>
          <form id="addComplaintForm" onSubmit={handleSubmit} className="space-y-4 text-center">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={complaintData.name}
              onChange={handleChange}
              onBlur={handleName}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={complaintData.email}
              onChange={handleChange}
              onBlur={handleEmailId}
              required
            />
            <TextField
              select
              label="Category"
              variant="outlined"
              fullWidth
              name="category"
              value={complaintData.category}
              onChange={handleChange}
              onBlur={handleCategory}
              required
            >
              <MenuItem value="Theft">Theft</MenuItem>
              <MenuItem value="Fraud">Fraud</MenuItem>
              <MenuItem value="Assault">Assault</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
            <TextField
              label="Date"
              variant="outlined"
              fullWidth
              type="date"
              name="date"
              value={complaintData.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={complaintData.description}
              onChange={handleChange}
              onBlur={handleDescription}
              required
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              name="city"
              value={complaintData.city}
              onChange={handleChange}
              onBlur={handleCity}
              required
            />
            <TextField
              label="Branch"
              variant="outlined"
              fullWidth
              name="branch"
              value={complaintData.branch}
              onChange={handleChange}
              onBlur={handleBranch}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddComplaint;