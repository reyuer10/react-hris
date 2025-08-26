import { create } from "zustand";

const initialLoginValue = {
  username: "",
  password: "",
};

const loginStore = (set, get) => ({
  loginData: { ...initialLoginValue },
  onChangeLogin: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      loginData: { ...state.loginData, [name]: value },
    }));
  },

  funcActions: {
    submitLogin: async (navigate) => {
      const { username, password } = get().loginData;
      try {
        console.log({
          username,
          password,
        });
        return navigate("dashboard");
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});

const useLoginStore = create(loginStore);
export const useLoginValue = () => useLoginStore((state) => state.loginData);
export const useFuncLoginActions = () =>
  useLoginStore((state) => state.funcActions);

export default useLoginStore;
