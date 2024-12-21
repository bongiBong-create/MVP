import { useNavigate } from "react-router-dom";
import { ComboBox, HeaderProfile } from "../../../features";
import { Chart } from "../../../shared";

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

          <Chart chartParams={[200, 300, 400]} />
        </div>
      </section>
    </>
  );
};
