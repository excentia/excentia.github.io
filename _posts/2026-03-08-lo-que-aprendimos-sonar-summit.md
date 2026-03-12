---
layout: post
title: 'Claves del Sonar Summit: el nuevo AC/DC y cómo proteger el código generado por IA'
description: Descubre qué es el Agent Centric Development Cycle y cómo asegurar el código generado por IA con SCA, Taint Analysis y Sonar Advanced Security.
date: '2026-03-08T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticias


cover: /img/posts/2026-03-08-lo-que-aprendimos-sonar-summit.png

---

En **Sonar Summit 2026** tuvimos la oportunidad de conocer de primera mano algunas de las ideas que están marcando el futuro del desarrollo de software en un mundo cada vez más influido por la inteligencia artificial. Durante el evento organizado por <a href="https://www.sonarsource.com/" target="_blank" rel="nofollow noopener noreferrer">Sonar</a> se presentaron nuevas propuestas metodológicas y se compartieron aprendizajes muy prácticos sobre cómo mantener la calidad y la seguridad del código cuando cada vez más líneas son generadas por IA.

<h2>El nuevo Agent Centric Development Cycle (AC/DC)</h2>

Uno de los anuncios más relevantes del evento fue el **lanzamiento del Agent Centric Development Cycle (AC/DC)**, un nuevo marco de desarrollo pensado específicamente para el contexto actual, en el que los agentes de IA pueden generar grandes cantidades de código a gran velocidad.

La idea central es sencilla: los **procesos tradicionales de CI/CD no están diseñados** para trabajar con agentes que escriben código de forma autónoma. Cuando la generación de código se acelera gracias a la IA, también aumenta el riesgo de introducir errores, vulnerabilidades o deuda técnica.

El **Agent Centric Development Cycle** propone un ciclo de trabajo estructurado que permita mantener el control sobre ese código generado por IA. Este ciclo se basa en cuatro fases principales:

- **Guide**: proporcionar a los agentes el contexto y las reglas del proyecto para que generen código alineado con la arquitectura, los estándares y los objetivos del equipo.

- **Generate**: los modelos de IA generan el código necesario para cumplir el objetivo planteado.

- **Verify**: el código se analiza automáticamente para comprobar que cumple los requisitos de calidad, seguridad y mantenibilidad.

- **Solve**: cuando se detectan problemas, se corrigen mediante herramientas automatizadas o agentes especializados en reparación de código.

Este enfoque introduce más gobernanza y verificación continua en un escenario donde la velocidad de generación de código puede superar fácilmente la capacidad humana de revisión. Si quieres profundizar en este modelo, puedes ver la explicación completa en [este artículo ](https://www.excentia.es/sonar-agent-centric-development).

<h2>Advanced SAST: Don’t Let the AI Ruin Your Code</h2>

Otro de los momentos destacados del evento fue la charla de nuestro **Sonar Bug Hunter, Mario Bastardo** titulada “Advanced SAST: Don’t Let the AI Ruin Your Code”, centrada en un problema cada vez más relevante: cómo garantizar la seguridad del software cuando parte del código ha sido generado por inteligencia artificial.

Durante la sesión se explicó que la **seguridad del código moderno** no depende de una única técnica, sino de la combinación de varios mecanismos complementarios.

- **SCA (Software Composition Analysis)**: El **Software Composition Analysis** se encarga de analizar las dependencias de un proyecto para detectar vulnerabilidades conocidas en bibliotecas de terceros. Hoy en día, una gran parte del software se construye reutilizando componentes open source. El SCA permite identificar versiones vulnerables, licencias problemáticas o riesgos en la cadena de suministro de software antes de que lleguen a producción. Puedes ampliar la información en [este artículo](https://www.excentia.es/software-composition-analisis-sonarqube).

- **Taint Analysis**:  El Taint Analysis es una técnica avanzada de análisis estático que rastrea cómo fluye la información dentro del código. Su objetivo es detectar situaciones en las que datos no fiables (por ejemplo, entradas de usuario) llegan a puntos sensibles del sistema sin la validación adecuada. 

- **Sonar Advanced Security**: La tercera pieza es Sonar Advanced Security, que amplía las capacidades de análisis de seguridad para detectar vulnerabilidades complejas directamente durante el desarrollo. Esta capa combina diferentes técnicas de análisis para ayudar a los equipos a identificar riesgos de seguridad de forma temprana, integrándose en el flujo de desarrollo y evitando que los problemas lleguen a producción. Hablamos más sobre este tema en [este artículo](https://www.excentia.es/aumenta-seguridad-codigo-sonarqube-advanced-security).

Para finalizar, si te interesa profundizar en estos tres mecanismos y ver ejemplos prácticos de cómo se aplican en proyectos reales, puedes ver la charla completa aquí:

<iframe width="760" height="515" src="https://www.youtube.com/embed/VecMTZMmhEg?si=cZOIFu8sP1LGYQWp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

