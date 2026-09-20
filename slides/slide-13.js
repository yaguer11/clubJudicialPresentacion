const slide = {
  "id": 13,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 3 — AUTENTICACIÓN Y REGISTRO",
  "blockTag": "Bloque 3 · Autenticación",
  "title": "Backend: API de Autenticación",
  "subtitle": "Esquema de doble token JWT y autorización RBAC",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "Doble Token",
      "list": [
        "Access token corto",
        "Refresh token de 7 días",
        "BcryptJS para contraseña"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Endpoints",
      "code": "<span class=\"method m-post\">POST</span> /api/auth/login-socio<br><span class=\"method m-post\">POST</span> /api/auth/login-admin<br><span class=\"method m-post\">POST</span> /api/auth/refresh-token"
    }
  ]
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> La API de autenticación implementa un esquema de doble token JWT...",
  "handover": "Pase a Matías: Matías mostrará cómo consume el frontend esta capa de autenticación."
};
export default slide;
