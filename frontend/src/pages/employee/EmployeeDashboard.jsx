
import Header from "../../components/employee/Header";
import Content from "../../components/employee/Content";
import Receipt from "../../components/employee/Receipt";

function EmployeeDashboard() {

  return (
    <div className=" h-[93vh] w-full space-y-4 flex items-start">
      <div className="w-full p-4 space-y-4">
        <Header />
        <Content />
        <Receipt />
      </div>
    </div>
  );
}

export default EmployeeDashboard;
