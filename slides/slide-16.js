const slide = {
  "id": 16,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 3 — AUTENTICACIÓN Y REGISTRO",
  "blockTag": "Bloque 3 · Autenticación",
  "title": "Base de Datos: Autenticación y Roles",
  "subtitle": "La cuenta para entrar, separada de la ficha del socio",
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
  "content": "<strong>Qué decir:</strong> 'Separamos la cuenta para entrar de la ficha del socio. En Usuario solo hay nombre de usuario, la contraseña cifrada con Bcrypt y si la cuenta está activa. Los datos civiles, como DNI, legajo y tipo de socio, están en Socio. Gracias a eso, el personal de tesorería o secretaría puede tener cuenta sin figurar en el padrón. Los roles están en un catálogo cerrado, Rol, y la tabla intermedia Usuario_Rol permite que una persona tenga varios, por ejemplo Alquileres y Prensa. Por último, el motor cuida los datos: Username, DNI y Legajo son únicos y, si se borra una cuenta, ON DELETE CASCADE elimina sus roles y su ficha sin dejar registros huérfanos.'",
  "handover": "Pase a Germán: Germán explicará cómo la API gestiona este acceso mediante doble token JWT."
};
export default slide;
