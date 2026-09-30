const slide = {
  "id": 6,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Metodología",
  "title": "Metodología de Desarrollo",
  "subtitle": "Ciclo ágil iterativo: relevamiento, feedback continuo por WhatsApp/reuniones y backlog en Notion",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "1. Relevamiento y Diseño Inicial",
      "text": "Entrevistas con Fernando Rigoni, análisis de planillas históricas y modelado relacional antes de codificar."
    },
    {
      "accent": "accent-gold",
      "heading": "2. Sprints Modulares",
      "text": "Desarrollo por dominio (Auth ➔ Socios ➔ Espacios ➔ Pagos ➔ Noticias) para validar módulos de punta a punta."
    },
    {
      "accent": "accent-blue",
      "heading": "3. Tablero Kanban en Notion",
      "text": "Gestión de más de 190 tareas y requerimientos con asignaciones, prioridades y trazabilidad completa de blockers."
    },
    {
      "accent": "accent-purple",
      "heading": "4. Ciclo de Feedback y Correcciones",
      "text": "Revisión continua: correcciones del tutor vía WhatsApp y reuniones técnicas con Fernando Rigoni; ciclo donde nos pedían módulos, los revisaban y corregíamos o sumábamos nuevas necesidades surgidas."
    }
  ],
  "image": {
    "src": "assets_presentacion/kanban_notion_club.jpg",
    "alt": "Tablero Kanban de Tareas en Notion — Proyecto Club Judicial",
    "caption": "Tablero Kanban en Notion: tareas reales del proyecto, estados de avance y revisiones con tutor y supervisor"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'Adoptamos una metodología iterativa e incremental. Desarrollamos por módulos funcionales: primero Autenticación, luego Socios, Alquileres, Pagos y finalmente Noticias. Gestionamos más de 190 tareas en un tablero Kanban en Notion para coordinar el trabajo del equipo. Lo fundamental fue el ciclo de feedback continuo: el profesor tutor nos enviaba observaciones y correcciones por WhatsApp, y manteníamos reuniones periódicas con Fernando Rigoni. Seguíamos un ciclo claro: ellos nos solicitaban o definían los requerimientos de un módulo, lo implementábamos, ellos lo revisaban, y nosotros corregíamos o incorporábamos las nuevas necesidades que iban surgiendo sobre la marcha.'",
  "handover": "Pase a Germán: Germán explicará el control de versiones y la integración continua."
};
export default slide;
