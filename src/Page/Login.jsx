import { useContext } from "react";
import { LangguegeContext } from "../Context/Langguege";
import AccorDiont from "../components/gettingStarted/AccorDiont";
import Content from "../components/gettingStarted/Content";
import NavBar from "../layout/NavBar";
import FirtsLayout from "../layout/gettingStarted/FirtsLayout";
import SecondLayout from "../layout/gettingStarted/SecondLayout";

function FormLogin() {
  const { lang } = useContext(LangguegeContext);

  return (
    <>
      <FirtsLayout>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-slate-900 opacity-60"></div> */}
        <NavBar />
        <Content type="hero" />
      </FirtsLayout>
      <SecondLayout>
        <Content type="enjoy your tv" />
        <SecondLayout>
          <Content type="download your shows" />
          <SecondLayout>
            <Content type="watch everywhere" />
            <SecondLayout>
              <Content type="for kids" />
              <SecondLayout type="acorDiont">
                {lang === "english" ? (
                  <h1 className="text-white text-5xl font-bold text-center">Freqeuntly asked questions</h1>
                ) : (
                  <h1 className="text-white text-5xl font-bold text-center">Tanya Jawab Umum</h1>
                )}
                <AccorDiont />
              </SecondLayout>
            </SecondLayout>
          </SecondLayout>
        </SecondLayout>
      </SecondLayout>
    </>
  );
}

export default FormLogin;
