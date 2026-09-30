const slide = {
  "id": 15,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 4 — GESTIÓN DE SOCIOS",
  "blockTag": "Bloque 4 · Padrón Social",
  "title": "Base de Datos: Socios y Membresía",
  "subtitle": "Modelo normalizado 3FN y optimización con FULLTEXT",
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
  "content": "<strong>Qué decir:</strong> 'El modelo del padrón social fue concebido para garantizar administración transparente y auditable: la tabla Socio almacena los datos civiles y el estado de membresía. Para el grupo familiar diseñamos la tabla Miembro_Familiar vinculada al titular, normalizando los tipos de vínculos en el catálogo Parentesco en 3FN para erradicar columnas repetitivas. Un requerimiento crítico del club era la trazabilidad: ningún socio altera unilateralmente su DNI, CUIL o datos sensibles en la base de datos; para ello modelamos Solicitud_Cambio_Datos y Solicitud_Cambio_Familiar, que registran propuestas sujetas a resolución de secretaría. Finalmente, creamos un índice FULLTEXT sobre Nombre, Apellido y Email para búsquedas instantáneas en milisegundos sin escaneos lentos de tabla.'",
  "handover": "Pase a Germán: Germán detallará las reglas de negocio de la API de socios."
};
export default slide;
