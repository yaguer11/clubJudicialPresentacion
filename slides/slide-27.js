const slide = {
  "id": 27,
  "type": "split",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 8 — TESTING, CALIDAD Y DESPLIEGUE",
  "blockTag": "Bloque 8 · Calidad de Software",
  "title": "Testing E2E Automatizado (Playwright)",
  "subtitle": "18 archivos de especificación en suite real y mock",
  "cards": [
    {
      "accent": "accent-gold",
      "heading": "Suite Real",
      "list": [
        "Registro",
        "Login",
        "Reservas",
        "Pagos",
        "CRUDs"
      ]
    },
    {
      "accent": "accent-green",
      "heading": "Suite Mock",
      "list": [
        "page.route()",
        "Estados visuales",
        "Errores 401/403/500"
      ]
    }
  ]
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Desarrollamos 18 archivos de pruebas E2E con Playwright simulando usuarios reales en Chromium y Firefox. La Suite Real con 17 archivos corre contra backend y base de datos real cubriendo registros, alquileres, pagos y CRUDs; y la Suite Mock valida estados visuales y manejo de errores aisladamente.'",
  "handover": "Pase a Germán: Germán explicará cómo logramos aislar los datos en las pruebas continuas."
};
export default slide;
