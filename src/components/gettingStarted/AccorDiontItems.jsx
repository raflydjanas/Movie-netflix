const AccorDiontItems = ({ questiont, answer, curOpen, setIsOpen }) => {
  const isOpen = curOpen === questiont;
  function toggleOpen() {
    setIsOpen(isOpen ? null : questiont);
  }

  return (
    <>
      <div className="bg-[#232323] w-full lg:w-[50%] py-3 px-5 mx-auto">
        <div className="flex justify-between    items-center  ">
          <p className="text-2xl text-white">{questiont}</p>
          <button className="block text-white text-3xl" onClick={toggleOpen}>
            {isOpen ? "-" : "+"}
          </button>
        </div>
        <div className="mt-4">{isOpen && <p className="text-white">{answer}</p>}</div>
      </div>
    </>
  );
};

export default AccorDiontItems;
