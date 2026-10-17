const slide = {
  "id": 15,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Reglas de Diseño",
  "title": "Reglas de Diseño y Componentes Base",
  "subtitle": "Convenciones escritas en config/README.md para que todos los módulos se vean iguales",
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Además de los tokens, dejé escritas las reglas de diseño en el README de config, con un checklist para cerrar cada pantalla del panel. Una sola acción principal dorada por pantalla; los colores de estado solo para estados y siempre iguales en todos los módulos; nada de valores hardcodeados; tablas de pocas columnas con los montos a la derecha; todos los modales con el mismo formato; y cada pantalla revisada en celular a 375 píxeles. Para que se cumplan sin pensarlo, armé componentes compartidos: AdminPageLayout, StatusChip, AdminRowActions, AdminDialog y AdminStatCard.'",
  "handover": "Pase a Elenio: Comenzamos con los módulos funcionales. Elenio iniciará con la base de datos de Autenticación."
};
export default slide;
