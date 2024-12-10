import { DataTab, ProfileTab } from "../../../features";

export const Tabs = ({ isActive }) => {
  const renderTab = () => {
    switch (isActive) {
      case "Profile":
        return <ProfileTab />;
      case "Data":
        return <DataTab />;
      default:
        return <ProfileTab />;
    }
  };

  return <>{renderTab()}</>;
};
