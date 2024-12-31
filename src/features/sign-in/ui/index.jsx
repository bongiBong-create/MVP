import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchLogIn } from "../model/authSlice";

import { Btn } from "../../../shared/ui/btn";

import "./index.css";
export const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userData = await dispatch(fetchLogIn({ username, password }));

    if (userData.payload?.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="form">
      <form>
        <h2>Авторизация</h2>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            placeholder="Введите имя"
            onChange={handleChangeName}
            value={username}
          />
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            placeholder="Введите пароль"
            onChange={handleChangePassword}
            value={password}
          />
        </div>

        <Btn className="btn" onClick={handleFormSubmit}>
          Войти
        </Btn>
      </form>
    </div>
  );
};
