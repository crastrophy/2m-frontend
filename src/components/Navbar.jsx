import React from 'react';
import picture from '../assets/2m.png';
import steamIcon from '../assets/steam_light.png';

const Navbar = () => {
  // Define the function outside of the return statement
  function handleSignIn() {
    alert("yo");
  }

  return (
    <div className="flex justify-between p-4">
      {/* Logo on the left */}
      <img src={picture} alt="2m" className="w-14" />

      {/* Sign in button with Steam icon on right */}
      <button 
        onClick={handleSignIn}
        className="bg-black px-6 h-10 text-white rounded-lg flex items-center justify-center gap-3 whitespace-nowrap"
      >
        Sign in
        <img 
          src={steamIcon} 
          alt="Steam icon"
          className="w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Navbar;
