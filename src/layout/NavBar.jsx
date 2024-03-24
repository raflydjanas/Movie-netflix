import { useContext } from "react";
import { LangguegeContext } from "../Context/Langguege";

const NavBar = () => {
  const { lang, setLang } = useContext(LangguegeContext);

  return (
    <div className=" absolute flex  justify-between px-[10rem] top-0 right-0 lg:left-0">
      <img src="../../public/image/BrandAssets_Logos_01-Wordmark-removebg-preview.png" className="w-[15rem] " alt="" />

      <div className="flex justify-center">
        <select name="" id="" className="mr-5 bg-[#232323] w-[10rem]  h-10 mt-[3rem] text-white" onChange={(e) => setLang(e.target.value)} value={lang}>
          <option value="english">English</option>
          <option value="indonesia">Indonesia</option>
        </select>
        <button className=" block h-10 mt-[3rem] bg-red-600 hover:bg-red-700 px-10 rounded-md text-white">Sign in</button>
      </div>
    </div>
  );
};
export default NavBar;
// top-0 right-0 left-0
