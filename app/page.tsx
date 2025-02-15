import { SubmitButton } from "@/components/form/Buttons";
import { GrAnnounce } from "react-icons/gr";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-shrink-0 justify-center items-center h-[700px] w-[1311px] bg-gray-100 rounded-sm mt-8">
        <GrAnnounce size={68} color="gray" />
      </div>
    </div>
  );
}
