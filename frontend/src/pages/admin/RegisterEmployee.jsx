import { useState } from "react";
import useRegisterStore, {
  useEmployeeData,
  useGovernmentData,
  useLoginData,
} from "../../context/admin/registerStore";
import {
  DatePicker,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import ReusableModal from "../../reusable/ReusableModal";

function RegisterEmployee() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  // const registerValue = useRegisterStore((state) => state.registerValue);
  // const employeeInfo = useRegisterStore((state) => state.employeeInfo);
  const onChangeRegister = useRegisterStore((state) => state.onChangeRegister);

  const [dateHiredVal, setDateHiredVal] = useState(null);

  const employeeData = useEmployeeData();
  const loginData = useLoginData();
  const governmentData = useGovernmentData();
  console.log(employeeData);

  const { userName, passWord } = loginData;

  const {
    empId,
    surName,
    firstName,
    middleInitial,
    dailyRate,
    dateHired,
    position,
  } = employeeData;

  const { empSSS, empPhilhealth, empTin, empPagibig } = governmentData;

  console.log(dateHiredVal);
  return (
    <div className="space-y-8">
      <div className="space-y-4 pb-4 border-b-[0.5px] border-b-gray-400">
        <div>
          <span className="text-lg font-bold">Employee Information</span>
        </div>
        <div>
          <div>
            <span className="italic text-gray-400 text-sm">
              Employee Name:{" "}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="surName" className=" block ">
                Last Name
              </label>
              <input
                type="text"
                className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
                name="surName"
                value={surName}
                onChange={onChangeRegister}
              />
            </div>
            <div>
              <label htmlFor="firstName" className=" block ">
                First Name
              </label>
              <input
                type="text"
                className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
                name="firstName"
                value={firstName}
                onChange={onChangeRegister}
              />
            </div>
            <div>
              <label htmlFor="middleInitial" className=" block ">
                Middle Initial
              </label>
              <input
                type="text"
                className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
                name="middleInitial"
                value={middleInitial}
                onChange={onChangeRegister}
              />
            </div>
          </div>
        </div>

        {/* Work Details */}
        <div>
          <div>
            <span className=" italic text-gray-400 text-sm">Work Details:</span>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="position" className=" block ">
                Position
              </label>
              <input
                type="text"
                className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
                name="position"
                value={position}
                onChange={onChangeRegister}
              />
            </div>
            <div>
              <label htmlFor="dateHired" className=" block ">
                Date Hired
              </label>
              <DatePicker
                className="w-[250px]"
                value={dateHiredVal}
                aria-label="Select a date"
                onChange={(key) => setDateHiredVal(key)}
              />
            </div>
            <div>
              <label htmlFor="empId" className=" block ">
                Employee Id
              </label>
              <input
                type="text"
                className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
                name="empId"
                value={empId}
                onChange={onChangeRegister}
              />
            </div>
          </div>
        </div>
        {/* Salary Details */}
        <div>
          <div>
            <span className=" italic text-gray-400 text-sm">
              Salary Details:
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="dailyRate" className=" block ">
                Daily Rate
              </label>
              <input
                type="text"
                className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
                name="dailyRate"
                value={dailyRate}
                onChange={onChangeRegister}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 border-b-[0.5px] border-b-gray-400 pb-4">
        <div>
          <span className="text-lg font-bold">Login Information</span>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <label htmlFor="userName" className=" block ">
              Username
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="userName"
              value={userName}
              onChange={onChangeRegister}
            />
          </div>
          <div>
            <label htmlFor="passWord" className=" block ">
              Password
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="passWord"
              value={passWord}
              onChange={onChangeRegister}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-lg font-bold">
            Government Information
            <span> (ex. SSS, Pagibig)</span>
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="empSSS" className=" block ">
              Social Security System(SSS)
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="empSSS"
              value={empSSS}
              onChange={onChangeRegister}
            />
          </div>
          <div>
            <label htmlFor="empPhilhealth" className=" block ">
              Philhealth
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="empPhilhealth"
              value={empPhilhealth}
              onChange={onChangeRegister}
            />
          </div>
          <div>
            <label htmlFor="empPagibig" className=" block ">
              Pag-IBIG
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="empPagibig"
              value={empPagibig}
              onChange={onChangeRegister}
            />
          </div>
          <div>
            <label htmlFor="empTin" className=" block ">
              TIN
            </label>
            <input
              type="text"
              className="w-[250px] p-2 rounded-lg bg-gray-100 outline-none"
              name="empTin"
              value={empTin}
              onChange={onChangeRegister}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={onOpen}
          className="px-4 py-2 rounded-lg font-medium bg-[#323232] text-white"
        >
          Register
        </button>
      </div>
      <ReusableModal
        title="Confirmation"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        body={
          <>
            <div className="flex flex-col justify-center items-center">
              <p>Are you sure you want to register this employee?</p>
              <p className="text-[12px] text-gray-400 italic">
                note: please double check the details of the employee.
              </p>
            </div>
          </>
        }
        footerCloseTitle="Cancel"
        footerSubmitTite="Yes"
        classNameOnclose="bg-gray-100 py-2 rounded-lg w-[80px] cursor-pointer"
        classNameSubmit="bg-[#323232] text-white px-4 py-2 rounded-lg w-[80px] cursor-pointer"
        onclickSubmit={onClose}
      />
    </div>
  );
}

export default RegisterEmployee;
