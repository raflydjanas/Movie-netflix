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
        <div className=" absolute left-[20rem] flex flex-col lg:flex-row justify-center lg:ml-10 items-center gap-3 w-[5rem] h-[5rem]">
          <FacebookShareButton url={`${process.env.REACT_APP_PUBLIC_URL_API}/${id}`}>
            <FacebookIcon size={35} round />
          </FacebookShareButton>

          <TwitterShareButton url={`${process.env.REACT_APP_PUBLIC_URL_API}/${id}`}>
            <TwitterIcon size={35} round />
          </TwitterShareButton>

          <WhatsappShareButton url={`${process.env.REACT_APP_PUBLIC_URL_API}/${id}`}>
            <WhatsappIcon size={35} round />
          </WhatsappShareButton>

          <TelegramShareButton url={`${process.env.REACT_APP_PUBLIC_URL_API}/${id}`}>
            <TelegramIcon size={35} round />
          </TelegramShareButton>
        </div>
      )}
    </>
  );
}

export default Share;
