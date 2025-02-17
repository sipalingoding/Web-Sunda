import { SubmitButton } from "@/components/form/Buttons";
import Navbar from "@/components/navbar/Navbar";
import { GrAnnounce } from "react-icons/gr";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <Navbar />
      <div className="flex flex-shrink-0 justify-center items-center h-[700px] w-[1311px] bg-gray-100 rounded-sm">
        <GrAnnounce size={68} color="gray" />
      </div>
    </div>
  );
}
