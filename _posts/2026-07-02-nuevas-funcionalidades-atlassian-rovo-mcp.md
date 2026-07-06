---
layout: post
title: 'Atlassian Rovo MCP Server amplía la automatización de agentes de IA en Jira y desarrollo'
description: Nuevas capacidades de Atlassian Rovo MCP Server que permiten a agentes de IA crear, conectar y gestionar trabajo en Jira en tiempo real.
date: '2026-07-02T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-07-02-nuevas-funcionalidades-atlassian-rovo-mcp.png

---
Atlassian ha lanzado **nuevas funcionalidades para Atlassian Rovo MCP Server** en un contexto donde ya no es suficiente con que los agentes de inteligencia artificial generen código. Aunque estos agentes pueden ayudar a crear o revisar código, el último paso del flujo de trabajo solía obligar a los desarrolladores a volver manualmente a Jira para conectar la información, cerrar tareas o actualizar el estado del trabajo.

Con estas novedades, Atlassian busca reducir esa fricción y permitir que los agentes participen de forma más completa en el ciclo de desarrollo.

<h2>Qué es Atlassian Rovo MCP Server</h2>

Atlassian Rovo MCP Server es un servicio en la nube que **actúa como un puente seguro entre la instancia de Atlassian Cloud y herramientas externas compatibles**. Su objetivo es permitir que aplicaciones, LLMs o agentes de inteligencia artificial interactúen en tiempo real con contenido de Jira, Confluence y Compass.


Nuevas capacidades de Atlassian Rovo MCP en Jira

Con esta actualización, Atlassian Rovo MCP **amplía las acciones disponibles dentro de Jira**, permitiendo que los agentes realicen más tareas de extremo a extremo dentro del flujo de trabajo de desarrollo. A continuación desglosamos que hay de nuevo con esta actualización. 

**Completar el trabajo directamente desde la interfaz del agente**

Los agentes pueden ahora:

- Crear elementos de trabajo en Jira.
- Editar comentarios.
- Encontrar personas asignadas (Find assignees, disponible en vista previa pública v2).
- Adjuntar archivos (próximamente).

Todo ello desde una única interacción con el agente, **sin necesidad de volver manualmente** a Jira para completar estas acciones.

**Visualizar la actividad de código vinculada a Jira**

Otra de las novedades clave es la **capacidad de los agentes de programación** para leer el panel de desarrollo de Jira.

Esto incluye:

- Branches vinculados.
- Pull requests.
- Commits asociados al trabajo.
- Diffs de código conectados a las tareas entregadas.

De esta forma, la actividad de desarrollo queda directamente asociada al trabajo en Jira, facilitando la trazabilidad entre código y gestión de tareas.

**Conexión entre descubrimiento de producto y entrega**

Con la compatibilidad con [Jira Product Discovery](/novedades-team-26-lanzamiento-product-collection), los agentes pueden ahora conectar ideas de alto nivel con la ejecución técnica. Esto permite:

- Relacionar ideas y oportunidades de producto.
- Conectar contexto de negocio con desarrollo.
- Vincular directamente el descubrimiento con la entrega de software.

Así, el flujo entre ideación y desarrollo se vuelve más continuo y rastreable.

**Registro de tiempo automatizado durante el desarrollo**

Los agentes de programación también pueden registrar el tiempo mientras se realiza el trabajo. Entre sus capacidades están:

- Registrar tiempo automáticamente durante la ejecución del trabajo.
- Actualizar el registro cuando cambie el alcance (próximamente).
- Consultar registros existentes para facilitar planificación, reporting y traspasos.

Estas capacidades de worklogs se irán desplegando progresivamente.

**Mejora del contexto con menor uso de tokens**

Atlassian ha introducido un **modelado más inteligente** de las respuestas, lo que permite a los agentes obtener el contexto necesario utilizando menos tokens. Según los <a href="https://www.atlassian.com/blog/jira/mcp-enhancements" target="_blank" rel="nofollow"> datos mencionados en su blog</a>, los agentes basados en el contexto de Teamwork Graph ofrecen:


- Un 44 % más de precisión en las respuestas
- Un 48 % menos de consumo de tokens

Esto mejora la eficiencia y reduce el coste computacional en el uso de agentes de IA.

<h2>Uso de Atlassian Rovo MCP: prompts y automatización</h2>

Una vez configurado, estas capacidades pueden utilizarse tanto mediante prompts directos como a través de flujos de trabajo automatizados con agentes. A continuación te mostramos algunos ejemplos de prompts que puedes utilizar:

- **Seguimiento tras un incidente**: Crear un elemento de trabajo de seguimiento en Jira para un incidente, adjuntar logs relevantes, identificar al responsable del equipo backend adecuado, asignarlo y añadir un comentario con recomendaciones basadas en incidentes previos.

- **Relación entre código y trabajo en Jira**: Revisar un elemento de Jira y resumir las pull requests vinculadas, indicando cambios realizados y posibles acciones de seguimiento.

- **Cierre de jornada de desarrollo**: Revisar los elementos trabajados durante el día, registrar el tiempo en base a commits y pull requests, mover tareas a estados como In Review o Done y añadir un comentario final.

- **Conectar descubrimiento de producto con entrega**: Encontrar una idea en Jira Product Discovery relacionada con una funcionalidad, resumir el problema y la prioridad, vincularla con la incidencia de desarrollo y explicar cómo la implementación responde a la idea original.

<h2>Disponibilidad de las nuevas funcionalidades</h2>

Las mejoras de Atlassian Rovo MCP Server **ya están disponibles para los usuarios**, con algunas excepciones. Las actualizaciones relacionadas con **registros de tiempo (worklogs) y adjuntos de archivos** se desplegarán a lo largo del mes. Por su parte, la **función Find assignees** se encuentra actualmente en vista previa pública v2.