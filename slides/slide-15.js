const slide = {
  "id": 15,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Reglas de Diseño",
  "title": "Reglas de Diseño Aplicadas a una Pantalla Real",
  "subtitle": "Las convenciones de config/README.md, cada una resuelta por un componente compartido",
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_rules_admin.png",
      "alt": "Gestión de alquileres con las reglas de diseño señaladas"
    },
    {
      "src": "assets_presentacion/frontend/fe_m_admin_alquileres.png",
      "alt": "Gestión de alquileres en celular"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Las reglas de diseño no quedaron solo escritas: cada una la resuelve un componente compartido. Sobre la pantalla de alquileres se ven todas: el encabezado común con AdminPageLayout, una sola acción principal en dorado, las métricas arriba con AdminStatCard, los estados con StatusChip, que usan siempre el mismo color para el mismo estado, tablas con el dato principal arriba y el secundario abajo, y las acciones de fila en íconos grises con un menú. La séptima regla es que cada pantalla se revisa a 375 píxeles: en el celular, esa misma tabla pasa a tarjetas y las acciones extra van al menú Más. Y nada lleva valores sueltos: todo sale de los tokens.'",
  "handover": "Pase a Elenio: Comenzamos con los módulos funcionales. Elenio iniciará con la base de datos de Autenticación."
};
export default slide;
