---
layout: post
title: "SonarQube e IA: webinar con demos de MCP Server y AC/DC"
description: "Aprende a conectar SonarQube con agentes de IA. Webinar con demos de MCP Server, Claude, arquitectura y análisis agéntico para verificar tu código."
date: '2026-11-12T08:00:00Z'
author: Belén Casanovas
categories:
- sonarqube
- calidad
- devops
- noticia

cover: /img/posts/2026-11-12-webinar-sonarqube-ia-mcp-acdc.png

---

¿Cómo puedes conectar SonarQube con tus agentes de inteligencia artificial para desarrollar código teniendo en cuenta la arquitectura, las reglas y los requisitos de calidad de tu proyecto?

En nuestro webinar **Highway to Help** lo mostramos con demostraciones prácticas. Durante la sesión, nuestro compañero **Mario Bastardo, Sonar Bug Hunter en excentia**, explica cómo utilizar la información de SonarQube para guiar a los agentes de IA y verificar los cambios que generan.

Recorremos el marco AC/DC de Sonar y mostramos cómo trabajar con **SonarQube MCP Server, Claude, Context Augmentation y análisis agéntico**. También vemos un ejemplo que resume por qué hace falta verificar: una aplicación generada con IA que funciona, pero contiene problemas de seguridad.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LDbkck3-81k?si=YspWNMiB7fA1WRG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h2>¿Cómo ayuda SonarQube a desarrollar código con IA?</h2>

Cuando un agente recibe una petición, necesita información para resolverla dentro del contexto del proyecto. Qué tecnologías utilizamos, cómo organizamos las dependencias, qué convenciones seguimos y qué requisitos debe cumplir el código son algunas de las cuestiones que condicionan el resultado.

SonarQube dispone de **información procedente del análisis de nuestras aplicaciones**: incidencias, métricas, reglas de calidad y resultados de los Quality Gates. En el webinar explicamos cómo incorporar esa información al flujo de trabajo con agentes. Esto permite abordar tareas como consultar vulnerabilidades, entender la estructura de una aplicación o revisar los cambios generados por la IA.

El equipo sigue siendo responsable de **definir el alcance de la tarea y los criterios de aceptación**. A partir de ahí, puede utilizar las capacidades de Sonar para orientar el trabajo del agente y comprobar sus resultados.

<h2>AC/DC: guiar, generar, verificar y resolver</h2>

El **Agent Centric Development Cycle, o AC/DC**, es el marco de Sonar para organizar el desarrollo con agentes de inteligencia artificial. Se estructura en cuatro fases:

1. **Guiar:** proporcionar el contexto del proyecto, las instrucciones y los requisitos que debe respetar el agente.
2. **Generar:** desarrollar el código necesario para resolver la tarea.
3. **Verificar:** comprobar el comportamiento, la calidad y la seguridad del resultado.
4. **Resolver:** corregir las incidencias detectadas y volver a verificar.

Durante la sesión explicamos cómo combinar el trabajo dentro del agente con los controles del proceso de desarrollo, como las pruebas, el análisis de código y la revisión del equipo.

Si quieres profundizar en este marco antes de ver las demostraciones, puedes leer nuestro artículo sobre [AC/DC y el desarrollo de software con agentes de IA](https://www.excentia.es/sonar-agent-centric-development).

<h2>SonarQube MCP Server y Claude: consultar tu proyecto con lenguaje natural</h2>

Una de las demostraciones principales está dedicada a **SonarQube MCP Server**, que conecta herramientas de IA con las capacidades de SonarQube mediante Model Context Protocol.

En el webinar mostramos una configuración con **Claude Desktop y SonarQube Cloud**. Tras establecer la conexión, utilizamos lenguaje natural para consultar proyectos y recuperar información sobre sus vulnerabilidades.

El ejemplo permite ver cómo el agente utiliza las herramientas disponibles para:

- Buscar proyectos e incidencias.
- Consultar vulnerabilidades y sus detalles.
- Proponer qué problema revisar primero.
- Explicar una posible corrección a partir de la información recuperada.

La sesión incluye la configuración utilizada en la demo y las comprobaciones para verificar que la conexión funciona.

Puedes ampliar la explicación en nuestro artículo sobre [qué es SonarQube MCP Server y para qué sirve](https://www.excentia.es/sonarqube-mcp-server-seguridad-calidad-codigo).

<h3>De la consulta de vulnerabilidades a un informe en Excel</h3>

Después de consultar las vulnerabilidades de varios proyectos de prueba, pedimos al agente que elabore un informe en Excel.

El documento **reúne datos como el proyecto afectado**, la regla, la gravedad, el fichero y el enlace a la incidencia. Es un ejemplo de cómo utilizar la información recuperada de SonarQube para preparar un entregable que después podemos revisar y compartir con el equipo.

Si ya trabajas con integraciones, este caso también te resultará familiar. Nuestra [guía de la API de SonarQube](https://www.excentia.es/guia-completa-uso-api-sonarqube) explica cómo obtener información mediante peticiones a sus servicios. El webinar muestra otra forma de interactuar con datos del proyecto, utilizando un agente y las herramientas expuestas mediante MCP.

<h3>¿Y si utilizas Claude Code?</h3>

La conexión de la demo se muestra con Claude Desktop. Si trabajas desde el terminal, puedes consultar nuestro artículo sobre el [plugin de SonarQube para Claude Code](https://www.excentia.es/plugin-sonarqube-para-claude-code), donde explicamos cómo acercar las capacidades de SonarQube al flujo de desarrollo con este agente.

Antes de configurar tu entorno, conviene revisar los requisitos de la integración y las funciones disponibles en tu instalación.

<h2>Arquitectura y Context Augmentation: dar contexto al agente</h2>

¿Cómo podemos pedirle a un agente que respete la arquitectura de nuestra aplicación? En la **primera demo mostramos cómo visualizar la arquitectura** del proyecto, definir una arquitectura pretendida y detectar desviaciones respecto a ese diseño. Esto ayuda a revisar las relaciones entre componentes y a identificar dependencias que se alejan de lo que queremos mantener.

Después pasamos a **Context Augmentation**, con un ejemplo en el que recuperamos información sobre las tecnologías, los paquetes y las responsabilidades de una aplicación.

Con ese contexto, pedimos al agente que genere una tienda de productos para bicicletas siguiendo la arquitectura de un proyecto de referencia.

La aplicación generada incluye código y pruebas, pero el **análisis posterior detecta problemas de seguridad**: aparecen contraseñas en texto plano en una clase utilizada para inicializar datos de prueba.

**El contexto orienta la generación. El análisis permite comprobar el resultado y detectar problemas que necesitan corrección.**

<h2>Análisis agéntico: verificar los cambios durante el desarrollo</h2>

La siguiente demostración aborda la corrección de esas vulnerabilidades mediante **SonarQube Agentic Analysis** y el flujo de trabajo *Guide and Verify*. El recorrido muestra cómo el agente obtiene información del proyecto, modifica el código y utiliza el análisis para revisar los cambios.

Después planteamos una nueva funcionalidad: ampliar la aplicación para incorporar una tienda de motos, manteniendo separada su funcionalidad de la tienda de bicicletas.

Durante el proceso vemos cómo el agente consulta el contexto, implementa los cambios, genera pruebas y comprueba los ficheros modificados. También revisamos qué incidencias ya existían antes de comenzar la tarea.

Esta distinción es útil para controlar el alcance del cambio: permite evaluar lo que se ha introducido durante la sesión y planificar por separado la resolución de los problemas anteriores.

En nuestro artículo sobre [SonarQube Agentic Analysis](https://www.excentia.es/que-es-sonarqube-agentic-analysis) encontrarás más información sobre este enfoque de verificación.

## Contenidos del webinar y minutos de las demostraciones

La grabación dura aproximadamente **56 minutos**. Puedes seguir la sesión completa o localizar el bloque que más te interese:

| Minuto | Contenido |
|---|---|
| 02:14 | Cómo está cambiando el desarrollo de software con la IA |
| 08:20 | Introducción al marco AC/DC |
| 18:29 | Arquitectura y detección de desviaciones |
| 24:57 | MCP Server: configuración con Claude y consulta de vulnerabilidades |
| 32:42 | Context Augmentation y generación de una aplicación |
| 40:58 | Análisis agéntico y flujo Guide and Verify |
| 51:10 | Preguntas sobre primeros pasos, disponibilidad y consumo de tokens |

*La sesión se grabó en junio de 2026. Las referencias a disponibilidad, versiones y funcionalidades en pruebas corresponden a ese momento.*

## Empieza a trabajar con SonarQube y agentes de IA

Para empezar, puedes elegir una tarea concreta: consultar las vulnerabilidades de un proyecto, entender su arquitectura o implementar una funcionalidad pequeña con criterios de aceptación definidos.

El webinar te ayudará a ver cómo encajan estas tareas dentro de un mismo proceso: proporcionar contexto, generar código, verificarlo y corregir los problemas detectados.

En **excentia** te ayudamos a integrar las soluciones de Sonar en tus procesos de desarrollo y a aplicar nuestro marco **Highway to Help** a las necesidades de tu organización. Si quieres aplicar este flujo de trabajo en tu equipo, **[habla con nuestros especialistas en SonarQube](https://www.excentia.es/sonarsource)**.
