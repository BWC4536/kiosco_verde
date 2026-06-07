import { useState } from "react";
import { Link } from "react-router";
import { useSolicitud } from "../context/SolicitudContext";
import { revistas } from "../data/revistas";
import { X, CheckCircle, BookOpen, Plus } from "lucide-react";

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
}

export function Solicitar() {
  const { seleccionadas, agregar, quitar, estaSeleccionada, limpiar } =
    useSolicitud();
  const [form, setForm] = useState<FormData>({
    nombre: "",
    correo: "",
    telefono: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validar = () => {
    const errs: Partial<FormData> = {};
    if (!form.nombre.trim()) errs.nombre = "El nombre es requerido.";
    if (!form.correo.trim()) {
      errs.correo = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      errs.correo = "Ingresá un correo válido.";
    }
    if (!form.telefono.trim()) errs.telefono = "El teléfono es requerido.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seleccionadas.length === 0) return;
    const errs = validar();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setEnviado(true);
    limpiar();
  };

  if (enviado) {
    return (
      <div
        className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="bg-white rounded-3xl p-10 shadow-sm max-w-md w-full">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#E8F5EF", color: "#007D41" }}
          >
            <CheckCircle size={32} />
          </div>
          <h2
            className="text-[#1A1A1A] mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            ¡Solicitud enviada!
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-2">
            Recibimos tu solicitud correctamente,{" "}
            <strong>{form.nombre}</strong>.
          </p>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">
            Nos pondremos en contacto con vos a{" "}
            <strong>{form.correo}</strong> o al{" "}
            <strong>{form.telefono}</strong> para coordinar la entrega.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/revistas"
              className="flex-1 py-2.5 rounded-full text-sm text-center border border-[#007D41] text-[#007D41] hover:bg-[#007D41]/5 transition-colors"
            >
              Ver más revistas
            </Link>
            <Link
              to="/"
              className="flex-1 py-2.5 rounded-full text-sm text-center text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#007D41" }}
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "#F0FAF5" }}
      >
        <p className="text-[#007D41] text-xs uppercase tracking-widest mb-2">
          Solicitud
        </p>
        <h1
          className="text-[#1A1A1A] mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
        >
          Tu Solicitud
        </h1>
        <p className="text-[#6B6B6B] text-sm max-w-md mx-auto">
          Completá tus datos para reservar tus revistas. Podés solicitar máximo
          1 unidad de cada título.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: selected magazines */}
          <div>
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Revistas seleccionadas
            </h2>

            {seleccionadas.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#F0FAF5", color: "#007D41" }}
                >
                  <BookOpen size={22} />
                </div>
                <p className="text-[#6B6B6B] text-sm mb-4 leading-relaxed">
                  Todavía no seleccionaste ninguna revista.
                </p>
                <Link
                  to="/revistas"
                  className="inline-flex items-center gap-2 text-sm text-white px-5 py-2 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: "#007D41" }}
                >
                  <Plus size={15} />
                  Explorar revistas
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {seleccionadas.map((revista) => (
                  <div
                    key={revista.id}
                    className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
                  >
                    <img
                      src={revista.imagen}
                      alt={revista.nombre}
                      className="w-14 h-18 rounded-lg object-cover flex-shrink-0"
                      style={{ height: "4.5rem" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[#1A1A1A] text-sm truncate"
                        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                      >
                        {revista.nombre}
                      </p>
                      <p className="text-[#9B9B9B] text-xs">{revista.edicion}</p>
                      <p className="text-[#007D41] text-xs">{revista.categoria}</p>
                    </div>
                    <button
                      onClick={() => quitar(revista.id)}
                      className="text-[#9B9B9B] hover:text-red-400 transition-colors flex-shrink-0 p-1"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}

                <Link
                  to="/revistas"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-[#007D41]/40 text-[#007D41] text-sm hover:bg-[#007D41]/5 transition-colors"
                >
                  <Plus size={15} />
                  Agregar más revistas
                </Link>
              </div>
            )}

            {/* Other available magazines quick-add */}
            {seleccionadas.length > 0 && (
              <div className="mt-6">
                <p className="text-[#9B9B9B] text-xs uppercase tracking-widest mb-3">
                  También podría interesarte
                </p>
                <div className="flex flex-wrap gap-2">
                  {revistas
                    .filter((r) => !estaSeleccionada(r.id))
                    .slice(0, 4)
                    .map((r) => (
                      <button
                        key={r.id}
                        onClick={() => agregar(r)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border border-[#E0E0E0] text-[#6B6B6B] hover:border-[#007D41] hover:text-[#007D41] transition-colors bg-white"
                      >
                        <Plus size={11} />
                        {r.nombre}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: form */}
          <div>
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
            >
              Tus datos
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5"
            >
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1A1A1A] text-sm">
                  Nombre completo <span className="text-[#007D41]">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: María García"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors ${
                    errors.nombre
                      ? "border-red-400 bg-red-50"
                      : "border-[#E0E0E0] bg-[#FAFAFA] focus:border-[#007D41]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                {errors.nombre && (
                  <p className="text-red-400 text-xs">{errors.nombre}</p>
                )}
              </div>

              {/* Correo */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1A1A1A] text-sm">
                  Correo electrónico <span className="text-[#007D41]">*</span>
                </label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="Ej: maria@correo.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors ${
                    errors.correo
                      ? "border-red-400 bg-red-50"
                      : "border-[#E0E0E0] bg-[#FAFAFA] focus:border-[#007D41]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                {errors.correo && (
                  <p className="text-red-400 text-xs">{errors.correo}</p>
                )}
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1A1A1A] text-sm">
                  Teléfono <span className="text-[#007D41]">*</span>
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Ej: +54 9 11 1234-5678"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm outline-none border transition-colors ${
                    errors.telefono
                      ? "border-red-400 bg-red-50"
                      : "border-[#E0E0E0] bg-[#FAFAFA] focus:border-[#007D41]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                {errors.telefono && (
                  <p className="text-red-400 text-xs">{errors.telefono}</p>
                )}
              </div>

              {/* Info box */}
              <div
                className="rounded-xl p-3 text-xs text-[#007D41] leading-relaxed"
                style={{ backgroundColor: "#E8F5EF" }}
              >
                <strong>Importante:</strong> Esto es una solicitud, no un pedido
                confirmado. Nos comunicaremos con vos para coordinar la entrega
                o retiro de tus revistas. Máximo 1 unidad por título.
              </div>

              {seleccionadas.length === 0 && (
                <p className="text-center text-[#9B9B9B] text-xs">
                  Agregá al menos 1 revista para enviar la solicitud.
                </p>
              )}

              <button
                type="submit"
                disabled={seleccionadas.length === 0}
                className="w-full py-3 rounded-full text-sm text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: "#007D41" }}
              >
                Enviar solicitud
                {seleccionadas.length > 0 &&
                  ` (${seleccionadas.length} revista${
                    seleccionadas.length !== 1 ? "s" : ""
                  })`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
