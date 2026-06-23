---
layout: post
title: 'Qué es Claude Agent para Jira y cómo ayuda a los equipos de desarrollo'
description: Conoce cómo funciona Claude Agent para Jira, el agente de IA de Anthropic que desarrolla código a partir de incidencias y genera pull requests para revisión.
date: '2026-06-20T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-06-20-que-es-claude-agent-for-jira.png

---

Atlassian ha anunciado el **lanzamiento de Claude Agent para Jira**. Ahora es posible asignar incidencias directamente a Claude para que analice requisitos, implemente cambios en el código y genere una pull request lista para revisión, todo ello sin salir de Jira.

<h2>¿Qué es Claude Agent para Jira?</h2>

Claude Agent para Jira es un **agente de programación basado en la infraestructura de Claude Managed Agents de Anthropic** que permite delegar tareas de desarrollo directamente desde Jira. En lugar de utilizar asistentes externos o copiar manualmente requisitos entre herramientas, el agente trabaja **dentro del flujo habitual de Jira**. Las tareas aparecen junto al resto de incidencias del proyecto, son visibles para todo el equipo y mantienen la trazabilidad completa del trabajo realizado.

Cuando se asigna una incidencia a Claude, el agente puede:

- Analizar el contexto de la tarea.
- Interpretar los criterios de aceptación.
- Consultar la información relevante del proyecto.
- Implementar los cambios necesarios en un entorno aislado.
- Generar una *draft pull request* para revisión humana.
Todo el progreso queda registrado en Jira, proporcionando visibilidad completa sobre las acciones realizadas por la inteligencia artificial.

<h2>Cómo funciona Claude Agent para Jira</h2>

El funcionamiento del agente se basa en tres fases principales: asignación, ejecución y revisión.

**Delegar trabajo a Claude desde Jira**

Los equipos pueden asignar tareas a Claude de diferentes formas:

- Mencionando Claude Agent para Jira en un comentario.
- Seleccionándolo como responsable de una incidencia.
- Mediante reglas de automatización que asignen automáticamente determinados tipos de tareas.

Una vez recibe la incidencia, Claude accede a toda la información disponible, incluyendo:

- Descripción de la tarea.
- Criterios de aceptación.
- Repositorio asociado.
- Estándares de desarrollo.
- Guías de diseño e ingeniería.

Gracias a este contexto, el agente puede trabajar con un conocimiento mucho más completo que el de un asistente tradicional.

**Desarrollo en un entorno seguro y aislado**

Claude ejecuta el trabajo dentro de la infraestructura gestionada por Anthropic. Durante este proceso:

- Clona el repositorio correspondiente.
- Analiza la base de código existente.
- Identifica los cambios necesarios.
- Crea una nueva rama de trabajo.
- Genera el código requerido.

Todo ello ocurre en un entorno sandbox aislado que reduce riesgos y mantiene la seguridad del proceso de desarrollo.

**Revisión y control humano**

Aunque Claude puede implementar cambios de forma autónoma, el control final sigue estando en **manos del equipo de ingeniería**. Una vez completada la tarea, el agente:

- Crea una *draft pull request* en GitHub.
- Actualiza el estado de la incidencia en tiempo real.
- Comparte los resultados obtenidos.

Los desarrolladores revisan el código generado, validan las modificaciones y **deciden cuándo realizar el merge a la rama principal**. Este enfoque combina automatización e intervención humana para mantener la calidad y la gobernanza del software.

<h2>Principales ventajas de Claude Agent para Jira</h2>

- **Mayor productividad para los equipos de desarrollo**: Los desarrolladores pueden delegar tareas repetitivas o de bajo valor añadido y centrarse en actividades que requieren análisis, arquitectura o toma de decisiones.

- **Contexto completo del trabajo**: Al trabajar directamente sobre las incidencias de Jira, Claude dispone de toda la información necesaria para comprender correctamente cada tarea.

- **Trazabilidad total**: Cada acción realizada por el agente queda registrada en Jira, facilitando el seguimiento, la auditoría y la colaboración entre equipos.

- **Integración con los procesos existentes**: Los equipos no necesitan modificar sus flujos de trabajo habituales. Claude se integra en los procesos ya establecidos de planificación, desarrollo y revisión.

- **Supervisión humana garantizada**: La generación automática de código no elimina los controles de calidad. Los desarrolladores mantienen la revisión final y la aprobación de todos los cambios.

<h2>Disponibilidad de Claude Agent para Jira</h2>

Claude Agent para Jira **está disponible para organizaciones** que utilicen:

- Jira Cloud Standard.
- Jira Cloud Premium.
- Jira Cloud Enterprise.

Además, es necesario tener habilitado Rovo. La instalación se realiza desde [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1150553788/claude-agent-for-jira), donde los administradores pueden conectar la clave API de Anthropic y la cuenta de servicio de GitHub para comenzar a utilizar el agente.


