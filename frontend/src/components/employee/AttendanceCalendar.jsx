import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import DropDown from "../../../heroUI/DropDown";

function AttendanceCalendar() {
  const [cutOffValue, setCutOffValue] = useState("First Cut Off");

  const [currentDate, setCurrentDate] = useState(
    new Date().getFullYear().toString()
  );

  let currMonth = new Date().getMonth() + 1;
  let stringMonth = currMonth.toString();

  const [currentMonth, setCurrentMonth] = useState(stringMonth);

  const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthString = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleGetDateInfo = (yr, month, day) => {
    const dateData = new Date(yr, month - 1, day);

    return {
      date: `${monthString[dateData.getMonth()]}-${dateData
        .getDate()
        .toString()
        .padStart(2, "0")}`,
      day: dayString[dateData.getDay()],
    };
  };

  const convertCutOff = (type, val) => {
    if (type == "First Cut Off") {
      return {
        start: 1,
        end: 15,
      };
    } else if (type == "Second Cut Off") {
      return {
        start: 16,
        end: val,
      };
    }
  };

  const handleGetFullDayOfTheMonth = (yr, month, cutOffType) => {
    const newArr = [];
    const lastDayOfTheMonth = new Date(yr, month, 0).getDate();
    // const cutOff15 = 15;
    const cutOff = convertCutOff(cutOffType, lastDayOfTheMonth);

    for (let i = cutOff.start; i <= cutOff.end; i++) {
      const dateInfo = handleGetDateInfo(yr, month, i);
      newArr.push({
        date: dateInfo.date,
        day: dateInfo.day,
        status: null,
        time_in: null,
        time_out: null,
        sched_in: null,
        sched_out: null,
        bh: 0,
        lt: 0,
        ut: 0,
        nd: 0,
      });
    }

    return newArr;
  };

  // Example usage:
  // console.log(handleGetFullDayOfTheMonth(2025, 7)); // August 2025

  console.log(currentDate);

  const dateArr = [
    {
      key: "2025",
      data: 2025,
    },
    {
      key: "2026",
      data: 2026,
    },
    {
      key: "2027",
      data: 2027,
    },
    {
      key: "2028",
      data: 2028,
    },
    {
      key: "2029",
      data: 2029,
    },
    {
      key: "2030",
      data: 2030,
    },
  ];

  const monthArr = [
    {
      key: "1",
      data: 1,
    },
    {
      key: "2",
      data: 2,
    },
    {
      key: "3",
      data: 3,
    },
    {
      key: "4",
      data: 4,
    },
    {
      key: "5",
      data: 5,
    },
    {
      key: "6",
      data: 6,
    },
    {
      key: "7",
      data: 7,
    },
    {
      key: "8",
      data: 8,
    },
    {
      key: "9",
      data: 9,
    },
    {
      key: "10",
      data: 10,
    },
    {
      key: "11",
      data: 11,
    },
    {
      key: "12",
      data: 12,
    },
  ];

  const cutOffArr = [
    {
      key: "First Cut Off",
      data: "First Cut Off (1 to 15)",
    },
    {
      key: "Second Cut Off",
      data: "Second Cut Off (16 to 31)",
    },
  ];

  return (
    <div className=" border border-gray-300 p-4 rounded-2xl bg-white">
      <div className="space-x-4 flex flex-col">
        <div className="flex max-sm:flex-col items-center max-sm:items-start max-sm:space-y-2 justify-between">
          <div>
            <p>Time Calendar</p>
          </div>
          <div className="space-x-2">
            <DropDown
              value={cutOffValue}
              setValue={setCutOffValue}
              data={cutOffArr}
            />
            <DropDown
              value={currentDate}
              setValue={setCurrentDate}
              data={dateArr}
            />
            <DropDown
              value={currentMonth}
              setValue={setCurrentMonth}
              data={monthArr}
            />
          </div>
        </div>
        <div>
          <table className="w-full">
            <thead className="text-left">
              <tr className="">
                <th className="py-2">DATE</th>
                <th className="py-2">DAY</th>
                <th className="py-2">STATUS</th>
                <th className="py-2">TIME IN</th>
                <th className="py-2">TIME OUT</th>
                <th className="py-2 max-sm:hidden">SCHED IN</th>
                <th className="py-2 max-sm:hidden">SCHED OUT</th>
                <th className="py-2 max-sm:hidden">BH</th>
                <th className="py-2 max-sm:hidden">LT</th>
                <th className="py-2 max-sm:hidden">UT</th>
                <th className="py-2 max-sm:hidden">ND</th>
              </tr>
            </thead>
            <tbody>
              {handleGetFullDayOfTheMonth(
                currentDate,
                currentMonth,
                cutOffValue
              ).map((d, index) => {
                return (
                  <tr key={index}>
                    <td>{d.date}</td>
                    <td>{d.day}</td>
                    <td>{d.status == null ? "-" : d.status}</td>
                    <td>{d.time_in == null ? "-" : d.time_in}</td>
                    <td>{d.time_out == null ? "-" : d.time_out}</td>
                    <td className="max-sm:hidden">{d.sched_in == null ? "-" : d.sched_in}</td>
                    <td className="max-sm:hidden">{d.sched_out == null ? "-" : d.sched_out}</td>
                    <td className="max-sm:hidden">{d.bh == null ? "-" : d.bh}</td>
                    <td className="max-sm:hidden">{d.lt == null ? "-" : d.lt}</td>
                    <td className="max-sm:hidden">{d.ut == null ? "-" : d.ut}</td>
                    <td className="max-sm:hidden">{d.nd == null ? "-" : d.nd}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCalendar;
