/** Preguntas frecuentes. La primera se renderiza abierta. */

export interface FaqItem {
	question: string;
	answer: string;
}

export const faq: FaqItem[] = [
	{
		question: "¿Trabajas en remoto?",
		answer:
			"Sí. Trabajo en remoto con clientes de Ecuador y el resto de LATAM, con reuniones de avance periódicas y un canal directo para el día a día. En Guayaquil también puedo asistir de forma presencial cuando el proyecto lo requiere.",
	},
	{
		question: "¿Cómo cobras?",
		answer:
			"Según el proyecto: precio cerrado por alcance definido, o por horas cuando el trabajo es de soporte y mantenimiento continuo. En ambos casos la propuesta con alcance, plazos y costo va por escrito antes de empezar.",
	},
	{
		question: "¿Qué plazos manejas?",
		answer:
			"Un módulo acotado suele tomar entre dos y cuatro semanas. Un desarrollo completo se divide en fases con entregas parciales, para que veas avance funcionando y no un informe de porcentajes.",
	},
	{
		question: "¿Ofreces soporte después de la entrega?",
		answer:
			"Sí. Puedo acompañar con soporte mensual, corrección de incidencias y mejoras, o capacitar a tu equipo interno para que asuma el mantenimiento.",
	},
	{
		question: "¿Firmas acuerdos de confidencialidad?",
		answer:
			"Sin problema. Trabajo habitualmente con información sensible de inventario, clientes y facturación, y firmo NDA antes de acceder a cualquier sistema.",
	},
];
