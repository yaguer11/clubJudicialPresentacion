const slide = {
  "id": 27,
  "type": "frontend-custom",
  "speaker": "matias",
  "speakerLabel": "MG · Frontend",
  "block": "BLOQUE 6 — PAGOS Y CUOTAS",
  "blockTag": "Bloque 6 · Finanzas & Cuotas",
  "title": "Frontend: Cuotas, Cobranzas y Caja Chica",
  "subtitle": "Autogestión de la deuda, retornos de MercadoPago, importación de planillas y tesorería",
  "routes": [
    "/pagos-cuotas",
    "/pagos/…",
    "/pagos-alquileres/…",
    "/admin/pagos",
    "/cajas",
    "/mi-caja"
  ],
  "images": [
    {
      "src": "assets_presentacion/frontend/fe_admin_pagos.png",
      "alt": "Gestión de cobranzas"
    },
    {
      "src": "assets_presentacion/frontend/fe_pagos_cuotas.png",
      "alt": "Pago de cuotas del socio"
    },
    {
      "src": "assets_presentacion/frontend/fe_caja_movs.png",
      "alt": "Movimientos de caja chica"
    }
  ],
  "html": "Contenido maquetado directamente en presentacion_pps.html (estilos en presentacion_frontend.css)."
};

export const notes = {
  "speaker": "Matías Giménez [Frontend]",
  "content": "<strong>Qué decir:</strong> 'En /pagos-cuotas el socio ve cuántas cuotas debe, el valor vigente, y paga con MercadoPago. Las seis páginas de retorno leen el payment_id y le explican qué pasó con el pago. Para tesorería, /admin/pagos muestra la deuda de cada socio con los mismos chips de estado, importa planillas de Excel identificando al socio por CUIT o CUIL, exporta la planilla y permite deshacer una importación. Y en caja chica el tesorero abre y cierra cajas y aprueba reposiciones, mientras el encargado registra los gastos.'",
  "handover": "Pase a Elenio: Avanzamos al Módulo de Noticias. Elenio comentará el esquema editorial."
};
export default slide;
