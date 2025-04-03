import { useState } from 'react';
import { IoLink } from "react-icons/io5";
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Chatbox = ({ onSubmit, isSubmitted }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        onSubmit(inputValue.trim());
        setInputValue("");
      }
    }
  };

  const iconSize = isSubmitted ? 20 : 24;
  const buttonPadding = isSubmitted ? 'p-1.5' : 'p-2';
  const textAreaPadding = isSubmitted ? 'pt-1.5 px-1.5' : 'p-2';
  const placeholderText = isSubmitted ? "Ask follow-up..." : "Ask anything about Counter-Strike 2...";

  return (
    <div className={`flex justify-center rounded-2xl bg-[#D3D8DC] flex-col transition-all duration-1000 ${isSubmitted ? 'w-full h-[72px] p-2.5' : 'w-full max-w-3xl h-[150px] p-4'}`}>
      <div className={`${isSubmitted ? 'h-[34px]' : 'flex-1 max-h-[100px]'}`}>
        <textarea
          placeholder={placeholderText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className={`w-full h-full border-none outline-none text-gray-700 placeholder-gray-500 bg-[#D3D8DC] rounded-lg resize-none leading-tight ${textAreaPadding} ${isSubmitted ? 'text-sm' : ''}`}
          rows={1}
        />
      </div>

      <div className="flex gap-2 justify-between items-center mt-auto mb-0.5">
        <button className={`${buttonPadding} rounded-full bg-gray-300 hover:bg-[#c8cbcb]`}>
          <IoLink className="text-gray-700" size={iconSize} />
        </button>

        <button 
          className={`${buttonPadding} rounded-full bg-gray-300 hover:bg-[#c8cbcb]`}
          onClick={() => {
            if (inputValue.trim()) {
              onSubmit(inputValue.trim());
              setInputValue("");
            }
          }}
        >
          <FaArrowAltCircleUp className="text-gray-700" size={iconSize} />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
