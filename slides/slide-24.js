const slide = {
  "id": 24,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Frontend: Catálogo y Reserva de Espacios",
  "subtitle": "Socios e invitados reservan y pagan online",
  "routes": [
    "/espacios",
    "/espacios/:id/reservar",
    "/alquiler-guest/:token",
    "/pagos-alquileres/…"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_reservar.jpg",
      "alt": "Wizard de reserva con turnos"
    },
    {
      "src": "assets_presentacion/frontend/fe_espacios.jpg",
      "alt": "Catálogo de espacios"
    },
    {
      "src": "assets_presentacion/frontend/fe_pago_alq_pending.png",
      "alt": "Retorno de pago pendiente de alquiler"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Desde el catálogo cualquiera puede reservar. La reserva es un wizard cuyos pasos se arman según el caso: si el espacio no tiene accesorios no aparece Adicionales, y Tus Datos solo aparece para invitados o cuando hace falta un CBU para devolver el seguro. El calendario deshabilita los días sin turnos y las fechas completas, y el total se calcula con la tarifa de socio o de invitado. Un invitado sin cuenta sigue su alquiler con un link con token y paga por MercadoPago; por eso esas páginas de retorno son públicas.'",
  "handover": "Sigo yo: qué pasa con la reserva una vez hecha, del lado del socio y del panel."
};
export default slide;
