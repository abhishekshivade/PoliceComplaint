import React, { useEffect, useState } from "react";
import { TransactionTable } from "./TransactionTable";
import { getCustomerId, getToken } from "../../services/authServices";
import {
  getPersonalDetails,
  getAllAccounts,
  getTransactionDetails,
  getAccountDetails,
} from "../../services/customerServices";
import { useNavigate } from "react-router-dom";
import { BASE_ROUTE } from "../../constants/AppRoutes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomerDashboard = () => {
  const [personalDetails, setPersonalDetails] = useState([]);
  const [accountList, setAccountList] = useState([]);
  const [accountDetails, setAccountDetails] = useState([]);
  const [accountNumber, setAccountNumber] = useState();

  const customerId = getCustomerId();

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const personalData = await getPersonalDetails(customerId);
        setPersonalDetails(personalData);

        const accounts = await getAllAccounts(customerId);
        setAccountList(accounts);

        if (accounts.length > 0) {
          const firstAccountNumber = accounts[0].account_no;
          setAccountNumber(firstAccountNumber);

          const accountData = await getAccountDetails(firstAccountNumber);
          setAccountDetails(accountData);
        }
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };

    fetchCustomerData();
  }, [customerId]);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      if (accountNumber) {
        try {
          const accountData = await getAccountDetails(accountNumber);
          setAccountDetails(accountData);
        } catch (error) {
          // console.error("Error fetching account details:", error);
        }
      }
    };

    fetchAccountDetails();
  }, [accountNumber]);

  useEffect(() => {}, [accountDetails]);

  const handleAccountChage = (e) => setAccountNumber(e.target.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) navigate(BASE_ROUTE);
  });

  return (
    <div className="w-screen text-center">
      <div className="flex items-center pt-5 px-5">
        <h1 className="text-2xl font-bold w-10/12">Customer Dashboard</h1>

        <div className="w-1/12">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Account Number
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={accountList.length > 0 ? accountNumber : "Account Number"}
              name="accountNumber"
              label="Account Number"
              onChange={handleAccountChage}
              required
            >
              {accountList.map((accountNo) => {
                return (
                  <MenuItem value={accountNo.account_no}>
                    {accountNo.account_no}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-start h-auto lg:h-72 mt-10 gap-2">
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md mb-5 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="text-left space-y-2">
            {personalDetails.length > 0 ? (
              <>
                <div>
                  <strong>Customer ID : </strong>{" "}
                  {personalDetails[0].CustomerID}
                </div>
                <div>
                  <strong>First Name : </strong>
                  {personalDetails[0].CustomerName}
                </div>
                <div>
                  <strong>Mobile Number : </strong>
                  {personalDetails[0].MobileNo}
                </div>
                <div>
                  <strong>Email ID : </strong> {personalDetails[0].EmailID}
                </div>
                <div>
                  <strong>Address : </strong> {personalDetails[0].Address}
                </div>
                <div>
                  <strong>Aadhaar Number : </strong>{" "}
                  {personalDetails[0].AadharNo}
                </div>
                <div>
                  <strong>PAN Number : </strong> {personalDetails[0].PanNo}
                </div>
              </>
            ) : (
              <p>Missing Personal Details</p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-5/12 p-5 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>
          <div className="text-left space-y-2">
            {accountDetails.length > 0 ? (
              <>
                <div>
                  <strong>Account Number : </strong>{" "}
                  {accountDetails[0].account_no}
                </div>
                <div>
                  <strong>Branch Code : </strong>
                  {accountDetails[0].branch_code}
                </div>
                <div>
                  <strong>Balance : </strong> {accountDetails[0].balance}
                </div>
                <div>
                  <strong>Account Type : </strong>
                  {accountDetails[0].account_type}
                </div>
              </>
            ) : (
              <p>No Account details found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
