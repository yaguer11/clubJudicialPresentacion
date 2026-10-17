const slide = {
  "id": 28,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 6 — PAGOS Y CUOTAS",
  "blockTag": "Bloque 6 · Finanzas & Cuotas",
  "title": "Frontend: Pago de Cuotas con MercadoPago",
  "subtitle": "El socio consulta y paga su deuda online",
  "routes": [
    "/pagos-cuotas",
    "/pagos/success · failure · pending"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_pagos_cuotas_main.png",
      "alt": "Pago de cuotas del socio"
    },
    {
      "src": "assets_presentacion/frontend/fe_pago_success.png",
      "alt": "Retorno de pago exitoso"
    },
    {
      "src": "assets_presentacion/frontend/fe_pago_pending.png",
      "alt": "Retorno de pago pendiente"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'En /pagos-cuotas el socio ve cuántas cuotas debe, el valor vigente y el total, y paga con MercadoPago: el front genera la preferencia de pago y lo redirige a la pasarela. Si debe más de 6 meses, el guard solo le deja esta pantalla para que regularice. Al volver, la página de retorno lee el payment_id y le explica si se acreditó, quedó pendiente o fue rechazado.'",
  "handover": "Pase a Elenio: Avanzamos al Módulo de Noticias. Elenio comentará el esquema editorial."
};
export default slide;
