import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthInput = ({ label, type = "text", ...props }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-1.5 w-full">
      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors text-sm placeholder:text-gray-300"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-0 top-2 text-gray-400 hover:text-black"
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
