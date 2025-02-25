import { SubmitButton } from "@/components/form/Buttons";
import Navbar from "@/components/navbar/Navbar";
import { GrAnnounce } from "react-icons/gr";

function DetailRumahPage() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-8 gap-8 w-full container max-h-screen mt-8">
      <div className="col-span-5 space-y-6 h-1/2 md:h-full">
        <div className="flex gap-8 items-center">
          <span className="font-semibold">Nama Rumah 1</span>
          <span className="font-semibold">Nama Sub Rumah 1</span>
        </div>
        <div className="bg-gray-200 flex justify-center items-center rounded-sm h-[250px] md:h-[550px]">
          <GrAnnounce size={68} color="gray" />
        </div>
      </div>
      <div className="col-span-3 space-y-6 h-1/2 md:h-full">
        <span className="font-semibold">Judul materi berjalan</span>
        <div className="border border-gray-200 rounded-sm h-[250px] md:h-[550px] p-4 flex flex-col gap-4 overflow-auto">
          <div className="text-right">
            <h2 className="font-semibold">User</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              porro odit libero animi deleniti saepe perferendis laboriosam
              expedita. Quaerat labore cum adipisci perferendis debitis
              molestiae tenetur maiores. Optio, ipsam culpa.
            </p>
          </div>
          <div className="text-left">
            <h2 className="font-semibold">Karakter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              porro odit libero animi deleniti saepe perferendis laboriosam
              expedita. Quaerat labore cum adipisci perferendis debitis
              molestiae tenetur maiores. Optio, ipsam culpa.
            </p>
          </div>
          <div className="text-right">
            <h2 className="font-semibold">User</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              porro odit libero animi deleniti saepe perferendis laboriosam
              expedita. Quaerat labore cum adipisci perferendis debitis
              molestiae tenetur maiores. Optio, ipsam culpa.
            </p>
          </div>
          <div className="text-left">
            <h2 className="font-semibold">Karakter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              porro odit libero animi deleniti saepe perferendis laboriosam
              expedita. Quaerat labore cum adipisci perferendis debitis
              molestiae tenetur maiores. Optio, ipsam culpa.
            </p>
          </div>
          <div className="flex justify-end">
            <SubmitButton text="Next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailRumahPage;
