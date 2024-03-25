import InpurForm from "../Elements/Index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMesage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: Date.now(),
      username,
    };

    if (!username && !email && !password) {
      setErrorMessage("check your inpur there's still something missing");
    } else {
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InpurForm label="Username" type="text" placeholder="enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <InpurForm label="Email" type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <InpurForm label="Password" type="password" placeholder="****" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errorMesage && <p className="my-4 text-center text-base text-red-600">{errorMesage}</p>}
      <button className="bg-red-600  hover:bg-red-700 rounded-md w-full py-3 text-white" type="submit">
        Get Started
      </button>
    </form>
  );
}

export default FormRegister;
