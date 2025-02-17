import { FaPlus } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container absolute top-1 left-1/2 transform -translate-x-1/2 flex justify-between items-center py-4 gap-2">
        <div className="flex gap-2 items-center bg-white rounded-3xl p-3">
          <FaPlus />
          <span className="text-sm">Donasi</span>
        </div>
        <div className="flex gap-2 items-center bg-white rounded-3xl p-3">
          <FaPlus />
          <span className="text-sm">Berita</span>
        </div>

        <span className="text-xl font-bold">Investasi Kehidupan</span>
        <div className="flex gap-2 items-center bg-white rounded-3xl p-3">
          <FaPlus />
          <span className="text-sm">About Us</span>
        </div>
        <div className="flex gap-2 items-center bg-white rounded-3xl p-3">
          <FaPlus />
          <span className="text-sm">Nama User</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
