/**
 * Línea 2: venta de productos tecnológicos.
 *
 * Las fotografías son de Unsplash, bajo su licencia de uso comercial gratuito,
 * descargadas a /public/productos para no depender de un servidor externo.
 * Son imágenes genéricas del tipo de equipo, no del catálogo propio.
 *
 * TODO: sustituir por fotografías del catálogo real cuando estén disponibles.
 * Mantener la proporción 4:3 y un ancho mínimo de 800px. Si se deja `image`
 * vacío, la ficha muestra un marco con aviso en lugar de una foto.
 */

export interface ProductCategory {
	name: string;
	description: string;
	items: string[];
	/** Ruta en /public. Vacío muestra el marco de "fotografía pendiente". */
	image: string;
	/** Descripción para lectores de pantalla. Vacío si la imagen es decorativa. */
	imageAlt: string;
}

export const productCategories: ProductCategory[] = [
	{
		name: "Equipos de cómputo",
		description:
			"Estaciones de trabajo, portátiles y equipos de escritorio dimensionados según la carga real de cada puesto.",
		items: ["Portátiles", "Escritorio", "Estaciones de trabajo", "Monitores"],
		image: "/productos/computo.jpg",
		imageAlt: "Computador portátil abierto sobre una superficie clara",
	},
	{
		name: "Redes e infraestructura",
		description:
			"Conectividad y almacenamiento para oficinas que necesitan operar sin interrupciones.",
		items: ["Switches", "Routers", "Access points", "Almacenamiento en red"],
		image: "/productos/redes.jpg",
		imageAlt: "Rack de red con switches, patch panel y cableado estructurado",
	},
	{
		name: "Equipamiento de oficina",
		description:
			"Impresión, digitalización y periféricos compatibles con los flujos que automatizamos.",
		items: ["Impresoras", "Escáneres", "UPS", "Periféricos"],
		image: "/productos/oficina.jpg",
		imageAlt: "Impresora multifunción de oficina con la bandeja de papel abierta",
	},
];

/** Lo que diferencia la venta: no es solo despachar una caja. */
export const productPromises: string[] = [
	"Asesoría previa para elegir el equipo según el uso real, no según la ficha técnica",
	"Facturación formal con comprobantes válidos",
	"Garantía del fabricante y acompañamiento en la gestión",
	"Configuración e instalación opcional a cargo de nuestro equipo técnico",
];
