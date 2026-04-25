"use client";

import React from "react";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#858585] px-4">
      <div className=" bg-white  px-40 py-20 flex flex-col gap-4 shadow-sm">

        <h1 className="text-[30px]  text-black text-center mb-2 font-serif italic">
          Welcome back.
        </h1>

        <button className="flex items-center justify-center gap-3 border border-black rounded-full py-3 text-sm text-black hover:border-black transition">
          <Image src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Google" width={18} height={18} />
          Sign in with Google
        </button>

        <button className="flex items-center justify-center gap-3 border border-black rounded-full py-3 text-sm text-black hover:border-black transition">
          <Image src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" width={18} height={18} />
          Sign in with Facebook
        </button>

        <button className="flex items-center justify-center gap-3 border border-black rounded-full py-3 text-sm text-black hover:border-black transition">
          <Image src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" width={18} height={18} />
          Sign in with Apple
        </button>

        <button className="flex items-center justify-center gap-3 border border-black rounded-full py-3 text-sm text-black hover:border-black transition">
          <Image src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png" alt="X" width={18} height={18} />
          Sign in with X
        </button>

        <button className="flex items-center justify-center gap-3 border border-black rounded-full py-3 text-sm text-black hover:border-black transition">
          <Image src="https://cdn-icons-png.flaticon.com/128/2099/2099100.png" alt="Email" width={18} height={18} />
          Sign in with email
        </button>

        <label className="flex items-center justify-center gap-2 text-xs text-gray-600 mt-1 text-[15px]">
          <input  type="checkbox" className="accent-black w-[40px]" />
          Remember me for faster sign in
        </label>

        <div className="text-xs text-gray-500 text-center mt-4 space-y-2">
          <p>
            No account? <span className="text-black underline cursor-pointer">Create one</span>
          </p>
          <p>
            Forgot email or trouble signing in? <span className="text-black underline cursor-pointer">Get help.</span>
          </p>
        </div>

        <p className="text-[10px] text-gray-400 text-center leading-relaxed mt-3">
          By clicking "Sign in", you accept Medium's Terms of Service and Privacy Policy
        </p>

      </div>
    </div>
  );
}