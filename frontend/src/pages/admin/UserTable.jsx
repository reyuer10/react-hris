import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/react";

function UserTable() {
  const columns = [
    {
      key: "empNo",
      label: "Employee No",
    },
    {
      key: "empName",
      label: "Name",
    },
    {
      key: "department",
      label: "Department",
    },
    {
      key: "position",
      label: "Position",
    },
  ];
  return (
    <div className="space-y-4 text-[#323232]">
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
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
  );
}

export default UserTable;

// const rows = [...];

// const columns = [...];
