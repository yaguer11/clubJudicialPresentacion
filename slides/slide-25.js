const slide = {
  "id": 25,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Frontend: Mis Reservas y Panel de Alquileres",
  "subtitle": "Seguimiento del socio y gestión diaria",
  "routes": [
    "/mis-alquileres",
    "/admin/alquileres",
    "/admin/espacios"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_admin_alquileres_main.png",
      "alt": "Gestión de alquileres"
    },
    {
      "src": "assets_presentacion/frontend/fe_mis_alquileres.png",
      "alt": "Mis reservas del socio"
    },
    {
      "src": "assets_presentacion/frontend/fe_admin_espacios.jpg",
      "alt": "Gestión de espacios y accesorios"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Una vez hecha la reserva, el socio la sigue en Mis reservas: ve una cuenta regresiva para pagar la seña, el pago en revisión si transfirió, y puede cancelar o cambiar la fecha con más de 10 días de anticipación. Del lado del panel, alquileres se filtra por estado y fecha, alterna entre tabla y tarjetas, exporta a Excel y permite cargar reservas manuales o cancelar con devolución de seña. Y en espacios se configuran precios por día, horarios, imágenes y accesorios con stock.'",
  "handover": "Pase a Elenio: Pasamos al Módulo de Pagos y Cuotas. Elenio explicará la estructura de cuotas y cajas."
};
export default slide;
