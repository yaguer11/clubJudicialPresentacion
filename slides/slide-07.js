const slide = {
  "id": 7,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Calidad & DevOps",
  "title": "Control de Versiones y Pipeline de CI",
  "subtitle": "Flujo GitFlow protegido y validación automatizada con GitHub Actions",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "GitFlow",
      "list": [
        "Rama main protegida",
        "Pull Requests obligatorios",
        "Revisión cruzada de código"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "CI/CD",
      "list": [
        "Pipeline en GitHub Actions",
        "Playwright ante cada PR",
        "Merge bloqueado si falla un test"
      ]
    }
  ],
  "code": "# Trigger CI en GitHub Actions\non: [pull_request, push] -> npx playwright test"
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> Implementamos GitFlow con la rama main protegida...",
  "handover": "Pase a Matías: Matías presentará la arquitectura general del sistema."
};
export default slide;
