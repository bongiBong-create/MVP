import { UniversitiesList } from "./universities-list";
import { UserList } from "./user-list";

import "./index.css";

export const ProfileTab = () => {
  return (
    <div className="profile__container">
      <UserList />
      <UniversitiesList />
    </div>
  );
};
