# Sistema de Diseño Tipográfico

**Decisión aprobada por el usuario: 1 de octubre de 2026.**

## Objetivo

Crear contenido visual y maquetación web de carácter editorial, cálido, sofisticado y digitalmente moderno, tomando Hello Monday como referencia de composición. La combinación aprobada es **Lora para titulares + Montserrat para cuerpo e interfaz**.

## Familias y funciones

| Función | Familia | Peso | Aplicación |
| --- | --- | --- | --- |
| Secundaria / titulares y display | Lora | Medium 500 | h1, h2, h3, frases destacadas y citas |
| Énfasis editorial | Lora Italic | Medium 500 | Una o dos palabras clave dentro de un titular de impacto |
| Principal / lectura | Montserrat | Regular 400 | Párrafos y texto de lectura |
| Principal / interfaz | Montserrat | Medium 500 o SemiBold 600 | h4, h5, navegación, botones, tags, etiquetas y CTA |

Georgia y Arial quedan únicamente como fuentes de respaldo técnico. No son las familias seleccionadas para la marca.

## Composición

1. Crear un contraste fuerte de escala entre los titulares Lora y los bloques contenidos de Montserrat.
2. Dar ritmo editorial mediante una o dos palabras en Lora Italic; utilizar el archivo de cursiva real.
3. Mantener interlineado generoso y márgenes amplios. La tipografía debe respirar y ser un elemento gráfico dominante.
4. Escribir con un tono profesional, cercano, ingenioso y sofisticado. Evitar párrafos densos o sobrecargados.

La selección de familias, pesos y funciones está aprobada. Los tamaños responsivos del showcase siguen siendo valores de implementación que se pueden ajustar mediante revisión visual.

## Implementación

Los tokens aprobados viven en `tokens/tokens.json`. `styles/typography.css` carga `styles/fonts.css`, que declara los archivos locales de Lora normal, Lora Italic y Montserrat. La página funciona sin solicitar fuentes a terceros.

El cuerpo usa 16px e interlineado 1.6 como base actual; la galería combina tamaños responsivos de titulares con espacios amplios. Los textos cortos de interfaz usan Montserrat 500/600.

## Referencias históricas

El board actual v2 usa Lora y Montserrat con letras convertidas a contornos. Los moodboards anteriores, capturas del workshop y archivos del kit v1 conservan su tipografía original y viven en el [archivo histórico](archive.md). La página HTML, los componentes y el [prompt maestro](icon-style-master-prompt.md) reflejan la decisión aprobada.
