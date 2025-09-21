export interface Department {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  isVisible: boolean;
}

export const departments: Department[] = [
  {
    id: 1,
    imageSrc: "/department-1.svg",
    imageAlt: "Diseño de Identidad Visual",
    title: "Diseño de Identidad Visual",
    description: "Creamos elementos visuales que representan la esencia de tu marca, incluyendo logotipos, paletas de colores, tipografías y otros gráficos que comunican la personalidad y los valores de la empresa.",
    isVisible: true
  },
  {
    id: 2,
    imageSrc: "/department-2.svg",
    imageAlt: "Diseño Editorial",
    title: "Diseño Editorial",
    description: "Nos encargamos de la creación y maquetación de publicaciones digitales, como revistas, catálogos, menús, etc., enfocándonos en la tipografía, las imágenes y el diseño del contenido para mejorar la legibilidad y la estética.",
    isVisible: true
  },
  {
    id: 3,
    imageSrc: "/department-3.svg",
    imageAlt: "Diseño de Interfaz",
    title: "Diseño de Interfaz",
    description: "Diseñamos interfaces digitales (como aplicaciones y sitios web) que facilitan la interacción del usuario con el producto, priorizando la usabilidad, accesibilidad y estética.",
    isVisible: false
  },
  {
    id: 4,
    imageSrc: "/department-4.svg",
    imageAlt: "Marketing y Publicidad",
    title: "Marketing y Publicidad",
    description: "Realizamos estrategias y técnicas utilizadas para promocionar productos o servicios a través de plataformas digitales, incluidas redes sociales y correos electrónicos, con el objetivo de atraer y retener clientes.",
    isVisible: false
  }
];

