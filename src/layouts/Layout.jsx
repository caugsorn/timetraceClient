import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="w-full h-screen">
        <Outlet />
      </div>
    </div>
  );
}
