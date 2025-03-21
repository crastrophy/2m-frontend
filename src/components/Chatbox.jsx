import React, { useState } from "react";

const Chatbox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex justify-center w-[800px] h-[150px] rounded-2xl mt-15 ml-78 bg-[#D3D8DC] flex flex-col p-4">
      {/* Scrollable Input Container */}
      <div className="flex-1 overflow-y-auto max-h-[100px]">
        <textarea
          placeholder="How can I help assist your schedule?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full min-h-[200px] relative -top-1 border-none outline-none text-gray-700 placeholder-gray-500 bg-[#D3D8DC] rounded-lg p-2 resize-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 justify-end relative -bottom-[8px]">
        {/* Mic Button */}
        <button className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb]">
          <span className="text-gray-700">🎙️</span> {/* Mic Icon */}
        </button>

        {/* Settings Button */}
        <button className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb]">
          <span className="text-gray-700">⚙️</span> {/* Settings Icon */}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
