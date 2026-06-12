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
El auge del código generado por inteligencia artificial está cambiando las reglas del desarrollo de software. Para ayudar a las organizaciones a **controlar la calidad y seguridad** de este nuevo código, Sonar ha presentado **Agent Centric Development (AC/DC)**, un modelo que divide el ciclo de desarrollo asistido por IA en cuatro fases: Guide, Generate, Verify y Solve.

Cada una de estas etapas **incorpora herramientas y mecanismos** específicos para proporcionar contexto a los agentes, validar el código generado y corregir automáticamente los problemas detectados.

En este artículo analizamos cómo encajan las distintas soluciones de SonarQube dentro de este modelo.

<h2>¿Qué es Agent Centric Development (AC/DC)?</h2>

Agent Centric Development (AC/DC) es el modelo de **desarrollo propuesto por Sonar** para gestionar el código generado por inteligencia artificial. El framework divide el ciclo de vida en cuatro etapas: Guide, Generate, Verify y Solve, permitiendo controlar la calidad y seguridad del software producido por agentes de IA.

Para responder a estas preguntas, hemos mapeado todo el ecosistema de Sonar dentro de las cuatro etapas del **modelo AC/DC** en la siguiente infografía:

<img width="100%" src="/img/excentia/ciclo-ac-dc-sonar-excentia.png" alt="Infografía soluciones Sonar dentro del AC/DC">
<br>

En la siguiente tabla puedes **ver de forma rápida** qué ocurre en cada etapa del ciclo y cuál es su objetivo dentro del desarrollo de software asistido por IA:

| Fase     | Objetivo principal                                | Qué ocurre en esta fase                                                                   |
| -------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Guide    | Proporcionar contexto a los agentes de IA         | Se define el entorno: repositorio, estándares de calidad, arquitectura y seguridad        |
| Generate | Generar código basado en contexto                 | Los agentes de IA crean código teniendo en cuenta las reglas y el entorno definidos       |
| Verify   | Validar calidad, seguridad y funcionamiento       | Se analiza el código para comprobar que cumple estándares y no introduce vulnerabilidades |
| Solve    | Corregir automáticamente los problemas detectados | Agentes especializados proponen o aplican soluciones a errores y vulnerabilidades         |

<h2>¿Qué soluciones de SonarQube intervienen en cada fase?</h2>

<h3>1 - Guide</h3>

El objetivo de esta fase es proporcionar a los agentes de IA el contexto necesario para generar código alineado con los estándares del proyecto. Las soluciones de SonarQube que encajan en esta fase son las siguientes: 

- **Sonar Context Augmentation** es un servicio que inyecta conocimiento profundo y en tiempo real desde SonarQube directamente en el flujo de trabajo de agentes de IA de programación (como Cursor, Claude Code, Copilot, etc.).

Puedes ampliar la información sobre esta solución en [este enlace](/sonar-context-augmentation-works).

- **SonarQube MCP Server** es un componente local que actúa como un puente entre los agentes basados en IA y tu instancia de SonarQube Server o SonarQube Cloud. Si necesitas más información sobre este servidor, puedes consultar [este enlace](/sonarqube-mcp-server-seguridad-calidad-codigo).

- **SonarSweep** es una tecnología de Sonar diseñada para mejorar la calidad de los datos de entrenamiento utilizados en modelos de lenguaje de IA para programación (LLMs). 

La información detallada sobre este servicio está [este enlace](/sonar-lanza-sonarsweep-mejorar-entrenamiento-LLMs).

- **Sonar Architecture**: Sonar Architecture te permite documentar, mantener y mejorar las arquitecturas de software comparando la arquitectura actual con la arquitectura objetivo o prevista, con el fin de identificar y detectar problemas arquitectónicos. 


<h3>2 - Generate</h3>

La fase Generate tiene como objetivo generar código automáticamente a partir del contexto definido. Por ello,  SonarQube for IDE, anteriormente conocido como SonarLint, encaja perfectamente en esta parte. 

- **SonarQube for IDE (anteriormente SonarLint)** es una extensión gratuita y de código abierto para entornos de desarrollo IDE como VS Code, IntelliJ, Eclipse y Visual Studio. En concreto, esta solución va corrigiendo el código conforme estas programando, es decir, te permite generar código de calidad en el mismo IDE. En [este enlace](/que-es-sonarlint-y-como-mejora-calidad-codigo) tienes más información sobre SonarQube for IDE.


<h3>3 - Verify</h3>

En esta fase el objetivo es validar que el código generado cumple los requisitos de calidad, seguridad y funcionalidad. Con este contexto, las soluciones de SonarQube que encajan en esta fase son las siguientes: 

- **SonarQube Advanced Security** es una extensión de pago para SonarQube Enterprise/Data Center que añade capacidades avanzadas de seguridad, como SCA, SAST avanzado, detección de secretos o informes de seguridad, entre otras funcionalidades.  La información sobre SonarQube Advanced Security la puedes encontrar en [este enlace](/aumenta-seguridad-codigo-sonarqube-advanced-security).

- **SonarQube Agentic Analysis**: es una funcionalidad que permite a herramientas de codificación asistidas por IA (AI coding agents) interactuar en tiempo real con el motor de análisis de SonarQube, a través del SonarQube MCP Server. Actualmente está en fase beta. Si quieres ampliar la información sobre esta solución, puedes consultar [este artículo](/que-es-sonarqube-agentic-analysis).

- **SonarQube CLI** es una interfaz de línea de comandos que permite interactuar con SonarQube para tareas como la generación de informes, automatización de análisis, extracción de métricas y administración de proyectos. Facilita la integración en scripts y pipelines CI/CD sin depender de la interfaz web.

- **AI Code Assurance** es el conjunto de capacidades de SonarQube para asegurar la calidad y seguridad del código generado por IA. Puedes ampliar la información sobre esta solución en [este enlace](/sonar-context-augmentation-works).

- Las soluciones de SonarQube Server y SonarQube Cloud. También encajaría aquí SonarQube Architecture. 


<h3>4 - Solve</h3>

La fase de Solve pretende corregir de forma automática los problemas detectados en el código. Asi que las soluciones de SonarQube que encajan aquí son las siguientes: 

- **AI CodeFix** es una funcionalidad de SonarQube que permite generar automáticamente propuestas de corrección para los problemas detectados en el código (bugs, vulnerabilidades, code smells) usando IA. Puedes ampliar la información sobre esta solución en [este enlace](/sonar-context-augmentation-works).

- **SonarQube Remediation Agents**: es una funcionalidad basada en IA que realiza un análisis independiente para ayudarte a corregir problemas de fiabilidad y mantenibilidad detectados en tu código.

- **Gitar**: Gitar es una plataforma de revisión y validación de código impulsada por inteligencia artificial, diseñada para corregir automáticamente código, errores y fallos en los procesos de integración continua (CI) dentro de los pull requests de GitHub y GitLab.

<h2>Tabla resumen: Soluciones SonarQube y fases AC/DC</h2>

| Solución                            | Guide | Generate | Verify | Solve |
| ----------------------------------- | :---: | :------: | :----: | :---: |
| Sonar Context Augmentation          |   ✓   |          |        |       |
| SonarQube MCP Server                |   ✓   |          |    ✓   |       |
| SonarSweep                          |   ✓   |          |        |       |
| Sonar Architecture                  |   ✓   |          |    ✓   |       |
| SonarQube for IDE (antes SonarLint) |       |     ✓    |        |       |
| SonarQube Server                    |       |          |    ✓   |       |
| SonarQube Cloud                     |       |          |    ✓   |       |
| SonarQube Advanced Security         |       |          |    ✓   |       |
| SonarQube Agentic Analysis          |       |          |    ✓   |       |
| SonarQube CLI                       |       |          |    ✓   |       |
| AI Code Assurance                   |       |          |    ✓   |       |
| AI CodeFix                          |       |          |        |   ✓   |
| SonarQube Remediation Agents        |       |          |        |   ✓   |
| Gitar                               |       |          |        |   ✓   |

El modelo **Agent Centric Development (AC/DC)** redefine cómo se construye software en la era de la inteligencia artificial, incorporando control y verificación en cada paso del ciclo.

Más allá de generar código más rápido, el verdadero reto es hacerlo con calidad, seguridad y fiabilidad. En este escenario, <a href="https://www.sonarsource.com/products/sonarqube/server/" target="_blank" rel="nofollow">SonarQube</a> se posiciona como una pieza clave para asegurar que el código generado por IA no solo funcione, sino que cumpla con los estándares exigidos.

<h2>Preguntas frecuentes sobre Agent Centric Development</h2>

- **¿Qué significa AC/DC en Sonar?**: AC/DC significa Agent Centric Development, un modelo propuesto por Sonar para gestionar el ciclo de vida del código generado por agentes de inteligencia artificial.

- **¿Qué problema intenta resolver AC/DC?**: Busca garantizar que el código generado por IA mantenga los mismos niveles de calidad, seguridad y mantenibilidad que el código desarrollado manualmente.

- **¿Puede utilizarse AC/DC con GitHub Copilot, Cursor o Claude Code?**: Sí. El modelo está diseñado precisamente para trabajar junto a herramientas de desarrollo asistidas por IA y agentes de programación.

- **¿Cuál es la fase más importante de AC/DC?**: Todas son relevantes, pero la fase Verify suele considerarse crítica porque es donde se detectan vulnerabilidades, errores y problemas de calidad antes de que lleguen a producción.

- **¿Qué papel desempeña SonarQube en AC/DC?**: SonarQube proporciona las capacidades de análisis, seguridad, contexto y corrección necesarias para supervisar el trabajo realizado por los agentes de IA durante todo el ciclo de desarrollo.