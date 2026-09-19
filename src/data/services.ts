/**
 * Línea 1: desarrollo de software a medida.
 * `span` reparte el ancho en el bento para que las celdas no midan lo mismo.
 */

export interface Service {
	title: string;
	description: string;
	span: 2 | 3 | 4;
}

export const services: Service[] = [
	{
		title: "Desarrollo web y aplicaciones a medida",
		description:
			"Plataformas de gestión, portales y aplicaciones internas construidas alrededor de tu operación, no de una plantilla.",
		span: 4,
	},
	{
		title: "IA aplicada",
		description:
			"Automatización de tareas repetitivas, análisis de información e integración de modelos donde aportan valor real.",
		span: 2,
	},
	{
		title: "Integración con SAP y otros ERP",
		description:
			"Conectamos tu ERP con el resto de sistemas para que los datos dejen de pasarse a mano.",
		span: 3,
	},
	{
		title: "APIs REST y seguridad",
		description:
			"Servicios documentados con autenticación JWT y control de acceso por rol.",
		span: 3,
	},
	{
		title: "Docker y despliegue",
		description:
			"Entornos reproducibles: lo que funciona en desarrollo funciona en producción.",
		span: 2,
	},
	{
		title: "Modernización de sistemas heredados",
		description:
			"Migramos por fases ese código que sostiene la operación y que nadie quiere tocar, sin detenerla.",
		span: 4,
	},
	{
		title: "Mantenimiento y soporte continuo",
		description:
			"Acompañamiento después de la entrega: incidencias, mejoras y evolución del sistema.",
		span: 6,
	},
];
