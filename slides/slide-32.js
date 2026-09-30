const slide = {
  "id": 32,
  "type": "split",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 9 — CONCLUSIONES",
  "blockTag": "Bloque 9 · Balance de Rol",
  "title": "Conclusiones: Base de Datos",
  "subtitle": "Evolución del modelo relacional, optimización y resolución de problemas reales mediante migraciones",
  "cards": [
    {
      "accent": "accent-blue",
      "heading": "Logros de Modelado y Rendimiento",
      "badge": "Base Sólida",
      "list": [
        "Tercera Forma Normal (3FN): Estructuramos más de 20 tablas sin datos duplicados ni inconsistencias, garantizando integridad referencial estricta.",
        "Desnormalización Inteligente: Guardamos el saldo acumulado en Deuda_Socio para que la consulta de deudas sea instantánea sin sumar cientos de filas cada vez.",
        "Búsquedas en Sub-milisegundos: Con índices B-Tree e índices FULLTEXT en Socios, el buscador por nombre, apellido o CUIL responde en menos de 2 ms.",
        "Mantenimiento Autónomo: Tareas programadas con MySQL Event Scheduler liberan turnos impagos y recalculan resúmenes diarios de caja automáticamente."
      ]
    },
    {
      "accent": "accent-gold",
      "heading": "Migraciones del Proyecto: ¿Qué Resolvieron?",
      "badge": "Evolución Sin Caídas",
      "migrations": [
        {
          "name": "1. Horarios Nocturnos que Cruzan Medianoche",
          "solved": "La base rechazaba turnos de 22:00 a 02:00 porque la hora fin era menor. Se flexibilizó el CHECK para permitir alquileres de quinchos que terminan al día siguiente."
        },
        {
          "name": "2. Módulo de Seguro de Alquiler y Devoluciones",
          "solved": "Creó la tabla Seguro_Devolucion y campos para cobrar un depósito en garantía y registrar si se reintegra total, parcial o se retiene por roturas."
        },
        {
          "name": "3. Precios Diferenciados por Día de la Semana",
          "solved": "Agregó Espacio_Precio_Dia para cobrar tarifas distintas en fin de semana vs días hábiles, tanto para socios como para invitados."
        },
        {
          "name": "4. Reparación y Precisión Exacta en Deudas",
          "solved": "Recálculo con redondeo a 2 decimales para evitar diferencias de centavos al importar los sueldos y descontar cuotas por planilla judicial."
        }
      ]
    }
  ]
};

export const notes = {
  "speaker": "Elenio García [Base de Datos]",
  "content": "<strong>Qué decir:</strong> 'Como balance del área de base de datos, el objetivo principal fue construir un motor seguro, rápido y capaz de evolucionar junto a las necesidades del club sin romper nunca el sistema en producción. Por un lado, normalizamos en 3FN asegurando integridad total, y aplicamos una desnormalización inteligente en Deuda_Socio para que las consultas de saldo no demoren nada. Por otro lado, enfrentamos requerimientos reales que resolvimos mediante migraciones SQL controladas: 1) Permitir horarios nocturnos que cruzan la medianoche para quinchos; 2) Crear el módulo de depósito en garantía y devolución de seguro de alquiler; 3) Habilitar tarifas diferenciadas según el día de la semana; y 4) Corregir la precisión a dos decimales en deudas para que el cobro por planilla coincida al centavo. Todo esto se implementó con scripts seguros y sin caída del servicio.'",
  "handover": "Pase a Equipo: Los tres cerraremos con el impacto institucional y las líneas a futuro."
};
export default slide;
