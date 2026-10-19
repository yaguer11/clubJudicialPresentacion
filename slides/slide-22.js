const slide = {
  "id": 22,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Base de Datos: Espacios y Alquileres",
  "subtitle": "Tarifas, turnos, accesorios y reservas que se liberan solas",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "1. Modelado de Espacios, Horarios y Accesorios",
      "list": [
        "Diferenciación arancelaria: Tarifas para socio vs. particular, seña mínima y seguro en Espacio",
        "Franjas horarias: Horario_Espacio con UNIQUE (ID_Espacio, DiaSemana, HoraInicio, HoraFin)",
        "Integridad de rango: Restricción CHECK (HoraInicio <> HoraFin)",
        "Control de inventario: Relación intermedia Espacio_Accesorio con stock disponible en tiempo real"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "2. Control de Turnos y MySQL Event Scheduler",
      "list": [
        "Bloqueo atómico: Tabla Alquiler_Espacio con índice único compuesto que erradica solapamientos",
        "Acceso de invitados: TokenSeguimiento criptográfico (64 chars) para pagar y gestionar sin cuenta",
        "Liberación automática: Evento en MySQL ejecutado cada 60s (FechaExpiracion < NOW())",
        "Turnos liberados: Cancela reservas impagas a la hora y habilita el turno a la comunidad"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/diagrama_alquileres_espacios.svg",
    "alt": "Diagrama EER de Espacios, Horarios y Alquileres",
    "caption": "Esquema relacional focalizado — Tablas Espacio, Horario_Espacio, Alquiler y Event Scheduler (60 min)"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'Espacio guarda las reglas de cada cancha o quincho: precio para socios y no socios, seña mínima, seguro y anticipación máxima. Con Espacio_Precio_Dia se puede cobrar distinto un sábado que un martes. Horario_Espacio define las franjas, con un UNIQUE que impide repetirlas y un CHECK para que inicio y fin sean distintos. Como un espacio ofrece varios accesorios y un accesorio sirve para varios espacios, esa relación N:M se resuelve con la tabla intermedia Espacio_Accesorio; Accesorio lleva el stock. La reserva es Alquiler: guarda total, saldo, estado y, si es un invitado, sus datos y un token de seguimiento. Alquiler_Espacio une la reserva con el turno, y la API valida la disponibilidad en una transacción. Finalmente, FechaExpiracion marca hasta cuándo se puede pagar la seña: un job que corre cada minuto cancela las vencidas y libera el horario.'",
  "handover": "Pase a Germán: Germán explicará cómo la API gestiona la concurrencia atómica, el TokenSeguimiento para invitados y las devoluciones de seña."
};
export default slide;
