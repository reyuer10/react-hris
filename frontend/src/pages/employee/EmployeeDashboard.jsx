import Header from "../../components/employee/Header";
import Content from "../../components/employee/Content";
import AttendanceCalendar from "../../components/employee/AttendanceCalendar";

function EmployeeDashboard() {
  return (
    <div className=" h-[93vh] w-full space-y-4 flex items-start text-[#323232]">
      <div className="w-full p-4 space-y-4">
        <p className="font-bold text-xl">Dashboard</p>
        <Header />
        <Content />
        <AttendanceCalendar />
      </div>
    </div>
  );
}

export default EmployeeDashboard;
