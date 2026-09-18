/** Servicios mostrados en la sección "Qué hacemos". */

/** Nombre del icono en el set Phosphor (@iconify-json/ph). */
export type ServiceIcon =
	| "ph:browsers"
	| "ph:device-mobile"
	| "ph:plugs-connected"
	| "ph:arrows-clockwise";

export interface Service {
	icon: ServiceIcon;
	title: string;
	description: string;
}

export const services: Service[] = [
	{
		icon: "ph:browsers",
		title: "Aplicaciones web",
		description:
			"Plataformas de gestión, portales de cliente y paneles internos. Arquitectura pensada para crecer sin reescribirse cada dos años.",
	},
	{
		icon: "ph:device-mobile",
		title: "Apps móviles",
		description:
			"iOS y Android desde una base de código común. Funcionamiento offline, sincronización y publicación en las tiendas.",
	},
	{
		icon: "ph:plugs-connected",
		title: "Integraciones y APIs",
		description:
			"Conectamos tus sistemas: ERP, facturación electrónica, pasarelas de pago y hardware local en planta o mostrador.",
	},
	{
		icon: "ph:arrows-clockwise",
		title: "Modernización de sistemas",
		description:
			"Migramos aplicaciones heredadas por fases, sin detener la operación ni perder el histórico de datos.",
	},
];
