import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./global.css";

export const App = () => {
  return <RouterProvider router={router} />;
};
