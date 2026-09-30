const slide = {
  "id": 12,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 3 — AUTENTICACIÓN Y REGISTRO",
  "blockTag": "Bloque 3 · Autenticación",
  "title": "Base de Datos: Autenticación y Roles",
  "subtitle": "Desacoplamiento de cuentas, integridad y hashing seguro",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "1. Desacoplamiento Usuario vs Socio",
      "list": [
        "Usuario almacena solo credenciales (Username y PasswordHash)",
        "Socio es una entidad satélite vinculada por clave foránea opcional",
        "Permite administradores del sistema que no son socios del club",
        "Protección de datos: el login no expone información sensible"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "2. Modelo RBAC y Reglas de Integridad",
      "list": [
        "Tabla intermedia Usuario_Rol para asignación N:M de roles con CASCADE",
        "0 contraseñas en texto plano: Hash Bcrypt de 60 caracteres (10 salts)",
        "Restricciones UNIQUE en Username, DNI y Email contra duplicidades"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/diagrama_auth_roles.svg",
    "alt": "Diagrama EER de Autenticación y Roles RBAC",
    "caption": "Esquema relacional focalizado — Tablas Usuario, Rol, Usuario_Rol y Socio"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'Una de las decisiones centrales de diseño fue desacoplar la identidad de login de la ficha social: creamos la tabla Usuario para credenciales puras y vinculamos Socio como entidad satélite. Esto nos da la flexibilidad de tener administradores que no son socios del club y protege la privacidad. Los permisos se modelan con la tabla intermedia Usuario_Rol para asignar múltiples roles RBAC, y a nivel motor garantizamos cero texto plano persistiendo solo hashes Bcrypt de 60 caracteres, junto a restricciones UNIQUE en username, DNI y email.'",
  "handover": "Pase a Germán: Germán explicará cómo la API gestiona este acceso mediante doble token JWT."
};
export default slide;
