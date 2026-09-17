export type ServiceItem = {
  /** Clave de traducción de la descripción del ítem. Los nombres de servicio
   *  se mantienen en inglés en los tres idiomas: funcionan como nombre de producto. */
  id: string;
  name: string;
  price: string;
  /** Unidad traducible del precio (por pieza / por slide). */
  unit?: "piece" | "slide";
};

export type ServiceArea = {
  id: "identidad" | "digital" | "audiovisual" | "creativa";
  number: string;
  range: string;
  items: ServiceItem[];
};

export type Package = {
  id: string;
  name: string;
  price: string;
  featured?: boolean;
};

export type Project = {
  id: string;
  /** Reemplazar por las piezas reales de portafolio manteniendo la ruta. */
  image: string;
  /** Proporción de la celda en la grilla bento. */
  span: "tall" | "wide" | "square";
};

export type ProcessStep = {
  id: string;
  number: string;
  name: string;
};
