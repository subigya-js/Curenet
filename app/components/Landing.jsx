"use client"
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-4 sm:p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
        <h2 className="text-gray-100 text-3xl sm:text-4xl font-semibold text-center mb-6">CureNet</h2>
 
        <div className="flex flex-col w-full sm:w-3/4 mx-auto">
          <button
            className="bg-green-500 hover:bg-green-600 duration-200 text-white px-4 py-2 rounded-md mt-4 text-lg"
            onClick={() => router.push("/patient/login")}
          >
            Patient
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 duration-200 text-white px-4 py-2 rounded-md mt-4 text-lg"
            onClick={() => router.push("/doctor/login")}
          >
            Doctor
          </button>

          <button
            className="bg-green-500 hover:bg-green-600 duration-200 text-white px-4 py-2 rounded-md mt-4 text-lg"
            onClick={() => router.push("/admin/login")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
