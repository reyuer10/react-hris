import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardSideNavigation from "../components/dashboard/DashboardSideNavigation";
import { useNavigate } from "react-router-dom";
import { today, getLocalTimeZone } from "@internationalized/date";

import { Calendar } from "@heroui/react";
import { fileOfficialTrainingSvg } from "../utils/svg";

function DashboardLayout() {
  return (
    <div className="h-full text-[#323232]">
      <div className="h-[7%]">
        <DashboardHeader />
      </div>
      <div className="flex items-start h-[93vh]">
        <DashboardSideNavigation />
        <div className="w-full">
          <Outlet />
        </div>
        <div className="w-[310px] max-xl:hidden p-4 shrink-0 border-l border-l-gray-300 h-full">
          <div className="h-[40%] flex items-start justify-center">
            <Calendar value={today(getLocalTimeZone())} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
