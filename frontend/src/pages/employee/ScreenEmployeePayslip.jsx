import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
} from "@heroui/react";
import { useState } from "react";

function ScreenEmployeePayslip() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  console.log(selectedYear?.currentKey);

  // const selectedYearue = React.useMemo(
  //   () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
  //   [selectedKeys],
  // );
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-medium">Payslip</span>
        </div>
        <div>
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <Button variant="bordered">{selectedYear}</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              selectedKeys={selectedYear}
              selectionMode="single"
              onSelectionChange={setSelectedYear}
            >
              <DropdownItem key="2025">2025</DropdownItem>
              <DropdownItem key="2026">2026</DropdownItem>
              <DropdownItem key="2027">2027</DropdownItem>
              <DropdownItem key="2028">2028</DropdownItem>
              <DropdownItem key="2029">2029</DropdownItem>
              <DropdownItem key="2020">2030</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>From</TableColumn>
          <TableColumn>To</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>{[1]}</TableBody>
      </Table>
      {/* 
          <TableBody>
        {rows.map((row) =>
          <TableRow key={row.key}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
       */}
    </div>
  );
}

export default ScreenEmployeePayslip;
