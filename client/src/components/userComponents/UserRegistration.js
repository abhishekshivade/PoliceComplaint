import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { registerUser } from "../../services/userServices";
import { USER_LOGIN_ROUTE } from "../../constants/AppRoutes";
import validateUser from "../library/Validator";

const UserRegistration = () => {
  const [isNext, setIsNext] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    contact: "",
    userName:"",
    address: "",
    password: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState({
    nameErr: "",
    contactErr: "",
    emailIdErr: "",
    addressErr: "",
    passwordErr: "",
    formErr: "",
  });

  const navigate = useNavigate();
  const validate = validateUser();

  const handleChange = (e) =>
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  const handleNameBlur = (e) => {
    e.preventDefault();

    const firstNameErr = validate.validateName(userData.firstName);

    setError({
      ...error,
      firstNameErr,
    });
  };

  const handleContact = (e) => {
    e.preventDefault();

    const mobileNumberErr = validate.validateMobileNumber(
      userData.mobileNumber
    );

    setError({
      ...error,
      mobileNumberErr,
    });
  };

  const handleEmailId = (e) => {
    e.preventDefault();

    const emailIdErr = validate.validateEmail(userData.emailId);

    setError({
      ...error,
      emailIdErr,
    });
  };

  const handleAddress = (e) => {
    e.preventDefault();

    const cityErr = validate.validateCityName(userData.city);

    setError({
      ...error,
      cityErr,
    });
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    const confirmPasswordError = userData.password === confirmPassword;
    if (confirmPasswordError) {
      setError({ ...error, confirmPasswordError: null });
    } else {
      setError({ ...error, confirmPasswordError: "Passwords do not match" });
      return;
    }
  };

  const handlePasswordBlur = (e) => {
    e.preventDefault();

    const passwordError = validate.validatePassword(userData.password);

    setError({
      ...error,
      passwordError,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(userData);
      if (response.status === 200) {
        navigate(USER_LOGIN_ROUTE);
      }
    } catch (error) {
      setError({ ...error, formErr: "Please enter correct data" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">
            Register
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Name"
                    onChange={handleChange}
                    name="name"
                    value={userData.name}
                    onBlur={handleNameBlur}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-user text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.firstNameErr ? error.nameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="tel"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}
                    name="mobileNumber"
                    value={userData.contact}
                    onBlur={handleContact}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-mobile text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.contactErrErr ? error.contactErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="email"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                    name="emailId"
                    value={userData.emailId}
                    onBlur={handleEmailId}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.emailIdErr ? error.emailIdErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Address"
                    onChange={handleChange}
                    name="address"
                    value={userData.address}
                    onBlur={handleAddress}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-house text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.addressErr ? error.addressErr : <br />}
                </p>
              </div>
              {error.formErr && <p className="text-red-500">{error.formErr}</p>}
              <div className="text-center">
                <button
                type="submit"
                  className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Submit
                </button>
              </div>
            </div>
          {/* {!isNext ? (
            <div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Name"
                    onChange={handleChange}
                    name="name"
                    value={userData.name}
                    onBlur={handleNameBlur}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-user text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.firstNameErr ? error.nameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="tel"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}
                    name="mobileNumber"
                    value={userData.contact}
                    onBlur={handleContact}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-mobile text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.contactErrErr ? error.contactErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="email"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                    name="emailId"
                    value={userData.emailId}
                    onBlur={handleEmailId}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.emailIdErr ? error.emailIdErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Address"
                    onChange={handleChange}
                    name="address"
                    value={userData.address}
                    onBlur={handleAddress}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-house text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.addressErr ? error.addressErr : <br />}
                </p>
              </div>
              {error.formErr && <p className="text-red-500">{error.formErr}</p>}
              <div className="text-center">
                <button
                type="submit"
                  className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="number"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Aadhaar Number"
                    value={userData.aadhaarNumber}
                    onBlur={handleAadhaarNumber}
                    onChange={handleChange}
                    name="aadhaarNumber"
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-id-card text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.aadhaarNumberErr ? error.aadhaarNumberErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your PAN Number"
                    value={userData.panNumber}
                    onBlur={handlePanCard}
                    name="panNumber"
                    onChange={handleChange}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-address-card text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.panNumberErr ? error.panNumberErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 border-black">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter password"
                    onChange={handleChange}
                    name="password"
                    value={userData.password}
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
              <div>
                <FormControl fullWidth>
                  <InputLabel
                    id="accountType"
                    className="bg-white text-gray-500"
                  >
                    Account Type
                  </InputLabel>
                  <Select
                    labelId="accountType"
                    id="accountType"
                    value={userData.accountType}
                    name="accountType"
                    label="Account Type"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={"current"}>Current</MenuItem>
                    <MenuItem value={"savings"}>Savings</MenuItem>
                    <MenuItem value={"Loan"}>Loan</MenuItem>
                    <MenuItem value={"FD"}>FD</MenuItem>
                  </Select>
                </FormControl>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.accountTypeErr ? error.accountTypeErr : <br />}
                </p>
              </div>
              <div className="flex justify-around">
                <div className="text-center">
                  <button
                    onClick={() => setIsNext(false)}
                    className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                  >
                    Back
                  </button>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
