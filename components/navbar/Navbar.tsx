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

function Navbar() {
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
            <span className="text-xs">Sign Up / Login</span>
            <IoIosArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
