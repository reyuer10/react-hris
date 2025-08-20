import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeFileOfficialTraining from "./pages/employee/EmployeeFileRequest";
import DashboardLayout from "./layout/DashboardLayout";
import EmployeePayslip from "./pages/employee/EmployeePayslip";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import Employee13Month from "./pages/employee/Employee13Month";
import ScreenEmployeePayslip from "./pages/employee/ScreenEmployeePayslip";
import ScreenEmployee13Month from "./pages/employee/ScreenEmployee13Month";
import ScreenEmployeeFileRequest from "./pages/employee/ScreenEmployeeFileRequest";
import AdminDashboardLayout from "./layout/AdminDashboardLayout";
import LoginPage from "./pages/Login/LoginPage";
function App() {
  return (
    <div className="inter-regular text-sm">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="admin/dashboard" element={<AdminDashboardLayout />} >
        
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route
            path="employee/file/official-training"
            element={<EmployeeFileOfficialTraining />}
          />
          <Route path="employee/payslip" element={<EmployeePayslip />} />
          <Route path="employee/13month" element={<Employee13Month />} />

          <Route
            path="employee/payslip/screen"
            element={<ScreenEmployeePayslip />}
          />
          <Route
            path="employee/13month/screen"
            element={<ScreenEmployee13Month />}
          />
          <Route
            path="employee/file-request/screen"
            element={<ScreenEmployeeFileRequest />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
