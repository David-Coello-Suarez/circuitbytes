/** Trayectoria profesional, de lo más reciente a lo más antiguo. */

export interface Job {
	role: string;
	company: string;
	/** Rango legible. `current` marca el puesto en curso. */
	period: string;
	current?: boolean;
	highlights: string[];
}

export const experience: Job[] = [
	{
		role: "Desarrollador independiente",
		company: "Freelance",
		period: "Junio 2025 - presente",
		current: true,
		highlights: [
			"Contenerización con Docker, que redujo un 25% los errores de entorno.",
			"Autenticación con JWT para más de 1.000 usuarios.",
		],
	},
	{
		role: "Programador web",
		company: "Diteca S.A.",
		period: "Diciembre 2024 - Julio 2025",
		highlights: [
			"API REST para SAP Business One que automatiza 500 transacciones de inventario al día.",
			"Arquitectura escalable que mejoró un 18% la velocidad de comunicación entre sistemas.",
		],
	},
	{
		role: "Programador web",
		company: "Yaneril S.A.",
		period: "Agosto 2022 - Diciembre 2024",
		highlights: [
			"Refactorización en PHP y CodeIgniter, con un 20% más de eficiencia.",
			"Soporte y corrección de incidencias que redujo el backlog de errores un 40%.",
		],
	},
	{
		role: "Desarrollador",
		company: "RavCorp S.A.",
		period: "Agosto 2022 - Abril 2023",
		highlights: [
			"Administración de servidores CentOS 7 con 99,9% de uptime.",
			"Diseño responsive que acompañó a más de 3.000 visitantes únicos al mes.",
		],
	},
	{
		role: "Analista programador",
		company: "Macrogram",
		period: "Febrero 2021 - Julio 2022",
		highlights: [
			"Aplicaciones web en PHP y JavaScript.",
			"Aplicaciones móviles con B4X.",
		],
	},
	{
		role: "Desarrollador",
		company: "Piensa Software",
		period: "Octubre 2020 - Noviembre 2020",
		highlights: [
			"Migración del backend de JavaScript a TypeScript.",
			"Modelado y consultas en MySQL.",
		],
	},
	{
		role: "Desarrollo",
		company: "Escuela Particular San Pío de Pietrelcina",
		period: "Septiembre 2019 - Diciembre 2019",
		highlights: [
			"Soporte técnico y optimización de sistemas.",
			"Documentación técnica.",
		],
	},
];
