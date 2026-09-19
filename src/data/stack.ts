/** Stack tecnológico, agrupado por capa. */

export interface StackGroup {
	name: string;
	items: string[];
}

export const stack: StackGroup[] = [
	{
		name: "Frontend",
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Redux",
			"React Query",
			"Angular (básico)",
			"CSS",
			"Hooks",
		],
	},
	{
		name: "Backend",
		items: ["Node.js", "NestJS", "PHP", "CodeIgniter", "Python"],
	},
	{
		name: "Bases de datos",
		items: ["MySQL"],
	},
	{
		name: "DevOps e infraestructura",
		items: ["Docker", "Git", "CentOS 7"],
	},
	{
		name: "Integraciones",
		items: ["SAP B1", "APIs REST", "JWT"],
	},
	{
		name: "Móvil",
		items: ["B4X", "Diseño responsive"],
	},
];
