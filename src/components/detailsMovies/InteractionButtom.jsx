import ButtonLike from "./ButtonLike";
import Commant from "./ButtonCommant";
import Share from "./Share";

function InteractionButtom({ comments }) {
  return (
    <div className=" mt-5 ml-[5rem] lg:ml-[3rem] lg:mt-[3.7rem] w-[15rem] flex items-center justify-center gap-8 border-b p-5 border-t">
      <ButtonLike />
      <Commant comments={comments} />
      <Share />
    </div>
  );
}

export default InteractionButtom;
