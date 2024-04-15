import InpurForm from "../Elements/Index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

function FormRegister() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMesage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      username,
    };

    if (!username && !email && !password) {
      setErrorMessage("check your inpur there's still something missing");
    } else {
      const usersJson = localStorage.getItem("users");
      const users = usersJson ? JSON.parse(usersJson) : [];

      const updateUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(updateUsers));

      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InpurForm label="Username" type="text" placeholder="enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <InpurForm label="Email" type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <div className="flex items-center relative cursor-pointer">
        <InpurForm label="Password" type={showPassword ? "text" : "password"} placeholder="****" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div onClick={() => setShowPassword(!showPassword)} className="absolute text-slate-500 left-[14rem] mb-2">
          {showPassword ? <GoEye size={20} /> : <GoEyeClosed size={20} />}
        </div>
      </div>

      {errorMesage && <p className="my-4 text-center text-base text-red-600">{errorMesage}</p>}
      <button className="bg-red-600  hover:bg-red-700 rounded-md w-full py-3 text-white" type="submit">
        Get Started
      </button>
    </form>
  );
}

export default FormRegister;
