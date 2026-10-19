const slide = {
  "id": 26,
  "type": "split-visual",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 6 — PAGOS Y CUOTAS",
  "blockTag": "Bloque 6 · Finanzas & Cuotas",
  "title": "Base de Datos: Cuotas, Pagos y Cajas",
  "subtitle": "Cuotas mensuales, pagos parciales y una caja que no se descuadra",
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
      "heading": "2. Desnormalización Justificada en Deuda_Socio",
      "list": [
        "¿Por qué se desnormaliza?: Evita recálculos continuos O(N) con SUM() y JOIN sobre años de historial contable en cada login, consulta de perfil o reserva",
        "Lectura instantánea O(1): Deuda_Socio.Cant_Cuotas entrega el saldo al milisegundo sin penalizar el motor",
        "Sincronización transaccional: La integridad se asegura actualizando la deuda en la misma transacción SQL de cada cobro",
        "Libro Diario en Caja_Movimiento: UNIQUE (ID_Pago) y CHECK (Monto > 0) para conciliar con pasarelas"
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
  "content": "<strong>Qué decir:</strong> 'Cada socio tiene una cuota por mes, y el UNIQUE entre socio y período impide generarla dos veces. PorcentajePagado va de 0 a 1 con un CHECK, así una cuota puede quedar pendiente, parcial o pagada. Un pago se reparte entre varias cuotas mediante Pago_Cuota. Para no sumar todo el historial cada vez que alguien abre su perfil, guardamos la deuda ya calculada en Deuda_Socio; es una desnormalización a propósito que se actualiza en la misma transacción del pago. Cada pago aprobado genera un movimiento de caja, con un UNIQUE que impide registrarlo dos veces. Y los pagos de la planilla de sueldos quedan atados a su importación, de modo que se puede revertir completa mientras no esté confirmada.'",
  "handover": "Pase a Germán: Germán explicará la integración de MercadoPago y el procesador de planillas con Rollback."
};
export default slide;
