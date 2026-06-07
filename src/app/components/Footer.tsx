import { Link } from "react-router";
import { Facebook, Mail, Phone } from "lucide-react";
import logoImg from "../../imports/image.png";

export function Footer() {
  return (
    <footer
      className="bg-[#007D41] text-white mt-auto"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Kiosco Verde"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <span className="text-white/90 text-sm leading-tight">
                Revistas de moda<br />a tu alcance
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Tu kiosco de revistas de moda de confianza. Solicita tu ejemplar favorito y lo reservamos para ti.
            </p>
            <a
              href="https://www.facebook.com/kiosco.verde.961/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm w-fit"
            >
              <Facebook size={16} />
              Kiosco Verde Avda
            </a>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Navegación</p>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Inicio" },
                { to: "/revistas", label: "Revistas" },
                { to: "/solicitar", label: "Solicitar" },
                { to: "/nosotros", label: "Nosotros" },
                { to: "/contacto", label: "Contacto" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">Contacto</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hola@kioscoverde.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail size={15} />
                  hola@kioscoverde.com
                </a>
              </li>
              <li>
                <a
                  href="tel:000000000"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone size={15} />
                  000000000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Kiosco Verde. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Stock sujeto a disponibilidad · Solo solicitudes, no pedidos en línea
          </p>
        </div>
      </div>
    </footer>
  );
}
