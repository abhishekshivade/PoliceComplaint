import React, { useEffect, useState } from "react";
import Logo from "../assets/RuPay.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Authentication from "./subComponents/Authentication";
import { ABOUT_ROUTE, ADMIN_LOGIN_ROUTE, ADMIN_SIGNUP_ROUTE, BASE_ROUTE, CONTACT_ROUTE, CUSTOMER_LOGIN_ROUTE, CUSTOMER_SIGNUP_ROUTE } from "../constants/AppRoutes";
import { getToken, removeCustomerId, removeToken, removeUserType } from '../services/authServices';
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userType, setUserType] = useState("Customer");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate(BASE_ROUTE);
    removeToken();
    removeUserType();
    removeCustomerId();
  };

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-wrap justify-between items-center px-5 sm:px-10 bg-blue-500">
      <a href={BASE_ROUTE} className="flex-shrink-0">
        <img src={Logo} alt="RuPay logo" className="h-16 sm:h-24" />
      </a>

      <div className="sm:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="hidden sm:flex space-x-5 sm:space-x-10 justify-center">
        <a href={BASE_ROUTE} className="text-white text-sm sm:text-xl font-semibold hover:underline">
          Home
        </a>
        <a href={ABOUT_ROUTE} className="text-white text-sm sm:text-xl font-semibold hover:underline">
          About Us
        </a>
        <a href={CONTACT_ROUTE} className="text-white text-sm sm:text-xl font-semibold hover:underline">
          Contact Us
        </a>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="text-white text-sm sm:text-lg px-4 py-2 rounded bg-red-600 hover:bg-red-700">
            Logout
          </button>
        ) : (
          <Authentication role={userType} />
        )}
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

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-blue-500">
          <div className="flex flex-col items-center py-5">
            <a href={BASE_ROUTE} className="text-white text-sm font-semibold mb-3 hover:underline">
              Home
            </a>
            <a href={ABOUT_ROUTE} className="text-white text-sm font-semibold mb-3 hover:underline">
              About Us
            </a>
            <a href={CONTACT_ROUTE} className="text-white text-sm font-semibold mb-3 hover:underline">
              Contact Us
            </a>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-white text-sm font-semibold mb-3 hover:underline">
                Logout
              </button>
            ) : (
              <Authentication role={userType} />
            )}
            <div className="w-full sm:w-auto">
              <FormControl fullWidth>
                <InputLabel id="user-type-select-label-mobile">Account Type</InputLabel>
                <Select
                  labelId="user-type-select-label-mobile"
                  id="user-type-select-mobile"
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
