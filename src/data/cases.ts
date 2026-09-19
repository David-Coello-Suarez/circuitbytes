/**
 * Casos de éxito: problema, solución y resultado medible.
 *
 * Los clientes van anonimizados por sector, no por nombre.
 * TODO: si se autoriza, añadir capturas o enlaces por caso.
 */

export interface CaseStudy {
	title: string;
	sector: string;
	problem: string;
	solution: string;
	/** Resultado principal, el que se destaca visualmente. */
	metric: string;
	metricLabel: string;
	/** Resultado secundario, opcional. */
	secondary?: string;
	tags: string[];
}

export const cases: CaseStudy[] = [
	{
		title: "API REST para SAP Business One",
		sector: "Distribución y maquinaria",
		problem:
			"El inventario se conciliaba a mano entre el sistema web y SAP, con retrasos y errores de digitación.",
		solution:
			"Diseñé una API REST que comunica ambos sistemas y automatiza el movimiento de inventario de punta a punta.",
		metric: "500",
		metricLabel: "transacciones diarias automatizadas",
		secondary: "+18% de velocidad en la comunicación entre sistemas",
		tags: ["Node.js", "SAP B1", "REST"],
	},
	{
		title: "Autenticación con JWT",
		sector: "Plataforma web",
		problem:
			"El acceso no tenía un control de sesión sólido, lo que dejaba expuesta la información de los usuarios.",
		solution:
			"Implementé autenticación basada en JWT con manejo de expiración y control de permisos por rol.",
		metric: "+1.000",
		metricLabel: "usuarios potenciales protegidos",
		tags: ["JWT", "Node.js", "Seguridad"],
	},
	{
		title: "Refactorización de un sistema heredado",
		sector: "Servicios",
		problem:
			"Una aplicación en PHP y CodeIgniter acumulaba deuda técnica y un backlog de errores que no bajaba.",
		solution:
			"Refactoricé los módulos críticos y ordené el soporte para atacar la causa de las incidencias recurrentes.",
		metric: "+20%",
		metricLabel: "de eficiencia en el sistema",
		secondary: "-40% en el backlog de errores",
		tags: ["PHP", "CodeIgniter", "MySQL"],
	},
];
