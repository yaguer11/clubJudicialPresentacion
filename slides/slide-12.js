const slide = {
  "id": 12,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Arquitectura Frontend",
  "title": "Frontend: SPA y Mapa de Rutas",
  "subtitle": "35 rutas en React Router 7, separadas por tipo de usuario y protegidas por rol",
  "routes": [
    "/",
    "/pagos-cuotas",
    "/perfil",
    "/unauthorized",
    "/home",
    "/espacios",
    "/espacios/:id/reservar",
    "/alquiler-guest/:token",
    "/noticias/:id",
    "/pagos-alquileres/…",
    "/login",
    "/register",
    "/admin/login",
    "/admin",
    "/validar-email/:token",
    "/reset-password",
    "/mis-alquileres",
    "/pagos/…",
    "/admin/socios",
    "/admin/usuarios",
    "/admin/alquileres",
    "/admin/espacios",
    "/admin/espacios/:id/editar",
    "/admin/noticias",
    "/admin/pagos",
    "/cajas",
    "/mi-caja",
    "/gasto · /reposicion",
    "/gastos/:id · /reposiciones/:id",
    "/admin/tesoreria/*"
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Antes de entrar en los módulos, les muestro cómo está armado el frontend. Es una SPA en React 19 con Vite y React Router 7: 35 rutas y 33 páginas. Las organicé en cinco zonas según quién entra: públicas, acceso, socio, backoffice y caja chica. Hay dos guards: ProtectedRoute para el socio, que además manda a pagar al que debe más de 6 meses y al que entra por primera vez a completar su perfil; y ProtectedRouteAdmin, que lee los roles del JWT y, si no alcanzan, redirige a /unauthorized. Todas las llamadas pasan por apiFetch, que ante un 401 renueva el token y encola las peticiones que quedaron pendientes.'",
  "handover": "Sigo yo: cómo definimos el diseño visual del sistema."
};
export default slide;
