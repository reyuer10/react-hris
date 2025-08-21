import { useNavigate} from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()
  return (
    <div className="h-screen w-full flex justify-center items-center p-4">
      <div className="flex flex-col w-[400px] max-md:w-full space-y-4">
        <div className="py-4 text-center leading-3">
          <p className=" text-lg font-medium">Human Resources</p>
          <span className=" italic text-gray-500">Information System</span>
        </div>
        <div>
          <input
            className="max-md:text-[16px] max-md:py-4 bg-gray-100 transition-all focus-within:ring-2 ring-gray-400 outline-none border-none p-3 rounded-xl w-full"
            type="text"
            placeholder="Username"
          />
        </div>
        <div> 
          <input
            className="max-md:text-[16px] max-md:py-4 bg-gray-100 transition-all focus-within:ring-2 ring-gray-400 outline-none border-none p-3 rounded-xl w-full"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="my-4">
          <button
          onClick={() => navigate("dashboard")}
          className="max-md:text-[16px] max-md:py-4 transition-all active:bg-blue-600 cursor-pointer bg-blue-500 font-medium text-white p-3 rounded-xl w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
