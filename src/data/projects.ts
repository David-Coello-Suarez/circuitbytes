/**
 * Proyectos mostrados en la sección "Trabajo reciente".
 *
 * TODO: reemplazar por casos reales. `href` apunta al contacto mientras
 * no existan páginas de detalle.
 */

export interface Project {
	title: string;
	description: string;
	tags: string[];
	href: string;
}

export const projects: Project[] = [
	{
		title: "Plataforma de gestión documental",
		description: "Digitalización y firma electrónica para una red de 40 sucursales.",
		tags: ["Angular", ".NET", "Azure"],
		href: "#contacto",
	},
	{
		title: "App de inventario en planta",
		description: "Lectura de códigos y sincronización offline para operarios en bodega.",
		tags: ["React Native", "SQLite"],
		href: "#contacto",
	},
	{
		title: "Portal de clientes B2B",
		description: "Autogestión de pedidos y estados de cuenta integrada al ERP existente.",
		tags: ["Astro", "NestJS", "PostgreSQL"],
		href: "#contacto",
	},
];
