import FormRegister from "../components/Fragments/FormRegister";

function Register() {
  return (
    <div
      className="flex items-center justify-center h-screen relative"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-xs bg-slate-800 p-8 rounded">
        <h1 className="text-white ml-3 mb-3 text-3xl font-bold">Sign in</h1>
        <FormRegister />
      </div>
    </div>
  );
}

export default Register;
