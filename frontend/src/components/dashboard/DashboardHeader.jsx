import React, { useState } from "react";
import logo from "../../assets/image/logo/onsemi.png";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";

export const arrowDownSvg = (
  <svg
    height={22}
    width={22}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
        fill="#394c53"
      ></path>{" "}
    </g>
  </svg>
);

function DashboardHeader() {
  const [isDropdown, setIsDropdown] = useState(false);
  const handleDropdown = () => setIsDropdown(!isDropdown);
  const headerData = [
    {
      id: 1,
      name: "Reyuer D. Flores",
      position: "Web Developer",
      gmail: "reyuer10@gmail.com",
      address: "zone 2, San jose, City of San Fernando, Pampnaga",
    },
  ];

  return (
    <div className="flex items-center p-2 px-4 justify-between text-right border-b border-b-gray-300 shadow shadow-gray-300 w-full">
      <div className="w-[50%]">
        <img className="w-[70%] sm:w-[20%]" src={logo} alt="onsemi.png" />
      </div>
      <div className="p-2 w-[50%] flex items-center justify-end">
        <div>
          {headerData.map((data) => {
            return (
              <div key={data.id} className="flex flex-col">
                <span className="text-[16px] font-bold">{data.name}</span>
              </div>
            );
          })}
        </div>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <button>{arrowDownSvg}</button>
            </DropdownTrigger>
            <DropdownMenu className="bg-white w-[200px]p-2 rounded-xl">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
