const slide = {
  "id": 29,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 7 — NOTICIAS Y PRENSA",
  "blockTag": "Bloque 7 · Prensa & Noticias",
  "title": "Base de Datos: Noticias y Categorías",
  "subtitle": "La estructura de una nota periodística, sus fotos y su publicación",
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
  "content": "<strong>Qué decir:</strong> 'La tabla Noticia sigue la estructura de un diario: volanta, título, copete y cuerpo, más imagen destacada y un link de video. Las categorías están en un catálogo, y RESTRICT impide borrar una categoría con noticias. Las fotos de la galería van en Noticia_Imagen con su orden; guardamos la URL y el identificador de Cloudinary para poder borrarlas de la nube. El autor apunta a Usuario con SET NULL: si se da de baja esa cuenta, la noticia sigue publicada. Y con el estado y la fecha de publicación, prensa puede dejar notas en borrador o programadas; el portal solo muestra las publicadas.'",
  "handover": "Pase a Germán: Germán detallará la API editorial, el procesamiento de imágenes con Multer y Cloudinary, y la seguridad con sanitización contra XSS."
};
export default slide;
