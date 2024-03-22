import AccorDiont from "../components/gettingStarted/AccorDiont";
import NavBar from "../layout/NavBar";
import FirtsLayout from "../layout/gettingStarted/FirtsLayout";
import SecondLayout from "../layout/gettingStarted/SecondLayout";

function FormLogin() {
  return (
    <>
      <FirtsLayout>
        <NavBar />
        <div>
          <div className="z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-white text-5xl font-bold opacity-90 font-sans mb-4">Unlimiyed movie, Tv shows, and more.</h1>
            <h2 className="text-white text-3xl font-bold opacity-90 font-sans mb-5">Watch anywhere. Cancel anytime</h2>
            <h3 className="text-white text-xl font-bold opacity-90 font-sans">Ready to watch? Enter your email to create or restart your membership</h3>

            <div className="flex">
              <input type="text" className="bg-slate-700 p-2 rounded-lg mt-5 mr-2 w-[19rem] text-white opacity-80" />
              <button className="bg-red-500 hover:bg-red-700 p-2 rounded-lg mt-5 text-white">Get Started</button>
            </div>
          </div>
        </div>
      </FirtsLayout>
      <SecondLayout>
        <div className="flex justify-center items-center">
          <div className="">
            <h1 className="text-white text-5xl font-bold mb-3 font-sans">Enjoy on your tv</h1>
            <p className="text-white max-w-[30rem] text-lg ">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="w-[30rem]" alt="" />
          </div>
        </div>
        <div className="h-2 mt-10 bg-[#232323] "></div>
        <SecondLayout>
          <div className="flex items-center justify-center">
            <div className="mr-5">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="w-[30rem]" alt="" />
            </div>
            <div className="ml-6">
              <h1 className="text-white text-4xl font-bold mb-3 font-sans max-w-[40rem]">Download your shows to watch offline</h1>
              <p className="text-white max-w-[30rem] text-lg ">Save your favorites easily and always have something to watch.</p>
            </div>
          </div>
          <div className="h-2 mt-10 bg-[#232323] "></div>
          <SecondLayout>
            <div className="flex justify-center items-center">
              <div className="">
                <h1 className="text-white text-5xl font-bold mb-3 font-sans">Watch everywhere</h1>
                <p className="text-white max-w-[30rem] text-lg ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
              <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png" className="w-[30rem]" alt="" />
              </div>
            </div>
            <div className="h-2 mt-10 bg-[#232323] "></div>
            <SecondLayout>
              <div className="flex items-center justify-center">
                <div className="mr-5">
                  <img
                    src="https://occ-0-6714-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                    className="w-[30rem]"
                    alt=""
                  />
                </div>
                <div className="ml-6">
                  <h1 className="text-white text-4xl font-bold mb-3 font-sans max-w-[40rem]">Download your shows to watch offline</h1>
                  <p className="text-white max-w-[30rem] text-lg ">Save your favorites easily and always have something to watch.</p>
                </div>
              </div>
              <div className="h-2 mt-10 bg-[#232323] "></div>
              <SecondLayout type="acorDiont">
                <h1 className="text-white text-5xl font-bold text-center">Freqeuntly asked questions</h1>
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
