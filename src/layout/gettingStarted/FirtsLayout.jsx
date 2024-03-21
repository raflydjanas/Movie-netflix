function FirtsLayout({ children }) {
  return (
    <>
      <div
        className="flex justify-center items-center h-[39rem] bg-slate-800 border-b-[0.5rem] border-[#232323]"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default FirtsLayout;
