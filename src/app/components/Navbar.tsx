import { Link, NavLink } from "react-router";
import { ShoppingBag, Menu, X, Facebook } from "lucide-react";
import { useState } from "react";
import { useSolicitud } from "../context/SolicitudContext";
import logoImg from "../../imports/image.png";

export function Navbar() {
  const { seleccionadas } = useSolicitud();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/revistas", label: "Revistas" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-[#F8F4EE] border-b border-[#007D41]/10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Kiosco Verde"
              className="h-10 w-10 rounded-lg object-cover"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-[#007D41] border-b border-[#007D41] pb-0.5"
                      : "text-[#3A3A3A] hover:text-[#007D41]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/kiosco.verde.961/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3A3A3A] hover:text-[#007D41] transition-colors hidden md:block"
            >
              <Facebook size={18} />
            </a>

            <Link
              to="/solicitar"
              className="relative text-[#3A3A3A] hover:text-[#007D41] transition-colors"
            >
              <ShoppingBag size={20} />
              {seleccionadas.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#007D41] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center leading-none">
                  {seleccionadas.length}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-[#3A3A3A] hover:text-[#007D41] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F4EE] border-t border-[#007D41]/10 px-4 pb-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm border-b border-[#007D41]/10 last:border-0 transition-colors ${
                  isActive ? "text-[#007D41]" : "text-[#3A3A3A]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
