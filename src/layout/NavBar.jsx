import { useContext } from "react";
import { LangguegeContext } from "../Context/Langguege";
import { useNavigate } from "react-router-dom";

const NavBar = ({ type }) => {
  const { lang, setLang } = useContext(LangguegeContext);
  const navigate = useNavigate();

  return (
    <>
      {type === "dekstop" && (
        <div className="absolute flex  justify-between px-[10rem] top-0 right-0 lg:left-0">
          <div>
            <img src="../../public/image/BrandAssets_Logos_01-Wordmark-removebg-preview.png" className="w-[15rem] " alt="" />
          </div>

          {/* <div className=""></div> */}

          <div className="flex justify-center">
            <select name="" id="" className="mr-5 bg-[#232323] w-[10rem] h-10 mt-[3rem] text-white" onChange={(e) => setLang(e.target.value)} value={lang}>
              <option value="english">English</option>
              <option value="indonesia">Indonesia</option>
            </select>
            <button onClick={() => navigate("/register")} className=" block h-10 mt-[3rem] bg-red-600 hover:bg-red-700 px-10 rounded-md text-white">
              {lang === "english" ? "Register" : "Daftar"}
            </button>
          </div>
        </div>
      )}
      {type === "dekstopHome" && (
        <div className="bg-black absolute flex  justify-between px-[10rem] top-0 right-0 lg:left-0">
          <div>
            <img src="../../public/image/BrandAssets_Logos_01-Wordmark-removebg-preview.png" className="w-[15rem] " alt="" />
          </div>

          {/* <div className=""></div> */}

          <div className="flex justify-center">
            <select name="" id="" className="mr-5 bg-[#232323] w-[10rem] h-10 mt-[3rem] text-white" onChange={(e) => setLang(e.target.value)} value={lang}>
              <option value="english">English</option>
              <option value="indonesia">Indonesia</option>
            </select>
            <button onClick={() => navigate("/register")} className=" block h-10 mt-[3rem] bg-red-600 hover:bg-red-700 px-10 rounded-md text-white">
              {lang === "english" ? "Register" : "Daftar"}
            </button>
          </div>
        </div>
      )}

      {type === "mobile" && (
        <div className="flex items-center justify-between mx-[1rem] my-4">
          <div>
            <img src="../../public/image/logo.png" className="w-[3rem] " alt="" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <select name="" id="" className=" w-[8rem] h-10 text-white" onChange={(e) => setLang(e.target.value)} value={lang}>
              <option value="english">English</option>
              <option value="indonesia">Indonesia</option>
            </select>
          </div>
        </div>
      )}
      {type === "mobileHero" && (
        <div className="flex items-center gap-20 absolute top-2 left-50% right-50% ">
          <div>
            <img src="../../public/image/logo.png" className="w-[3rem]" alt="" />
          </div>

          <div className="flex justify-center items-center gap-2">
            <select name="" id="" className=" w-[8rem] h-10 text-white" onChange={(e) => setLang(e.target.value)} value={lang}>
              <option value="english">English</option>
              <option value="indonesia">Indonesia</option>
            </select>
            <button onClick={() => navigate("/register")} className=" block h-10  bg-red-600 hover:bg-red-700 px-3 rounded-md text-white">
              {lang === "english" ? "Register" : "Daftar"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default NavBar;
// top-0 right-0 left-0
