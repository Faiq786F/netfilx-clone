import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    pass: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
        const res = await createUserWithEmailAndPassword(auth, userData.email, userData.pass);
        console.log(res.user);
        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
    setLoading(false)
  };

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
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form className="w-full flex flex-col" onSubmit={SubmitHandler}>
              <input
                name="email"
                onChange={inputChangeHandler}
                className="p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                name="pass"
                onChange={inputChangeHandler}
                className="p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold">
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
              <div className="flex justify-between items-center text-gray-500">
                <p className="flex items-center gap-2">
                  <input type="checkbox" /> Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="text-gray-500 my-8">
                Already Subsscribed to Netflix?{" "}
                <span className="text-white font-bold ml-2">
                  <Link to={"/login"}>Sign In</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
