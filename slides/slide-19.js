const slide = {
  "id": 19,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Backend: API de Alquileres y Turnos",
  "subtitle": "Concurrencia atómica, token de invitado y reintegros",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "Motor de Reservas",
      "list": [
        "Transacciones SQL",
        "TokenSeguimiento para invitados",
        "Cancelación con devolución"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Endpoints",
      "code": "<span class=\"method m-get\">GET</span> /api/espacios/:id/horarios-disponibles<br><span class=\"method m-post\">POST</span> /api/alquileres<br><span class=\"method m-patch\">PATCH</span> /api/alquileres/:id/cancelar"
    }
  ]
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> La API asegura la disponibilidad atómica...",
  "handover": "Pase a Matías: Matías presentará el flujo interactivo de reserva en la web."
};
export default slide;
