import React from "react";
import SideBar from "./sidebar/SideBar";
import { Outlet, useParams } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen w-screen">
      <div>
        <SideBar />
      </div>
      <div className=" w-10/12 h-11/12 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
