const slide = {
  "id": 18,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 5 — ESPACIOS Y ALQUILERES",
  "blockTag": "Bloque 5 · Deportes & Alquileres",
  "title": "Base de Datos: Espacios y Alquileres",
  "subtitle": "Disponibilidad horaria y liberación automática mediante Event Scheduler",
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
  "content": "<strong>Qué decir:</strong> 'El módulo de alquileres y espacios deportivos requirió un diseño relacional altamente riguroso para eliminar el solapamiento histórico de turnos. En la tabla Espacio modelamos tarifas diferenciadas para socios y particulares, seña mínima y seguro de garantía. La tabla Horario_Espacio estructura las franjas horarias por día con una clave UNIQUE compuesta y validación CHECK para evitar rangos nulos. Para el bloqueo efectivo de turnos diseñamos la intermedia Alquiler_Espacio, vinculada a Alquiler. Pero el aporte clave de ingeniería fue automatizar la liberación de reservas: configuramos un Evento Programado en MySQL (Event Scheduler) que se ejecuta cada 60 segundos. Si una reserva en estado PENDIENTE no abona la seña dentro del plazo de 60 minutos (FechaExpiracion < NOW()), el evento actualiza el estado a CANCELADO y libera la franja horaria automáticamente para que vuelva a estar disponible en la plataforma sin intervención administrativa.'",
  "handover": "Pase a Germán: Germán explicará cómo la API gestiona la concurrencia atómica, el TokenSeguimiento para invitados y las devoluciones de seña."
};
export default slide;
