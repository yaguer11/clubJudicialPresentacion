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
      "heading": "1. Cuotas y Pagos Parciales Nativos",
      "list": [
        "Control matemático: Cuota.PorcentajePagado DECIMAL(3,2) con restricción CHECK (0.00 <= valor <= 1.00)",
        "Flexibilidad contable: Soporta saldar cuotas al 50% o adelantos sin descalces en centavos",
        "Imputación atómica: Pago_Cuota vincula cada cobro a su cuota con clave única compuesta",
        "Estados consistentes: Ciclo de vida controlado PENDIENTE, PARCIAL y PAGADO"
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "2. Desnormalización y Libro Diario de Cajas",
      "list": [
        "Rendimiento en login: Deuda_Socio.Cant_Cuotas almacena el saldo acumulado en tiempo real",
        "Libro Diario en Caja_Movimiento: UNIQUE (ID_Pago) y CHECK (Monto > 0) para balance exacto",
        "Conciliación bancaria: PreferenceID y PaymentID de MercadoPago para idempotencia",
        "Multi-canal: Registra pagos de MercadoPago, Planilla judicial, Transferencia y Efectivo"
      ]
    }
  ],
  "image": {
    "src": "assets_presentacion/diagrama_cuotas_pagos.svg",
    "alt": "Diagrama EER de Cuotas, Pagos, Deudas y Cajas",
    "caption": "Esquema relacional focalizado — Cuota, Deuda_Socio, Pago, Caja_Movimiento y Conciliación"
  }
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'El módulo contable requería máxima rigurosidad en el modelado relacional: en la tabla Cuota implementamos el atributo PorcentajePagado DECIMAL(3,2) junto a una restricción de dominio CHECK (PorcentajePagado >= 0.00 AND PorcentajePagado <= 1.00). Esto permite que el sistema soporte pagos parciales de cuotas mensuales de forma nativa y matemáticamente exacta, evitando descalces en centavos. Para optimizar el tiempo de respuesta en el login y en la reserva de turnos, aplicamos una desnormalización controlada en la tabla Deuda_Socio, que mantiene actualizado el saldo acumulado en Cant_Cuotas sin escanear años de histórico. Asimismo, para asegurar la conciliación bancaria y la idempotencia de los webhooks de MercadoPago, creamos tablas dedicadas para registrar PreferenceID y PaymentID. Finalmente, modelamos el libro diario contable con Caja y Caja_Movimiento, garantizando que cada peso ingresado tenga trazabilidad según su medio de pago.'",
  "handover": "Pase a Germán: Germán explicará la integración de MercadoPago y el procesador de planillas con Rollback."
};
export default slide;
