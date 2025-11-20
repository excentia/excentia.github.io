---
layout: post
title: 'Sonar Foundation Agent: Nuevo agente automático para corregir el código'
description: Conoce el nuevo agente para SonarQube que analiza incidencias de código, genera parches y mejora la calidad del software.
date: '2025-11-17T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-11-16-que-es-sonar-foundation-agent.png

---

¿Recuerdas que a principio de año Sonar anunció la **compra de AutoCodeRover**? Bien, pues esta semana han publicado un artículo en el que nos adelantan qué es lo que van a lanzar tras esta alianza. Se trata de Sonar Foundation Agent, un agente que ayudará a los usuarios de SonarQube a corregir el código. Traducimos esta noticia de Sonar y la desgranamos para entender bien este nuevo "producto". 

<h2>¿Qué es Sonar Foundation Agent?</h2>

**Sonar Foundation Agent** es un agente automático desarrollado por Sonar para resolver problemas generales del código. Creado por el antiguo **equipo de AutoCodeRover**, este agente está diseñado para analizar **errores, investigar su origen** y **generar parches** de manera autónoma.

A fecha del **3 de noviembre de 2025**, tal y como han publicado en su web "Sonar Foundation Agent alcanza un 75% de eficacia en SWE-bench Verified, manteniendo un coste medio bajo de 1,26 dólares y una eficiencia de 10,5 minutos por incidencia". Esto lo convierte en una herramienta potente para equipos que utilizan SonarQube y buscan optimizar la calidad de su código de forma automatizada.

<h2>¿Cómo funciona?</h2>

Según podemos leer en el artículo Sonar Foundation Agent funciona como un "agente de tipo *tool-calling*, implementado con el framework LlamaIndex". Su flujo básico es el siguiente:

Recibe la **descripción del error**: El agente inicia su proceso a partir de un system prompt configurado en LlamaIndex, que contiene la descripción del problema de código a resolver. Este prompt guía al agente sobre cómo investigar y corregir la incidencia.

Invoca **herramientas de forma iterativa**: Para analizar y solucionar el problema, Sonar Foundation Agent dispone de varias herramientas integradas:

- **bash**: ejecuta comandos arbitrarios en un shell persistente. <br>

- **str_replace_editor**: permite ver, crear y editar archivos mediante reemplazo de texto. <br>

- **find_symbols**: busca símbolos en el AST del programa, como clases, métodos y funciones, facilitando localizar el código relevante. <br>

**Genera un parche final**: Tras investigar la incidencia y aplicar las herramientas, el agente produce un parche en formato unified diff, listo para revisión y aplicación. <br>

A diferencia de su predecesor AutoCodeRover, el agente trabaja con un "flujo libre" en varias etapas, incluyendo recuperación de contexto, generación de parche, validación y pruebas. Este flujo más flexible permite aprovechar al máximo la capacidad de los modelos de lenguaje actuales, como GPT-5 o Claude Sonnet 4.5.

<h2>¿Cuál es el origen? ¿Qué tiene que ver AutoCodeRover?</h2>

Sonar Foundation Agent fue desarrollado por el **antiguo equipo de AutoCodeRover**, un proyecto previo de agentes de programación que sirvió de base de conocimiento y experiencia para la creación del nuevo agente para SonarQube. Recordemos que a principio de año Sonar anunció la compra de AutoCodeRover. Si quieres leer la noticia la puedes [encontrar aquí](/sonar-compra-autocoderover).

<h2>Beneficios de Sonar Foundation Agent</h2>

Para los usuarios de SonarQube, los beneficios son claros:

- **Mayor autonomía**: el agente puede decidir qué herramientas usar y en qué orden, siguiendo un flujo más flexible que AutoCodeRover. <br>

- **Procesamiento de contextos largos**: gracias a los modelos de lenguaje actuales, no se pierde información relevante al analizar incidencias complejas. <br>

- **Eficiencia**: reduce el tiempo necesario para resolver incidencias a 10,5 minutos por problema, manteniendo un coste bajo. <br>

- **Generación automática de parches**: produce directamente un diff listo para revisión, acelerando la corrección de bugs y vulnerabilidades. <br>

- **Mejor seguimiento de la calidad**: al integrarse con SonarQube, permite mantener la trazabilidad de las correcciones y refuerza la confiabilidad del código. <br>


El artículo de anuncio de Sonar, que puedes consultar <a href="https://www.sonarsource.com/blog/introducing-sonar-foundation-agent/" target="_blank" rel="nofollow">aquí</a>, no indica cuándo estará disponible Sonar Foundation Agent ni en qué modalidad. Tan pronto como tengamos información sobre su lanzamiento, lo comunicaremos.