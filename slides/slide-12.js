const slide = {
  "id": 12,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Arquitectura Frontend",
  "title": "Frontend: SPA y Mapa de Rutas",
  "subtitle": "27 rutas en React Router 7, protegidas por dos guards",
  "routes": [
    "/home",
    "/espacios",
    "/espacios/:id/reservar",
    "/alquiler-guest/:token",
    "/noticias/:id",
    "/pagos-alquileres/…",
    "/unauthorized",
    "/login",
    "/register",
    "/admin/login",
    "/validar-email/:token",
    "/reset-password",
    "/perfil",
    "/mis-alquileres",
    "/pagos-cuotas",
    "/pagos/…",
    "/admin",
    "/admin/socios",
    "/admin/usuarios",
    "/admin/alquileres",
    "/admin/espacios/…",
    "/admin/noticias"
  ],
  "images": [],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Antes de entrar en los módulos, les muestro cómo está armado el frontend. Es una SPA en React 19 con Vite y React Router 7: 27 rutas en cuatro zonas según quién entra, públicas, acceso, socio y backoffice. Abajo está lo que pasa cuando alguien entra a una ruta protegida: primero se valida la sesión; si es socio y debe más de 6 meses, lo mando a pagar; si es su primer ingreso, a completar el perfil; y si es personal, se comparan los roles del JWT con los que pide la ruta, y si no alcanzan va a /unauthorized. A la derecha, la sesión sin cortes: si la API responde 401, apiFetch pide un token nuevo, deja en cola las demás peticiones y las reintenta; si el refresh falla, cierra la sesión.'",
  "handover": "Sigo yo: cómo definimos el diseño visual del sistema."
};
export default slide;
