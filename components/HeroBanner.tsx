"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HomeBanner() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-[420px] bg-[black] rounded-[12px] p-8 flex flex-col gap-6">
        
        <div className="flex items-center justify-center gap-2 ">
          <Image className="bg-white rounded-[50px]"
            src="https://cdn-icons-png.flaticon.com/128/10096/10096445.png"
            alt="Spotify"
            width={36}
            height={36}
          />
          <h1 className="text-[26px] font-bold text-white"></h1>
        </div>

        <h2 className="text-[52px] font-bold text-white text-center whitespace-nowrap">
          Welcome back
        </h2>

        <div className="flex flex-col gap-3">
          <label className="text-sm text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-sm bg-transparent border border-gray-600 rounded-md text-white outline-none focus:border-white"
          />
        </div>

        <button className="w-full bg-[#1DB954] text-black py-3 rounded-full font-semibold hover:scale-[1.02] transition">
          Continue
        </button>

        <div className="flex items-center gap-3 justify-center">
          <span className="text-xs text-gray-400 uppercase">or</span>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 text-white hover:border-white">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="Google"
              width={18}
              height={18}
            />
            Continue with Google
          </button>

          <button className="flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 text-white hover:border-white">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"
              alt="Facebook"
              width={18}
              height={18}
            />
            Continue with Facebook
          </button>

          <button className="flex items-center justify-center gap-3 border border-gray-600 rounded-full py-3 text-white hover:border-white">
            <Image className=""
              src="https://cdn-icons-png.flaticon.com/128/179/179309.png"
              alt="Apple"
              width={20}
              height={20}
            />
            Continue with Apple
          </button>
        </div>

        <div className="flex flex-col gap-[40px]">
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account? <br />
            <span className="text-white underline cursor-pointer">
              Sign up
            </span>
          </p>

          <p className="text-[11px] text-gray-500 text-center leading-relaxed">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>

      </div>
    </div>
  );
}