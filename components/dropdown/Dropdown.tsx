import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

function Dropdown({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  const [selected, setSelected] = useState(placeholder);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex justify-between items-center h-9 px-4 py-3 border border-gray-200 text-sm text-gray-500">
        {selected}
        <RiArrowDropDownLine size={30}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-popper-anchor-width)]">
        {options.map((item) => (
          <DropdownMenuItem
            key={item}
            className="w-full"
            onClick={() => setSelected(item)}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
