/** Formación reglada, certificaciones e idiomas. */

export interface Credential {
	title: string;
	issuer: string;
	year: string;
}

export const formalEducation: Credential[] = [
	{
		title: "Tecnólogo Superior",
		issuer: "Instituto Tecnológico Superior Guayaquil",
		year: "2017 - 2021",
	},
];

export const certifications: Credential[] = [
	{
		title: "Machine Learning y Deep Learning con PHP",
		issuer: "Udemy",
		year: "2024",
	},
	{
		title: "React: aplicaciones en tiempo real con Socket.io",
		issuer: "Udemy",
		year: "2024",
	},
	{ title: "React Query", issuer: "DevTalles", year: "2024" },
	{
		title: "React: de cero a experto (Hooks y MERN)",
		issuer: "Udemy",
		year: "2023",
	},
	{ title: "Node: de cero a experto", issuer: "Udemy", year: "2021" },
	{
		title: "Sistema web PHP con integración a Web Services",
		issuer: "Udemy",
		year: "2020",
	},
];

export const languages: string[] = [
	"Español: nativo",
	"Inglés: oral básico, escrito básico",
];
