import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function AdminDashboardLayout() {
  const location = useLocation();

  const sideNavData = [
    { id: 1, name: "User Records", subpath: "", path: "/admin/dashboard" },
    {
      id: 2,
      name: "Register Employee",
      subpath: "/admin/dashboard/",
      path: "/admin/dashboard/register/employee",
    },
    {
      id: 3,
      name: "Create Payslip",
      subpath: "/admin/dashboard/",
      path: "/admin/dashboard/create/payslip",
    },
    {
      id: 4,
      name: "Logout",
      subpath: "",
      path: "",
    },
  ];

  console.log(location.pathname);
  return (
    <div className="h-screen flex items-start text-[#323232]">
      <div className="border-r border-r-gray-300 h-full shrink-0 w-[300px] flex flex-col p-8  space-y-3">
        {sideNavData.map((data) => {
          return (
            <NavLink
              className={`text-[16px] outline-none ${
                location.pathname == `${data.path}` ? "font-bold" : ""
              }`}
              key={data.id}
              to={data.path}
            >
              {data.name}
            </NavLink>
          );
        })}
      </div>
      <div className=" p-4 w-full h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
