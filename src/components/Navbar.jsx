import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full z-[1000] absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer"><Link to={'/'}>NETFLIX</Link></h1>
      <div>
        <button className="text-white px-6 font-semibold"><Link to={'/login'}>Sign In</Link></button>
        <button className="text-white font-semibold bg-red-600 rounded cursor-pointer px-6 py-2"><Link to={'/sign-up'}>Sign Up</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
