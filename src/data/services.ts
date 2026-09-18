/** Servicios mostrados en la sección "Qué hacemos". */

/** Clave del icono; se resuelve en Services.astro. */
export type ServiceIcon = "web" | "mobile" | "api" | "modernize";

export interface Service {
	icon: ServiceIcon;
	title: string;
	description: string;
}

export const services: Service[] = [
	{
		icon: "web",
		title: "Aplicaciones web",
		description:
			"Plataformas de gestión, portales de cliente y paneles internos. Arquitectura pensada para crecer sin reescribirse cada dos años.",
	},
	{
		icon: "mobile",
		title: "Apps móviles",
		description:
			"iOS y Android desde una base de código común. Funcionamiento offline, sincronización y publicación en las tiendas.",
	},
	{
		icon: "api",
		title: "Integraciones y APIs",
		description:
			"Conectamos tus sistemas: ERP, facturación electrónica, pasarelas de pago y hardware local en planta o mostrador.",
	},
	{
		icon: "modernize",
		title: "Modernización de sistemas",
		description:
			"Migramos aplicaciones heredadas por fases, sin detener la operación ni perder el histórico de datos.",
	},
];
