const slide = {
  "id": 18,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 3 — AUTENTICACIÓN Y REGISTRO",
  "blockTag": "Bloque 3 · Autenticación",
  "title": "Frontend: Acceso, Registro y Sesiones",
  "subtitle": "Ingresos separados para socios y personal",
  "routes": [
    "/login",
    "/register",
    "/admin/login",
    "/validar-email/:token",
    "/reset-password"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_login.png",
      "alt": "Pantalla de inicio de sesión de socios"
    },
    {
      "src": "assets_presentacion/frontend/fe_register.png",
      "alt": "Registro de socios"
    },
    {
      "src": "assets_presentacion/frontend/fe_admin_login.png",
      "alt": "Ingreso del personal"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'En el cliente hay dos ingresos: /login para socios, con DNI, y /admin/login para el personal. Cada uno guarda su propio token y refresh token, así una sesión no pisa a la otra. El registro es guiado: primero se elige el tipo de socio y el formulario se adapta; se puede cargar el grupo familiar con la foto del DNI, que va a Cloudinary, y la cuenta queda pendiente hasta que la aprueba secretaría. Cuando el token vence, apiFetch lo renueva sin que el usuario lo note.'",
  "handover": "Pase a Elenio: Pasamos al Módulo de Socios. Elenio explicará el modelo de datos de miembros y familias."
};
export default slide;
