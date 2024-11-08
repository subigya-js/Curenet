"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PatientDashboard = () => {
  const router = useRouter();

  // Simulated patient data
  const patientData = {
    name: "John Doe",
    doctorAppointed: "Dr. Munna Bhai, MBBS",
    appointmentDate: "2024-10-20",
    appointmentTime: "14:30",
    appointmentType: "Virtual",
    status: "Scheduled",
  };

  const [data, setData] = useState(patientData);

  return (
    <div className="mx-auto px-6 py-8 bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl">Patient Dashboard</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Patient Details</h2>

      <div className="flex justify-between flex-col min-h-[75vh]">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-gray-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Doctor Appointed</th>
                <th className="py-2 px-4 text-left">Appointment Date</th>
                <th className="py-2 px-4 text-left">Appointment Time</th>
                <th className="py-2 px-4 text-left">Appointment Type</th>
                <th className="py-2 px-4 text-left">Appointment Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr>
                <td className="py-2 px-4">{data.name}</td>
                <td className="py-2 px-4">{data.doctorAppointed}</td>
                <td className="py-2 px-4">{data.appointmentDate}</td>
                <td className="py-2 px-4">{data.appointmentTime}</td>
                <td className="py-2 px-4">{data.appointmentType}</td>
                <td className="py-2 px-4">{data.status}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 gap-4 flex flex-col sm:flex-row justify-center   ">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/patient/chatbot")}
          >
            Open Chatbot
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/patient/appointment")}
          >
            Schedule Appointment
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Open Laboratory
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
