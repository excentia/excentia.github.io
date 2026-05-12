---
layout: post
title: Novedades para la Service Collection lanzadas en el Team '26 de Atlassian
description: Nuevas integraciones AIOps de Lansweeper, Coralogix y Honeycomb con Jira Service Management para decisiones más inteligentes.
date: '2026-05-08T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias

cover: /img/posts/2026-05-08-novedades-team-26-service-collection.png

---
Durante el evento Team '26 Anaheim, Atlassian presentó nuevas integraciones de AIOps con Lansweeper, Coralogix y Honeycomb para la Service Collection. Lo que busca Atlassian es convertir Jira Service Management en un centro neurálgico de operaciones inteligentes, donde los datos dejan de ser dispersos y pasan a formar parte de un contexto operativo unificado. A continuación te cuento en qué consisten estas 3 integraciones: 

<h2>Lansweeper, la inteligencia de activos para operaciones más seguras</h2>

En cualquier entorno tecnológico moderno, comprender qué activos existen, cómo se relacionan y qué impacto puede tener un cambio resulta fundamental. Aquí es donde entra en juego Lansweeper, una **plataforma especializada en descubrimiento continuo de hardware, software y dependencias** tanto en infraestructuras cloud como on-premises.

La **integración con Jira Service Management** permite que toda esa información deje de vivir encerrada en una CMDB estática y evolucione hacia un gráfico contextual dinámico impulsado por IA. En otras palabras, los equipos ya no trabajan únicamente con inventarios, sino con **relaciones vivas entre servicios, dispositivos, riesgos y dependencias**.

Cuando se genera una alerta o se propone un cambio, el **agente Rovo Ops** puede consultar automáticamente Lansweeper para identificar dispositivos afectados, versiones de software instaladas, topologías de red, vulnerabilidades conocidas o incluso detalles de garantías y ciclo de vida. Toda esta información aparece directamente dentro de la incidencia en Jira Service Management, eliminando la necesidad de saltar entre múltiples plataformas.

Esta capacidad tiene un impacto especialmente potente en la gestión del cambio. Antes de aprobar una modificación, el sistema puede analizar qué servicios críticos se verán afectados, si existen incidencias relacionadas o si ya se han detectado anomalías similares anteriormente. A partir de ahí, el agente genera recomendaciones automáticas de aprobación, aprobación condicional o rechazo, acompañadas de una justificación clara y auditable.

La integración también refuerza los modelos de seguridad Zero Trust y los procesos de acceso de emergencia. Gracias al contexto enriquecido de activos, los equipos pueden tomar decisiones rápidas sobre accesos privilegiados o mitigación de riesgos operativos sin perder trazabilidad ni control.

<h2>Coralogix, información full-stack y análisis inteligente de incidencias</h2>

Los equipos necesitan correlacionar **eventos, interpretar señales y detectar patrones invisibles** entre métricas, trazas y eventos de seguridad. Ahí destaca Coralogix, cuya propuesta combina observabilidad full-stack, capacidades de streaming analytics e inteligencia artificial.

Cuando se produce un incidente, el **agente Rovo Ops puede consultar Coralogix** para **recuperar logs, métricas, trazas y eventos** de seguridad correspondientes a la ventana temporal relevante. Toda esta información aparece organizada dentro de la incidencia, manteniendo además un historial limpio y auditable.

Uno de los aspectos más interesantes es el análisis de causa asistido por IA, **actualmente disponible en Beta**. Gracias a las capacidades de análisis en streaming de Coralogix, el sistema puede detectar correlaciones entre errores, degradaciones de rendimiento, eventos de seguridad y cambios recientes en la infraestructura. A partir de esos patrones, el agente propone hipótesis de causa raíz y pasos sugeridos de remediación directamente dentro de Jira Service Management.

La integración también automatiza las **revisiones post-incidente**. Una vez resuelto el problema, la plataforma recopila líneas temporales consolidadas con logs, eventos y detalles operativos para generar documentación automática en Confluence. Esto simplifica enormemente tanto las auditorías como los procesos de mejora continua.

<h2>Honeycomb y OpenTelemetry, depuración avanzada para arquitecturas de microservicios</h2>

Los entornos basados en microservicios generan uno de los mayores desafíos actuales para los equipos SRE: los “unknown unknowns”. Son esos problemas invisibles que no aparecen fácilmente en dashboards tradicionales y que se esconden entre miles de interacciones distribuidas.

Honeycomb aborda precisamente ese problema **mediante observabilidad de alta cardinalidad y soporte nativo** para OpenTelemetry. La integración con Jira Service Management convierte esa capacidad analítica en una herramienta operativa directamente integrada en la gestión de incidencias.

Cuando se abre una incidencia, el **agente Rovo Ops** puede consultar Honeycomb para **recuperar trazas distribuidas, eventos y anomalías BubbleUp** relevantes dentro del intervalo temporal afectado. Esa información se muestra directamente en la incidencia, permitiendo que los equipos validen hipótesis sin abandonar Jira Service Management.

La integración también incorpora capacidades de análisis de **causa raíz impulsadas por IA**. Al combinar patrones históricos de incidencias con la telemetría de Honeycomb, el sistema puede identificar posibles causas raíz incluso en arquitecturas extremadamente complejas, donde múltiples microservicios interactúan entre sí de manera dinámica.

En resumen, estas novedades de la **Service Collection** conectan por fin activos, observabilidad y trazas directamente en Jira Service Management. Si quieres más información sobre esta colección puedes ponerte en contacto con nuestro equipo a través del [siguiente enlace](/contacto). 