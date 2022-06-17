import { Route, Routes, Navigate, useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import SideBar from "../layouts/sidebar/SideBar";

import HomePage from "../pages/Homepage";
import LogPage from "../pages/LogPage";
import ReportPage from "../pages/ReportPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { createContext, useContext } from "react";
import { LogContext } from "../contexts/LogContext";

export default function Router() {
 const {weekId} = useContext(LogContext)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="logs/:weekId" element={<LogPage />} />
          
        <Route path="reports" element={<ReportPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
}
