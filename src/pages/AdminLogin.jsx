import React from 'react'   

const AdminLogin = () => {
  return (
    <div>
      <h2 className="admin-form-title">Admin Login</h2>
      <form className="admin-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
