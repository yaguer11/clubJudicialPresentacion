const slide = {
  "id": 19,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 4 — GESTIÓN DE SOCIOS",
  "blockTag": "Bloque 4 · Padrón Social",
  "title": "Base de Datos: Socios y Membresía",
  "subtitle": "Titular, grupo familiar y cambios que siempre pasan por secretaría",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "1. Normalización 3FN del Grupo Familiar",
      "list": [
        "Desacoplamos cargas familiares en Miembro_Familiar y Parentesco",
        "Sin redundancia: elimina columnas fijas (Hijo1, Hijo2) en Socio",
        "Cargas auditadas con DNI, fecha de nacimiento y foto en Cloudinary",
        "Integridad referencial con eliminación en CASCADA desde el titular"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "2. Auditoría de Cambios y FULLTEXT",
      "list": [
        "Trazabilidad en Solicitud_Cambio_Datos: 0 cambios directos en DB",
        "Modificaciones sensibles (DNI, CUIL, Email) requieren aprobación",
        "Índice FULLTEXT (Name, Surname, Email) para búsqueda en milisegundos",
        "Estados controlados: PENDIENTE, APROBADO, RECHAZADO"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/diagrama_socios_familiares.svg",
    "alt": "Diagrama EER de Padrón Social, Familiares y Auditoría",
    "caption": "Esquema relacional focalizado — Tablas Socio, Miembro_Familiar, Parentesco y Solicitud_Cambio_Datos"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'El socio titular está en Socio, con DNI y legajo únicos, su tipo y un campo Aprobado que arranca en falso: nadie entra hasta que secretaría lo aprueba. Cada familiar es una fila en Miembro_Familiar, con su foto de DNI en Cloudinary; así no hay columnas fijas como Hijo1 o Hijo2. El parentesco sale de un catálogo, para no tener variantes mal escritas. Los cambios de datos sensibles no se hacen directo: el socio genera una solicitud con los valores nuevos y secretaría la aprueba, quedando registrado quién y cuándo. Lo mismo para altas y bajas de familiares. Y para el buscador del panel usamos índices FULLTEXT sobre nombre, apellido y email.'",
  "handover": "Pase a Germán: Germán detallará las reglas de negocio de la API de socios."
};
export default slide;
