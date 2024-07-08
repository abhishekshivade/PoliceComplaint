import React, { useEffect, useState } from "react";
import Logo from "../assets/RuPay.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Authentication from "./subComponents/Authentication";
import { ABOUT_ROUTE, ADMIN_LOGIN_ROUTE, ADMIN_SIGNUP_ROUTE, BASE_ROUTE, CONTACT_ROUTE, CUSTOMER_LOGIN_ROUTE, CUSTOMER_SIGNUP_ROUTE } from "../constants/AppRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import {getToken, removeCustomerId, removeToken, removeUserType} from '../services/authServices'

const Navbar = () => {
  const [userType, setUserType] = useState("Customer");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e) =>{ 
    setIsLoggedIn(false);
    navigate(BASE_ROUTE)
    removeToken()
    removeUserType();
    removeCustomerId();
  }

  useEffect(() => {

    if(getToken()){
      setIsLoggedIn(true)
    }

    switch (userType) {
      case "Customer":
        if (location.pathname === `${ADMIN_LOGIN_ROUTE}`) {
          navigate(`${CUSTOMER_LOGIN_ROUTE}`);
        }
        if (location.pathname === `${ADMIN_SIGNUP_ROUTE}`) {
          navigate(`${CUSTOMER_SIGNUP_ROUTE}`);
        }
        break;
      case "Employee":
        if (location.pathname === `${CUSTOMER_LOGIN_ROUTE}`) {
          navigate(`${ADMIN_LOGIN_ROUTE}`);
        }
        if (location.pathname === `${CUSTOMER_SIGNUP_ROUTE}`) {
          navigate(`${ADMIN_SIGNUP_ROUTE}`);
        }
        break;
      default:
        return;
    }
  }, [userType, location.pathname, navigate]);

  return (
    <div className="flex flex-wrap justify-between items-center px-5 sm:px-10 bg-blue-500">
      <a href={BASE_ROUTE} className="flex-shrink-0">
        <img src={Logo} alt="RuPay logo" className="h-16 sm:h-24" />
      </a>

      <div className="space-x-5 sm:space-x-10 flex flex-wrap justify-center">
        <a href={BASE_ROUTE} className="text-white text-sm sm:text-xl font-semibold hover:underline">
          Home
        </a>
        <a href={ABOUT_ROUTE} className="text-white text-sm sm:text-xl font-semibold hover:underline">
          About Us
        </a>
        <a href={CONTACT_ROUTE} className="text-white text-sm sm:text-xl font-semibold hover:underline">
          Contact Us
        </a>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="text-white text-sm sm:text-lg px-4 py-2 rounded bg-red-600 hover:bg-red-700">
          Logout
        </button>
      ) : (
        <div className="flex flex-wrap gap-5 sm:gap-10 items-center">
          <Authentication role={userType} />
          <div className="w-full sm:w-auto">
            <FormControl fullWidth>
              <InputLabel id="user-type-select-label">Account Type</InputLabel>
              <Select
                labelId="user-type-select-label"
                id="user-type-select"
                value={userType}
                name="accountType"
                label="Account Type"
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      )}
    </div>
  );
};


export default Navbar;

