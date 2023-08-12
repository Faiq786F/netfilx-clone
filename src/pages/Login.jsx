import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/cad7d761-2289-4c55-8a1b-607336727656/PK-en-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-black/50"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form className="w-full flex flex-col">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                Sign In
              </button>
              <div className="flex justify-between items-center text-gray-500">
                <p className="flex items-center gap-2">
                  <input type="checkbox" /> Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-gray-500 my-8">
                New to Netflix?{" "}
                <span className="text-white font-bold ml-2">
                  <Link to={"/sign-up"}>Sign Up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login