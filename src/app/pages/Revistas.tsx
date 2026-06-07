import { useState } from "react";
import { Link } from "react-router";
import { revistas, categorias } from "../data/revistas";
import { useSolicitud } from "../context/SolicitudContext";
import { ShoppingBag } from "lucide-react";

export function Revistas() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const { agregar, quitar, estaSeleccionada, seleccionadas } = useSolicitud();

  const filtradas =
    categoriaActiva === "Todas"
      ? revistas
      : revistas.filter((r) => r.categoria === categoriaActiva);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "#F0FAF5" }}
      >
        <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">
          Catálogo
        </p>
        <h1
          className="text-[#1A1A1A] mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Nuestras Revistas
        </h1>
        <p className="text-[#6B6B6B] text-sm max-w-md mx-auto leading-relaxed">
          Seleccioná las revistas que querés y sumalas a tu solicitud. Stock de 15
          unidades por edición.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className="px-4 py-1.5 rounded-full text-xs transition-all active:scale-95"
              style={
                categoriaActiva === cat
                  ? { backgroundColor: "#007D41", color: "#fff" }
                  : {
                      backgroundColor: "white",
                      color: "#6B6B6B",
                      border: "1px solid #E0E0E0",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtradas.map((revista) => {
            const seleccionada = estaSeleccionada(revista.id);
            return (
              <div
                key={revista.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={revista.imagen}
                    alt={revista.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {revista.novedad && (
                    <span className="absolute top-3 left-3 text-xs bg-[#007D41] text-white px-2 py-0.5 rounded-full">
                      Novedad
                    </span>
                  )}
                  <div className="absolute top-3 right-3 text-xs bg-white/90 text-[#6B6B6B] px-2 py-0.5 rounded-full shadow-sm">
                    Stock: {revista.stock}
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[#007D41] text-xs mb-0.5">{revista.categoria}</p>
                  <h3
                    className="text-[#1A1A1A] mb-0.5"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                  >
                    {revista.nombre}
                  </h3>
                  <p className="text-[#9B9B9B] text-xs mb-3">{revista.edicion}</p>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed mb-4 line-clamp-3">
                    {revista.descripcion}
                  </p>
                  <button
                    onClick={() =>
                      seleccionada ? quitar(revista.id) : agregar(revista)
                    }
                    className="w-full py-2 rounded-full text-xs font-medium transition-all active:scale-95"
                    style={
                      seleccionada
                        ? {
                            backgroundColor: "#E8F5EF",
                            color: "#007D41",
                            border: "1px solid #007D41",
                          }
                        : {
                            backgroundColor: "#007D41",
                            color: "#fff",
                          }
                    }
                  >
                    {seleccionada ? "✓ Agregada" : "Agregar a solicitud"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filtradas.length === 0 && (
          <div className="text-center py-20 text-[#9B9B9B]">
            No hay revistas en esta categoría.
          </div>
        )}
      </div>

      {/* Floating solicitud bar */}
      {seleccionadas.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Link
            to="/solicitar"
            className="flex items-center gap-3 px-6 py-3 rounded-full text-white shadow-xl transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#007D41" }}
          >
            <ShoppingBag size={18} />
            <span className="text-sm">
              Solicitar {seleccionadas.length} revista
              {seleccionadas.length !== 1 ? "s" : ""}
            </span>
            <span className="bg-white text-[#007D41] text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {seleccionadas.length}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
