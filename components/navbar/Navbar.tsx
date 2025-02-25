"use client";

import { FaMoneyCheckDollar, FaNewspaper, FaRegUser } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Navbar() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
    try {
      const user: string = JSON?.parse(
        localStorage.getItem("user") || "Sign Up / Login"
      );
      setName(user);
    } catch (error) {
      console.log(error);
      setName("Sign Up / Login");
    }
  }, []);

  return (
    <nav className="border-b-2">
      <div className="container flex flex-row lg:justify-between items-center flex-wrap gap-4 py-4 bg-transparent backdrop-blur-md">
        <div className="hidden lg:flex gap-3 items-center bg-black text-white rounded-2xl py-3 px-4">
          <FaMoneyCheckDollar />
          <span className="text-xs">Donasi</span>
        </div>
        <div className="hidden lg:flex gap-3 items-center bg-black text-white rounded-2xl py-3 px-4">
          <FaNewspaper />
          <span className="text-xs">Berita</span>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <TbWorld size={30} />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Investasi Kehidupan</SheetTitle>
              </SheetHeader>
              <div className="grid gap-8 py-8">
                <div className="flex flex-row items-center gap-4">
                  <FaNewspaper />
                  <span className="text-sm">Berita</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <FaMoneyCheckDollar />
                  <span className="text-sm">Donasi</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <RiErrorWarningFill />
                  <span className="text-sm">About Us</span>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <FaRegUser />
                  <span className="text-sm">{name}</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <span className="text-xl font-bold">Investasi Kehidupan</span>
        <div className="hidden lg:flex gap-3 items-center bg-black text-white  rounded-2xl py-3 px-4">
          <RiErrorWarningFill />
          <span className="text-xs">About Us</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="hidden lg:flex gap-3 items-center bg-black text-white rounded-2xl py-3 px-4">
            <FaRegUser />
            <span className="text-xs">{name}</span>
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {name ? (
              <>
                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={"/profile"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Register</DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
