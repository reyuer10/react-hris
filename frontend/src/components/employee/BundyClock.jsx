import React, { useEffect, useState } from "react";

function BundyClock() {
  const [newDate, setNewDate] = useState(null);
  const handleNewDate = () => {
    const curDate = new Date();
    const hr = curDate.getHours();
    const min = curDate.getMinutes();
    const sec = curDate.getSeconds();

    const padStringHr = String(hr).padStart(2, "0");
    const padStringMin = String(min).padStart(2, "0");
    const padStringSec = String(sec).padStart(2, "0");

    return `${padStringHr}:${padStringMin}:${padStringSec}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNewDate(handleNewDate());
    }, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <div className=" border h-[200px] p-4 rounded-xl border-gray-300 bg-white">
      <div className="flex flex-col h-[35%]">
        <span className="font-medium">BUNDY CLOCK</span>
        <span className=" italic text-[12px] text-gray-400">
          Unavailable: Kindly allow the location access in order to log using
          the system. Please refer to Privacy Policy or contact Administrator
        </span>
      </div>
      <div className="flex items-center justify-center h-[45%] font-bold text-6xl">
        <span>{newDate == null ? handleNewDate() : newDate}</span>
      </div>
      <div className="h-[20%] flex items-center justify-center space-x-2 w-full">
        <button className="cursor-pointer border hover:bg-gray-50 active:bg-gray-100 h-full w-[20%]">
          TIME IN
        </button>
        <button className="cursor-pointer border hover:bg-gray-50 active:bg-gray-100 h-full w-[20%]">
          TIME OUT
        </button>
      </div>
    </div>
  );
}

export default BundyClock;
