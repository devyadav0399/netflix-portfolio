import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Browse from "./pages/Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Browse />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
