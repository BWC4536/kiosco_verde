import { Link } from "react-router";
import { Heart, Leaf, Star } from "lucide-react";
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
              Nacimos del amor por la moda y la lectura
            </h2>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
              Kiosco Verde nació con una misión simple: acercar las mejores
              revistas de moda internacionales a quienes las aprecian. En un
              mundo donde la información digital abunda, creemos que el placer de
              hojear una revista impresa es insuperable.
            </p>
            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
              Somos un pequeño equipo apasionado por la moda, el diseño y la
              cultura. Curada nuestra selección con cuidado, priorizando revistas
              de alta calidad editorial que inspiran y emocionan.
            </p>
            <p className="text-[#6B6B6B] text-sm leading-relaxed">
              Nuestro sistema de solicitudes permite que puedas reservar tus
              ejemplares favoritos sin complicaciones, y nosotros nos encargamos
              del resto.
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

      {/* Values */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F0FAF5" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">
              Lo que nos mueve
            </p>
            <h2
              className="text-[#1A1A1A]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Nuestros valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart size={26} />,
                titulo: "Pasión",
                desc: "Seleccionamos cada revista con amor y criterio editorial. Solo trabajamos con publicaciones que genuinamente nos emocionan.",
              },
              {
                icon: <Leaf size={26} />,
                titulo: "Sostenibilidad",
                desc: "Apostamos por un modelo de solicitudes que evita el desperdicio de stock, asegurando que cada ejemplar llegue a quien realmente lo desea.",
              },
              {
                icon: <Star size={26} />,
                titulo: "Calidad",
                desc: "Trabajamos con las revistas de moda más prestigiosas del mundo, garantizando contenido de primer nivel en cada edición.",
              },
            ].map(({ icon, titulo, desc }) => (
              <div
                key={titulo}
                className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E8F5EF", color: "#007D41" }}
                >
                  {icon}
                </div>
                <h3
                  className="text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {titulo}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
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
          ¿Querés conocer nuestro catálogo?
        </h2>
        <p className="text-[#6B6B6B] text-sm mb-8">
          Explorá todas las revistas disponibles y hacé tu solicitud sin costo.
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
