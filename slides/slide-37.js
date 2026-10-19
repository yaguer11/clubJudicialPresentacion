const slide = {
  "id": 37,
  "type": "split",
  "speaker": "elenio",
  "speakerLabel": "EG · Base de Datos",
  "block": "BLOQUE 9 — CONCLUSIONES",
  "blockTag": "Bloque 9 · Balance de Rol",
  "title": "Conclusiones: Base de Datos",
  "subtitle": "Un modelo pensado para las reglas del club y que creció sin romper nada",
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
  "content": "<strong>Qué decir:</strong> 'Como balance de la base de datos: llegamos a 40 tablas, con 55 claves foráneas y 21 restricciones UNIQUE que protegen la integridad. Cada tabla salió de una necesidad real del club. Normalizamos para no duplicar datos y desnormalizamos solo donde hacía falta velocidad, como en Deuda_Socio. Lo más importante fue que el modelo pudo crecer con el sistema en uso: aplicamos 9 migraciones SQL, primero en la base de test y después en producción. Así sumamos el seguro de alquiler, los precios por día, los horarios que cruzan la medianoche, la precisión exacta de la deuda y la optimización con índices y el resumen diario, sin perder datos.'",
  "handover": "Pase a Equipo: Los tres cerraremos con el impacto institucional y las líneas a futuro."
};
export default slide;
