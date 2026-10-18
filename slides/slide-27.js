const slide = {
  "id": 27,
  "type": "split",
  "speaker": "german",
  "speakerLabel": "GM · Backend",
  "block": "BLOQUE 6 — PAGOS Y CUOTAS",
  "blockTag": "Bloque 6 · Finanzas & Cuotas",
  "title": "Backend: MercadoPago y Planillas con Rollback",
  "subtitle": "Checkout Pro, webhooks y procesamiento XLSX",
  "cards": [
    {
      "accent": "accent-green",
      "heading": "MercadoPago Checkout Pro",
      "list": [
        "Preferencias seguras",
        "Webhooks IPN",
        "Actualización asíncrona"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Planillas y Rollback",
      "list": [
        "Procesamiento xlsx",
        "Retenciones judiciales",
        "Rollback transaccional"
      ]
    }
  ]
};

export const notes = {
  "speaker": "Germán Muñoz [Backend]",
  "content": "<strong>Qué decir:</strong> 'Integramos MercadoPago Checkout Pro en dos circuitos: cuotas, en /api/pagos, y alquileres, en /api/pagos-alquileres. La API crea la preferencia y registra el pago en estado PENDIENTE. Cuando MercadoPago notifica por webhook, validamos el paymentId contra su API y, en una transacción atómica, descontamos cuotas en Deuda_Socio, registramos el Pago y el ingreso en Caja_Movimiento; una notificación repetida se ignora. Para las retenciones de haberes procesamos el Excel con la librería xlsx cruzando por CUIL, solo para socios de tipo COMÚN, y desarrollamos un Rollback transaccional que revierte una planilla errónea restaurando las deudas previas.'",
  "handover": "Pase a Matías: Matías mostrará cómo el socio paga sus cuotas desde el portal."
};
export default slide;
