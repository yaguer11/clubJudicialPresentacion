const slide = {
  "id": 28,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 8 — TESTING, CALIDAD Y DESPLIEGUE",
  "blockTag": "Bloque 8 · DevOps & Calidad",
  "title": "CI y Aislamiento de Datos de Prueba",
  "subtitle": "Idempotencia, artefactos y paralelismo",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "Aislamiento de Datos",
      "list": [
        "Base replica",
        "Sufijos aleatorios",
        "Preparación de estados"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "GitHub Actions",
      "list": [
        "merge bloqueado",
        "grabaciones y capturas",
        "depuración inmediata"
      ]
    }
  ]
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> 'Utilizamos una base de datos de testing réplica y generamos sufijos aleatorios en los DNI y usuarios para evitar colisiones de clave única. En GitHub Actions, si un test falla, el runner guarda grabaciones en video y capturas de pantalla durante 7 días para facilitar la depuración inmediata.'",
  "handover": "Pase a Elenio: Elenio explicará el despliegue en la nube."
};
export default slide;
