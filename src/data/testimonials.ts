/**
 * Testimonios de clientes.
 *
 * TODO: reemplazar por citas reales y autorizadas por el cliente.
 */

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
}

export const testimonials: Testimonial[] = [
	{
		quote: "Entendieron el proceso mejor que nuestro proveedor anterior en tres años.",
		author: "M. Vera",
		role: "Gerente de Operaciones, Logística Andes",
	},
	{
		quote: "Entregas puntuales y sin sorpresas en el presupuesto. Raro y valioso.",
		author: "C. Rojas",
		role: "Director de TI, Grupo Mediterra",
	},
	{
		quote: "El equipo en bodega dejó de usar papel en dos semanas.",
		author: "A. Núñez",
		role: "Jefa de Planta, Indutex",
	},
];
