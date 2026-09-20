const slide = {
  "id": 15,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 4 — GESTIÓN DE SOCIOS",
  "blockTag": "Bloque 4 · Padrón Social",
  "title": "Base de Datos: Socios y Membresía",
  "subtitle": "Modelo normalizado 3FN y optimización con FULLTEXT",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "Estructura Relacional",
      "list": [
        "Socio",
        "Miembro_Familiar",
        "Parentesco",
        "Solicitud_Cambio_Datos"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Optimización",
      "text": "Índice FULLTEXT en nombre, apellido y DNI para búsquedas instantáneas."
    }
  ],
  "image": {
    "src": "assets_presentacion/elenio_image9.png",
    "alt": "Normalización de Socios",
    "caption": "Modelo de socios y miembros familiares"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> El padrón de socios está normalizado en 3FN...",
  "handover": "Pase a Germán: Germán detallará las reglas de negocio de la API de socios."
};
export default slide;
