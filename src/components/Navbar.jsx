import React from 'react';
import picture from '../assets/2m.png';
import steamIcon from '../assets/steam_light.png';

const Navbar = () => {
  // Define the function outside of the return statement
  function handleSignIn() {
    alert("yo");
  }

  return (
    <div className="flex justify-between items-center p-4 w-full">
      {/* Logo on the left */}
      <img src={picture} alt="2m" className="w-14" />

      {/* Sign in button on the right */}
      <button 
        onClick={handleSignIn}
        className="bg-black h-10 text-white rounded-lg flex items-center gap-2 px-4"
      >
        <span>Sign in</span>
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
