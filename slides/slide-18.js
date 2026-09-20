const slide = {
  "id": 18,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Base de Datos: Espacios y Alquileres",
  "subtitle": "Disponibilidad horaria y liberación automática mediante event scheduler",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "Esquema Relacional",
      "list": [
        "Espacio",
        "Horario_Espacio",
        "Accesorio",
        "Alquiler"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Event Scheduler",
      "text": "Si una reserva no abona la seña, se cancela y el turno se libera automáticamente."
    }
  ],
  "image": {
    "src": "assets_presentacion/elenio_image6.png",
    "alt": "Diagrama EER Alquileres",
    "caption": "Modelo de espacios y alquileres"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> El módulo de alquileres modela Espacios, Horarios por día y Accesorios con stock...",
  "handover": "Pase a Germán: Germán explicará la API de reservas y la cancelación con devolución."
};
export default slide;
