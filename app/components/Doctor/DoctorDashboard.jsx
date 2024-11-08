"use client";

import { useState } from "react";

const DoctorDashboard = () => {
  // Simulated API data
  const initialScheduleData = [
    {
      id: 1,
      patientName: "Sahana Shetty",
      email: "sahant@gmail.com",
      date: "2024-10-18",
      time: "10:45",
      type: "Virtual",
    },
    {
      id: 2,
      patientName: "Subigya Subedi",
      email: "subedi@gmail.com",
      date: "2024-10-14",
      time: "09:00",
      type: "Virtual",
    },
    {
      id: 3,
      patientName: "Divyanshu Sharma",
      email: "divyanshu@gmail.com",
      date: "2024-10-15",
      time: "14:30",
      type: "In-person",
    },
    {
      id: 4,
      patientName: "Atharv Gangodkar",
      email: "atharv@gmail.com",
      date: "2024-10-16",
      time: "11:15",
      type: "Virtual",
    },
    {
      id: 5,
      patientName: "Shufiyan",
      email: "shufiyan@gmail.com",
      date: "2024-10-17",
      time: "16:00",
      type: "In-person",
    },
  ];

  const [scheduleData, setScheduleData] = useState(initialScheduleData.map(schedule => ({...schedule, status: false})));

  // Sort scheduleData based on date and time
  const sortedScheduleData = [...scheduleData].sort((a, b) => {
    const dateA = new Date(a.date + "T" + a.time);
    const dateB = new Date(b.date + "T" + b.time);
    return dateA - dateB;
  });

  const toggleStatus = (id) => {
    setScheduleData(prevData =>
      prevData.map(schedule =>
        schedule.id === id ? { ...schedule, status: !schedule.status } : schedule
      )
    );
  };

  return (
    <div className="mx-auto px-6 py-8 bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl ">Dr. Munna Bhai</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Current Schedules</h2>

      <div className="flex justify-between flex-col min-h-[75vh]">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-gray-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Schedule ID</th>
                <th className="py-2 px-4 text-left">Patient Name</th>
                <th className="py-2 px-4 text-left">Patient Email</th>
                <th className="py-2 px-4 text-left">Scheduled Date</th>
                <th className="py-2 px-4 text-left">Scheduled Time</th>
                <th className="py-2 px-4 text-left">Appointment Type</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {sortedScheduleData.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {schedule.id}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {schedule.patientName}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {schedule.email}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {schedule.date}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {schedule.time}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    {schedule.type}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-600">
                    <button
                      onClick={() => toggleStatus(schedule.id)}
                      className={`py-1 px-2 rounded hover:underline ${
                        schedule.status
                          ? "text-green-500 hover:text-green-600"
                          : "text-red-500 hover:text-red-600"
                      } text-white font-bold`}
                    >
                      {schedule.status ? "Completed" : "Incomplete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Open Chatbot
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Schedule Appointment
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Schedule Virtual Appointment
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Open Laboratory
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
