---
layout: post
title: 'El estado del código: Informes sobre la calidad del código de Sonar'
description: Anirban Chatterjee escríbe este post sobre el lanzamiento de una serie de informes que realiza Sonar sobre la calidad del código
date: '2025-07-08T08:00:00Z'
author: Anirban Chatterjee
categories:

- sonarqube
- calidad
- devops

cover: img/posts/2025-07-08-informes-calidad-codigo-sonar.png

---

¿Sabías que el coste anual de la **mala calidad** del software en EE.UU. ya supera los **2,41 billones de dólares**? Es una cifra abrumadora que deja claro algo fundamental: la salud del código tiene un impacto directo en el éxito del negocio, la satisfacción del cliente y la competitividad de una empresa. Pero… ¿cómo se ve realmente esa “mala calidad del software”? ¿Cuáles son los problemas más comunes que están presentes en el código que se escribe hoy en día?

Para responder a esas preguntas, fuimos directamente a la fuente.

Hoy lanzamos "The State of Code", una **nueva serie de informes** en varias entregas que ofrece una visión única del estado real del desarrollo de software. Hemos **analizado los datos masivos de Sonar** durante los últimos seis meses de 2024, que incluyen:

- Más de 7.900 millones de líneas de código. <br>

- Código de más de 970.000 desarrolladores de 40.000 organizaciones. <br>

- Análisis de los lenguajes Java, JavaScript, TypeScript, Python, C#, C++ y PHP. <br>

A diferencia de los informes basados en encuestas, nuestros hallazgos están respaldados por datos reales, sacados directamente del uso cotidiano que hacen los desarrolladores de [SonarQube](/sonarqube){:target="_blank"}. A lo largo del verano, publicaremos diferentes entregas que explorarán los tres pilares clave de tu base de código: fiabilidad, seguridad y mantenibilidad, aplicados a los siete lenguajes más usados por los desarrolladores.

<strong>Volumen 1: Fiabilidad</strong>

En el **primer informe, The State of Code: Reliability**, analizamos los problemas de fiabilidad más comunes (y corregibles) que afectan al código. Descubrimos una media de **2.100 bugs de fiabilidad** por cada millón de líneas de código. Son errores que degradan el rendimiento, provocan bloqueos impredecibles y, en última instancia, erosionan la confianza del usuario.

Para los desarrolladores, suponen horas de depuración frustrante y arreglos de última hora. Para los líderes, implican retrasos, riesgos en los proyectos y dificultades para mantener estándares de calidad consistentes.

<strong>Los sospechosos habituales: los bugs más comunes</strong>

De los 16 millones de problemas de fiabilidad detectados por Sonar, vimos que los más frecuentes **eran el código muerto y los errores por desreferenciar** punteros nulos.

<strong>1. Código muerto: más que líneas de sobra</strong><br>

El **problema más común** está relacionado con declaraciones que no tienen efecto ni modifican el flujo de ejecución del programa: lo que llamamos “código muerto”. Son líneas que no hacen nada útil.

Aunque parezcan inofensivos, pueden esconder errores mucho más serios. Un caso famoso es el **bug de seguridad de Apple en 2014**, conocido como el "goto fail", donde una línea duplicada dejó inoperativo el chequeo de autenticidad de conexiones seguras. Millones de usuarios quedaron expuestos a ataques del tipo man-in-the-middle por un simple descuido de este tipo.

¿Por qué es un problema? En el mejor de los casos, el código muerto añade **sobrecarga innecesaria y complica el mantenimiento**. En el peor, puede enmascarar errores graves. Para los equipos, significa perder tiempo analizando código que no sirve, y para los desarrolladores, representa confusión y deuda técnica.

¿Cómo lo soluciono? Gracias al análisis en tiempo real de SonarQube, este tipo de código se detecta automáticamente durante el desarrollo. Además, ofrece orientación clara sobre por qué es un problema y cómo arreglarlo. Las quality gates pueden evitar que ese código llegue a producción.

<strong>2. Punteros nulos: el fantasma en la máquina</strong><br>

El segundo error más común es el clásico puntero nulo. Ocurre cuando el código intenta acceder a una variable nula, generando un error o incluso un fallo catastrófico.

Un ejemplo reciente fue el **apagón de Google Cloud** en junio de 2025. Un cambio de código mal gestionado provocó errores 503 a nivel global. ¿El motivo? Una política nueva que no contemplaba un valor en blanco inesperado. El sistema entró en un bucle de fallos que afectó a servicios críticos.

¿Por qué es un problema? Son errores difíciles de localizar. Una variable nula puede aparecer en una parte del código pero causar problemas mucho más adelante, lo que complica la depuración. Además, en producción, estos fallos pueden derivar en **caídas y exposición de datos**.

¿Cómo lo soluciono? SonarQube detecta este tipo de errores desde **las primeras etapas de desarrollo**. Sus descripciones detalladas y su ayuda contextual permiten a los desarrolladores entender y corregir el problema fácilmente. La función AI CodeFix incluso sugiere correcciones directamente en el IDE. Las quality gates actúan como red de seguridad adicional para evitar que estos errores lleguen a producción.

<strong>Construyendo un código más fiable</strong>

A medida que los **asistentes de IA** generan cada vez más código, la calidad del software existente cobra aún más relevancia, ya que este código sirve como base para entrenar a esos sistemas. Corregir estos errores comunes no solo es importante para la estabilidad actual, sino también para el futuro del desarrollo de software.

Y esto es solo el principio. [Descarga](/pdf/sonar/whitepaper/the-state-of-code-reliability.pdf) el informe completo "The State of Code: Reliability" y descubre:

- El bug crítico más común.

- Los 5 errores de fiabilidad más frecuentes en casi 8.000 millones de líneas de código.

- Soluciones prácticas para eliminarlos de tu base de código.

Muy pronto publicaremos los próximos volúmenes, donde analizaremos las vulnerabilidades de seguridad más graves, los problemas de mantenibilidad y los desafíos específicos de cada lenguaje.   

Este es un artículo traducido de la web de Sonar. [En este enlace](https://www.sonarsource.com/blog/the-state-of-code-reliability/){:target="_blank"} el blog original. 
