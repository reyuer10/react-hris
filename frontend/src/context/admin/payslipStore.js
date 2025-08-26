import { create } from "zustand";

const payslipData = {
  // Under the main content of the payslip
  payPeriod: 0,
  basicPaySalaryAmount: 0,
  specialHolidayAmount: 0,
  netNightDifferentialAmount: 0,
  AttendanceAllowanceAmount: 0,
  postAllowanceAmount: 0,
  grossPayAmount: 0,
  sssAmount: 0,
  hdmfAmount: 0,
  philHealthAmount: 0,
  deductionsAmount: 0,
  netPayAmount: 0,

  //   under Year to date figures:
  grossIncome: 0,
  taxableIncome: 0,
  withHoldingTax: 0,
  sssEE: 0,
  phicEE: 0,
  hdmfEE: 0,
  netPay: 0,
};

const empInfo = {
  employeeName: "",
};

const payslipStore = (set, get) => ({
  payslipValue: { ...payslipData },
  employeeInfo: { ...empInfo },
  onChangePayslipValue: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      payslipValue: { ...state.payslipValue, [name]: value },
      employeeInfo: { ...state.employeeInfo, [name]: value },
    }));
  },

  functionsActions: {
    submitCreatedPlaySlip: () => {
      const { employeeName } = get().employeeInfo;

      const {
        payPeriod,
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
      } = get().payslipValue;

      console.log({
        payPeriod,
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
      });
    },
  },
});

const usePaySlipStore = create(payslipStore);
export const usePaySlipValue = () =>
  usePaySlipStore((state) => state.payslipValue);

export const useEmployeeData = () =>
  usePaySlipStore((state) => state.employeeInfo);

export const useFunctionActions = () =>
  usePaySlipStore((state) => state.functionsActions);

export default usePaySlipStore;
