import ButtonLike from "./ButtonLike";
import Commant from "./ButtonCommant";
import Share from "./Share";

function InteractionButtom({ comments, setIsOpen }) {
  return (
    <div className=" mt-5 ml-[5rem] lg:ml-[3rem] lg:mt-[3.7rem] 2xl:mt-[4.8rem] w-[15rem] flex items-center justify-center gap-8 border-b p-5 border-t">
      <ButtonLike />
      <Commant comments={comments} setIsOpen={setIsOpen} />
      <Share />
    </div>
  );
}

export default InteractionButtom;
