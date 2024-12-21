import { Icons } from "../../../../shared/ui/icons";
import "./index.css";

export const UserList = () => {
  return (
    <div className="users">
      <div className="users__box">
        <h3>Пользователи</h3>
        <div className="user__form">
          <input className="add__input" type="text" placeholder="Имя" />
          <input
            className="add__input"
            type="text"
            placeholder="Учебные заведения"
          />

          <button className="add__btn">Добавить</button>
        </div>
      </div>

      <ul className="user__list">
        <li className="list__item">
          <p className="item__name">name</p>
          <p className="item__universities">universities</p>
          <button className="delete">
            <Icons icon="delete" />
          </button>
        </li>
        <li className="list__item">
          <p className="item__name">name</p>
          <p className="item__universities">universities</p>
          <button className="delete">
            <Icons icon="delete" />
          </button>
        </li>
        <li className="list__item">
          <p className="item__name">name</p>
          <p className="item__universities">universities</p>
          <button className="delete">
            <Icons icon="delete" />
          </button>
        </li>
      </ul>
    </div>
  );
};
