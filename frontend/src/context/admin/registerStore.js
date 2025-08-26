import { create } from "zustand";

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
  dateHired: null,
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
});

const useRegisterStore = create(registerStore);

export const useLoginData = () => useRegisterStore((state) => state.loginData);
export const useGovernmentData = () =>
  useRegisterStore((state) => state.governmentData);
export const useEmployeeData = () =>
  useRegisterStore((state) => state.employeeData);

export default useRegisterStore;
