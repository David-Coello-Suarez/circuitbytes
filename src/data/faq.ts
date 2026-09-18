/** Preguntas frecuentes. La primera se renderiza abierta por defecto. */

export interface FaqItem {
	question: string;
	answer: string;
}

export const faq: FaqItem[] = [
	{
		question: "¿Cómo empieza un proyecto?",
		answer:
			"Con una llamada de 30 minutos para entender el problema. Si hay encaje, enviamos una propuesta con alcance, plazos y costo cerrado antes de escribir código.",
	},
	{
		question: "¿Cuánto cuesta una aplicación?",
		answer:
			"Depende del alcance. Un módulo interno acotado parte alrededor de las cuatro semanas de trabajo; una plataforma completa se cotiza por fases para que puedas detenerte o continuar en cada hito.",
	},
	{
		question: "¿El código queda en nuestro poder?",
		answer:
			"Sí. El repositorio es tuyo desde el primer commit, junto con la documentación técnica y las credenciales de infraestructura.",
	},
	{
		question: "¿Dan mantenimiento después de la entrega?",
		answer:
			"Ofrecemos soporte mensual opcional con horas de mejora incluidas. También podemos capacitar a tu equipo interno para que lo asuma.",
	},
	{
		question: "¿Trabajan con equipos remotos?",
		answer:
			"Siempre. Operamos en remoto con reuniones de avance semanales y un canal directo para el día a día.",
	},
];
