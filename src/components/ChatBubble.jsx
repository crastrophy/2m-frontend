import React from 'react';

const ChatBubble = ({ message, isUser }) => {
  // Conditionally determine the classes for background and text color
  const bubbleStyle = isUser 
    ? 'bg-gray-700 text-white rounded-3xl' // User style: gray background, white text, rounded
    : 'text-gray-200';                   // AI style: light gray text, no background, no explicit rounding needed without bg

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {/* Apply base padding/width and the conditional style */}
      <div className={`max-w-[60%] p-3 ${bubbleStyle}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatBubble; 