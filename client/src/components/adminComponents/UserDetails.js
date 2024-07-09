import React from 'react'

const UserDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>
          <div className="text-left space-y-2">
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Mobile Number: </p>
            <p>Email ID: </p>
            <p>Address: </p>
            <p>Aadhaar Number: </p>
            <p>PAN Number: </p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
          <div className="text-left space-y-2">
            <p>Account Number:</p>
            <p>Branch Code:</p>
            <p>Balance:</p>
            <p>Account Type:</p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Transaction Details</h2>
          <div className="text-left space-y-2">
            <p>Transaction ID: </p>
            <p>Date: </p>
            <p>Amount:</p>
            <p>Status: </p>
          </div>
        </div>
      </div>
  )
}

export default UserDetails