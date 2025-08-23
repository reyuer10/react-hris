import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";

function DropDown({ value, setValue, data }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button
        className="px-4 py-1 rounded-xl border border-gray-500"
        >{value}</button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        selectedKeys={value}
        onSelectionChange={(key) => setValue(key.anchorKey)}
        selectionMode="single"
      >
        {data?.map((d) => {
          return <DropdownItem key={d.key} title={d.data}>{d.data}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;
