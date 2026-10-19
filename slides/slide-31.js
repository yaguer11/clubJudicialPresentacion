const slide = {
  "id": 31,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 7 — NOTICIAS Y PRENSA",
  "blockTag": "Bloque 7 · Prensa & Noticias",
  "title": "Frontend: Portada y Portal de Noticias",
  "subtitle": "La cara pública del club y el editor de prensa",
  "routes": [
    "/home",
    "/noticias/:id",
    "/admin/noticias"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_home.jpg",
      "alt": "Portada del sitio"
    },
    {
      "src": "assets_presentacion/frontend/fe_noticia.jpg",
      "alt": "Detalle de noticia"
    },
    {
      "src": "assets_presentacion/frontend/fe_admin_noticias.jpg",
      "alt": "Gestión de noticias"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'La portada es la cara pública del club: el hero, los cumpleaños del día, la bienvenida a los socios recién aprobados y las últimas noticias publicadas. La nota respeta la estructura periodística, con volanta, copete, galería y video. Y el editor del panel maneja los estados borrador, programado y publicado, con categorías e imágenes en Cloudinary.'",
  "handover": "Pase a Matías: Entramos al Bloque 8 de Testing y Despliegue. Yo iniciaré con la suite de Playwright."
};
export default slide;
