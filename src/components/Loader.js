import loader from "@images/loader.svg";
import "@styles/Loader.scss";

function Loader() {
  return (
    <div className="Loader">
      <img src={loader} alt="loading" className="Loader__image"></img>
    </div>
  );
}

export { Loader };
