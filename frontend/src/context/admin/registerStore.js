import { create } from "zustand";
import axios from "axios";

const env = import.meta.env;

const API_ENDPOINTS = {
  baseURL: env.VITE_BASE_URL,
  registerEmployee: env.VITE_REGISTER_EMPLOYEE,
};

const apiServices = {
  apiRegisterEmployee: async (payload) => {
    const response = await axios.post(
      `${API_ENDPOINTS.baseURL}/${API_ENDPOINTS.registerEmployee}`,
      payload
    );

    return response;
  },
};

const loginInfo = {
  userName: "",
  passWord: "",
};

const initialRegisterValue = {
  empSSS: "",
  empPhilhealth: "",
  empTin: "",
  empPagibig: "",
};

const initialEmployeeInfoValue = {
  empId: "",
  surName: "",
  firstName: "",
  middleInitial: "",
  dailyRate: 0,
  position: "",
};

// const initialPayYearToDateFigures = {
//   grossIncome: 0,
//   taxableIncome: 0,
//   withHoldingTax: 0,
//   sssEE: 0,
//   phicEE: 0,
//   hdmfEE: 0,
//   netPay: 0,
// };

const registerStore = (set, get) => ({
  loginData: { ...loginInfo },
  governmentData: { ...initialRegisterValue },
  employeeData: { ...initialEmployeeInfoValue },

  onChangeRegister: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      loginData: { ...state.loginData, [name]: value },
      governmentData: { ...state.governmentData, [name]: value },
      employeeData: { ...state.employeeData, [name]: value },
      YearToDateFiguresValueData: {
        ...state.YearToDateFiguresValueData,
        [name]: value,
      },
    }));
  },

  resetToDefault: () =>
    set(() => ({
      loginData: { ...loginInfo },
      governmentData: { ...initialRegisterValue },
      employeeData: { ...initialEmployeeInfoValue },
      // YearToDateFiguresValueData: { ...initialYearToDateFiguresValueData }, // if applicable
    })),

  registerEmployee: async (dateHired, onSuccess) => {
    const { userName, passWord } = get().loginData;

    const { empSSS, empPhilhealth, empTin, empPagibig } = get().governmentData;

    const { empId, surName, firstName, middleInitial, dailyRate, position } =
      get().employeeData;

    const fullName = `${String(firstName).trim()} ${String(
      middleInitial
    ).trim()} ${String(surName).trim()}`;

    try {
      console.log({
        userName,
        passWord,
        empSSS,
        empPhilhealth,
        empTin,
        empPagibig,
        empId,
        fullName,
        dailyRate,
        dateHired,
        position,
      });

      const payload = {
        emp_name: fullName,
        emp_username: userName,
        emp_password: passWord,
        emp_position: position,
        emp_sss: empSSS,
        emp_pagibig: empPagibig,
        emp_philHealth: empPhilhealth,
        emp_tin: empTin,
        emp_dateHired: dateHired,
        emp_dailyRate: dailyRate,
      };

      const response = await apiServices.apiRegisterEmployee(payload);

      if (response.status == 200) {
        get().resetToDefault();
        return onSuccess();
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
});

const useRegisterStore = create(registerStore);

export const useLoginData = () => useRegisterStore((state) => state.loginData);
export const useGovernmentData = () =>
  useRegisterStore((state) => state.governmentData);
export const useEmployeeData = () =>
  useRegisterStore((state) => state.employeeData);

export default useRegisterStore;
