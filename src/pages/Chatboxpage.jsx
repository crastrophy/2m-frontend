import React from 'react';
import Chatbox from "../components/Chatbox"
import Navbar from "../components/Navbar"

function Chatboxpage() {
    return (
        <div>
            <Navbar/>
            <h1>Everything Counter Strike.</h1>
            <h2>Ask about prices, trends, and trades for Counter-Strike 2 skins</h2>
            <Chatbox/>
        </div>
    )
}

export default Chatboxpage;