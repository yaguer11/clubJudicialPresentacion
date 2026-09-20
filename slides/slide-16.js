const slide = {
  "id": 16,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 4 — GESTIÓN DE SOCIOS",
  "blockTag": "Bloque 4 · Padrón Social",
  "title": "Backend: API de Gestión de Socios",
  "subtitle": "Reglas de negocio, aprobación, notificaciones y validación",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "Reglas de Negocio",
      "list": [
        "Estado pendiente",
        "Aprobación o rechazo",
        "Solicitud de cambio",
        "Email con Resend"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Endpoints",
      "code": "<span class=\"method m-get\">GET</span> /api/socios<br><span class=\"method m-patch\">PATCH</span> /api/socios/:id/aprobar<br><span class=\"method m-post\">POST</span> /api/socios/solicitud-cambio"
    }
  ]
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> En la API de socios, el registro inicial nace en estado Pendiente...",
  "handover": "Pase a Matías: Matías mostrará las pantallas del panel de socios y perfil."
};
export default slide;
