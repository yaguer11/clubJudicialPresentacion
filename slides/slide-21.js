const slide = {
  "id": 21,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 4 — GESTIÓN DE SOCIOS",
  "blockTag": "Bloque 4 · Padrón Social",
  "title": "Frontend: Perfil del Socio y Backoffice",
  "subtitle": "El socio pide cambios desde su perfil; secretaría los aprueba desde el panel",
  "routes": [
    "/perfil",
    "/admin",
    "/admin/socios",
    "/admin/usuarios"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_dlg_aprobar.png",
      "alt": "Modal de aprobación de socio"
    },
    {
      "src": "assets_presentacion/frontend/fe_perfil.png",
      "alt": "Perfil del socio"
    },
    {
      "src": "assets_presentacion/frontend/fe_admin_usuarios.png",
      "alt": "Matriz de permisos del personal"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'En /perfil el socio ve sus datos organizados en secciones. Lo importante es que los cambios no se guardan directo: generan una solicitud que secretaría revisa. Del otro lado, /admin/socios es una bandeja con altas, cambios de datos y cambios de familiares. Al aprobar un alta, el modal pregunta si es un socio nuevo o uno que ya existía, porque eso define su deuda inicial. Y en /admin/usuarios el superadmin gestiona al personal con una matriz de permisos por rol.'",
  "handover": "Pase a Elenio: Entramos al módulo de Alquileres. Elenio explicará la disponibilidad y el Event Scheduler."
};
export default slide;
