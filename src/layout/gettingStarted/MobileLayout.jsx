import { useContext, useState } from "react";
import { LangguegeContext } from "../../Context/Langguege";
import { useNavigate } from "react-router-dom";

function MobileLayout({ type, usersLogin }) {
  const { lang } = useContext(LangguegeContext);
  const [inputLogin, setInputLogin] = useState("");
  const [massage, setMassage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const exitingUsers = usersLogin.some((user) => user.username === inputLogin);
    const newUserLogin = {
      usersLogin: inputLogin,
    };

    if (exitingUsers) {
      const usersJson = localStorage.getItem("userslogin");
      const userLogin = usersJson ? JSON.parse(usersJson) : [];

      const updateUserLogin = [...userLogin, newUserLogin];
      localStorage.setItem("userslogin", JSON.stringify(updateUserLogin));

      navigate("/home");
    } else {
      setInputLogin("");
      setMassage(`${lang === "english" ? "wrong username try again or sign up back" : "username salah silahkan coba lagi atau register kembali"}`);
    }
  };

  return (
    <>
      {type === "hero" && (
        <>
          <div className="">
            <div className="z-10 flex flex-col justify-center items-center h-full ">
              {lang === "english" ? (
                <>
                  <h1 className="text-white text-4xl text-center lg:text-5xl font-bold opacity-90 font-sans mb-4">Unlimiyed movie, Tv shows, and more.</h1>
                  <h2 className="text-white text-base text-center font-bold opacity-90 font-sans mb-5 lg:text-3xl">Watch anywhere. Cancel anytime</h2>
                  <h3 className="text-white text-base text-center font-semibold max-w-[20rem] lg:min-w-[30rem] opacity-90 font-sans">
                    Ready to watch? Enter your email to create or restart your membership
                  </h3>

                  <form action="" onSubmit={handleLogin} className="flex flex-wrap justify-center">
                    <input
                      type="text"
                      value={inputLogin}
                      onChange={(e) => setInputLogin(e.target.value)}
                      className="bg-slate-700 py-4 rounded-md px-3 mt-5 mr-2 w-[22rem] text-white text-xl opacity-80"
                    />
                    <button type="submit" className="bg-red-600  hover:bg-red-700 px-7 py-3 rounded-md mt-5 text-white">
                      Get Started
                    </button>
                  </form>

                  {massage && <p className="text-red-500 text-center font-bold ">{massage}</p>}
                </>
              ) : (
                <>
                  <h1 className="text-white text-4xl text-center lg:text-5xl font-bold opacity-90 font-sans mb-4">Film, acara TV tak terbatas, dan banyak lagi</h1>
                  <h2 className="text-white text-base text-center font-bold opacity-90 font-sans mb-5 lg:text-3xl">Tonton di mana pun. Batalkan kapan pun.</h2>
                  <h3 className="text-white text-base text-center font-semibold max-w-[20rem] lg:min-w-[30rem] opacity-90 font-sans">
                    Siap menonton? Masukkan email untuk membuat atau memulai lagi keanggotaanmu.
                  </h3>

                  <form action="" onSubmit={handleLogin} className="flex flex-wrap justify-center">
                    <input
                      type="text"
                      value={inputLogin}
                      onChange={(e) => setInputLogin(e.target.value)}
                      className="bg-slate-700 py-4 rounded-md px-3 mt-5 mr-2 w-[22rem] text-white text-xl opacity-80"
                    />
                    <button type="submit" className="bg-red-600  hover:bg-red-700 px-7 py-3 rounded-md mt-5 text-white">
                      Mulai
                    </button>
                  </form>
                  {massage && <p className="text-red-500  text-md font-bold text-center">{massage}</p>}
                </>
              )}
            </div>
          </div>
        </>
      )}
      {type === "enjoy your tv" && (
        <div className="flex flex-wrap justify-center items-center bg-black">
          {lang === "english" ? (
            <>
              <div className="text-center">
                <h1 className="text-white text-4xl lg:text-5xl font-bold mb-3 font-sans">Enjoy on your tv</h1>
                <p className="text-white max-w-[30rem] text-lg ">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
              </div>
              <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="w-[30rem]" alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <h1 className="text-white text-4xl lg:text-5xl font-bold mb-3 font-sans">Nikmati di TV-mu</h1>
                <p className="text-white max-w-[30rem] text-lg ">Tonton di Smart TV, Playstation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak lagi.</p>
              </div>
              <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="w-[30rem]" alt="" />
              </div>
            </>
          )}
        </div>
      )}
      {type === "download your shows" && (
        <div className="flex flex-wrap items-center justify-center bg-black">
          {lang === "english" ? (
            <>
              <div className="ml-6 text-center">
                <h1 className="text-white text-4xl font-bold mb-3 font-sans max-w-[40rem]">Download your shows to watch offline</h1>
                <p className="text-white max-w-[30rem] text-lg ">Save your favorites easily and always have something to watch.</p>
              </div>
              <div className="bg-red-600">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="w-[30rem]" alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="ml-6 text-center">
                <h1 className="text-white text-4xl font-bold mb-3 font-sans max-w-[40rem]">Download acara TV untuk menontonnya secara offline</h1>
                <p className="text-white max-w-[30rem] text-lg ">Simpan favoritmu dengan mudah agar selalu ada acara TV dan film yang bisa ditonton.</p>
              </div>
              <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="w-[30rem]" alt="" />
              </div>
            </>
          )}
        </div>
      )}
      {type === "watch everywhere" && (
        <div className="flex flex-wrap justify-center items-center bg-black">
          {lang === "english" ? (
            <>
              <div className="text-center">
                <h1 className="text-white text-5xl font-bold mb-3 font-sans">Watch everywhere</h1>
                <p className="text-white max-w-[30rem] text-lg ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
              </div>
              <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png" className="w-[30rem]" alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <h1 className="text-white text-5xl font-bold mb-3 font-sans">Tonton di mana pun</h1>
                <p className="text-white max-w-[30rem] text-lg ">Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.</p>
              </div>
              <div className="">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png" className="w-[30rem]" alt="" />
              </div>
            </>
          )}
        </div>
      )}
      {type === "for kids" && (
        <div className="flex flex-wrap items-center justify-center bg-black">
          {lang === "english" ? (
            <>
              <div className="text-center">
                <h1 className="text-white text-4xl font-bold mb-3 font-sans max-w-[40rem]">Create profiles for kids</h1>
                <p className="text-white max-w-[30rem] text-lg ">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://occ-0-6714-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                  className="w-[30rem]"
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <div className="ml-6 text-center">
                <h1 className="text-white text-4xl font-bold mb-3 font-sans max-w-[40rem]">Buat profil untuk anak</h1>
                <p className="text-white max-w-[30rem] text-lg ">
                  Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://occ-0-6714-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                  className="w-[30rem]"
                  alt=""
                />
              </div>
            </>
          )}
        </div>
      )}
      <div className="h-1 pt-2 bg-[#232323] "></div>
    </>
  );
}

export default MobileLayout;
