import { Btn } from "../../../shared";
import "./index.css"

export const HeaderProfile = ({login, onClick}) => {
  return (
    <header className="header__profile">
      <div className="header__name">Name user</div>
      <Btn className="btn" onClick={onClick}>Выйти</Btn>
    </header>
  );
};
