import { SubmitButton } from "@/components/form/Buttons";
import { GrAnnounce } from "react-icons/gr";

function ServiceUnavailable() {
  return (
    <div className="container flex justify-center">
      <div className="mt-10 h-[444px] w-[444px] border-2 border-gray-300 rounded-sm flex flex-col gap-4 justify-center items-center p-6">
        <div className="flex justify-center items-center h-[250px] w-[250px] bg-gray-200 rounded-sm">
          <GrAnnounce size={68} color="gray" />
        </div>
        <span className="text-sm text-center">
          Fitur ini belum tersedia untuk saat ini. Silahkan kembali ke laman
          awal.
        </span>
        <SubmitButton text={"Back to Home"} />
      </div>
    </div>
  );
}

export default ServiceUnavailable;
