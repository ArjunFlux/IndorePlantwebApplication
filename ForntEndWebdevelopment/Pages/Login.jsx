import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handlesuccess, handleError } from "../utli";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and password are required.");
    }

    try {
      const url = "http://indoreplantwebapplication-2.onrender.com/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const { name, jwtTok } = result;
        localStorage.setItem("token", jwtTok);
        localStorage.setItem("loggedInUser", name);
        handlesuccess(`Login Successfully! Welcome ${name}`);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // fallback: use message or error
        const errorMsg =
          result?.error?.details?.[0]?.message ||
          result?.message ||
          "Login failed. Please try again.";
        handleError(errorMsg);
      }
    } catch (err) {
      handleError("Server error. Please check backend logs.");
      console.error(err);
    }
  };

  return (
    <div>
      <form className="mt-40" onSubmit={handleSubmit}>
        <p className="text-center text-3xl text-yellow-300 font-bold">
          Login Into Your Account
        </p>
        <div className="text-center mt-5">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            autoFocus
            placeholder="Enter your Email"
            className="border-1 border-gray-400 bg-white text-black w-[30%] px-3 h-[6vh] mt-5"
            value={loginInfo.email}
          />
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="border-1 border-gray-400 bg-white text-black w-[30%] px-3 h-[6vh] mt-5"
            value={loginInfo.password}
          />
        </div>
        <div className="flex justify-center gap-50 mt-3 text-[13px]">
          <p className="cursor-pointer text-white">Forget Your Password?</p>
          <Link to={"/signin"}>
            <p className="cursor-pointer text-white">Create Account</p>
          </Link>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="border-1 px-5 py-2 bg-yellow-500 font-bold text-white cursor-pointer"
            type="submit"
          >
            Log In
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
