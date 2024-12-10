import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared";
import { SignIn } from "../../pages/sign-in";
import { AdminDashboard } from "../../pages/admin-dashboard";
import { ProfileDashboard } from "../../pages/profile-dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />
      },
      {
        path: "/profile",
        element: <ProfileDashboard />
      }
    ],
  },
]);
