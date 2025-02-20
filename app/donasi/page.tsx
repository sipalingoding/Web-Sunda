import Navbar from "@/components/navbar/Navbar";
import React from "react";

function DonasiPage() {
  return (
    <div className="w-full container">
      <Navbar />
      <div className="grid grid-cols-2 gap-8 mt-20">
        <div className="border-2 w-full border-gray-200 h-[740px] rounded-sm p-8 flex flex-col gap-8 items-center">
          <h1 className="font-semibold text-3xl">Hatur nuhun</h1>
          <span className="text-center">
            parantos mantosan arurang ngamumule bahasa sareng budaya Sunda ku
            cara manjangkeun umur ieu website
          </span>
          <div className="flex flex-col gap-[11px] items-end justify-center">
            <div className="flex gap-8 items-center">
              <span className="font-semibold">1st</span>
              <span className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center">
                  <span className="text-white text-xs">MK</span>
                </div>
                <span>NAMI DONATUR</span>
              </span>
            </div>
            <div className="flex gap-8 items-center">
              <span className="font-semibold">2nd</span>
              <span className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center">
                  <span className="text-white text-xs">MK</span>
                </div>
                <span>NAMI DONATUR</span>
              </span>
            </div>
            <div className="flex gap-8 items-center">
              <span className="font-semibold">3rd</span>
              <span className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-gray-400 flex justify-center items-center">
                  <span className="text-white text-xs">MK</span>
                </div>
                <span>NAMI DONATUR</span>
              </span>
            </div>
          </div>
        </div>
        <div className="border-2 w-full border-gray-200 h-[740px] rounded-sm"></div>
      </div>
    </div>
  );
}

export default DonasiPage;
