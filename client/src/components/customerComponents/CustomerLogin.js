import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { customerLogin } from "../../services/customerServices";
import { CUSTOMER_DASHBOARD } from "../../constants/AppRoutes";
import { getToken, storeToken,storeUserType,storeCustomerId } from "../../services/authServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const CustomerLogin = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    CustomerID: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      navigate(CUSTOMER_DASHBOARD);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await customerLogin(loginCredentials);

      if (response.status === 200) {
        storeToken(response.data.token);
        storeUserType('customer')
        storeCustomerId(loginCredentials.CustomerID)
        storeUserType('customer')
        storeCustomerId(loginCredentials.CustomerID)
        navigate(CUSTOMER_DASHBOARD);
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center border">
      <div className="border-2 border-black text-center rounded-lg py-2 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-black font-bold text-2xl md:text-3xl mt-3">Login</h2>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="relative flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              name="CustomerID"
              value={loginCredentials.CustomerID}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-black pl-8"
              placeholder="Enter Customer ID"
            />
            <div className="absolute left-0 pl-2 flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-xl text-gray-500" />
            </div>
          </div>
          <div className="relative flex border-b-black border-b-2 mx-5 my-7 py-1">
            <input
              type={passwordVisible ? "text" : "password"}
              name="Password"
              value={loginCredentials.Password}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-black pl-8"
              placeholder="Enter Password"
            />
            <div className="absolute left-0 pl-2 flex items-center">
              <FontAwesomeIcon icon={faLock} className="text-xl text-gray-500" />
            </div>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 pr-3 flex items-center justify-center text-xl"
            >
              {passwordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="bg-black w-20 h-[35px] text-white rounded-full mb-3 hover:bg-white hover:text-black hover:border hover:border-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerLogin;
