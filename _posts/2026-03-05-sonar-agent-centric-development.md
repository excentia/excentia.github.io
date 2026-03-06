---
layout: post
title: 'AC/DC: la metodología de Sonar para asegurar la calidad del código generado por IA'
description: Descubre AC/DC, el marco de Sonar para guiar, verificar y corregir código generado por IA, garantizando calidad, seguridad y mantenibilidad.
date: '2026-03-05T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-03-05-sonar-agent-centric-development.png

---

Sonar anunció durante su evento The Sonar Summit el marco **Agent Centric Development Cycle (AC/DC)**, una nueva metodología diseñada específicamente para gestionar la escala y la velocidad del código generado por IA.

Tras el evento, Sonar publicó <a href="https://www.sonarsource.com/company/press-releases/sonar-introduces-the-agent-centric-development-cycle/" target="_blank" rel="nofollow">esta nota de prensa</a> y desde excentia te lo vamos a traducir y explicar en este artículo para que entiendas en qué consiste esta metodología.

Sonar indica que los **modelos tradicionales de Integración Continua (CI)** fueron diseñados para **flujos de trabajo en los que el código lo escriben principalmente humanos**. En cambio, los entornos actuales incorporan agentes de IA que pueden generar, modificar y refactorizar grandes cantidades de código de forma automática.

Este cambio introduce **nuevas dinámicas**:

- El volumen de código generado aumenta de forma exponencial.

- Los errores pueden multiplicarse si no existe un control adecuado.

- Las decisiones de arquitectura o seguridad pueden quedar fuera del contexto del proyecto.

En este escenario, el desarrollo agentic requiere **algo más que pipelines de CI tradicionales**. Necesita prácticas deliberadas y herramientas diseñadas para trabajar con agentes.

Según **Tariq Shaukat, CEO de Sonar**,"en el núcleo de AC/DC está el reconocimiento de que los agentes que generan código necesitan estar respaldados por prácticas sólidas de Guide, Verify y Solve. Los modelos de IA cometen errores al programar y pueden introducir complejidad, problemas de seguridad y fallos en las bases de código empresariales. Se requiere una gobernanza continua sólida para garantizar que solo se introduzca código verificado y de alta calidad en la base de código".

<h2>Qué es el Agent Centric Development Cycle (AC/DC)</h2>

El **Agent Centric Development Cycle (AC/DC)** es un marco de desarrollo que introduce controles, transparencia y verificación para asegurar que el código generado por agentes sea fiable, seguro y mantenible.

Este ciclo se aplica una vez que los **equipos de desarrollo han definido el alcance** y la **intención del código** que quieren generar.

El modelo se estructura en cuatro etapas integradas.

1. **Guide**: Los agentes necesitan entender el contexto en el que van a trabajar. Esto incluye información sobre: el repositorio, los estándares de calidad, las reglas de arquitectura y las políticas de seguridad.  Proporcionar este contexto permite que el código generado se ajuste a lo que el desarrollador y la organización esperan.

2. **Generate**: En esta fase, las herramientas basadas en LLMs generan el código que consideran necesario para cumplir el objetivo definido. La generación se produce teniendo en cuenta el contexto proporcionado en la fase anterior.

3. **Verify**: El código generado debe verificarse de forma explícita. El agente debe comprobar que el resultado: cumple los estándares de calidad, logra el resultado funcional esperado, es mantenible y es seguro. Esta etapa introduce un control crítico para evitar que errores o vulnerabilidades lleguen al repositorio.

4. **Solve**: Cuando se detectan problemas, estos se envían a un agente especializado en reparación de código que se encarga de corregirlos. El objetivo es cerrar el ciclo de forma automática, manteniendo la calidad del código sin ralentizar el desarrollo.

<h2>Cómo encaja Sonar en el ciclo AC/DC</h2>

Durante los últimos meses, Sonar ha ampliado su portfolio para **cubrir las necesidades de Guide, Verify y Solve** dentro del **Agent Centric Development Cycle**. Estas son algunas de las capacidades que refuerzan este enfoque.

- **Sonar Context Augmentation (beta)**: Actúa como una capa de guía especializada que inyecta información impulsada por Sonar en tiempo real dentro del flujo de trabajo de IA. Su objetivo es: reducir el retrabajo, mantener el contexto del repositorio, asegurar que el código generado respeta los estándares de arquitectura, seguridad y calidad del proyecto. <br>

- **SonarQube Agentic Analysis (beta)**: Se trata de un servicio de alto rendimiento diseñado para llevar la capacidad de SonarQube directamente a los flujos de trabajo agentic. Permite habilitar procesos de auto-verificación dentro de los agentes. Está disponible a través de: [SonarQube MCP Server](https://www.excentia.es/sonarqube-mcp-server-seguridad-calidad-codigo) y SonarQube CLI para pipelines automatizados.  <br>

- **SonarSweep (beta privada)**: Aborda la calidad del código generado por IA desde los datos de entrenamiento de los modelos. Mediante la limpieza y optimización de los datasets utilizados para entrenar y ajustar LLMs, esta herramienta permite: reducir vulnerabilidades de seguridad hasta en un 67% y reducir errores hasta en un 42%. <br> 

- **SonarQube Architecture (disponibilidad general)**: Esta capacidad introduce control sobre la calidad del código a nivel de diseño. La gestión de arquitectura permite a los equipos definir los planos arquitectónicos esperados, detectar automáticamente la deriva arquitectónica y asegurar que los cambios introducidos por agentes no comprometen la modularidad del sistema. <br>

- **SonarQube Remediation Agent (beta pública)**: El Remediation Agent es un agente autónomo diseñado para cerrar el ciclo review–fix–verify. Entre sus capacidades destacan: reparar automáticamente los bloqueadores del quality gate en las pull requests, eliminar deuda técnica existente en la rama principal con un solo clic y verificar que las correcciones solucionan el problema sin introducir nuevos defectos. Este agente está basado en **Sonar Foundation Agent**, un modelo líder en benchmarks de reparación de código.

Con el **Agent Centric Development Cycle (AC/DC)**, Sonar propone un enfoque estructurado para gobernar el desarrollo basado en agentes. Desde excentia, estamos aquí para ayudarte, así que si necesitas más información sobre el AC/DC o cualquier otro producto de Sonar puedes ponerte en contacto con nuestro equipo a través de [este enlace](/contacto). 