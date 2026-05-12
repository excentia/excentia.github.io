---
layout: post
title: Novedades para la Teamwork Collection lanzadas en el Team '26 de Atlassian
description: Nuevas capacidades de IA para Jira, Confluence, Loom y Rovo centradas en automatización y colaboración.
date: '2026-05-08T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias

cover: /img/posts/2026-05-08-novedades-team-26-teamwork-collection.png

---

En el Team '26, celebrado en Anaheim, Atlassian ha presentado una nueva **generación de funcionalidades para su Teamwork Collection**, compuesta por Jira, Confluence, Loom y Rovo. El foco de la compañía está puesto en un nuevo modelo de colaboración donde **agentes de IA y equipos humanos** trabajan dentro del mismo flujo, compartiendo contexto, tareas y ejecución. En este artículo repasamos **todas las novedades que Atlassian** ha presentado esta semana y cómo estas capacidades empiezan a redefinir la forma en la que los equipos organizan y ejecutan su trabajo.

<h2>Disponibilidad general de los Agentes de Jira y de terceros</h2>

Los **Agentes en Jira** ya están disponibles de forma general y asumen tareas operativas como asignar incidencias o actualizar código relacionado con bugs.

Los agentes extraen contexto directamente de tus elementos de trabajo, ya sea porque se les ha asignado una tarea, se les ha mencionado con @ en comentarios o se activan automáticamente cuando el trabajo pasa a un estado determinado.

Además, los **Agentes Studio de Atlassian** trabajan junto a herramientas de terceros ya integradas en los flujos del equipo, como Amplitude, Canva, Cursor, Figma, Gamma y GitHub Copilot, entre otras.

Cada acción de un agente queda registrada en Jira con un historial de auditoría completo. Los administradores deciden qué agentes se ejecutan y en qué contextos. El resultado es un modelo donde agentes y personas comparten espacio de trabajo, visibilidad y responsabilidad.

En Confluence, los **Agentes de terceros** ya están disponibles en **beta abierta**. Ahora es posible mencionar a un agente con @ igual que a un compañero de equipo.

Agentes de plataformas como **Lovable, Replit, Databricks y Gamma** pueden leer el contexto de una página y actuar directamente desde las herramientas conectadas.

<h2>Remix con Rovo: transformar texto en visualizaciones</h2>

Ya te contamos la funcionalidad de Remix con Rovo (en beta), presentada oficialmente en el Team '26. El funcionamiento es bastante sencillo: 

- Seleccionas contenido de una página de Confluence. <br>
- Lo transformas en gráficos, cronologías, infografías, mapas, organigramas, cuadrantes o tarjetas interactivas. <br>

Esto es especialmente relevante porque las páginas con elementos visuales tienen casi el doble de probabilidades de ser leídas. Ahora ese impacto visual ya no requiere diseño ni herramientas externas. Puedes convertir texto en imágenes con un clic. 

[Aquí tienes más información](/informacion-visual-remix-confluence-cloud) sobre la funcionalidad de Remix en Confluence. 

<h2>Lanzamiento de Confluence Slides</h2>

Confluence Slides (cuyo lanzamiento se espera a partir del 11 de mayo) permiten crear presentaciones generadas por IA en segundos sin salir de Confluence.

La funcionalidad se apoya en la [Teamwork Graph](/que-es-teamwork-graph), el sistema que modela cómo trabajan realmente los equipos dentro del ecosistema de Atlassian. Gracias a ello, Rovo puede extraer contexto de todas las aplicaciones y construir presentaciones completas.

Solo hay que pedirle a Rovo que cree o edite las diapositivas. El sistema se encarga de definir la estructura, generar el contenido y crear visualizaciones como gráficos o diagramas.

<h2>Create with Rovo en Jira</h2>

Esta funcionalidad, disponible en beta, permite convertir automáticamente documentos de Confluence, resúmenes de reuniones e hilos de correo electrónico en **elementos de trabajo estructurados dentro de Jira**. El objetivo es reducir fricciones y ayudar a los equipos a arrancar hasta un 30 % más rápido, según los datos de Atlassian, con menos carga de coordinación.

Una vez creados los elementos de trabajo, **Rovo puede seguir interviniendo dentro de Jira** generando tareas, redactando actualizaciones de estado o descomponiendo grandes bloques de trabajo en unidades más pequeñas y manejables, todo ello directamente en el entorno de trabajo habitual.


<h2>Agent briefings en Loom</h2>

Los **Agent briefings en Loom** permiten interactuar con los agentes de una forma más natural, similar a como se explicaría una tarea a un compañero de equipo. En lugar de **escribir instrucciones,** los usuarios **pueden grabar un recorrido en vídeo** explicando requisitos, diseños o feedback.

A partir de esa información, **Loom transforma el contenido en un prompt** estructurado que los agentes pueden interpretar y ejecutar. Además, el sistema genera un plan de acción sugerido que puede convertirse directamente en elementos de trabajo en Jira con un solo clic, conectando así la comunicación con la ejecución sin pasos intermedios.

<h2>Bug reporting con Loom y Jira</h2>

El sistema de **Bug reporting con Loom y Jira**, ya disponible de forma general, simplifica la creación de informes de errores listos para desarrollo en cuestión de segundos. A través de **la extensión de Chrome o Dia**, los usuarios pueden grabar un vídeo en Loom mientras el sistema captura en segundo plano información técnica relevante como datos del dispositivo, logs de consola y tráfico de red.

Toda esta información se **empaqueta automáticamente en un ticket de Jira** completamente contextualizado, listo para ser asignado o procesado. Estos tickets pueden **incluso enviarse a Rovo Dev**, que es capaz de proponer automáticamente una posible solución. El resultado es un flujo continuo que conecta la observación de un problema con su resolución de forma mucho más rápida y estructurada.