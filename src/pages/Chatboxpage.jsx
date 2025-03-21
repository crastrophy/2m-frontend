import React from 'react';
import Chatbox from "../components/Chatbox"
import Navbar from "../components/Navbar"

function Chatboxpage() {
    return (
        <div>
            <Navbar />
            <h1 className="flex justify-center items-center text-5xl mt-25 font-bold text-white">
                Everything Counter Strike. 
            </h1>
            <h2 className="flex justify-center items-center text-1xl mt-5 text-white">Ask about prices, trends, and trades for Counter-Strike 2 skins</h2>
            <Chatbox />
        </div>
    )
}

export default Chatboxpage;
