import React from 'react'

const AdminSignup = () => {
  return (
    <div>
      <h2 className="admin-form-title">Admin Signup</h2>
      <form className="admin-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default AdminSignup
