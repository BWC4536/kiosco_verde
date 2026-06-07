export interface Revista {
  id: string;
  nombre: string;
  edicion: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  stock: number;
  novedad?: boolean;
}

export const revistas: Revista[] = [
  {
    id: "1",
    nombre: "Vogue",
    edicion: "Junio 2025",
    categoria: "Alta Moda",
    descripcion:
      "La referencia definitiva de la moda de lujo internacional. Cada edición trae las últimas colecciones, reportajes de moda exclusivos y entrevistas con las figuras más influyentes del mundo fashion.",
    imagen:
      "https://images.unsplash.com/photo-1659522761084-79196b64abe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
    novedad: true,
  },
  {
    id: "2",
    nombre: "Harper's Bazaar",
    edicion: "Mayo 2025",
    categoria: "Alta Moda",
    descripcion:
      "Más de 150 años de sofisticación y elegancia en cada página. Exploración del arte, la cultura y la moda de la mano de los creativos más reconocidos del mundo.",
    imagen:
      "https://images.unsplash.com/photo-1543762446-67600aab041f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
  },
  {
    id: "3",
    nombre: "Elle",
    edicion: "Junio 2025",
    categoria: "Tendencias",
    descripcion:
      "El pulso de las tendencias globales. Elle combina moda, belleza, cultura y lifestyle con una perspectiva fresca y contemporánea para la mujer moderna.",
    imagen:
      "https://images.unsplash.com/photo-1664515226058-03952a19bd76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
    novedad: true,
  },
  {
    id: "4",
    nombre: "Cosmopolitan",
    edicion: "Mayo 2025",
    categoria: "Lifestyle",
    descripcion:
      "La guía definitiva de la mujer joven y empoderada. Moda, belleza, relaciones, carrera y mucho más en cada edición llena de energía y frescura.",
    imagen:
      "https://images.unsplash.com/photo-1627117204847-ec306fe712bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
  },
  {
    id: "5",
    nombre: "InStyle",
    edicion: "Junio 2025",
    categoria: "Celebrity & Moda",
    descripcion:
      "Donde la moda de celebrity se encuentra con el estilo accesible. Inspiración de alfombra roja adaptada al día a día, con las últimas tendencias y consejos de estilo.",
    imagen:
      "https://images.unsplash.com/photo-1575354196644-9de51010f481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
  },
  {
    id: "6",
    nombre: "Marie Claire",
    edicion: "Mayo 2025",
    categoria: "Moda Internacional",
    descripcion:
      "Una visión global de la moda con perspectiva cultural. Reportajes profundos sobre mujeres que cambian el mundo, combinados con las últimas tendencias de las capitales de la moda.",
    imagen:
      "https://images.unsplash.com/photo-1661705150795-b608b9fe58c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
    novedad: true,
  },
  {
    id: "7",
    nombre: "Glamour",
    edicion: "Junio 2025",
    categoria: "Belleza & Moda",
    descripcion:
      "Belleza, moda y estilo de vida con un toque divertido y accesible. La revista perfecta para descubrir las últimas tendencias de belleza y moda con una perspectiva optimista.",
    imagen:
      "https://images.unsplash.com/photo-1713442861325-8ac2038d3cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
  },
  {
    id: "8",
    nombre: "L'Officiel",
    edicion: "Mayo 2025",
    categoria: "Haute Couture",
    descripcion:
      "El referente de la haute couture parisina. Con más de 100 años de historia, L'Officiel es la guía más completa del lujo, la moda y la cultura de vanguardia.",
    imagen:
      "https://images.unsplash.com/photo-1771512681998-99342c9a4f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    stock: 15,
  },
];

export const categorias = [
  "Todas",
  "Alta Moda",
  "Tendencias",
  "Lifestyle",
  "Celebrity & Moda",
  "Moda Internacional",
  "Belleza & Moda",
  "Haute Couture",
];
