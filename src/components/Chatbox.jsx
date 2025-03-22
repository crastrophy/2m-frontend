import React, { useState, useCallback } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const IconButton = ({ icon, label, onClick }) => (
  <button 
    className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb]"
    aria-label={label}
    onClick={onClick}
  >
    <span className="text-gray-700">{icon}</span>
  </button>
);

const Chatbox = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault(); // Prevent page refresh
    console.log('Submitted:', inputValue);
    // Add your submission logic here
  }, [inputValue]);

  return (
    <div className="flex justify-center mt-10">
      <form className="w-[800px] h-[200px] rounded-2xl bg-[#D3D8DC] flex flex-col p-4">
        {/* Scrollable Input Container */}
        <div className="flex-1 overflow-y-auto">
          <textarea
            placeholder="Ask anything about Counter-Strike..."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-[140px] border-none outline-none text-gray-700 placeholder-gray-500 bg-[#D3D8DC] rounded-lg p-2 resize-none"
            aria-label="Chat input"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8 mr-2">
          {/* IoLink Button - All the way to the left */}
          <div className="flex items-center">
            <button 
              className="p-3 rounded-full bg-gray-300 hover:bg-[#c8cbcb]"
              type="button"
            >
              <IoLink className="text-gray-700 w-5 h-5" />
            </button>
          </div>

          {/* Submit Button - Stays on the right */}
          <button 
            className="p-3 rounded-full bg-gray-300 hover:bg-[#c8cbcb]"
            type="submit"
          >
            <FaArrowAltCircleUp className="text-gray-700 w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(Chatbox);
