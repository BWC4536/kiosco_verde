import { useState } from "react";
import { Mail, Phone, Facebook, MapPin, CheckCircle } from "lucide-react";

export function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [errors, setErrors] = useState<typeof form>({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = { nombre: "", correo: "", mensaje: "" };
    if (!form.nombre.trim()) errs.nombre = "El nombre es requerido.";
    if (!form.correo.trim()) errs.correo = "El correo es requerido.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      errs.correo = "Correo inválido.";
    if (!form.mensaje.trim()) errs.mensaje = "El mensaje es requerido.";
    if (errs.nombre || errs.correo || errs.mensaje) {
      setErrors(errs);
      return;
    }
    setEnviado(true);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "#F0FAF5" }}
      >
        <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">
          Hablemos
        </p>
        <h1
          className="text-[#1A1A1A] mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Contacto
        </h1>
        <p className="text-[#6B6B6B] text-sm max-w-md mx-auto leading-relaxed">
          ¿Tienes alguna pregunta o sugerencia? Estamos para ayudarte.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Información de contacto
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              {[
                {
                  icon: <Mail size={18} />,
                  titulo: "Correo",
                  valor: "hola@kioscoverde.com",
                  href: "mailto:hola@kioscoverde.com",
                },
                {
                  icon: <Phone size={18} />,
                  titulo: "Teléfono",
                  valor: "000000000",
                  href: "tel:000000000",
                },
                {
                  icon: <Facebook size={18} />,
                  titulo: "Facebook",
                  valor: "Kiosco Verde Avda",
                  href: "https://www.facebook.com/kiosco.verde.961/?locale=es_ES",
                },
                {
                  icon: <MapPin size={18} />,
                  titulo: "Ubicación",
                  valor: "Buenos Aires, Argentina",
                  href: null,
                },
              ].map(({ icon, titulo, valor, href }) => (
                <div key={titulo} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#E8F5EF", color: "#007D41" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-[#9B9B9B] text-xs mb-0.5">{titulo}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-[#1A1A1A] text-sm hover:text-[#007D41] transition-colors"
                      >
                        {valor}
                      </a>
                    ) : (
                      <p className="text-[#1A1A1A] text-sm">{valor}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#F0FAF5" }}
            >
              <p className="text-[#007D41] text-xs uppercase tracking-widest mb-3">
                Horarios
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { dia: "Lunes a Viernes", horario: "9:00 – 20:00" },
                  { dia: "Sábados", horario: "10:00 – 18:00" },
                  { dia: "Domingos", horario: "Cerrado" },
                ].map(({ dia, horario }) => (
                  <div
                    key={dia}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-[#6B6B6B]">{dia}</span>
                    <span
                      className={horario === "Cerrado" ? "text-[#9B9B9B]" : "text-[#1A1A1A]"}
                    >
                      {horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Envianos un mensaje
            </h2>

            {enviado ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E8F5EF", color: "#007D41" }}
                >
                  <CheckCircle size={28} />
                </div>
                <h3
                  className="text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  Gracias por escribirnos, <strong>{form.nombre}</strong>. Nos
                  pondremos en contacto a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5"
              >
                {/* Nombre */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1A1A1A] text-sm">
                    Nombre <span className="text-[#007D41]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors ${
                      errors.nombre
                        ? "border-red-400 bg-red-50"
                        : "border-[#E0E0E0] bg-[#FAFAFA] focus:border-[#007D41]"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-xs">{errors.nombre}</p>
                  )}
                </div>

                {/* Correo */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1A1A1A] text-sm">
                    Correo <span className="text-[#007D41]">*</span>
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors ${
                      errors.correo
                        ? "border-red-400 bg-red-50"
                        : "border-[#E0E0E0] bg-[#FAFAFA] focus:border-[#007D41]"
                    }`}
                  />
                  {errors.correo && (
                    <p className="text-red-400 text-xs">{errors.correo}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1A1A1A] text-sm">
                    Mensaje <span className="text-[#007D41]">*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors resize-none ${
                      errors.mensaje
                        ? "border-red-400 bg-red-50"
                        : "border-[#E0E0E0] bg-[#FAFAFA] focus:border-[#007D41]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                  {errors.mensaje && (
                    <p className="text-red-400 text-xs">{errors.mensaje}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-sm text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: "#007D41" }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-14 w-full h-[400px] rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://maps.google.com/maps?q=37.2876809,-6.0529084&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
