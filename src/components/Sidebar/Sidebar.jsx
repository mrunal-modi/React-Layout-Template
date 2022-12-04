import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ sidebarOpen, setsidebarOpen }) => {
  return (
    <div
      onMouseEnter={() => {
        setsidebarOpen(true);
      }}
      onMouseLeave={() => {
        setsidebarOpen(false);
      }}
      className={`sidebar sidebar-nav sidebar-custom ${
        sidebarOpen ? "sidebar-open" : "sidebar-close"
      }`}
    >
      <NavLink to="/TestForm" className="nav-link">
        <i className="bi bi-list-task" />
        <span>TestForm</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
