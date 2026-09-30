const slide = {
  "id": 17,
  "type": "split-visual",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 4 — GESTIÓN DE SOCIOS",
  "blockTag": "Bloque 4 · Padrón Social",
  "title": "Frontend: Panel de Socios y Perfil",
  "subtitle": "DataGrid administrativo y perfil del socio",
  "cards": [
    {
      "accent": "accent-gold",
      "heading": "AdminSociosPage",
      "list": [
        "Ordenamiento, filtrado y paginación",
        "Modales de aprobación",
        "Auditoría de cambios"
      ]
    },
    {
      "accent": "accent-green",
      "heading": "ProfilePage",
      "list": [
        "Credencial digital",
        "Subida de foto",
        "Gestión de familiares"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/matias_image5.png",
    "alt": "Panel de Socios",
    "caption": "Panel de administración de socios"
  }
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'AdminSociosPage utiliza Material UI DataGrid para ordenar, paginar y filtrar en milisegundos con modales de aprobación y rechazo. En ProfilePage, el socio visualiza su credencial digital, sube su foto a Cloudinary y gestiona familiares adjuntando la foto de su DNI.'",
  "handover": "Pase a Elenio: Entramos al módulo de Alquileres. Elenio explicará la disponibilidad y el Event Scheduler."
};
export default slide;
