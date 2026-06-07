import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 text-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <p
        className="text-[#007D41] mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "6rem",
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        className="text-[#1A1A1A] mb-3"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
      >
        Página no encontrada
      </h1>
      <p className="text-[#6B6B6B] text-sm mb-8 max-w-xs leading-relaxed">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link
        to="/"
        className="px-8 py-3 rounded-full text-sm text-white transition-all hover:opacity-90"
        style={{ backgroundColor: "#007D41" }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
