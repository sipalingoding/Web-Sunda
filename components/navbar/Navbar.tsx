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
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

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
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <TbWorld size={30} onClick={() => setOpen(true)} />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Investasi Kehidupan</SheetTitle>
              </SheetHeader>
              <div className="grid gap-8 py-8">
                <Link
                  href={"/not-found"}
                  className="flex flex-row items-center gap-4"
                  onClick={() => setOpen(false)}
                >
                  <FaNewspaper />
                  <span className="text-sm">Berita</span>
                </Link>
                <Link
                  href={"/donasi"}
                  className="flex flex-row items-center gap-4"
                  onClick={() => setOpen(false)}
                >
                  <FaMoneyCheckDollar />
                  <span className="text-sm">Donasi</span>
                </Link>
                <Link
                  href={"/about"}
                  className="flex flex-row items-center gap-4"
                  onClick={() => setOpen(false)}
                >
                  <RiErrorWarningFill />
                  <span className="text-sm">About Us</span>
                </Link>
                <Link
                  href={"/login"}
                  className="flex flex-row items-center gap-4"
                  onClick={() => setOpen(false)}
                >
                  <FaRegUser />
                  <span className="text-sm">{name}</span>
                </Link>
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
