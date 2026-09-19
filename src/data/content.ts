/** Problema, proceso, beneficios, modelos de colaboración y FAQ. */

export interface Step {
	title: string;
	description: string;
}

export interface PricingModel {
	name: string;
	fit: string;
	description: string;
	highlight?: boolean;
}

export interface FaqItem {
	question: string;
	answer: string;
}

/** Sección de problema: en palabras del cliente, no del proveedor. */
export const problems: string[] = [
	"Tu sistema actual ya no escala al ritmo de la operación.",
	"Nadie quiere tocar el código que sostiene tu negocio.",
	"Tus sistemas no se hablan entre sí y alguien concilia a mano.",
	"Pierdes horas en tareas repetitivas que se pueden automatizar.",
	"Necesitas tecnología confiable y a alguien que responda cerca.",
];

export const process: Step[] = [
	{
		title: "Descubrimiento",
		description:
			"Levantamos requerimientos con quienes usan el sistema a diario, no solo con la dirección.",
	},
	{
		title: "Propuesta técnica y económica",
		description:
			"Alcance, plazos y costo por escrito antes de escribir una línea de código.",
	},
	{
		title: "Arquitectura y desarrollo",
		description:
			"Diseño de la solución y construcción en ciclos cortos, con avances funcionales que puedes revisar.",
	},
	{
		title: "Pruebas, despliegue y seguridad",
		description:
			"Validación, puesta en producción con entornos reproducibles y revisión de accesos.",
	},
	{
		title: "Capacitación y soporte",
		description:
			"Manuales, formación a tu equipo y acompañamiento después de la entrega.",
	},
];

export const benefits: string[] = [
	"Software que se adapta a tu operación, no al revés",
	"Integración con SAP, otros ERP y los sistemas que ya usas",
	"Seguridad considerada desde el diseño, no añadida al final",
	"Despliegue con entornos reproducibles",
	"Modernización por fases, sin detener la operación",
	"Arquitectura escalable con resultados medibles",
	"Soporte y mantenimiento continuo",
	"Productos tecnológicos con asesoría previa y garantía",
];

export const pricing: PricingModel[] = [
	{
		name: "Proyecto cerrado",
		fit: "Alcance definido",
		description:
			"Precio fijo acordado sobre un alcance escrito. Sabes desde el inicio cuánto cuesta y qué incluye.",
	},
	{
		name: "Implementación y soporte",
		fit: "Solución completa",
		description:
			"Inversión única sin licencias recurrentes, con soporte incluido durante doce meses. El modelo del gestor documental con workflow.",
		highlight: true,
	},
	{
		name: "Retainer mensual",
		fit: "Evolución continua",
		description:
			"Cuota mensual con horas de soporte y mejora para sistemas que siguen creciendo.",
	},
	{
		name: "Consultoría por horas",
		fit: "Apoyo puntual",
		description:
			"Diagnóstico técnico, revisión de arquitectura o acompañamiento en decisiones concretas.",
	},
];

export const faq: FaqItem[] = [
	{
		question: "¿Trabajan en remoto?",
		answer:
			"Sí. Trabajamos en remoto con clientes de todo Ecuador, con reuniones de avance periódicas y un canal directo para el día a día. Cuando el proyecto lo requiere, coordinamos visitas presenciales.",
	},
	{
		question: "¿Integran SAP u otros ERP?",
		answer:
			"Sí. Tenemos experiencia concreta integrando SAP Business One mediante APIs REST para procesar movimientos de inventario. El mismo enfoque aplica a otros ERP que expongan servicios o base de datos.",
	},
	{
		question: "¿Cómo aplican la inteligencia artificial?",
		answer:
			"Donde produce un ahorro medible: automatizar tareas repetitivas, clasificar y extraer información de documentos, y conectar modelos con los sistemas que ya usas. No añadimos IA a un proyecto si no resuelve un problema real.",
	},
	{
		question: "¿Modernizan sistemas antiguos?",
		answer:
			"Sí, y es buena parte de lo que hacemos. Migramos por fases para que la operación no se detenga, empezando por los módulos críticos y conservando el histórico de datos.",
	},
	{
		question: "¿Ofrecen soporte y mantenimiento?",
		answer:
			"Sí. Puede contratarse como soporte mensual con horas de mejora incluidas, o como acompañamiento puntual. También capacitamos a tu equipo interno si prefieres asumirlo internamente.",
	},
	{
		question: "¿Venden equipos tecnológicos?",
		answer:
			"Sí, es nuestra segunda línea de negocio: equipos de cómputo, redes e infraestructura y equipamiento de oficina, con asesoría previa, factura y garantía del fabricante.",
	},
	{
		question: "¿Cómo cotizan un proyecto?",
		answer:
			"Empezamos con una reunión para entender el problema. Si hay encaje, enviamos una propuesta técnica y económica con alcance, plazos y costo antes de comenzar cualquier desarrollo.",
	},
	{
		question: "¿Firman acuerdos de confidencialidad?",
		answer:
			"Sin problema. Trabajamos habitualmente con información sensible de inventario, facturación y datos de clientes, y firmamos NDA antes de acceder a cualquier sistema.",
	},
];
