const slide = {
  "id": 24,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 7 — NOTICIAS Y PRENSA",
  "blockTag": "Bloque 7 · Prensa & Noticias",
  "title": "Base de Datos: Noticias y Categorías",
  "subtitle": "Estructura periodística y programación de publicaciones",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "1. Estructura Periodística Formal y 3FN",
      "list": [
        "Anatomía de prensa: Volanta (sección), Titulo, Copete (bajada) y Cuerpo (LONGTEXT) editorial",
        "Multimedia enriquecida: Soporte para EmbedLink (videos YouTube) y galería Noticia_Imagen",
        "Catálogo Categoria (3FN): Normalización temática (Torneos, Obras, Sociales) sin redundancia",
        "Optimización en la nube: URLs seguras HTTPS vinculadas al CDN de Cloudinary (WebP)"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "2. Programación Temporal y Seguridad",
      "list": [
        "Publicación diferida: Redacción con antelación y activación automática al cumplirse la fecha",
        "Filtro público en SQL: Estado = 'PUBLICADO' AND FechaPublicacion <= NOW()",
        "Auditoría de autor: ID_Autor vinculado a Usuario con política ON DELETE SET NULL",
        "Gobierno editorial: Creación y edición restringida a ADMIN_NOTICIAS y SUPERADMIN"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/diagrama_noticias_prensa.svg",
    "alt": "Diagrama EER de Noticias, Categorías y Prensa",
    "caption": "Esquema relacional focalizado — Noticia, Categoria (3FN), Noticia_Imagen y Publicación Diferida"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'El canal de comunicación institucional del club requirió modelar la tabla Noticia con estricto rigor periodístico: incorporamos atributos formales de prensa como Volanta para orientar la sección, Titulo, Copete o bajada como resumen para las tarjetas de portada, Cuerpo de tipo LONGTEXT para artículos extensos con formato enriquecido, ImagenDestacada para la portada y EmbedLink para videos de YouTube incrustados. Normalizamos las etiquetas temáticas en la tabla catálogo Categoria en 3FN (Torneos, Obras, Sociales, Beneficios) para evitar redundancia textual. Asimismo, soportamos la publicación diferida: mediante el atributo FechaPublicacion y el estado BORRADOR o PUBLICADO, la subcomisión de prensa puede redactar comunicados con días de antelación, garantizando que el portal público solo proyecte aquellas notas donde FechaPublicacion sea menor o igual a NOW(), sin requerir tareas programadas adicionales.'",
  "handover": "Pase a Germán: Germán detallará la API editorial, el procesamiento de imágenes con Multer y Cloudinary, y la seguridad con sanitización contra XSS."
};
export default slide;
