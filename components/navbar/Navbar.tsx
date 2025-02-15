import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex justify-between items-center py-8 gap-2">
        <div className="flex flex-row justify-between gap-32">
          <div className="flex gap-2 items-center">
            <FaPlus />
            <span className="text-sm">Donasi</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaPlus />
            <span className="text-sm">Berita</span>
          </div>
        </div>

        <span className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">
          Investasi Kehidupan
        </span>

        <div className="flex flex-row justify-between gap-32">
          <div className="flex gap-2 items-center">
            <FaPlus />
            <span className="text-sm">About Us</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaPlus />
            <span className="text-sm">Nama User</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
