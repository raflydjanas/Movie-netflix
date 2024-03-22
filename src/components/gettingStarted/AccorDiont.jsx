import AccorDiontItems from "./AccorDiontItems";
import { asks } from "../../Data/acordiont";
import { useState } from "react";

const AccorDiont = () => {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="flex flex-col mt-10 mb-10 gap-2">
      {asks.map((item) => (
        <AccorDiontItems key={item.id} questiont={item.questiont} answer={item.answer} curOpen={curOpen} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};

export default AccorDiont;
