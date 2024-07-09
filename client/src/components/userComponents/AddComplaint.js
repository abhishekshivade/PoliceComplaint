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

const AddComplaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    date: "",
    description: "",
    city: "",
    branch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      // Optionally, redirect or show success message
    } catch (error) {
      console.error("Error:", error);
      // Handle errors, show error message, etc.
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
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              select
              label="Category"
              variant="outlined"
              fullWidth
              name="category"
              value={formData.category}
              onChange={handleChange}
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
              value={formData.date}
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
              value={formData.description}
              onChange={handleChange}
              required
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <TextField
              label="Branch"
              variant="outlined"
              fullWidth
              name="branch"
              value={formData.branch}
              onChange={handleChange}
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