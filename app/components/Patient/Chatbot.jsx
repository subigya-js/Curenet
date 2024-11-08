"use client";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LuSend } from "react-icons/lu";

const Chatbot = () => {
  const [inputText, setInputText] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setPrompt("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Submitted:", inputText);
    setPrompt(inputText);
    setInputText("");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-between px-4 py-8 min-h-screen bg-gray-900">
      <div className="w-[90%] md:w-[80%] mx-auto flex-grow flex flex-col justify-between">
        <div className="border border-gray-400 w-full h-[60vh] p-3 rounded-md mb-4 overflow-y-auto bg-gray-800 text-white">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <AiOutlineLoading3Quarters className="animate-spin text-4xl text-green-500" />
            </div>
          ) : prompt ? (
            prompt
          ) : (
            "Give prompt below to get response..."
          )}
        </div>
        <form onSubmit={handleSubmit} className="w-full relative">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="w-full border border-gray-400 p-3 pr-12 rounded-md outline-none text-gray-800"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-700 hover:rotate-45 duration-200 outline-none"
            disabled={isLoading}
          >
            <LuSend size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
