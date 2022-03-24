import { IconDice } from "./iconDice";
import { Loader } from "./Loader";
import { AdviceTitle } from "./AdviceTitle";
import { AdviceText } from "./AdviceText";
import { useFetchAdvices } from "../customHooks/useFetchAdvices";
import "../styles/AdviceCard.scss";

function AdviceCard() {
  const { data, error, loading, handleGetAdvice } = useFetchAdvices();

  return (
    <section className="Advice-card">
      {loading ? (
        <Loader />
      ) : (
        <>
          <AdviceTitle adviceId={data.slip.id} />
          <AdviceText adviceText={data.slip.advice} />
        </>
      )}
      <div className="pattern-divider"></div>
      <IconDice handleClick={handleGetAdvice} />
    </section>
  );
}

export { AdviceCard };
