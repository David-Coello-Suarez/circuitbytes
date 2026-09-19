/**
 * Línea 2: venta de productos tecnológicos.
 *
 * TODO: añadir la fotografía real de cada categoría en `image`, apuntando a un
 * archivo de /public (proporción 4:3, mínimo 800x600). Mientras esté vacío se
 * muestra un marco con aviso: una foto de archivo sin relación con el producto
 * confunde al visitante más que un hueco declarado.
 */

export interface ProductCategory {
	name: string;
	description: string;
	items: string[];
	image: string;
}

export const productCategories: ProductCategory[] = [
	{
		name: "Equipos de cómputo",
		description:
			"Estaciones de trabajo, portátiles y equipos de escritorio dimensionados según la carga real de cada puesto.",
		items: ["Portátiles", "Escritorio", "Estaciones de trabajo", "Monitores"],
		image: "",
	},
	{
		name: "Redes e infraestructura",
		description:
			"Conectividad y almacenamiento para oficinas que necesitan operar sin interrupciones.",
		items: ["Switches", "Routers", "Access points", "Almacenamiento en red"],
		image: "",
	},
	{
		name: "Equipamiento de oficina",
		description:
			"Impresión, digitalización y periféricos compatibles con los flujos que automatizamos.",
		items: ["Impresoras", "Escáneres", "UPS", "Periféricos"],
		image: "",
	},
];

/** Lo que diferencia la venta: no es solo despachar una caja. */
export const productPromises: string[] = [
	"Asesoría previa para elegir el equipo según el uso real, no según la ficha técnica",
	"Facturación formal con RUC y comprobantes válidos",
	"Garantía del fabricante y acompañamiento en la gestión",
	"Configuración e instalación opcional a cargo de nuestro equipo técnico",
];
