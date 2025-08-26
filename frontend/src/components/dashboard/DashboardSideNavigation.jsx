import { NavLink } from "react-router-dom";
import {
  dashboardSvg,
  fileOfficialTrainingSvg,
  logoutSvg,
  payslipSvg,
  thirteenMonthSvg,
} from "../../utils/svg";

function DashboardSideNavigation() {
  const dashboardData = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      svg: dashboardSvg,
    },
    {
      id: 2,
      name: "File Request",
      path: "employee/file-request/screen",
      svg: fileOfficialTrainingSvg,
    },
    {
      id: 3,
      name: "Payslip",
      path: "employee/payslip/screen",
      svg: payslipSvg,
    },
    {
      id: 4,
      name: "13 Month",
      path: "employee/13month/screen",
      svg: thirteenMonthSvg,
    },
    {
      id: 4,
      name: "Logout",
      path: "/",
      svg: logoutSvg,
    },
  ];

  return (
    <div className="max-sm:hidden w-[300px] shrink-0 border-r h-full border-r-gray-300 p-6">
      <div className="space-y-3">
        {dashboardData.map((d) => {
          return (
            <NavLink
              key={d.id}
              to={d.path}
              className="text-[16px] hover:text-gray-500 text-current flex items-center space-x-2"
            >
              <span>{d.svg}</span>
              <span>{d.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardSideNavigation;
