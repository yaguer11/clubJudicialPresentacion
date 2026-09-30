const slide = {
  "id": 11,
  "type": "split-visual",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 2 — METODOLOGÍA Y ARQUITECTURA",
  "blockTag": "Bloque 2 · Modelado Funcional",
  "title": "Modelado de Casos de Uso",
  "subtitle": "Diagramas UML formales para portal de autogestión y backoffice",
  "cards": [
    {
      "accent": "accent-gold",
      "heading": "Portal Público",
      "text": "14 casos: registro, login, reserva, cuotas y perfil."
    },
    {
      "accent": "accent-green",
      "heading": "Backoffice",
      "text": "17 casos: aprobación de socios, alquileres, noticias y planillas."
    }
  ],
  "image": {
    "src": "assets_presentacion/matias_image2.png",
    "alt": "Diagrama de Casos de Uso",
    "caption": "Diagramas UML del portal y del backoffice"
  }
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'Especificamos 31 casos de uso en dos diagramas UML: el portal de autogestión pública y del socio con 14 casos de uso, y el backoffice administrativo con 17 casos de uso. Definimos relaciones de inclusión obligatoria para la pasarela de pagos y de extensión para el cálculo de devolución de señas.'",
  "handover": "Pase a Elenio: Comenzamos con los módulos funcionales. Elenio iniciará con la base de datos de Autenticación."
};
export default slide;
