"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminEmail: "",
    adminPassword: "",
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
    // Handle login logic here
    console.log("Admin Login attempt with:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-green-600 font-semibold">
          Admin Login
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
              id="adminEmail"
              name="adminEmail"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Enter Email"
              value={formData.adminEmail}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="adminPassword"
              name="adminPassword"
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
              placeholder="Enter Password"
              value={formData.adminPassword}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
            <button
              type="submit"
              className="w-[30%] bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-lg"
            >
              Log In
            </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
