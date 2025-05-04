import React from 'react'
import AdminLogin from './AdminLogin'
import AdminSignup from './AdminSignup'


const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1 className="admin-title">Welcome to Admin Panel</h1>
      <div className="admin-forms">
        <div className="form-card">
          <AdminLogin />
        </div>
        <div className="form-card">
          <AdminSignup />
        </div>
      </div>
    </div>
  )
}

export default AdminPage
