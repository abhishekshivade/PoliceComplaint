import React, { useState } from "react";
import { registerAdmin } from "../../services/adminServices";
import { useNavigate } from "react-router-dom";
import { ADMIN_LOGIN_ROUTE } from "../../constants/AppRoutes";
import validateUser from "../library/Validator";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function AdminRegistration() {
  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    branchName: "",
    role: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    branchNameErr: "",
    roleErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const validate = validateUser();

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleFirstNameBlur = (e) => {
    e.preventDefault();
    const firstNameErr = validate.validateName(adminData.firstName);
    setError({ ...error, firstNameErr });
  };

  const handleLastNameBlur = (e) => {
    e.preventDefault();
    const lastNameErr = validate.validateName(adminData.lastName);
    setError({ ...error, lastNameErr });
  };

  const handleBranchBlur = (e) => {
    e.preventDefault();
    const branchNameErr = validate.validateBranch(adminData.branchName);
    setError({ ...error, branchNameErr });
  };

  const handlePasswordBlur = (e) => {
    e.preventDefault();
    const passwordError = validate.validatePassword(adminData.password);
    setError({ ...error, passwordError });
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    const confirmPasswordErr =
      adminData.password === confirmPassword ? null : "Password do not match";
    setError({ ...error, confirmPasswordErr });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerAdmin(adminData);
      if (response.status === 200) {
        navigate(ADMIN_LOGIN_ROUTE);
      }
    } catch (error) {
      setError("Please enter correct data");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">Register</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center border-b-2 border-black">
              <input
                type="text"
                className="flex-grow bg-transparent outline-none placeholder-black"
                placeholder="Enter your First Name"
                onChange={handleChange}
                name="firstName"
                value={adminData.firstName}
                onBlur={handleFirstNameBlur}
                required
              />
              <i className="fa-solid fa-user text-xl"></i>
            </div>
            <p className="text-red-500 text-start text-sm w-60">
              {error.firstNameErr ? error.firstNameErr : <br />}
            </p>
          </div>
          <div>
            <div className="flex items-center border-b-2 border-black">
              <input
                type="text"
                className="flex-grow bg-transparent outline-none placeholder-black"
                placeholder="Enter your Last Name"
                onChange={handleChange}
                name="lastName"
                value={adminData.lastName}
                onBlur={handleLastNameBlur}
                required
              />
              <i className="fa-solid fa-user text-xl"></i>
            </div>
            <p className="text-red-500 text-start text-sm w-60">
              {error.lastNameErr ? error.lastNameErr : <br />}
            </p>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={adminData.branchName}
              name="branchName"
              label="Branch Name"
              onChange={handleChange}
              required
            >
              <MenuItem value="MUMBAI">MUMBAI</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={adminData.role}
              name="role"
              label="Role"
              onChange={handleChange}
              required
            >
              <MenuItem value="ADMIN">ADMIN</MenuItem>
            </Select>
          </FormControl>
          <div>
            <div className="flex items-center border-b-2 border-black">
              <input
                type={showPassword ? "text" : "password"}
                className="flex-grow bg-transparent outline-none placeholder-black"
                placeholder="Enter password"
                onChange={handleChange}
                name="password"
                value={adminData.password}
                onBlur={handlePasswordBlur}
                required
              />
              <i
                className={`fa-solid text-xl cursor-pointer ${
                  showPassword ? "fa-eye-slash" : "fa-eye"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <p className="text-red-500 text-start text-sm w-60">
              {error.passwordErr ? error.passwordErr : <br />}
            </p>
          </div>
          <div>
            <div className="flex items-center border-b-2 border-black">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="flex-grow bg-transparent outline-none placeholder-black"
                placeholder="Re-Enter password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleConfirmPassword}
                required
              />
              <i
                className={`fa-solid text-xl cursor-pointer ${
                  showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                }`}
                onClick={toggleConfirmPasswordVisibility}
              ></i>
            </div>
            <p className="text-red-500 text-start text-sm w-60">
              {error.confirmPasswordErr ? error.confirmPasswordErr : <br />}
            </p>
          </div>
          <div className="text-center">
            <button className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
