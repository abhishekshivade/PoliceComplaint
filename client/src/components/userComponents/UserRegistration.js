import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/userServices";
import { USER_LOGIN_ROUTE } from "../../constants/AppRoutes";
import validateUser from "../library/Validator";

const UserRegistration = () => {

  const [userData, setUserData] = useState({
    email: "",
    contact: "",
    password: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState({
    emailErr: "",
    contactErr: "",
    passwordErr: "",
    confirmPasswordErr:"",
    formErr: "",
  });

  const navigate = useNavigate();
  const validate = validateUser();

  const handleChange = (e) =>{
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))};

  const handleContact = (e) => {
    e.preventDefault();

    const contactErr = validate.validateMobileNumber(
      userData.contact
    );

    setError({
      ...error,
      contactErr,
    });
  };

  const handleEmailId = (e) => {
    e.preventDefault();

    const emailErr = validate.validateEmail(userData.email);

    setError({
      ...error,
      emailErr,
    });
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();

    const confirmPasswordErr = userData.password === confirmPassword;
    if (confirmPasswordErr) {
      setError({ ...error, confirmPasswordErr: null });
    } else {
      setError({ ...error, confirmPasswordErr: "Passwords do not match" });
      return;
    }
  };

  const handlePasswordBlur = (e) => {
    e.preventDefault();

    const passwordErr = validate.validatePassword(userData.password);

    setError({
      ...error,
      passwordErr,
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
                <div className="flex border-b-black border-b-2 my-2 py-1">
                  <input
                    type="email"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                    name="email"
                    value={userData.email}
                    onBlur={handleEmailId}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.emailErr ? error.emailErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 my-2 py-1">
                  <input
                    type="tel"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}
                    name="contact"
                    value={userData.contact}
                    onBlur={handleContact}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-mobile text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-96">
                  {error.contactErr ? error.contactErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 my-2 border-black">
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
                <p className="text-red-500 text-start text-sm w-96">
                  {error.passwordErr ? error.passwordErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 my-2 border-black">
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
                <p className="text-red-500 text-start text-sm w-96">
                  {error.confirmPasswordErr ? error.confirmPasswordErr : <br />}
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
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
