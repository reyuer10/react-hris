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

function ScreenEmployee13Month() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xl font-medium">13 Month</span>
        </div>
        <div></div>
      </div>
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Year</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
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

export default ScreenEmployee13Month;
