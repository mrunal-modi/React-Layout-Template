import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

export default function Navbar({ sidebarOpen, setsidebarOpen }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0 hidden-sm"></ul>
      </div>
    </nav>
  );
}
