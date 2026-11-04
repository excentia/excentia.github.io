---
layout: post
title: "Novedades de Rovo: seguridad de datos, control de agentes y métricas de uso"
description: Conoce las novedades de Rovo para proteger datos sensibles, gestionar permisos de agentes y medir la adopción de IA en las aplicaciones de Atlassian.
date: '2026-11-02T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-11-02-novedades-rovo-seguridad-control-agentes.png

---

Rovo sigue incorporando capacidades para que los equipos que trabajan con Jira, Confluence y otras aplicaciones de Atlassian puedan ampliar el uso de la inteligencia artificial con más control sobre sus datos y sus agentes.

Las últimas novedades se centran en la **protección de información sensible, gestión de accesos y visibilidad del uso**. Algunas ya están disponibles y otras forman parte de programas de acceso anticipado o EAP. En este artículo repasamos qué cambia y cómo puede ayudarte en la administración y el uso diario de tu entorno Atlassian.

<h2>Protección de datos sensibles con Guard Premium</h2>

Cuando un equipo utiliza IA, necesita definir qué información puede emplearse en las consultas y qué contenido debe quedar fuera. Atlassian ha anunciado dos nuevas capacidades de **Guard Premium**, ambas en acceso anticipado (EAP), para reforzar esa protección.

- **Seguridad en Rovo Chat**: La seguridad de Rovo Chat permite configurar detecciones para bloquear información sensible en las instrucciones enviadas a la IA y en las respuestas. El objetivo es aplicar políticas de protección también durante la conversación con Rovo. 

- **Seguridad de los datos de los conectores**: Los conectores permiten incorporar información de herramientas externas, como Google Drive, al contexto que utiliza Rovo. Esta nueva capacidad analiza esos datos para evitar que el contenido sensible detectado se incorpore a **Teamwork Graph**, la capa de inteligencia de datos que sirve de apoyo a Rovo.

Ambas capacidades incorporan un panel con información sobre las políticas activas, el contenido bloqueado y las posibles carencias de cobertura. Su eficacia depende de las detecciones y políticas configuradas.

Puedes <a href="https://privacy.atlassian.net/servicedesk/customer/portal/1580/create/3952" target="_blank" rel="nofollow noopener noreferrer">solicitar acceso anticipado a estos controles de Guard Premium</a>.

<h2>Más control sobre el acceso a Rovo y sus agentes</h2>

Los **controles de acceso a la IA**, ya disponibles, permiten gestionar quién utiliza Rovo y ampliar su adopción de forma gradual. Esto facilita comenzar con un grupo de usuarios y extender el uso a otros equipos conforme se validan los casos de uso.

La gestión de agentes también incorpora opciones para definir permisos y acceso a los datos:

- **Acceso predeterminado para futuros agentes:** los administradores pueden establecer las aplicaciones y los grupos a los que tendrán acceso los nuevos agentes. Los agentes existentes se gestionan desde sus perfiles.

- **Permisos de agentes:** permiten controlar quién puede crearlos y editarlos.

- **Identidades de agentes, en EAP:** asignan una identidad propia con un ámbito de acceso que puede gestionarse, auditarse y revocarse de forma independiente.

Estas identidades permiten aplicar el principio de mínimo privilegio: conceder a cada agente únicamente el acceso que necesita para su función. Puedes <a href="https://earlyaccessprogram.atlassian.net/servicedesk/customer/portal/1651/group/1719/create/11847" target="_blank" rel="nofollow noopener noreferrer">solicitar acceso anticipado al programa de identidades de agentes</a>.

Además, en **Customer Service Management**, el control de versiones permite modificar y probar la configuración del agente de IA en un borrador antes de publicar los cambios para los clientes. Esta funcionalidad corresponde a ese contexto de atención al cliente.

Si quieres conocer cómo se integra el trabajo con agentes de IA en Jira y Confluence, descubre las [novedades de Teamwork Collection](/novedades-teamwork-collection-team-26-europe) anunciadas en Atlassian Team ’26 Europe.

<h2>Rovo Agent Reasoning y selección de modelos</h2>

No todas las tareas requieren el mismo nivel de análisis. Buscar una respuesta en una página de Confluence y comparar información de varias fuentes para investigar un problema son necesidades diferentes.

**Rovo Agent Reasoning**, ya disponible, permite adaptar el razonamiento del agente a la tarea:

- **Quick Answers:** opción predeterminada para consultas habituales, resúmenes y búsqueda de información.

- **Think Deeper:** orientada a trabajos que requieren más análisis, varios pasos o la combinación de distintas fuentes.

Dentro de Think Deeper, puedes elegir entre los modelos disponibles en el editor de agentes. La configuración se realiza en Studio, desde el campo Reasoning. Para empezar, conviene probar el agente con tareas reales y comparar la calidad de sus respuestas y el consumo de créditos antes de extender la configuración a flujos de trabajo de gran volumen.

<h2>Más visibilidad sobre la adopción y el uso de Rovo</h2>

Activar Rovo es solo el comienzo. Para orientar su despliegue, también necesitas conocer qué equipos lo utilizan y qué agentes tienen actividad. Atlassian incorpora distintas vistas, ya disponibles, para responder a estas preguntas:

| Funcionalidad | Qué permite consultar |
| - | - |
| Rovo Overview | Visión centralizada del uso, usuarios activos y habilitación, con accesos a la gestión de conectores, usuarios y agentes. |
| Rovo Trends | Tendencias de adopción y capacidades y equipos que impulsan el uso de Rovo. |
| Agent Insights | Métricas de uso de cada agente en Studio, como la media de usuarios diarios y el total de conversaciones. |
| Registros de auditoría con Guard Premium | Eventos de invocación de agentes mediante el registro «Invoked Rovo agent». |

Estas métricas ayudan a detectar dónde se concentra la actividad y qué equipos pueden necesitar formación o acompañamiento. Para evaluar el valor de un agente, conviene complementarlas con la revisión de sus respuestas y de los resultados que obtiene: el volumen de conversaciones, por sí solo, no demuestra su eficacia.

En excentia te ayudamos a valorar **cómo encajan estas novedades** en tu entorno Atlassian y a planificar la adopción de Rovo según las necesidades de tus equipos. [Escríbenos](/contacto) y cuéntanos qué quieres conseguir con Rovo.