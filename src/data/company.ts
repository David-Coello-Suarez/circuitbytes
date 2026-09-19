/**
 * Identidad, contacto y navegación de CircuitByte S.A.S.
 * El RUC y la razón social son datos públicos de la empresa.
 */

export interface NavLink {
	label: string;
	href: string;
}

export interface TrustItem {
	label: string;
	detail: string;
}

export const company = {
	name: "CircuitByte",
	legalName: "CircuitByte S.A.S.",
	tagline: "Soluciones Tecnológicas",
	ruc: "0993403730001",
	country: "Ecuador",

	seoTitle:
		"CircuitByte S.A.S. | Software a medida con IA + Tecnología de última generación",
	seoDescription:
		"Desarrollamos software a medida con IA, integramos SAP, modernizamos sistemas heredados y vendemos tecnología de última generación. Cotiza tu proyecto.",

	// TODO: reemplazar por los datos de contacto definitivos.
	email: "contacto@circuitbyte.ec",
	phone: "+593 00 000 0000",
	phoneHref: "tel:+593000000000",
	whatsapp: "https://wa.me/593000000000",
	linkedin: "https://www.linkedin.com/company/",

	// TODO: endpoint real de Formspree (https://formspree.io/f/xxxxxxx).
	formEndpoint: "",
	// TODO: enlace de Calendly para agendar reuniones.
	calendly: "",
	// TODO: identificador real de Google Analytics 4.
	analyticsId: "G-XXXXXXXXXX",
} as const;

export const nav: NavLink[] = [
	{ label: "Software", href: "#software" },
	{ label: "Productos", href: "#productos" },
	{ label: "Casos", href: "#casos" },
	{ label: "Nosotros", href: "#nosotros" },
	{ label: "Contacto", href: "#contacto" },
];

/** Tecnologías mostradas bajo el titular del hero. */
export const heroTech: string[] = [
	"SAP",
	"JWT",
	"Docker",
	"React",
	"Node.js",
	"NestJS",
	"PHP",
	"IA aplicada",
];

/** Franja de confianza. Solo datos comprobables. */
export const trust: TrustItem[] = [
	{
		label: "Empresa ecuatoriana",
		detail: "Sociedad constituida en Ecuador, con facturación formal.",
	},
	{
		label: "Contratación con respaldo",
		detail: "Propuestas por escrito y comprobantes válidos en cada entrega.",
	},
	{
		label: "Sector educativo",
		detail: "Propuesta técnica desarrollada para una institución educativa.",
	},
	{
		label: "Soluciones medibles",
		detail: "Arquitectura escalable con resultados que se pueden verificar.",
	},
];
