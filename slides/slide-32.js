const slide = {
  "id": 32,
  "type": "split",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 9 — CONCLUSIONES",
  "blockTag": "Bloque 9 · Balance de Rol",
  "title": "Conclusiones: Base de Datos",
  "subtitle": "Balance individual del desarrollador de base de datos",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "Modelado y Normalización",
      "list": [
        "3FN",
        "Integridad",
        "Migraciones"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Optimización",
      "list": [
        "Índices B-Tree",
        "FULLTEXT",
        "Event Scheduler"
      ]
    }
  ]
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'Logramos un modelo relacional en 3FN que asegura la integridad de los datos. La optimización con índices B-Tree y FULLTEXT garantiza consultas en sub-milisegundos, y el Event Scheduler resolvió el histórico problema de turnos bloqueados sin pagar. Las migraciones versionadas aseguran la evolución del esquema.'",
  "handover": "Pase a Equipo: Los tres cerraremos con el impacto institucional y el trabajo futuro."
};
export default slide;
