import React, { useState } from 'react';

// --- Component Imports ---
// Import necessary child components used within this page.
import Chatbox from "../components/Chatbox";         // The text input area at the bottom.
import Navbar from "../components/Navbar";          // The navigation bar at the top (visible initially).
import ChatBubble from "../components/ChatBubble";    // Component to display individual chat messages.
import ChatLog from "../components/ChatLog";         // The sidebar showing conversation history.
import LoadingBubble from "../components/LoadingBubble"; // Loading indicator shown while waiting for AI.
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Icons for the sidebar toggle button.

// --- Chatbox Page Component ---
// This is the main component that orchestrates the chat interface.
function Chatboxpage() {
    // --- State Management (useState) ---
    // State variables hold data that can change over time and trigger UI updates.

    // Tracks if the user has submitted their first message and entered the main chat view.
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    // Stores an array of all conversation objects. Each object contains a title and its messages.
    const [conversations, setConversations] = useState([]);
    
    // Holds the currently selected conversation object from the 'conversations' array. Null if no conversation is active.
    const [currentConversation, setCurrentConversation] = useState(null);
    
    // Tracks whether the app is waiting for a simulated AI response.
    const [isLoading, setIsLoading] = useState(false);
    
    // Tracks whether the chat log sidebar is minimized or expanded.
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

    // --- Event Handlers ---
    // Functions triggered by user interactions (submitting text, selecting chats, etc.).

    // Called when the user submits a message via the Chatbox component.
    const handleSubmit = (userMessage) => {
        setIsSubmitted(true); // Ensure we are in the main chat view.
        setIsLoading(true);   // Show the loading indicator immediately.
        
        // Logic to handle the submitted message:
        if (!currentConversation) {
            // If no conversation is active, create a new one.
            const newConversation = {
                // Create a title from the first 30 chars of the message.
                title: userMessage.substring(0, 30) + (userMessage.length > 30 ? '...' : ''),
                // Start messages array with the user's message.
                messages: [
                    { text: userMessage, isUser: true }
                ]
            };
            // Add the new conversation to the list of all conversations.
            setConversations(prev => [...prev, newConversation]);
            // Set the new conversation as the currently active one.
            setCurrentConversation(newConversation);
        } else {
            // If a conversation is already active, add the message to it.
            const updatedConversation = {
                ...currentConversation, // Copy existing conversation data.
                // Add the new user message to the existing messages array.
                messages: [
                    ...currentConversation.messages,
                    { text: userMessage, isUser: true }
                ]
            };
            // Update the 'conversations' array, replacing the old version with the updated one.
            setConversations(prev => 
                prev.map(conv => 
                    conv === currentConversation ? updatedConversation : conv
                )
            );
            // Update the 'currentConversation' state with the new message included.
            setCurrentConversation(updatedConversation);
        }

        // Simulate fetching an AI response after a 2-second delay.
        setTimeout(() => {
            const aiResponse = { 
                text: "I'm analyzing your request about Counter-Strike. What specific information would you like to know?", 
                isUser: false // Mark this message as coming from the AI.
            };
            
            // Update the 'currentConversation' state by adding the AI response.
            // We use the functional form of setState (prev => ...) to ensure we have the latest state.
            setCurrentConversation(prev => {
                // Important: Check if prev is still valid, might be null if user clicked 'New Chat' quickly.
                if (!prev) return null; 
                return {
                    ...prev,
                    messages: [...prev.messages, aiResponse]
                };
            });
            
            // Also update the AI response in the main 'conversations' list for persistence.
            // Note: This update logic for conversations might be slightly delayed relative to currentConversation.
            // A more robust solution might involve updating conversations *first* or using a single state object.
            setConversations(prevConversations => 
                prevConversations.map(conv => 
                    // Need a way to uniquely identify the conversation, title might not be unique.
                    // For now, assuming title comparison works, but ID would be better.
                    conv.title === currentConversation?.title ? { // Check currentConversation still exists
                        ...conv,
                        messages: [...conv.messages, aiResponse]
                    } : conv
                )
            );
            
            setIsLoading(false); // Hide the loading indicator after the response is added.
        }, 2000); // 2000 milliseconds = 2 seconds delay.
    };

    // Called when a user clicks on a conversation title in the ChatLog sidebar.
    const handleSelectConversation = (index) => {
        // Set the selected conversation from the array as the active one.
        setCurrentConversation(conversations[index]);
        setIsLoading(false); // Stop loading indicator if switching while loading.
    };

    // Called when the user clicks the sidebar minimize/expand toggle button.
    const toggleSidebar = () => {
        // Flips the boolean state value.
        setIsSidebarMinimized(!isSidebarMinimized);
    };

    // Called when the user clicks the '+ New chat' button in the ChatLog sidebar.
    const handleNewChat = () => {
        // Stays on the chat screen (isSubmitted remains true).
        setCurrentConversation(null); // Deselects the current conversation, clearing the message area.
        setIsLoading(false);         // Hides loading indicator.
        // Optionally expand the sidebar when starting a new chat (currently commented out).
        // setIsSidebarMinimized(false); 
    };

    // --- Component Rendering (Return JSX) ---
    // Describes the structure and appearance of the page.
    return (
        // Outermost container: Sets minimum height and applies background transition.
        // Background changes based on 'isSubmitted' state (dark overlay or initial).
        <div className={`min-h-screen transition-all duration-1000 ${isSubmitted ? 'bg-black/80' : ''}`}>
            {/* Main Flex Container: Arranges sidebar and main content side-by-side. Added 'relative' for button positioning. */}
            <div className="flex relative"> 
                
                {/* Conditional Rendering: ChatLog Sidebar */}
                {/* Renders the sidebar ONLY if user has submitted AND the sidebar is NOT minimized. */}
                {isSubmitted && !isSidebarMinimized && (
                    <ChatLog 
                        conversations={conversations}           // Pass the list of conversations.
                        onSelectConversation={handleSelectConversation} // Pass the selection handler.
                        onNewChat={handleNewChat}                 // Pass the new chat handler.
                    />
                )}
                
                {/* Conditional Rendering: Sidebar Toggle Button */}
                {/* Renders the toggle button ONLY if the user has submitted. */}
                {isSubmitted && (
                     <button
                        onClick={toggleSidebar} // Attach the toggle function.
                        // Styling: Absolute positioning, colors, rounding, transition, z-index.
                        className="absolute top-2 bg-gray-900 p-2 rounded-full text-gray-400 hover:text-white transition-all duration-300 z-10"
                        // Dynamic Style: 'left' position changes based on sidebar state for smooth movement.
                        style={{ left: isSidebarMinimized ? '0.5rem' : '16rem' }} 
                    >
                        {/* Conditional Icon: Shows forward arrow if minimized, back arrow if expanded. */}
                        {isSidebarMinimized ? <IoIosArrowForward size={20} /> : <IoIosArrowBack size={20} />} 
                    </button>
                )}
                
                {/* Main Content Area: Added padding px-4 */}
                <div className={`flex flex-col items-center transition-all duration-1000 flex-1 px-4 ${isSubmitted ? 'h-screen' : ''}`}>
                    
                    {!isSubmitted && (
                        <>
                            <Navbar />
                            {/* Responsive text sizes added */}
                            <h1 className="text-center text-3xl md:text-5xl mt-16 font-bold text-white">
                                Everything Counter Strike. 
                            </h1>
                            {/* Responsive text sizes added */}
                            <h2 className="text-center text-lg md:text-xl mt-5 text-white">
                                Ask about prices, trends, and trades for Counter-Strike 2 skins
                            </h2>
                        </>
                    )}
                    
                    {/* Conditional Rendering: Chat View Content Area */}
                    {/* Renders ONLY if the user HAS submitted (isSubmitted). */}
                    {isSubmitted && (
                        // Container for chat bubbles: Sets width, padding, allows vertical scrolling, takes flexible height.
                        // 'min-h-0' helps prevent layout collapse when empty.
                        <div className="w-full max-w-4xl px-4 pt-12 overflow-y-auto flex-1 min-h-0">
                            
                            {/* Conditional Rendering: Chat Messages */}
                            {/* Maps over messages ONLY if a 'currentConversation' is selected. Uses optional chaining (?.). */}
                            {currentConversation?.messages.map((message, index) => (
                                <ChatBubble 
                                    key={index}                // Unique key for React list rendering.
                                    message={message.text}     // Text content of the message.
                                    isUser={message.isUser}    // Boolean indicating if it's a user or AI message.
                                />
                            ))}
                            
                            {/* Conditional Rendering: Loading Indicator */}
                            {/* Renders the loading bubble ONLY if 'isLoading' is true. */}
                            {isLoading && <LoadingBubble />}
                        </div>
                    )}
                    
                    {/* Chatbox Input Area Container */}
                    {/* Apply width/padding constraints and adjust justification when submitted */}
                    <div className={`flex w-full transition-all duration-1000 
                        ${isSubmitted 
                            ? 'justify-start max-w-4xl px-4 mt-auto pb-8' 
                            : 'justify-center mt-16'}
                    `}>
                        <Chatbox onSubmit={handleSubmit} isSubmitted={isSubmitted} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatboxpage;