const slide = {
  "id": 12,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 3 — AUTENTICACIÓN Y REGISTRO",
  "blockTag": "Bloque 3 · Autenticación",
  "title": "Base de Datos: Autenticación y Roles",
  "subtitle": "Desacoplamiento de cuentas, integridad y hashing seguro",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "Desacoplamiento Usuario / Socio",
      "list": [
        "Usuario: credenciales",
        "Socio: ficha personal",
        "Rol y Usuario_Rol"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Reglas de Integridad",
      "list": [
        "Hash Bcrypt",
        "Unique en DNI y email",
        "Credenciales nunca en texto plano"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/elenio_image4.png",
    "alt": "Diagrama EER Módulo Autenticación",
    "caption": "Modelo relacional de autenticación y roles"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> En autenticación, desacoplamos la tabla Usuario de la tabla Socio...",
  "handover": "Pase a Germán: Germán explicará la implementación de la API de autenticación."
};
export default slide;
