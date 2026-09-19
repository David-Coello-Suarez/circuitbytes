/**
 * Identidad, contacto y cifras de David Coello.
 *
 * Los datos de contacto son reales y autorizados para publicación.
 * Por decisión expresa NO se incluye documento de identidad, fecha de
 * nacimiento ni estado civil.
 */

export interface NavLink {
	label: string;
	href: string;
}

export interface Proof {
	label: string;
	value: string;
}

export const profile = {
	name: "David Coello",
	fullName: "David Fernando Coello Suárez",
	shortName: "DF Coello",
	role: "Desarrollador Full-Stack",
	location: "Guayaquil, Guayas, Ecuador",

	seoTitle: "David Coello | Desarrollador Full-Stack React, Node.js y SAP B1",
	seoDescription:
		"Desarrollador full-stack en Ecuador. React, TypeScript, Node.js, PHP, APIs REST, SAP B1, Docker y JWT. +6 años de experiencia.",

	email: "coellosuarezd@gmail.com",
	phones: ["0969985251", "0982779307"],
	/** El primer teléfono, en formato internacional para enlaces tel: y WhatsApp. */
	phonePrimaryHref: "tel:+593969985251",
	whatsappHref: "https://wa.me/593969985251",

	// TODO: sustituir por los perfiles reales antes de publicar.
	linkedin: "https://www.linkedin.com/in/",
	github: "https://github.com/",

	// TODO: añadir la foto en public/david-coello.jpg (cuadrada, mínimo 480x480).
	photo: "",

	// TODO: sustituir por el identificador real de Google Analytics 4.
	analyticsId: "G-XXXXXXXXXX",
} as const;

export const nav: NavLink[] = [
	{ label: "Servicios", href: "#servicios" },
	{ label: "Stack", href: "#stack" },
	{ label: "Experiencia", href: "#experiencia" },
	{ label: "Casos", href: "#casos" },
	{ label: "Contacto", href: "#contacto" },
];

/** Badges de tecnología bajo el titular del hero. */
export const heroBadges: string[] = [
	"React",
	"TypeScript",
	"Node.js",
	"NestJS",
	"Docker",
	"SAP B1",
];

export const proof: Proof[] = [
	{ label: "de experiencia", value: "+6 años" },
	{ label: "asegurados con JWT", value: "+1.000 usuarios" },
	{ label: "diarias automatizadas con SAP B1", value: "500 transacciones" },
	{ label: "en servidores PHP", value: "99,9% uptime" },
];
