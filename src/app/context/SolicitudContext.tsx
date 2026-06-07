import { createContext, useContext, useState } from "react";
import type { Revista } from "../data/revistas";

interface SolicitudContextType {
  seleccionadas: Revista[];
  agregar: (revista: Revista) => void;
  quitar: (id: string) => void;
  limpiar: () => void;
  estaSeleccionada: (id: string) => boolean;
}

const SolicitudContext = createContext<SolicitudContextType | null>(null);

export function SolicitudProvider({ children }: { children: React.ReactNode }) {
  const [seleccionadas, setSeleccionadas] = useState<Revista[]>([]);

  const agregar = (revista: Revista) => {
    setSeleccionadas((prev) => {
      if (prev.find((r) => r.id === revista.id)) return prev;
      return [...prev, revista];
    });
  };

  const quitar = (id: string) => {
    setSeleccionadas((prev) => prev.filter((r) => r.id !== id));
  };

  const limpiar = () => setSeleccionadas([]);

  const estaSeleccionada = (id: string) =>
    seleccionadas.some((r) => r.id === id);

  return (
    <SolicitudContext.Provider
      value={{ seleccionadas, agregar, quitar, limpiar, estaSeleccionada }}
    >
      {children}
    </SolicitudContext.Provider>
  );
}

export function useSolicitud() {
  const ctx = useContext(SolicitudContext);
  if (!ctx) throw new Error("useSolicitud must be used within SolicitudProvider");
  return ctx;
}
