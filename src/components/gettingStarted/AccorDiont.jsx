import AccorDiontItems from "./AccorDiontItems";
import { asks } from "../../Data/acordiont";
import { useState, useContext } from "react";
import { LangguegeContext } from "../../Context/Langguege";

const AccorDiont = () => {
  const [curOpen, setIsOpen] = useState(null);
  const { lang } = useContext(LangguegeContext);

  return (
    <div className="flex flex-col mt-10 mb-10 gap-2 ">
      {asks.map((item) => (
        <AccorDiontItems
          key={item.id}
          questiont={lang === "english" ? item.questiontUS : item.questiontIND}
          answer={lang === "english" ? item.answerUS : item.answerIND}
          curOpen={curOpen}
          setIsOpen={setIsOpen}
        />
      ))}

      <div className="mb-16">
        <h1 className="text-white text-center mt-16 mx-10 text-2xl font-bold">
          {lang === "english" ? "Ready to watch? Enter your email to create or restart your membership." : "Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu."}
        </h1>
        <div className="flex flex-wrap justify-center">
          <input type="text" className="bg-slate-700 py-5 px-4 rounded-lg mt-5 mr-2 w-[20rem] lg:w-[30rem] text-white opacity-50 " placeholder="Email" />
          <button className="bg-red-600 hover:bg-red-700 px-3 w-48 lg:w-[10rem] py-3 rounded-lg mt-5 text-white">{lang === "english" ? "Get Started" : "Get Mulai"}</button>
        </div>
      </div>
    </div>
  );
};

export default AccorDiont;
