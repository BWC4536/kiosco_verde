import { Link } from "react-router";
import logoImg from "../../imports/image.png";

export function Nosotros() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "#F0FAF5" }}
      >
        <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">
          Quiénes somos
        </p>
        <h1
          className="text-[#1A1A1A] mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Nosotros
        </h1>
        <p className="text-[#6B6B6B] text-sm max-w-md mx-auto leading-relaxed">
          Más que un kiosco, somos un espacio de moda, cultura y estilo.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#007D41] text-xs uppercase tracking-widest mb-3">
              Nuestra historia
            </p>
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              Un kiosco de barrio enamorado de las revistas de moda.
            </h2>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
              Llevamos años cuidando cada portada como si fuera la primera, y ahora queremos compartirlas contigo.
            </p>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
              Cada número de nuestra estantería está pensado para inspirarte. Vendemos una unidad por persona, a solicitud, mientras dure el stock.
            </p>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Gracias por pasarte. Esperamos que encuentres una revista que te enamore.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div
              className="w-48 h-48 rounded-3xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#007D41" }}
            >
              <img
                src={logoImg}
                alt="Kiosco Verde"
                className="w-40 h-40 rounded-2xl object-cover"
              />
            </div>
            <p
              className="mt-6 text-center text-[#6B6B6B] text-sm italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "La moda es el arte que llevamos puesto"
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2
          className="text-[#1A1A1A] mb-4"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          ¿Quieres conocer nuestro catálogo?
        </h2>
        <p className="text-[#6B6B6B] text-sm mb-8">
          Explora todas las revistas disponibles y haz tu solicitud sin costo.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/revistas"
            className="px-8 py-3 rounded-full text-sm text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#007D41" }}
          >
            Ver revistas
          </Link>
          <Link
            to="/contacto"
            className="px-8 py-3 rounded-full text-sm border text-[#007D41] hover:bg-[#007D41]/5 transition-colors"
            style={{ borderColor: "#007D41" }}
          >
            Contactarnos
          </Link>
        </div>
      </section>
    </div>
  );
}
