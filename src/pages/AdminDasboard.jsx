import React from "react";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="left-info">
          <h2 className="title">
            <span className="highlight">Admin</span> Dashboard
          </h2>
          <p className="subtitle">ADMIN PANEL</p>
        </div>
        <div className="breadcrumb">
          <span>🏠 / Dashboard</span>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="card purple">
          <h3>Total Blogs</h3>
          <div className="card-count">0</div>
        </div>
        <div className="card pink">
          <h3>Total Projects</h3>
          <div className="card-count">0</div>
        </div>
        <div className="card yellow">
          <h3>Total Products</h3>
          <div className="card-count">0</div>
        </div>
        <div className="card cyan">
          <h3>Gallery Photos</h3>
          <div className="card-count">0</div>
        </div>
      </div>

      {/* overview */}

      <div className="admin-cards-section">
        {/* Year Overview */}
        <div className="overview-box">
          <img
            src="https://play-lh.googleusercontent.com/_HCm4HuXK09JCpfD6Fw1MPXdFbqGIn21VWKrvcvqsehbWcAKwYn6ai9JV50P5bbO5d4"
            alt="Pattern"
            className="box-pattern-img"
          />
          <div className="overview-content">
            <div className="overview-header">
              <h3>Year Overview</h3>
              <div className="overview-stats">
                <strong>0 / 365</strong>
                <p className="published-text">Total Published</p>
              </div>
            </div>
            <p className="overview-subtext">Blogs Created Monthly by Year</p>
          </div>
        </div>

        {/* Blogs by Category */}
        <div className="category-box">
          <img
            src="https://play-lh.googleusercontent.com/_HCm4HuXK09JCpfD6Fw1MPXdFbqGIn21VWKrvcvqsehbWcAKwYn6ai9JV50P5bbO5d4"
            alt="Pattern"
            className="box-pattern-img"
          />
          <div className="category-content">
            <h3>Blogs By Category</h3>
            <div className="category-list">
              <div className="category-row header">
                <div className="category-column">Topics</div>
                <div className="category-column">Data</div>
              </div>
              <div className="category-row">
                <div className="category-column">Next Js</div>
                <div className="category-column">0</div>
              </div>
              <div className="category-row">
                <div className="category-column">Css</div>
                <div className="category-column">0</div>
              </div>
              <div className="category-row">
                <div className="category-column">Kotlin</div>
                <div className="category-column">0</div>
              </div>
              <div className="category-row">
                <div className="category-column">Flutter Dev</div>
                <div className="category-column">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
