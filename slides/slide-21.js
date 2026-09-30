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
  "content": "<strong>Qué decir:</strong> 'El módulo contable requería máxima rigurosidad en el modelado relacional: en la tabla Cuota implementamos el atributo PorcentajePagado DECIMAL(3,2) junto a una restricción de dominio CHECK (PorcentajePagado >= 0.00 AND PorcentajePagado <= 1.00). Esto permite que el sistema soporte pagos parciales de cuotas mensuales de forma nativa y matemáticamente exacta, evitando descalces en centavos. Una decisión clave de arquitectura fue aplicar una desnormalización controlada en la tabla Deuda_Socio: ¿por qué lo hicimos? Porque cada vez que un socio inicia sesión, entra a su perfil o intenta reservar una cancha deportiva, el sistema necesita conocer si tiene cuotas adeudadas. Si mantuviéramos una 3FN pura sin desnormalizar, la base de datos tendría que ejecutar consultas con SUM() y JOIN sobre años de historial para miles de socios concurrentemente. Al almacenar Cant_Cuotas en Deuda_Socio logramos una lectura instantánea O(1), asegurando la consistencia mediante transacciones SQL atómicas cada vez que se registra un pago o se importa una planilla judicial. Asimismo, para asegurar la conciliación bancaria y la idempotencia de los webhooks de MercadoPago, registramos PreferenceID y PaymentID, y modelamos el libro diario contable con Caja y Caja_Movimiento.'",
  "handover": "Pase a Germán: Germán explicará la integración de MercadoPago y el procesador de planillas con Rollback."
};
export default slide;
