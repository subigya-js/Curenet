"use client";

import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
    concerns: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment logic here
    console.log("Appointment attempt with:", formData);

    // Reset the form data
    setFormData({
      appointmentDate: "",
      appointmentTime: "",
      symptoms: "",
      concerns: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-green-600 font-semibold">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Appointment Date"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Appointment Time
            </label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Appointment Time"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div>
            <label
              htmlFor="symptoms"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Symptoms
            </label>
            <textarea
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800 min-h-[80px] max-h-[100px]"
              placeholder="Enter Symptoms"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div>
            <label
              htmlFor="concerns"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Concerns
            </label>
            <textarea
              id="concerns"
              name="concerns"
              value={formData.concerns}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800 min-h-[80px] max-h-[100px]"
              placeholder="Enter Concerns"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="mt-5 px-4 py-2 bg-green-600 hover:bg-green-700 duration-200 rounded-md"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
