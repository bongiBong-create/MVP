import { useNavigate } from "react-router-dom";
import { ComboBox, HeaderProfile } from "../../../features";

import "./index.css";

export const ProfileDashboard = () => {
  const navigate = useNavigate();

  const handlerLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderProfile onClick={handlerLogOut} />
      <section className="profile">
        <ComboBox />
        <div className="graphic">
          <h1>graphic</h1>
        </div>
      </section>
    </>
  );
};
