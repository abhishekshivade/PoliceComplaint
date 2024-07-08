import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { registerCustomer } from "../../services/customerServices";
import { CUSTOMER_LOGIN_ROUTE } from "../../constants/AppRoutes";
import validateUser from "../library/Validator";

const CustomerRegistration = () => {
  const [isNext, setIsNext] = useState(false);

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailId: "",
    city: "",
    aadhaarNumber: "",
    panNumber: "",
    password: "",
    accountType: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    mobileNumberErr: "",
    emailIdErr: "",
    cityErr: "",
    formErr: "",
    aadhaarNumberErr: "",
    panNumberErr: "",
    passwordErr: "",
    accountTypeErr: "",
  });

  const navigate = useNavigate();
  const validate = validateUser();

  const handleChange = (e) =>
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  const handleFirstNameBlur = (e) => {
    e.preventDefault();

    const firstNameErr = validate.validateName(userData.firstName);

    setError({
      ...error,
      firstNameErr,
    });
  };

  const handleLastNameBlur = (e) => {
    e.preventDefault();

    const lastNameErr = validate.validateName(userData.lastName);

    setError({
      ...error,
      lastNameErr,
    });
  };

  const handleMobileNumber = (e) => {
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

  const handleCity = (e) => {
    e.preventDefault();

    const cityErr = validate.validateCityName(userData.city);

    setError({
      ...error,
      cityErr,
    });
  };

  const handleAadhaarNumber = (e) => {
    e.preventDefault();

    const aadhaarNumberErr = validate.validateAadhaarNumber(
      userData.aadhaarNumber
    );

    setError({
      ...error,
      aadhaarNumberErr,
    });
  };

  const handlePanCard = (e) => {
    e.preventDefault();

    const panNumberErr = validate.validatePanCardNumber(userData.panNumber);

    setError({
      ...error,
      panNumberErr,
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

  const handleNext = (event) => {
    event.preventDefault();
    if (
      !error.firstNameErr &&
      !error.lastNameErr &&
      !error.mobileNumberErr &&
      !error.emailIdErr &&
      !error.addressErr
    ) {
      setIsNext(true);
    } else {
      setError({ ...error, formErr: "Please enter correct data" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerCustomer(userData);
      if (response.status === 200) {
        navigate(CUSTOMER_LOGIN_ROUTE);
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
          {!isNext ? (
            <div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={userData.firstName}
                    onBlur={handleFirstNameBlur}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-user text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.firstNameErr ? error.firstNameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={userData.lastName}
                    onBlur={handleLastNameBlur}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-user text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.lastNameErr ? error.lastNameErr : <br />}
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
                    value={userData.mobileNumber}
                    onBlur={handleMobileNumber}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-mobile text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.mobileNumberErr ? error.mobileNumberErr : <br />}
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
                    placeholder="Enter your City"
                    onChange={handleChange}
                    name="city"
                    value={userData.city}
                    onBlur={handleCity}
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
                  onClick={handleNext}
                  className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
                >
                  Next
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
          )}
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistration;
