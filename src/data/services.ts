/**
 * Servicios. `span` controla el ancho de la celda en el bento asimétrico:
 * las seis no ocupan lo mismo, para que la sección no lea como una rejilla
 * de tarjetas idénticas.
 */

export interface Service {
	/** Icono del set Phosphor (@iconify-json/ph). */
	icon: string;
	title: string;
	description: string;
	/** Columnas que ocupa en la rejilla de 6 de escritorio. */
	span: 2 | 3 | 4;
}

export const services: Service[] = [
	{
		icon: "ph:layout-bold",
		title: "Desarrollo front-end",
		description:
			"Interfaces en React, TypeScript y Next.js, con Redux y React Query para manejar estado y datos sin que la aplicación se vuelva frágil.",
		span: 4,
	},
	{
		icon: "ph:plugs-connected-bold",
		title: "Back-end y APIs",
		description:
			"APIs REST en Node.js, NestJS y PHP con CodeIgniter, diseñadas para integrarse y crecer.",
		span: 2,
	},
	{
		icon: "ph:arrows-left-right-bold",
		title: "Integración de sistemas",
		description:
			"Conexión con SAP Business One y Web Services para automatizar lo que hoy se hace a mano.",
		span: 2,
	},
	{
		icon: "ph:shield-check-bold",
		title: "Seguridad",
		description:
			"Autenticación con JWT y buenas prácticas para proteger el acceso a tus datos.",
		span: 2,
	},
	{
		icon: "ph:stack-bold",
		title: "DevOps y despliegue",
		description:
			"Docker, CentOS 7 y CI/CD para que desplegar deje de ser un evento de riesgo.",
		span: 2,
	},
	{
		icon: "ph:wrench-bold",
		title: "Optimización y soporte",
		description:
			"Refactorización de sistemas heredados, reducción de deuda técnica y atención de incidencias.",
		span: 4,
	},
];
