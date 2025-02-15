"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { IoReloadOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

export function SubmitButton({
  className = "",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
    >
      {pending ? (
        <>
          <IoReloadOutline className="mr-2 h-4 w-4 animate-spin" />
          Please wait....
        </>
      ) : (
        <div className="flex flex-row gap-3">
          <FaPlus />
          <span>{text}</span>
        </div>
      )}
    </Button>
  );
}
