import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Revistas } from "./pages/Revistas";
import { Solicitar } from "./pages/Solicitar";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "revistas", Component: Revistas },
      { path: "solicitar", Component: Solicitar },
      { path: "nosotros", Component: Nosotros },
      { path: "contacto", Component: Contacto },
      { path: "*", Component: NotFound },
    ],
  },
]);
