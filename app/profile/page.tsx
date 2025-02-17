import { SubmitButton } from "@/components/form/Buttons";
import FormInput from "@/components/form/FormInput";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

function ProfilePage() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="w-screen bg-gray-300 h-52 mt-12"></div>
      <div className="w-60 bg-gray-200 h-60 rounded-full mb-8 -mt-32"></div>
      <div className="flex flex-col space-y-4 w-80">
        <FormInput name="label1" type="text" placeholder="Label" />
        <FormInput name="label1" type="text" placeholder="Label" />
        <FormInput name="label1" type="text" placeholder="Label" />
        <FormInput name="label1" type="text" placeholder="Label" />
        <FormInput name="label1" type="text" placeholder="Label" />
      </div>
      <SubmitButton text="Button" withIcon className="mt-8" />
    </div>
  );
}

export default ProfilePage;
