/**
 * Datos de marca, contacto y navegación.
 * Editá este archivo para cambiar textos globales sin tocar el markup.
 *
 * TODO: reemplazar los datos de contacto de ejemplo por los reales.
 */

export interface NavLink {
	label: string;
	href: string;
}

export interface Metric {
	value: string;
	label: string;
}

export const site = {
	name: "CircuitBits",
	tagline: "Desarrollo de aplicaciones a medida",
	description:
		"Construimos aplicaciones web, móviles y de escritorio para empresas que necesitan que su operación funcione todos los días.",
	url: "https://circuitbits.dev",
	locale: "es",
	email: "hola@circuitbits.dev",
	phone: "+593 00 000 0000",
	phoneHref: "tel:+593000000000",
	schedule: "Lun a Vie, 9:00 – 18:00",
	responseTime: "Respuesta en 24 h",
	available: true,
} as const;

export const nav: NavLink[] = [
	{ label: "Servicios", href: "#servicios" },
	{ label: "Proyectos", href: "#proyectos" },
	{ label: "Nosotros", href: "#nosotros" },
	{ label: "FAQ", href: "#faq" },
];

export const metrics: Metric[] = [
	{ value: "8+", label: "años de trayectoria" },
	{ value: "40+", label: "proyectos entregados" },
	{ value: "12", label: "industrias atendidas" },
	{ value: "24 h", label: "tiempo de respuesta" },
];

export const stack: string[] = [
	"TypeScript",
	"Angular",
	"React",
	"Astro",
	"NestJS",
	".NET",
	"Python",
	"React Native",
	"PostgreSQL",
	"SQL Server",
	"Docker",
	"Azure",
];
