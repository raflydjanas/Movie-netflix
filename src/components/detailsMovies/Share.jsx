import { IoMdShare } from "react-icons/io";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon } from "react-share";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Share() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="text-white hover:text-slate-300" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <IoMdShare size={30} />
      </button>

      {isOpen && (
        <div className="absolute left-[20rem] flex flex-col lg:flex-row justify-center lg:ml-10 items-center gap-3 w-[5rem] h-[5rem]">
          <FacebookShareButton url={`http://localhost:5173/details/${id}`}>
            <FacebookIcon size={35} round />
          </FacebookShareButton>

          <TwitterShareButton url={`http://localhost:5173/details/${id}`}>
            <TwitterIcon size={35} round />
          </TwitterShareButton>

          <WhatsappShareButton url={`http://localhost:5173/details/${id}`}>
            <WhatsappIcon size={35} round />
          </WhatsappShareButton>

          <TelegramShareButton url={`http://localhost:5173/details/${id}`}>
            <TelegramIcon size={35} round />
          </TelegramShareButton>
        </div>
      )}
    </>
  );
}

export default Share;
