import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Receipt() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const receiptData = [
    {
      id: 1,
      name: "Payslip",
      svg: (
        <svg
          height={28}
          width={28}
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
            {" "}
            <path
              opacity="0.1"
              d="M12 17H7C5.89543 17 5 16.1046 5 15V5C5 3.89543 5.89543 3 7 3H16C17.1046 3 18 3.89543 18 5V19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17Z"
              fill="#323232"
            ></path>{" "}
            <path
              d="M19 3H9V3C7.11438 3 6.17157 3 5.58579 3.58579C5 4.17157 5 5.11438 5 7V10.5V17"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M14 17V19C14 20.1046 14.8954 21 16 21V21C17.1046 21 18 20.1046 18 19V9V4.5C18 3.67157 18.6716 3 19.5 3V3C20.3284 3 21 3.67157 21 4.5V4.5C21 5.32843 20.3284 6 19.5 6H18.5"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M16 21H5C3.89543 21 3 20.1046 3 19V19C3 17.8954 3.89543 17 5 17H14"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M9 7H14"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M9 11H14"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      name: "13 Month",
      svg: (
        <svg
          height={28}
          width={28}
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
            {" "}
            <path
              opacity="0.1"
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              fill="#323232"
            ></path>{" "}
            <path
              d="M14.5 9C14.5 9 13.7609 8 11.9999 8C8.49998 8 8.49998 12 11.9999 12C15.4999 12 15.5 16 12 16C10.5 16 9.5 15 9.5 15"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M12 7V17"
              stroke="#323232"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#323232"
              stroke-width="2"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ];

  console.log(screenWidth);

  const handleNavigateReceipt = (navName) => {
    if (screenWidth < 640 && navName == "Payslip") {
      return navigate("employee/payslip");
    } else if (screenWidth < 640 && navName == "13 Month") {
      return navigate("employee/13month");
    }

    if (screenWidth > 640 && navName == "Payslip") {
      return navigate("employee/payslip/screen");
    } else if (screenWidth > 640 && navName == "13 Month") {
      return navigate("employee/13month/screen");
    }

  };

  return (
    <div className="h-[200px] border border-gray-300 p-4 rounded-2xl">
      <div className="space-x-4 flex">
        {receiptData.map((r) => {
          return (
            <button
              key={r.id}
              onClick={() =>
               handleNavigateReceipt(r.name)
              }
              className="flex flex-col items-center cursor-pointer"
            >
              <span>{r.svg}</span>
              <p>{r.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Receipt;
