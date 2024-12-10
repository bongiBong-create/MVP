import { useEffect, useState } from "react";
import { Btn } from "../../../shared";

import "./index.css";
export const ProfileTab = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("http://23.111.216.140:8080/api/users");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="profile_tab">
      <ul className="profile__list">
        {users
          ? users.map((user) => (
              <li className="profile__item" key={user.id}>
                <p>Пользователь: {users[0].login}</p>
                <div className="profile__item--universities">
                  <p>Доступные университеты:</p>
                  <ul className="university__list">
                    <li>
                      ГУАП
                      <div className="btn__delete">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="16px"
                          height="16px"
                        >
                          <path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.328125 3.671875 14 4.5 14 L 10.5 14 C 11.328125 14 12 13.328125 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 5 5 L 6 5 L 6 12 L 5 12 Z M 7 5 L 8 5 L 8 12 L 7 12 Z M 9 5 L 10 5 L 10 12 L 9 12 Z" />
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
                <Btn className="small__btn">Удалить</Btn>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
