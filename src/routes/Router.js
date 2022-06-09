import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import SideBar from "../layouts/sidebar/SideBar";

import HomePage from "../pages/Homepage";
import LogPage from "../pages/LogPage";
import ReportPage from "../pages/ReportPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="logs" element={<LogPage />} />
        <Route path="reports" element={<ReportPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
}
