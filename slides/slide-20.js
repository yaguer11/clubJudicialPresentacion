const slide = {
  "id": 20,
  "type": "split-visual",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Frontend: Catálogo y Wizard de Reserva",
  "subtitle": "Selección en tiempo real, desglose de seña y autogestión",
  "cards": [
    {
      "accent": "accent-gold",
      "heading": "Wizard Interactivo (3 Pasos)",
      "list": [
        "Fecha",
        "Turnos disponibles",
        "Accesorios y seña"
      ]
    },
    {
      "accent": "accent-green",
      "heading": "Seguimiento",
      "list": [
        "MisAlquileresPage",
        "AlquilerGuestPage",
        "Historial y cancelación"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/matias_image7.png",
    "alt": "Captura ReservarEspacioPage",
    "caption": "Wizard de reserva de espacios deportivos"
  }
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'ReservarEspacioPage funciona como un wizard de 3 pasos: el usuario elige la fecha, ve los turnos disponibles en tiempo real en verde y turnos ocupados deshabilitados, y selecciona accesorios con cálculo dinámico del total y de la seña mínima requerida antes de pagar con MercadoPago.'",
  "handover": "Pase a Elenio: Pasamos al Módulo de Pagos y Cuotas. Elenio explicará la estructura de cuotas y cajas.'"
};
export default slide;
