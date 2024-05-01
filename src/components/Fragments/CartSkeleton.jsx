import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CartSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="h-[16rem] w-[13rem] m-1 mb-16" key={i}>
        <Skeleton height={"19rem"} style={{ gap: "0.8rem" }} />
      </div>
    ));
}

export default CartSkeleton;
