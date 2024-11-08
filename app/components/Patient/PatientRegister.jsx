"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    patientEmail: "",
    patientFullName: "",
    patientGender: "",
    patientAge: "",
    patientPassword: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Patient Registration attempt with:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-green-600 font-semibold">
          Patient Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="patientEmail"
              name="patientEmail"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Enter Email"
              value={formData.patientEmail}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="patientFullName"
              name="patientFullName"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Enter Full Name"
              value={formData.patientFullName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Create Password
            </label>
            <input
              type="password"
              id="patientPassword"
              name="patientPassword"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Enter Password"
              value={formData.patientPassword}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="mb-4 text-gray-700">
            <label className="block text-sm font-medium mb-1">Gender</label>
            <div className="flex flex-wrap">
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="radio"
                  className="form-radio"
                  name="patientGender"
                  value="male"
                  checked={formData.patientGender === "male"}
                  onChange={handleChange}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center mr-4 mb-2">
                <input
                  type="radio"
                  className="form-radio"
                  name="patientGender"
                  value="female"
                  checked={formData.patientGender === "female"}
                  onChange={handleChange}
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center mb-2">
                <input
                  type="radio"
                  className="form-radio"
                  name="patientGender"
                  value="other"
                  checked={formData.patientGender === "other"}
                  onChange={handleChange}
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <select
              id="patientAge"
              name="patientAge"
              className="w-[40%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              value={formData.patientAge}
              onChange={handleChange}
              required
            >
              <option value="">Select Age</option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-[48%] bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-sm"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => router.push("/patient/login")}
              className="w-[48%] text-gray-800 py-2 px-4 rounded-md hover:underline focus:outline-none text-xs"
            >
              Already Have an Account?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientRegister;
