"use client";

import { SubmitButton } from "@/components/form/Buttons";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from "@/components/dropdown/Dropdown";

const images = ["baduy-1.jpg", "baduy-2.jpg"];

function RegisterPage() {
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
    <div className="flex flex-col md:grid md:grid-cols-2 w-full md:min-h-screen h-screen">
      <div className="bg-gray-300 flex items-center justify-center relative rounded-l-2xl overflow-hidden h-1/3 md:h-full">
        <Image
          src={`/images/${images[0]}`}
          alt="carousel"
          width={200}
          height={200}
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
      <div className="bg-white flex flex-col gap-16 items-center justify-center rounded-r-2xl h-2/3 md:h-full">
        <h2 className="text-center text-lg font-semibold mt-12 md:mt-0">
          Sampurasun
        </h2>
        <form className="space-y-5 w-80">
          <Input type="text" placeholder="Nama" className="w-full px-4 py-3" />
          <Dropdown
            options={["Pria", "Perempuan"]}
            placeholder={"Jenis Kelamin"}
          />
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
            text="Daftar"
          />
          <div className="flex gap-6 justify-center items-center">
            <p className="text-xs text-gray-500">ATAU DAFTAR DENGAN</p>
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
              MK
            </div>
          </div>
        </form>

        <p className="text-center text-xs tracking-[1.5px] mt-6">
          SUDAH PUNYA AKUN?{" "}
          <Link href={"../login"} className="font-bold">
            MASUK DISINI
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
