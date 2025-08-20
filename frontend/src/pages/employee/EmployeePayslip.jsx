import React, { useState } from "react";
import { arrowLeft } from "./EmployeeFileRequest";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

function EmployeePayslip() {
  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const navigate = useNavigate();
  return (
    <div className="p-4 space-y-4">
      <div>
        <button onClick={() => navigate("/dashboard")}>{arrowLeft}</button>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-[16px] font-bold">Payslip</span>
        <span>
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <button className="px-4 py-2 rounded-lg border border-gray-400 shadow shadow-gray-300">
                {selectedYear}
              </button>
              {/* <Button variant="bordered">{selectedYear}</Button> */}
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
        </span>
      </div>
      <div>
        <Table aria-label="Example table with dynamic content">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>DATE</TableColumn>
            <TableColumn>ACTION</TableColumn>
            {/* {columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))} */}
          </TableHeader>
          <TableBody>
            {/* {rows.map((row) => (
              <TableRow key={row.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(row, columnKey)}</TableCell>
                )}
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EmployeePayslip;
