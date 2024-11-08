"use client"
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 rounded-lg shadow-md w-[30%] flex flex-col justify-center items-center">
        <h2 className="text-gray-100 text-4xl font-semibold">CureNet</h2>

        <div className="flex flex-col w-[60%]">
          <button
            className="bg-green-500 hover:bg-green-600 duration-200 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => router.push("/patient-login")}
          >
            Patient
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 duration-200 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => router.push("/")}
          >
            Doctor
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 duration-200 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => router.push("/")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
