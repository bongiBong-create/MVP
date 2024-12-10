import { useAuth } from "../../../app/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API_URL } from "../../../shared";

import { Btn } from "../../../shared/ui/btn";

import "./index.css";
export const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setDataUser } = useAuth();
  const navigate = useNavigate();
  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleProfile = () => {
    navigate("/profile")
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/login?username=${username}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const userId = data.user_id;
      const userResponse = await fetch(
        `http://23.111.216.140:8080/api/users/${userId}`
      );
      const userData = await userResponse.json();
      await setDataUser(userData);
      if (userData.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

    } catch (error) {
      console.error(error.message);
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

        <Btn className="btn" onClick={handleProfile}>User</Btn>
        <Btn className="btn" onClick={handleFormSubmit}>Войти</Btn>
      </form>
    </div>
  );
};
