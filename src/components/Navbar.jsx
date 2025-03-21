import React from 'react';
import picture from '../assets/2m.png';

const Navbar = () => {
  // Define the function outside of the return statement
  function handleSignIn() {
    alert("yo");
  }

  return (
    <div className="flex justify-between p-4">
      {/* Logo on the left */}
      <img src={picture} alt="2m" className="w-14" />

      {/* Sign in button on the right */}
      <button 
        onClick={handleSignIn}
        className="bg-black w-30 h-10 text-white rounded-lg"
      >
        Sign in
      </button>
    </div>
  );
};

export default Navbar;
