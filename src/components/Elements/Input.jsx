function Input({ value, type, placeholder, onChange = () => {} }) {
  return (
    <>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="bg-slate-700 py-3 px-4 rounded-md w-full text-white opacity-50" />
    </>
  );
}

export default Input;
