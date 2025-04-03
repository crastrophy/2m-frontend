import React from 'react';

const ChatLog = ({ conversations, onSelectConversation, onNewChat }) => {
  return (
    <div className={`w-64 h-screen bg-gray-800 text-white flex flex-col p-4 transition-all duration-300`}>
      {/* Content is now always rendered (when ChatLog itself is rendered) */}
      <>
        {/* New Chat Button */}
        <button
          onClick={onNewChat}
          className="w-full border border-gray-600 rounded-md p-3 mb-4 hover:bg-gray-800 transition-colors whitespace-nowrap"
        >
          + New chat
        </button>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {conversations.map((conversation, index) => (
            <button
              key={index}
              onClick={() => onSelectConversation(index)}
              className="w-full text-left p-3 rounded-md hover:bg-gray-800 transition-colors mb-2 truncate"
            >
              {conversation.title || `Chat ${index + 1}`}
            </button>
          ))}
        </div>

        {/* User Section */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer whitespace-nowrap">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
            <span className="text-sm">User</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default ChatLog; 