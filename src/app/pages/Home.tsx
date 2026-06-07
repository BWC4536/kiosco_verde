import { Link } from "react-router";
import { revistas } from "../data/revistas";
import { useSolicitud } from "../context/SolicitudContext";
import { CheckCircle, BookOpen, FileText } from "lucide-react";
import logoImg from "../../imports/image.png";

export function Home() {
  const { agregar, quitar, estaSeleccionada } = useSolicitud();
  const destacadas = revistas.filter((r) => r.novedad).slice(0, 4);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "#007D41" }}
        />
        <div
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"
          style={{ backgroundColor: "#007D41" }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
          <img
            src={logoImg}
            alt="Kiosco Verde"
            className="w-36 h-36 rounded-2xl object-cover shadow-lg"
          />

          <div>
            <p
              className="text-[#007D41] text-sm uppercase tracking-[0.5em] mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kiosco de revistas
            </p>
            <h1
              className="text-[#1A1A1A] mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: "1.15",
                fontWeight: 500,
              }}
            >
              Revistas de moda
            </h1>
            <p
              className="text-[#007D41]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "1.2",
              }}
            >
              a tu alcance
            </p>
          </div>

          <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm">
            Explorá nuestro catálogo de las mejores revistas de moda del mundo y
            solicitá tu ejemplar favorito.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Link
              to="/revistas"
              className="px-7 py-3 rounded-full text-sm text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#007D41" }}
            >
              Ver revistas
            </Link>
            <Link
              to="/solicitar"
              className="px-7 py-3 rounded-full text-sm border transition-all hover:bg-[#007D41]/5 active:scale-95"
              style={{ borderColor: "#007D41", color: "#007D41" }}
            >
              Mi solicitud
            </Link>
            <a
              href="#como-funciona"
              className="px-7 py-3 rounded-full text-sm border border-[#3A3A3A]/20 text-[#6B6B6B] transition-all hover:bg-[#3A3A3A]/5 active:scale-95"
            >
              Cómo funciona
            </a>
          </div>

          <p className="text-[#9B9B9B] text-xs">
            Stock de 15 unidades por edición · Solo solicitudes, sin costo
          </p>
        </div>
      </section>

      {/* Novedades */}
      {destacadas.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">
              Últimas llegadas
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              Novedades
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destacadas.map((revista) => {
              const seleccionada = estaSeleccionada(revista.id);
              return (
                <div
                  key={revista.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={revista.imagen}
                      alt={revista.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-xs bg-[#007D41] text-white px-2 py-0.5 rounded-full">
                      Novedad
                    </span>
                    <div className="absolute top-3 right-3 text-xs bg-white/90 text-[#6B6B6B] px-2 py-0.5 rounded-full">
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
                    <button
                      onClick={() =>
                        seleccionada ? quitar(revista.id) : agregar(revista)
                      }
                      className="w-full py-2 rounded-full text-xs transition-all active:scale-95"
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

          <div className="text-center mt-10">
            <Link
              to="/revistas"
              className="inline-flex items-center gap-2 text-sm text-[#007D41] border border-[#007D41] px-6 py-2.5 rounded-full hover:bg-[#007D41]/5 transition-colors"
            >
              Ver catálogo completo
            </Link>
          </div>
        </section>
      )}

      {/* Cómo funciona */}
      <section
        id="como-funciona"
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F0FAF5" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">Simple y rápido</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              ¿Cómo funciona?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={28} />,
                paso: "01",
                titulo: "Elegí tu revista",
                desc: "Explorá nuestro catálogo de revistas de moda internacionales y elegí las que querés.",
              },
              {
                icon: <FileText size={28} />,
                paso: "02",
                titulo: "Completá el formulario",
                desc: "Ingresá tu nombre, correo y teléfono. Podés solicitar hasta 1 unidad de cada título.",
              },
              {
                icon: <CheckCircle size={28} />,
                paso: "03",
                titulo: "Confirmamos tu solicitud",
                desc: "Te contactamos para coordinar la entrega o retiro de tu ejemplar en el kiosco.",
              },
            ].map(({ icon, paso, titulo, desc }) => (
              <div
                key={paso}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E8F5EF", color: "#007D41" }}
                >
                  {icon}
                </div>
                <p className="text-[#007D41] text-xs tracking-widest mb-2">{paso}</p>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    color: "#1A1A1A",
                  }}
                >
                  {titulo}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-[#1A1A1A] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            }}
          >
            ¿Lista para tu próxima lectura?
          </h2>
          <p className="text-[#6B6B6B] text-sm mb-8 leading-relaxed">
            Explorá las mejores revistas de moda del mundo y hacé tu solicitud sin costo.
          </p>
          <Link
            to="/revistas"
            className="inline-block px-10 py-3.5 rounded-full text-sm text-white transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#007D41" }}
          >
            Explorar revistas
          </Link>
        </div>
      </section>
    </div>
  );
}
