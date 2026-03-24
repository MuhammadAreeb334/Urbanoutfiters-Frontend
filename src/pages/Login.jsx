import React from "react";
import AuthInput from "../components/layout/AuthInput.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-light uppercase tracking-[0.2em]">
            Welcome
          </h2>
          <p className="text-xs text-gray-500 mt-2">
            Enter your details to sign in
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-5">
            <AuthInput
              label="Email Address"
              type="email"
              placeholder="email@example.com"
            />
            <AuthInput
              label="Password"
              type="password"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="text-[10px] uppercase tracking-wider text-gray-400 cursor-pointer hover:text-black underline"
            >
              Forgot Password?
            </button>
          </div>

          <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-gray-800 transition-colors">
            Sign In
          </button>
        </form>

        <p className="text-center text-[10px] uppercase tracking-widest text-gray-500">
          New here?{" "}
          <Link to="/Signup" className="text-black underline font-bold ml-1">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
