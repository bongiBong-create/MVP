import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared";
import { AdminDashboard } from "../../pages/admin-dashboard";
import { ProfileDashboard } from "../../pages/profile-dashboard";
import { AuthorizationPage } from "../../pages/authorization-page/ui";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AuthorizationPage />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/profile",
        element: <ProfileDashboard />,
      },
    ],
  },
]);
