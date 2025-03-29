import { useState, useCallback } from 'react';
import { IoLink } from "react-icons/io5";;
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Chatbox = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex justify-center w-[800px] h-[150px] rounded-2xl mt-15 ml-78 bg-[#D3D8DC] flex flex-col p-4">
      {/* Scrollable Input Container */}
      <div className="flex-1 overflow-y-auto max-h-[100px]">
        <textarea
          placeholder="Ask anything about counter-strike..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full min-h-[200px] relative -top-1 border-none outline-none text-gray-700 placeholder-gray-500 bg-[#D3D8DC] rounded-lg p-2 resize-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 justify-end relative -bottom-[8px]">
        {/* link button*/}
        <button className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb] relative -left-170
        ">
          <IoLink className="text-gray-700" size={24} /> {/* Mic Icon */}
        </button>

        {/* enter button */}
        <button className="p-2 rounded-full bg-gray-300 hover:bg-[#c8cbcb]">
          <FaArrowAltCircleUp className="text-gray-700" size={24}  /> {/* Settings Icon */}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
