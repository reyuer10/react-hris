import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BundyClock from "./BundyClock";
import { changeSchedule, clockSvg, failureToLogSvg } from "../../utils/svg";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Step 1: Localizer
const localizer = momentLocalizer(moment);

// Step 2: Example events
const initialEvents = [
  {
    id: 1,
    title: "Meeting with Team",
    start: new Date(2025, 7, 24, 10, 0), // Aug 24, 2025 at 10:00
    end: new Date(2025, 7, 24, 11, 30), // Aug 24, 2025 at 11:30
  },
  {
    id: 2,
    title: "Lunch Break",
    start: new Date(2025, 7, 24, 12, 0),
    end: new Date(2025, 7, 24, 13, 0),
  },
  {
    id: 3,
    title: "Project Review",
    start: new Date(2025, 7, 25, 9, 0),
    end: new Date(2025, 7, 25, 10, 0),
  },
];

export const fileOfficialTrainingSvg = (
  <svg
    height={24}
    width={24}
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
        d="M13 21H21"
        stroke="#323232"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M20.0651 7.39423L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L16.5517 3.86681C19.5632 1.34721 22.5747 4.87462 20.0651 7.39423Z"
        stroke="#323232"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        d="M15.3096 5.30981L18.7273 8.72755"
        stroke="#323232"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>{" "}
      <path
        opacity="0.1"
        d="M18.556 8.90942L7.09967 20.4114C6.72438 20.7882 6.21446 21 5.68265 21H4.00383C3.44943 21 3 20.5466 3 19.9922V18.2987C3 17.7696 3.20962 17.2621 3.58297 16.8873L15.0647 5.35974C15.0742 5.4062 15.0969 5.45049 15.1329 5.48653L18.5506 8.90426C18.5524 8.90601 18.5542 8.90773 18.556 8.90942Z"
        fill="#323232"
      ></path>{" "}
    </g>
  </svg>
);

function Content() {
  const navigate = useNavigate();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [events, setEvents] = useState(initialEvents);
  const [currentDate, setCurrentDate] = useState(new Date());

  const receiptData = [
    {
      id: 1,
      name: "Payslip",
      svg: (
        <svg
          height={24}
          width={24}
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
          height={24}
          width={24}
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
    {
      id: 3,
      name: "Official Training",
      svg: fileOfficialTrainingSvg,
    },
    {
      id: 4,
      name: "Rest Day Work",
      svg: clockSvg,
    },
    {
      id: 5,
      name: "Change Schedule",
      svg: changeSchedule,
    },
    {
      id: 6,
      name: "Failure To Log",
      svg: failureToLogSvg,
    },
  ];

  console.log(screenWidth);

  const handleNavigateReceipt = (navName) => {
    if (screenWidth < 640 && navName == "Payslip") {
      return navigate("employee/payslip");
    } else if (screenWidth < 640 && navName == "13 Month") {
      return navigate("employee/13month");
    } else if (screenWidth < 640 && navName == "Official Training") {
      return navigate("/employee/file/official-training");
    }

    if (screenWidth > 640 && navName == "Payslip") {
      return navigate("employee/payslip/screen");
    } else if (screenWidth > 640 && navName == "13 Month") {
      return navigate("employee/13month/screen");
    } else if (screenWidth > 640 && navName == "Official Training") {
      return navigate("employee/file-request/screen");
    }
  };

  const handleNavigate = (newDate) => {
    setCurrentDate(newDate);
  };

  return (
    <div className="flex items-start gap-4">
      <div className=" flex flex-col items-start space-y-4 w-[50%]">
        <BundyClock />
        <div className="flex items-center flex-wrap justify-center gap-3 border p-4 rounded-xl border-gray-300 bg-white">
          {receiptData.map((r) => {
            return (
              <button
                key={r.id}
                onClick={() => handleNavigateReceipt(r.name)}
                className="flex flex-col items-center cursor-pointer w-[30%] py-1 border rounded-lg border-gray-300"
              >
                <span>{r.svg}</span>
                <p>{r.name}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className=" w-[50%] h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={currentDate}
          onNavigate={handleNavigate}
          defaultDate={currentDate}
          style={{ height: "100%" }}
          popup
          showMultiDayTimes
          step={60}
          timeslots={2}
          views={["month", "day"]}
        />
      </div>
    </div>
  );
}

export default Content;
