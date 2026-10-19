const slide = {
  "id": 34,
  "type": "grid-3",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 8 — TESTING, CALIDAD Y DESPLIEGUE",
  "blockTag": "Bloque 8 · Infraestructura",
  "title": "Despliegue y Arquitectura Cloud",
  "subtitle": "¿Dónde está publicado el sistema y qué pasa cuando alguien lo usa?",
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
  "content": "<strong>Qué decir:</strong> 'Todo el sistema está publicado en Railway. Cuando un socio entra desde el celular, la conexión viaja por HTTPS. Railway sirve la pantalla web hecha en React, y desde ahí el navegador le pide datos a la API en Node.js con Express. La API verifica el token, aplica las reglas y se conecta a MySQL por la red interna del proyecto. Las claves, como el token de MercadoPago o los datos de la base, son variables de entorno de Railway y no están en el código. Desde la API se cobra con MercadoPago, se suben fotos a Cloudinary y se mandan mails con Resend. Además, el sistema trabaja solo: un job cada minuto cancela las señas vencidas y un evento de MySQL arma cada día el resumen de pagos.'",
  "handover": "Pase a Matías: Pasamos a las conclusiones finales. Matías iniciará con el balance de Frontend."
};
export default slide;
