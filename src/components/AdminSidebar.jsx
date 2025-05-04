import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Menu</h3>
        <button className="close-btn" onClick={toggleSidebar}><FaTimes /></button>
      </div>

      <ul className="sidebar-menu">
        <li><span className="icon">🏠</span> Dashboard</li>

        <li><span className="icon">📄</span> Blogs</li>
        <ul className="submenu">
          <li className="sub-item">All Blogs</li>
          <li className="sub-item">Draft Blogs</li>
          <li className="sub-item">Add Blog</li>
        </ul>

        <li><span className="icon">💼</span> Projects</li>
        <li><span className="icon">🛒</span> Shops</li>
        <li><span className="icon">🖼️</span> Gallery</li>
        <li><span className="icon">🪪</span> Contacts</li>
        <li><span className="icon">⚙️</span> Settings</li>
      </ul>

      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
