---
layout: post
title: Novedades para la Teamwork Graph en el Team '26 de Atlassian
description: Descubre cómo la Teamwork Graph de Atlassian conecta IA, agentes y datos empresariales para automatizar el trabajo con contexto real.
date: '2026-05-12T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias

cover: /img/posts/2026-05-12-novedades-team-26-teamwork-graph.png

---

En el evento Team ’26, la **gran protagonista fue el Teamwork Graph**, la capa de datos de Atlassian donde el trabajo deja de estar fragmentado y pasa a existir como una red de relaciones vivas. Lo más relevante es que, a partir de ahora, este contexto deja de ser “interno” o “cerrado” y se vuelve accesible para agentes de IA en cualquier entorno: navegador, móvil o terminal.

El resultado es un cambio de paradigma, porque las herramientas de IA ya no trabajan con información aislada, sino con el **contexto colectivo que la organización ya ha construido**. 

<h2>Teamwork Graph CLI</h2>

Una de las novedades más potentes es el **lanzamiento en beta del Teamwork Graph CLI**, una interfaz de línea de comandos diseñada para desarrolladores que quieren interactuar directamente con el contexto. Esta herramienta permite canalizar el sistema de relaciones del trabajo hacia cualquier flujo de automatización, agente o entorno de desarrollo.

En la práctica, el CLI funciona como una puerta de acceso universal al contexto organizacional, eliminando la necesidad de integrar múltiples APIs de producto por separado. Además, se integra de forma natural con agentes de programación como Claude Code o Cursor, que pueden consultar trabajo y relaciones de forma estructurada.

<h3>¿Qué permite hacer el CLI del Teamwork Graph?</h3>

Con más de 300 comandos disponibles, el CLI abre posibilidades muy concretas:

- **Navegar por entidades** como personas, proyectos o incidencias, además de señales de actividad en herramientas externas. <br>

- Ejecutar **consultas complejas del tipo**: “¿Quiénes son los responsables de esta decisión?” o “¿Qué trabajo está relacionado en todas las apps?”. <br>

- **Integrar consultas** del grafo en pipelines de CI/CD, runbooks de incidentes o scripts de gobernanza. <br>

Si quieres utilizar la Teamwork Graph CLI puedes seguir [estas instrucciones](https://support.atlassian.com/organization-administration/docs/get-started-with-twg-cli/) de Atlassian. 


<h2>Teamwork Graph MCP</h2>

La segunda gran novedad es el **Teamwork Graph MCP**, el servidor que permite a agentes y usuarios acceder y operar sobre datos de distintas plataformas mediante un modelo unificado. Este enfoque se apoya en el estándar MCP (Model Context Protocol), y se integra dentro del ecosistema de Atlassian a través de Rovo.

En este modelo, los agentes no se limitan a consultar información, sino que actualizan activamente el ecosistema de trabajo, conectando datos, relaciones y acciones.

Aquí te dejo algunos casos de uso clave del MCP: 

- **Respuesta a incidentes con historial completo**: Los agentes pueden acceder a incidencias de Jira, despliegues previos y acciones de remediación, acelerando la resolución con contexto real y no fragmentado. <br>

- **Notificaciones inteligentes de responsabilidad**: El sistema identifica automáticamente quién es el responsable real de un proyecto o decisión, adaptándose a la evolución del trabajo. <br>

- **Recuperación de información autoritativa**: En lugar de mostrar resultados dispersos, los asistentes navegan relaciones entre Confluence y Jira para ofrecer una única fuente de verdad. <br>

<h2>Teamwork Graph Connectors</h2>

La tercera pieza del ecosistema son los **Teamwork Graph Connectors**, ya disponibles de forma general a través de Atlassian Forge. Estos conectores permiten llevar datos desde cualquier fuente externa al Teamwork Graph como herramientas internas, sistemas legacy o plataformas sectoriales.

¿Qué aportan estos conectores?

- Ahora cualquier organización puede **integrar fuentes de datos** que antes estaban aisladas. <br>

- El acceso a la información **se mantiene coherente con los controles originales**, asegurando que la IA respete roles y visibilidad. <br>

- Alimenta **automáticamente agentes de Rovo** y herramientas de análisis como Atlassian Analytics. <br>

Y hasta aquí todas las novedades sobre la Teamwork Graph. ¡Nos leemos en siguientes artículos!