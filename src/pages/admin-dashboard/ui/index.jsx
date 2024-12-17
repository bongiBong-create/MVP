import { useState } from "react";
import { Header } from "../../../features";
import { Tabs } from "../../../widgets";

import "./index.css";

export const AdminDashboard = () => {
  const [isActive, setIsActive] = useState("profiles");

  return (
    <>
      <Header setIsActive={setIsActive} />
      <section className="admin">
        <Tabs isActive={isActive} />
      </section>
    </>
  );
};
