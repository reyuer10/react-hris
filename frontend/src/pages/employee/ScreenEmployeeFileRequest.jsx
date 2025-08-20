import { DatePicker, Textarea } from "@heroui/react";
import { useState } from "react";

function ScreenEmployeeFileRequest() {
  //   const [dateVal, setDateVal] = useState(new Date());
  return (
    <div className="p-4 text-[#323232] space-y-4">
      <div>
        <p className="font-medium text-xl">File Request</p>
      </div>
      <div className="space-y-4">
        <label htmlFor="date">Select Date:</label>
        <div>
          {/* <Calendar value={today(getLocalTimeZone())} /> */}
          {/* <Datepicker className="max-w-[284px]"  /> */}
          <DatePicker className="max-w-[284px]" />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <Textarea
            className="max-w-xs"
            label="Description"
            placeholder="Enter your description"
          />
        </div>
        <div>
            <button className="cursor-pointer hover:bg-blue-600 transition bg-blue-500 rounded-xl text-white px-4 py-2">
                Submit
            </button>
        </div>
      </div>
    </div>
  );
}

export default ScreenEmployeeFileRequest;
