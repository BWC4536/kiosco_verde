import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SolicitudProvider } from "./context/SolicitudContext";

export default function App() {
  return (
    <SolicitudProvider>
      <RouterProvider router={router} />
    </SolicitudProvider>
  );
}
