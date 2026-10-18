const slide = {
  "id": 23,
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
  "content": "<strong>Qué decir:</strong> 'La API asegura la disponibilidad con una transacción SQL: si dos pedidos llegan al mismo turno, el primero se confirma y el segundo hace rollback, así no hay solapamientos. La seña vence en 1 hora, o 24 horas para un invitado aprobado; si no se paga, el cron expireAlquileres cancela la reserva y libera el horario. Para invitados generamos un TokenSeguimiento único que les permite gestionar su turno sin crear cuenta. Al cancelar, el turno se libera al instante. No hay reembolsos automáticos: con menos de 48 horas la seña queda retenida, y el único reintegro sistematizado es el seguro de depósito, que el administrador devuelve tras revisar las instalaciones.'",
  "handover": "Pase a Matías: Matías presentará el flujo interactivo de reserva en la web."
};
export default slide;
