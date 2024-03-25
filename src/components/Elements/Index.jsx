import Label from "./Label";
import Input from "./Input";

function InputForm({ children, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col items-center w-full mb-5">
      <Label>{children}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default InputForm;
