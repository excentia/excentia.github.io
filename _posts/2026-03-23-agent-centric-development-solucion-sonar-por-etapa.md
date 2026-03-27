---
layout: post
title: 'Agent Centric Development AC/DC: cómo encajan las soluciones de SonarQube en cada etapa'
description: Descubre cómo SonarQube y sus soluciones aseguran la calidad y seguridad del código generado por IA en cada fase del modelo Agent Centric Development.
date: '2026-03-23T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticias


cover: /img/posts/2026-03-23-agent-centric-development-solucion-sonar-por-etapa.png

---

El auge del código generado por inteligencia artificial (AI-generated code) está cambiando las reglas del desarrollo de software. 

En este contexto, Sonar ha presentado un nuevo enfoque llamado **Agent Centric Development (AC/DC)**, una evolución del clásico CI/CD que incorpora controles específicos para supervisar el código generado por agentes de IA.

Pero, ¿cómo se traduce este nuevo paradigma en herramientas reales? ¿Qué papel juegan las soluciones de Sonar en cada fase del ciclo de desarrollo?

Para responder a estas preguntas, hemos mapeado todo el ecosistema de Sonar dentro de las cuatro etapas del **modelo AC/DC** en la siguiente infografía:

<iframe src="https://www.slideshare.net/slideshow/embed_code/key/7NaR55w9pBM11f?hostedIn=slideshare&page=upload" width="876" height="576" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

En la siguiente tabla puedes **ver de forma rápida** qué ocurre en cada etapa del ciclo y cuál es su objetivo dentro del desarrollo de software asistido por IA:

| Fase     | Objetivo principal                                | Qué ocurre en esta fase                                                                   |
| -------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Guide    | Proporcionar contexto a los agentes de IA         | Se define el entorno: repositorio, estándares de calidad, arquitectura y seguridad        |
| Generate | Generar código basado en contexto                 | Los agentes de IA crean código teniendo en cuenta las reglas y el entorno definidos       |
| Verify   | Validar calidad, seguridad y funcionamiento       | Se analiza el código para comprobar que cumple estándares y no introduce vulnerabilidades |
| Solve    | Corregir automáticamente los problemas detectados | Agentes especializados proponen o aplican soluciones a errores y vulnerabilidades         |

A continuación, desglosamos **cada etapa en detalle** junto con las soluciones **específicas de SonarQube** que intervienen en cada una de ellas:

<h3>1 - Guide</h3>

El objetivo de esta fase es proporcionar a los agentes de IA el contexto necesario para generar código alineado con los estándares del proyecto. Las soluciones de SonarQube que encajan en esta fase son las siguientes: 

- **Sonar Conext Augmentation** es un servicio que inyecta conocimiento profundo y en tiempo real desde SonarQube directamente en el flujo de trabajo de agentes de IA de programación (como Cursor, Claude Code, Copilot, etc.).

Puedes ampliar la información sobre esta solución en [este enlace](https://www.excentia.es/sonar-context-augmentation-works).

- **SonarQube MCP Server** es un componente local que actúa como un puente entre los agentes basados en IA y tu instancia de SonarQube Server o SonarQube Cloud. Si necesitas más información sobre este servidor, puedes consultar [este enlace](https://www.excentia.es/sonarqube-mcp-server-seguridad-calidad-codigo).

- **SonarSweep** es una tecnología de Sonar diseñada para mejorar la calidad de los datos de entrenamiento utilizados en modelos de lenguaje de IA para programación (LLMs). 

La información detallada sobre este servicio está [este enlace](https://www.excentia.es/sonar-lanza-sonarsweep-mejorar-entrenamiento-LLMs).


<h3>2 - Generate</h3>

La fase Generate tiene como objetivo generar código automáticamente a partir del contexto definido. Por ello,  SonarQube for IDE, anteriormente conocido como SonarLint, encaja perfectamente en esta parte. 

- **SonarQube for IDE (anteriormente SonarLint)** es una extensión gratuita y de código abierto para entornos de desarrollo IDE como VS Code, IntelliJ, Eclipse y Visual Studio. En concreto, esta solución va corrigiendo el código conforme estas programando, es decir, te permite generar código de calidad en el mismo IDE. En [este enlace](https://www.excentia.es/que-es-sonarlint-y-como-mejora-calidad-codigo) tienes más información sobre SonarQube for IDE.


<h3>3 - Verify</h3>

En esta fase el objetivo es validar que el código generado cumple los requisitos de calidad, seguridad y funcionalidad. Con este contexto, las soluciones de SonarQube que encajan en esta fase son las siguientes: 

- **SonarQube Advanced Security** es una extensión de pago para SonarQube Enterprise/Data Center que añade capacidades avanzadas de seguridad, como SCA, SAST avanzado, detección de secretos o informes de seguridad, entre otras funcionalidades.  La información sobre SonarQube Advanced Security la puedes encontrar en [este enlace](https://www.excentia.es/aumenta-seguridad-codigo-sonarqube-advanced-security).

- **SonarQube Agentic Analysis**: es una funcionalidad que permite a herramientas de codificación asistidas por IA (AI coding agents) interactuar en tiempo real con el motor de análisis de SonarQube, a través del SonarQube MCP Server. Actualmente está en fase beta.  

- **SonarQube CLI** es una interfaz de línea de comandos que permite interactuar con SonarQube para tareas como la generación de informes, automatización de análisis, extracción de métricas y administración de proyectos. Facilita la integración en scripts y pipelines CI/CD sin depender de la interfaz web.

- **AI Code Assurance** es el conjunto de capacidades de SonarSource para asegurar la calidad y seguridad del código generado por IA. Puedes ampliar la información sobre esta solución en [este enlace](https://www.excentia.es/sonar-context-augmentation-works).


<h3>4 - Solve</h3>

La fase de Solve pretende corregir de forma automática los problemas detectados en el código. Asi que las soluciones de SonarQube que encajan aquí son las siguientes: 

- **AI CodeFix** es una funcionalidad de SonarQube que permite generar automáticamente propuestas de corrección para los problemas detectados en el código (bugs, vulnerabilidades, code smells) usando IA. Puedes ampliar la información sobre esta solución en [este enlace](https://www.excentia.es/sonar-context-augmentation-works).

- **SonarQube Remediation Agents**: es una funcionalidad basada en IA que realiza un análisis independiente para ayudarte a corregir problemas de fiabilidad y mantenibilidad detectados en tu código.

El modelo **Agent Centric Development (AC/DC)** redefine cómo se construye software en la era de la inteligencia artificial, incorporando control y verificación en cada paso del ciclo.

Más allá de generar código más rápido, el verdadero reto es hacerlo con calidad, seguridad y fiabilidad. En este escenario, <a href="https://www.sonarsource.com/products/sonarqube/server/" target="_blank" rel="nofollow">SonarQube</a> se posiciona como una pieza clave para asegurar que el código generado por IA no solo funcione, sino que cumpla con los estándares exigidos.
