const slide = {
  "id": 25,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 7 — NOTICIAS Y PRENSA",
  "blockTag": "Bloque 7 · Prensa & Noticias",
  "title": "Backend: API de Prensa y Cloudinary",
  "subtitle": "Subida en memoria, optimización en la nube y sanitización XSS",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "Gestión Multimedia",
      "list": [
        "Multer en memoria",
        "Cloudinary",
        "Transformación a WebP",
        "Sanitización XSS"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Endpoints",
      "code": "<span class=\"method m-get\">GET</span> /api/noticias<br><span class=\"method m-post\">POST</span> /api/noticias<br><span class=\"method m-patch\">PATCH</span> /api/noticias/:id"
    }
  ]
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> Conectamos Multer en memoria con Cloudinary...",
  "handover": "Pase a Matías: Matías mostrará la interfaz editorial y la presentación en el home."
};
export default slide;
