# Flores Amarillas 🌻

Un proyecto interactivo web creado con HTML5, CSS y Canvas que muestra una hermosa animación de flores amarillas creciendo, con movimiento natural y un elegante efecto de luciérnagas de fondo.

## Características

- 🌻 Animación de crecimiento de flores y tallos.
- 🍃 Movimiento fluido simulando el viento en cada flor.
- ✨ Efecto de fondo interactivo con luciérnagas animadas.
- 💻 Diseño completamente responsivo que se adapta a cualquier tamaño de pantalla (PC, tablet o móvil).

## Instalación y Uso

Este proyecto no requiere de instalaciones complejas ni dependencias adicionales (`node_modules`). Puedes usarlo de dos maneras:

### Opción 1: Ejecución directa (Sin servidor)
Simplemente haz doble clic en el archivo `flores_amarillas.html` para abrirlo en tu navegador web predeterminado, y la animación comenzará de inmediato.

### Opción 2: Usar el servidor local (Node.js)
Si tienes [Node.js](https://nodejs.org/) instalado y quieres montarlo como servidor:

1. Clona este repositorio o descarga los archivos en tu computadora.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para iniciar el servidor web:
   ```bash
   node server.js
   ```
4. Abre tu navegador y dirígete a `http://localhost:3000`

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos base, diseño centrado, tipografía con brillo y animaciones.
- **JavaScript Vanilla**: Lógica de dibujo dinámico en el `<canvas>` (programación orientada a objetos para las flores).
- **Node.js**: Servidor HTTP nativo (`server.js`) para montarlo localmente.

## Estructura de Archivos

```
/
├── flores_amarillas.html   # Archivo principal con la estructura, estilos y lógica visual
├── server.js               # Servidor ligero en Node.js
└── README.md               # Documentación del proyecto
```

## Personalización

Puedes editar fácilmente los parámetros dentro del archivo `flores_amarillas.html` (dentro de la etiqueta `<script>`) para adaptarlo a tus gustos:
- **Cantidad de flores:** Se ajusta automáticamente al ancho de la pantalla, pero puedes cambiar la lógica en `initFlowers()`.
- **Luciérnagas:** Cambia el límite del ciclo `for` de `fireflies` para agregar más o menos.
- **Colores:** Los colores (gradientes de pétalos, centro de la flor y tallos) están definidos en formato hexadecimal y pueden reemplazarse en las funciones de pintado del `ctx`.
