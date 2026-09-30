const slide = {
  "id": 21,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 6 — PAGOS Y CUOTAS",
  "blockTag": "Bloque 6 · Finanzas & Cuotas",
  "title": "Base de Datos: Cuotas, Pagos y Cajas",
  "subtitle": "Soporte de pagos parciales y trazabilidad de ingresos",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "Cuotas y Pagos Parciales",
      "list": [
        "Cuota",
        "PorcentajePagado",
        "Deuda_Socio",
        "Caja y Caja_Movimiento"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Conciliación",
      "text": "Se registran PreferenceID y PaymentID de MercadoPago para auditoría."
    }
  ],
  "image": {
    "src": "assets_presentacion/elenio_image5.png",
    "alt": "Diagrama EER Cuotas y Pagos",
    "caption": "Modelo financiero del sistema"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'El modelo financiero soporta pagos parciales con el campo PorcentajePagado y restricción CHECK. Creamos Deuda_Socio como desnormalización controlada para conocer las cuotas adeudadas sin recalcular todo el histórico, y las tablas Caja y Caja_Movimiento para registrar cada ingreso dinerario.'",
  "handover": "Pase a Germán: Germán explicará la integración de MercadoPago y las planillas de sueldos."
};
export default slide;
