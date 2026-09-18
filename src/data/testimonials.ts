/**
 * Testimonios de clientes.
 *
 * TODO: reemplazar por citas reales y autorizadas por el cliente.
 * `initials` alimenta el avatar; se calcula a mano para controlar el resultado.
 */

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	initials: string;
}

export const testimonials: Testimonial[] = [
	{
		quote: "Entendieron el proceso mejor que nuestro proveedor anterior en tres años.",
		author: "M. Vera",
		role: "Gerente de Operaciones, Logística Andes",
		initials: "MV",
	},
	{
		quote: "Entregas puntuales y sin sorpresas en el presupuesto. Raro y valioso.",
		author: "C. Rojas",
		role: "Director de TI, Grupo Mediterra",
		initials: "CR",
	},
	{
		quote: "El equipo en bodega dejó de usar papel en dos semanas.",
		author: "A. Núñez",
		role: "Jefa de Planta, Indutex",
		initials: "AN",
	},
];
