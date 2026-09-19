/**
 * Casos y experiencia técnica.
 *
 * Regla que gobierna este archivo: nada se presenta como entregado si no lo
 * está. `status` indica el estado real de cada trabajo y se muestra siempre
 * junto al título. El cliente educativo aparece sin nombre al no contar con
 * autorización expresa para citarlo.
 */

export type CaseStatus = "Propuesta desarrollada" | "Proyecto de integración" | "Experiencia técnica";

export interface CaseItem {
	title: string;
	status: CaseStatus;
	client: string;
	summary: string;
	outcomes: string[];
	tags: string[];
}

export const cases: CaseItem[] = [
	{
		title: "Gestor documental y sistema de workflow",
		status: "Propuesta desarrollada",
		client: "Institución educativa",
		summary:
			"Propuesta técnica y económica para centralizar la documentación y automatizar los procesos de aprobación que hoy circulan en papel y correo.",
		outcomes: [
			"Centralización documental con control de versiones",
			"Automatización de flujos de aprobación",
			"Trazabilidad de cada expediente y su historial",
		],
		tags: ["Gestión documental", "Workflow", "Arquitectura"],
	},
	{
		title: "API REST para SAP Business One",
		status: "Proyecto de integración",
		client: "Sector distribución",
		summary:
			"Servicio que comunica la operación diaria con SAP B1 y procesa el movimiento de inventario sin digitación manual intermedia.",
		outcomes: [
			"Procesamiento de transacciones de inventario",
			"Comunicación directa entre sistemas, sin reconciliación a mano",
		],
		tags: ["SAP B1", "Node.js", "REST"],
	},
	{
		title: "Autenticación y control de acceso con JWT",
		status: "Experiencia técnica",
		client: "Plataformas web",
		summary:
			"Implementación de autenticación con tokens, expiración de sesión y permisos por rol para proteger la información de los usuarios.",
		outcomes: [
			"Diseñado para más de 1.000 usuarios potenciales",
			"Control de permisos diferenciado por rol",
		],
		tags: ["JWT", "Seguridad"],
	},
	{
		title: "Despliegue con Docker y modernización de sistemas PHP",
		status: "Experiencia técnica",
		client: "Sistemas heredados",
		summary:
			"Contenerización de entornos y refactorización de aplicaciones en PHP y CodeIgniter que seguían sosteniendo la operación diaria.",
		outcomes: [
			"Reducción de los errores derivados de diferencias de entorno",
			"Mejora de eficiencia y reducción del backlog de incidencias",
		],
		tags: ["Docker", "PHP", "CodeIgniter"],
	},
];
