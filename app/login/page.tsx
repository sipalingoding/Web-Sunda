"use client";

import { SubmitButton } from "@/components/form/Buttons";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];

function LoginPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i: number) => {
    setIndex(i);
  };
  return (
    <div className="grid grid-cols-2 w-full min-h-screen">
      <div className="bg-gray-300 flex items-center justify-center relative rounded-l-2xl overflow-hidden">
        <img
          src={images[index]}
          alt="carousel"
          className="w-full h-full object-cover rounded-l-2xl transition-opacity duration-1000"
        />
        <div className="absolute bottom-16 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="bg-white flex flex-col gap-16 items-center justify-center rounded-r-2xl">
        <h2 className="text-center text-lg font-semibold">Sampurasun</h2>
        <form className="space-y-5 w-80">
          <Input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3"
          />
          <div className="flex justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" /> <span>Ingat saya</span>
            </label>
            <a href="#" className="text-gray-500">
              Lupa Password
            </a>
          </div>
          <SubmitButton
            className="w-full bg-black text-white flex items-center justify-center space-x-2"
            text="masuk"
          />
          <div className="flex gap-6 justify-center items-center">
            <p className="text-xs text-gray-500">OR SIGN IN WITH</p>
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
              MK
            </div>
          </div>
        </form>

        <p className="text-center text-xs tracking-[1.5px] mt-6">
          BELUM PUNYA AKUN? DAFTAR DISINI
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
