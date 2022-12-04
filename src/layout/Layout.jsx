import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import Home from "../routes/Home/Home";
import TestForm from "../components/TestForm/TestForm";

export default function Layout() {
  const [sidebarOpen, setsidebarOpen] = useState(false); // State passed as props
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
      <main className={`main ${sidebarOpen ? "sidebar-open" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TestForm" element={<TestForm />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Routes>
      </main>
      <Outlet />
      <Footer />
    </>
  );
}
