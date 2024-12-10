import { AuthProvider } from "./context/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./global.css";

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
