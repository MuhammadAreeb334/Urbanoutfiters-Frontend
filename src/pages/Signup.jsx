import Login from "./Login";
import AuthInput from "../components/layout/AuthInput.jsx";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-light uppercase tracking-[0.2em]">
            Join Us
          </h2>
          <p className="text-xs text-gray-500 mt-2">
            Create an account for checkout
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-5">
            <AuthInput label="Full Name" type="text" placeholder="Jane Doe" />
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

          <div className="text-[10px] text-gray-400 leading-relaxed">
            By creating an account, you agree to our{" "}
            <span className="underline">Terms</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </div>

          <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-gray-800 transition-colors">
            Create Account
          </button>
        </form>

        <p className="text-center text-[10px] uppercase tracking-widest text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-black underline font-bold ml-1">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
