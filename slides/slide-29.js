const slide = {
  "id": 29,
  "type": "grid-3",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 8 — TESTING, CALIDAD Y DESPLIEGUE",
  "blockTag": "Bloque 8 · Infraestructura",
  "title": "Despliegue y Arquitectura Cloud",
  "subtitle": "¿Cómo y dónde está publicado el sistema en internet?",
  "cards": [
    {
      "accent": "accent-gold",
      "heading": "1. Pantalla Web (Frontend)",
      "badge": "Lo que ve el socio",
      "icon": "assets_presentacion/logo_react.svg",
      "items": [
        "Acceso desde cualquier lugar: La web se abre desde celulares, tablets o computadoras sin instalar nada.",
        "Carga instantánea: La página está optimizada para que cargue en menos de un segundo.",
        "Conexión segura: Funciona con https:// y candado verde para proteger los datos de los socios."
      ],
      "tech": [
        { "name": "React", "icon": "assets_presentacion/logo_react.svg" },
        { "name": "Web Pública", "chip": "gold" }
      ]
    },
    {
      "accent": "accent-green",
      "heading": "2. Servidor en la Nube (API)",
      "badge": "El cerebro del sistema",
      "icon": "assets_presentacion/logo_nodejs.svg",
      "items": [
        "Activo las 24 horas: Si ocurre algún error en el servidor, se reinicia solo automáticamente.",
        "Seguridad de contraseñas: Las claves de MercadoPago y del sistema no están en el código, están protegidas en la nube.",
        "Conexión con servicios: Procesa pagos online, sube fotos a Cloudinary y envía emails a los socios."
      ],
      "tech": [
        { "name": "Node.js", "icon": "assets_presentacion/logo_nodejs.svg" },
        { "name": "Siempre Activo", "chip": "green" }
      ]
    },
    {
      "accent": "accent-blue",
      "heading": "3. Base de Datos Protegida",
      "badge": "Donde se guarda todo",
      "icon": "assets_presentacion/logo_mysql.svg",
      "items": [
        "Red privada e invisible: Nadie puede entrar a la base de datos desde internet; solo nuestro servidor tiene acceso.",
        "Respuesta inmediata: Como el servidor y la base de datos están juntos en Railway, las consultas tardan menos de 2 milisegundos.",
        "Limpieza de turnos: Si alguien reserva una cancha y no la paga, el sistema la libera solo a los 15 minutos."
      ],
      "tech": [
        { "name": "MySQL", "icon": "assets_presentacion/logo_mysql.svg" },
        { "name": "Red Privada", "chip": "blue" }
      ]
    }
  ],
  "banner": {
    "icon": "assets_presentacion/logo_railway.svg",
    "title": "En resumen: ¿Dónde y cómo está publicado el sistema?",
    "subtitle": "Está todo alojado en Railway, una plataforma cloud que mantiene el sistema online las 24 hs de forma segura y automática.",
    "tags": [
      "🔒 Seguro (HTTPS)",
      "⚡ Rápido (< 2 ms)",
      "🛡️ Base de datos oculta"
    ]
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'Para que el sistema esté disponible en internet las 24 horas para los socios y la administración, lo subimos a la nube usando Railway. La estructura se divide de forma muy clara en tres partes: primero, la pantalla web en React, que carga rapidísimo y se puede abrir desde cualquier celular o computadora con conexión segura HTTPS. Segundo, el servidor en Node.js, que procesa las reservas y los cobros de MercadoPago y cuenta con auto-reinicio si surge algún imprevisto. Y tercero, la base de datos MySQL, que está oculta en una red interna privada para que nadie externo pueda atacarla, logrando además que las consultas respondan en menos de 2 milisegundos.'",
  "handover": "Pase a Matías: Pasamos a las conclusiones finales. Matías iniciará con el balance de Frontend."
};
export default slide;
