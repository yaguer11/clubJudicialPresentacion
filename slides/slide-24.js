const slide = {
  "id": 24,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Frontend: Espacios y Reservas",
  "subtitle": "Catálogo público, wizard de reserva para socios e invitados y gestión desde el panel",
  "routes": [
    "/espacios",
    "/espacios/:id/reservar",
    "/mis-alquileres",
    "/alquiler-guest/:token",
    "/admin/alquileres",
    "/admin/espacios",
    "/admin/espacios/:id/editar"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_reservar.jpg",
      "alt": "Wizard de reserva con turnos"
    },
    {
      "src": "assets_presentacion/frontend/fe_mis_alquileres.png",
      "alt": "Mis reservas del socio"
    },
    {
      "src": "assets_presentacion/frontend/fe_admin_alquileres.png",
      "alt": "Gestión de alquileres"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'La reserva es un wizard cuyos pasos se arman según el caso: si el espacio no tiene accesorios no aparece Adicionales, y Tus Datos solo aparece para invitados o cuando hace falta un CBU para devolver el seguro. El calendario deshabilita los días sin turnos y las fechas completas. Si el socio tiene 3 cuotas impagas no puede reservar y lo derivo a pagar. En Mis reservas hay una cuenta regresiva para pagar la seña y se puede cambiar la fecha con más de 10 días de anticipación. En el panel, los alquileres se filtran, se exportan a Excel y se pueden cargar reservas manuales.'",
  "handover": "Pase a Elenio: Pasamos al Módulo de Pagos y Cuotas. Elenio explicará la estructura de cuotas y cajas."
};
export default slide;
