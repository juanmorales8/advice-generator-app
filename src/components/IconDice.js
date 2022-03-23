import iconDice from "../assets/images/icon-dice.svg";
import "../styles/IconDice.scss";

function IconDice({handleClick}) {
  return (
    <div className="Icon-dice" onClick={handleClick}>
      <img src={iconDice} alt="Icon dice" className="Icon-dice__image"></img>
    </div>
  );
}

export { IconDice };
