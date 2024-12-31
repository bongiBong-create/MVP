import { useNavigate } from "react-router-dom";
import { ComboBox, HeaderProfile } from "../../../features";
import { ButtonPdf } from "../../../features/buttonPDF/ui";
import { Charts } from "../../../widgets/ui/charts";

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
        <ButtonPdf />
        <div id="graphic" className="graphic">
          <h1>TITLE</h1>
          <Charts />
        </div>
      </section>
    </>
  );
};
