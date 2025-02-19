import { Input } from "@/components/ui/input";

type propInput = {
  type: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
};

function FormInput(prop: propInput) {
  const { type, placeholder, name, defaultValue } = prop;

  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
    />
  );
}

export default FormInput;
