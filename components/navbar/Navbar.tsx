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
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-4 bg-transparent backdrop-blur-md">
        <div className="flex gap-3 items-center bg-green-500 text-white rounded-2xl py-3 px-4">
          <FaMoneyCheckDollar />
          <span className="text-xs">Donasi</span>
        </div>
        <div className="flex gap-3 items-center bg-green-500 text-white rounded-2xl py-3 px-4">
          <FaNewspaper />
          <span className="text-xs">Berita</span>
        </div>

        <span className="text-xl font-bold">Investasi Kehidupan</span>
        <div className="flex gap-3 items-center bg-green-500 text-white  rounded-2xl py-3 px-4">
          <RiErrorWarningFill />
          <span className="text-xs">About Us</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-3 items-center bg-green-500 text-white rounded-2xl py-3 px-4">
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
