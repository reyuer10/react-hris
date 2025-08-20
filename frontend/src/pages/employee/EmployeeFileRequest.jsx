import React from "react";
import { useNavigate } from "react-router-dom";

export const arrowLeft = (
  <svg
    height={20}
    width={20}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#323232"
        d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
      ></path>
    </g>
  </svg>
);

function EmployeeFileRequest() {
  const navigate = useNavigate();

  const scheduleData = [
    {
        id: 1,
        name: "Schedule 1",
    },
    {
        id: 2,
        name: "Schedule 1",
    },
    {
        id: 3,
        name: "Schedule 1",
    },
  ]

  return (
    <div className="p-4 space-y-4">
      <div>
        <button onClick={() => navigate("/employee/dashboard")}>
          {arrowLeft}
        </button>
      </div>
      <div>
        <span className=" font-medium">File Request</span>
      </div>
      <div>
        <span>Select Schedule:</span>
        <input type="text" />
      </div>
    </div>
  );
}

export default EmployeeFileRequest;
