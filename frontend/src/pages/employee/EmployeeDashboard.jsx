import Header from "../../components/employee/Header";
import Content from "../../components/employee/Content";
import AttendanceCalendar from "../../components/employee/AttendanceCalendar";

import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  PDFViewer,
  BlobProvider,
} from "@react-pdf/renderer";
import PayslipPages from "../payslip/PayslipPages";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ViewButton = () => (
  <BlobProvider document={<PayslipPages />}>
    {({ url, loading }) =>
      loading ? (
        "Loading PDF..."
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer">
          View PDF
        </a>
      )
    }
  </BlobProvider>
);

function EmployeeDashboard() {
  return (
    <div className=" h-[93vh] overflow-y-scroll w-full space-y-4 flex items-start text-[#323232]">
      <div className="w-full p-4 space-y-4">
        <div className=" flex flex-col">
          <ViewButton />
        </div>
        <p className="font-bold text-xl">Dashboard</p>
        <Header />
        <Content />
        <AttendanceCalendar />
      </div>
    </div>
  );
}

export default EmployeeDashboard;
