import React from 'react'

const UserDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">User Details</h2>
          <div className="text-left space-y-2">
            <p>Contact: </p>
            <p>Email ID: </p>
          </div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Complaint Details</h2>
          <div className="text-left space-y-2">
            <p>Complaint ID:</p>
            <p>Name:</p>
            <p>Email:</p>
            <p>City:</p>
            <p>Branch:</p>
            <p>Complaint Type:</p>
            <p>Description:</p>
            <p>Status:</p>
          </div>
        </div>
      </div>
  )
}

export default UserDetails