import React, { useState } from "react";
import usePaySlipStore, {
  useEmployeeData,
  useFunctionActions,
  usePaySlipValue,
} from "../../context/admin/payslipStore";
import { DateRangePicker, useDisclosure } from "@heroui/react";
import ReusableModal from "../../reusable/ReusableModal";

function CreatePayslip() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { isOpen, onOpenChange, onClose, onOpen } = useDisclosure();

  const payslipValue = usePaySlipValue();
  const employeeInfoValue = useEmployeeData();

  const onChangePayslipValue = usePaySlipStore(
    (state) => state.onChangePayslipValue
  );

  const { submitCreatedPlaySlip } = useFunctionActions();

  const {
    basicPaySalaryAmount,
    specialHolidayAmount,
    netNightDifferentialAmount,
    AttendanceAllowanceAmount,
    postAllowanceAmount,
    grossPayAmount,
    sssAmount,
    hdmfAmount,
    philHealthAmount,
    deductionsAmount,
    netPayAmount,

    grossIncome,
    taxableIncome,
    withHoldingTax,
    sssEE,
    phicEE,
    hdmfEE,
    netPay,
  } = payslipValue;

  const { employeeName } = employeeInfoValue;

  console.log(employeeName);

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xl font-bold">Create Payslip</p>
      </div>
      <div className="py-4 space-y-1 border-b-[0.5px] border-gray-400 flex flex-col items-start">
        <label className=" block" htmlFor="employeeName">
          Employee Name
          <span className=" italic text-gray-400">(Ex. Juan Dela Cruz)</span>
        </label>
        <input
          type="text"
          className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
          name="employeeName"
          value={employeeName}
          onChange={onChangePayslipValue}
        />
        <span className=" text-gray-400 italic">
          note: please double check the name, to fetch the data information of
          the employee
        </span>
      </div>
      <div className="py-4 border-b-[0.5px] border-gray-400">
        <label htmlFor="payPeriod" className=" block ">
          Pay Period
        </label>
        <DateRangePicker
          aria-label="Select duration"
          name="payPeriod"
          value={
            startDate && endDate
              ? { start: startDate, end: endDate }
              : { start: null, end: null }
          }
          onChange={(range) => {
            setStartDate(range.start);
            setEndDate(range.end);
          }}
          className="max-w-xs"
          label=""
        />
      </div>
      <div className="pb-4 border-b-[0.5px] border-gray-400 space-y-4">
        <div>
          <label htmlFor="basicPaySalaryAmount" className=" block ">
            Basic Pay Salary
          </label>
          <input
            type="text"
            className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
            name="basicPaySalaryAmount"
            value={basicPaySalaryAmount}
            onChange={onChangePayslipValue}
          />
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="specialHolidayAmount" className=" block ">
              Special Holiday Amount
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="specialHolidayAmount"
              value={specialHolidayAmount}
              onChange={onChangePayslipValue}
            />
          </div>
          <div>
            <label htmlFor="basicPaySalaryAmount" className=" block ">
              Net Night Differential Amount
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="netNightDifferentialAmount"
              value={netNightDifferentialAmount}
              onChange={onChangePayslipValue}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="basicPaySalaryAmount" className=" block ">
              Attendance Allowance Amount
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="AttendanceAllowanceAmount"
              value={AttendanceAllowanceAmount}
              onChange={onChangePayslipValue}
            />
          </div>
          <div>
            <label htmlFor="basicPaySalaryAmount" className=" block ">
              Post Allowance Amount
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="postAllowanceAmount"
              value={postAllowanceAmount}
              onChange={onChangePayslipValue}
            />
          </div>
        </div>
        <div>
          <label htmlFor="basicPaySalaryAmount" className=" block font-bold">
            Gross Pay
          </label>
          <input
            type="text"
            className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
            name="grossPayAmount"
            value={grossPayAmount}
            onChange={onChangePayslipValue}
          />
        </div>
      </div>
      <div className="flex flex-col items-start space-y-2 border-b-[0.5px] border-b-gray-400 py-4">
        <div>
          <span className="font-bold">Contributions</span>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="basicPaySalaryAmount" className=" block ">
              SSS
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="sssAmount"
              value={sssAmount}
              onChange={onChangePayslipValue}
            />
          </div>
          <div>
            <label htmlFor="basicPaySalaryAmount" className=" block ">
              HDMF
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="hdmfAmount"
              value={hdmfAmount}
              onChange={onChangePayslipValue}
            />
          </div>
          <div>
            <label htmlFor="basicPaySalaryAmount" className=" block ">
              Philhealth
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="philHealthAmount"
              value={philHealthAmount}
              onChange={onChangePayslipValue}
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="basicPaySalaryAmount" className=" block font-medium">
          Taxable Income
        </label>
        <input
          type="text"
          className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
          name="taxableIncome"
          value={taxableIncome}
          onChange={onChangePayslipValue}
        />
      </div>
      <div>
        <label htmlFor="basicPaySalaryAmount" className=" block ">
          Deductions Amount
        </label>
        <input
          type="text"
          className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
          name="deductionsAmount"
          value={deductionsAmount}
          onChange={onChangePayslipValue}
        />
      </div>
      <div>
        <label htmlFor="basicPaySalaryAmount" className=" block font-bold">
          Net Pay Amount
        </label>
        <input
          type="text"
          className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
          name="netPayAmount"
          value={netPayAmount}
          onChange={onChangePayslipValue}
        />
      </div>
      {/* Modal & Button Submit */}
      <div className="space-x-2">
        <button
          onClick={onOpen}
          className="px-4 py-2 cursor-pointer rounded-lg font-medium bg-[#323232] text-white"
        >
          Create
        </button>
        <button className="px-4 py-2 cursor-pointer rounded-lg font-medium bg-gray-100 text-[#323232] border border-[#323232]">
          Preview
        </button>
        <ReusableModal
          title="Confirmation"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          body={
            <>
              <div className="flex flex-col justify-center items-center">
                <p>Are you sure you want to create the payslip?</p>
                <p className="text-[12px] text-gray-400 italic">
                  note: please double check the details of the payslip.
                </p>
              </div>
            </>
          }
          footerCloseTitle="Cancel"
          footerSubmitTite="Yes"
          classNameOnclose="bg-gray-100 py-2 font-medium rounded-lg w-[80px] cursor-pointer"
          classNameSubmit="bg-[#323232] text-white font-medium px-4 py-2 rounded-lg w-[80px] cursor-pointer"
          onclickSubmit={() => {
            onClose();
            submitCreatedPlaySlip();
          }}
        />
      </div>
    </div>
  );
}

export default CreatePayslip;
