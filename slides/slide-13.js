const slide = {
  "id": 13,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Sistema de Diseño",
  "title": "Sistema de Diseño Basado en Tokens",
  "subtitle": "Un único origen para colores, tipografía, espaciado, radios y sombras en src/config/",
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Para que 33 páginas se vean como un solo producto, armé un sistema de diseño basado en tokens dentro de src/config. colors.js y theme.js definen cada valor con un nombre semántico: una escala tipográfica que va de H1 de 40px a xs de 12px, espaciado en base 4, radios según el tipo de elemento, sombras, transiciones y breakpoints. index.js los exporta y en App.jsx los paso a createTheme de Material UI, así un botón o una card ya salen con el radio y la tipografía correctos. La regla es simple: en las pantallas no se escriben valores sueltos, solo tokens. Si mañana cambia el dorado, se cambia en un único lugar.'",
  "handover": "Sigo yo: de dónde sale la paleta de colores."
};
export default slide;
