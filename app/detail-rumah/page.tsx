import Navbar from "@/components/navbar/Navbar";
import { GrAnnounce } from "react-icons/gr";

function DetailRumahPage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-8 gap-8 w-full container ">
        <div className="col-span-5 space-y-6">
          <div className="flex gap-8 items-center">
            <span className="font-semibold">Nama Rumah 1</span>
            <span className="font-semibold">Nama Sub Rumah 1</span>
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-[490px] rounded-sm">
            <GrAnnounce size={68} color="gray" />
          </div>
        </div>
        <div className="col-span-3 space-y-6">
          <span className="font-semibold">Judul materi berjalan</span>
          <div className="border border-gray-200 rounded-sm h-[490px] p-4">
            <div className="text-right">
              <h2 className="font-semibold">User</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                porro odit libero animi deleniti saepe perferendis laboriosam
                expedita. Quaerat labore cum adipisci perferendis debitis
                molestiae tenetur maiores. Optio, ipsam culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRumahPage;
