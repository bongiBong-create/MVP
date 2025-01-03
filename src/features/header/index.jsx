import { useNavigate } from "react-router-dom";
import { Btn } from "../../shared";

import "./index.css";

export const Header = ({ setIsActive }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <div className="nav__btn" onClick={() => setIsActive("Profile")}>
              Пользователи
            </div>
          </li>
          <li>
            <div className="nav__btn" onClick={() => setIsActive("Data")}>
              Данные
            </div>
          </li>
        </ul>
      </nav>
      <Btn className="btn" onClick={handleLogOut}>
        Выйти
      </Btn>
    </header>
  );
};
