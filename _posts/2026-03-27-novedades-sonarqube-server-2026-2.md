---
layout: post
title: 'Novedades SonarQube Server 2026.2'
description: Nuev versión de SonarQube Server con un espacio de trabajo rediseñado, análisis ampliado y seguridad avanzada para código propio y dependencias.
date: '2026-03-27T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-03-27-novedades-sonarqube-server-2026-2.png

---

Ya está disponible la **release SonarQube Server 2026.2**. Esta versión trae un espacio de trabajo de desarrollo rediseñado, análisis ampliado para detectar errores difíciles de identificar en más lenguajes y frameworks, y reportes de seguridad actualizados que cubren tanto tu código como las dependencias de terceros. ¡Veamos todo lo nuevo que tenemos!

<h2>Experiencia del desarrollador y productividad</h2>

Esta versión facilita la navegación por la plataforma y acelera la acción sobre los problemas detectados.

- **Navegación y espacio de trabajo rediseñados**: Interfaz renovada con una barra lateral vertical intuitiva y un nuevo selector de contexto. Los usuarios pueden saltar instantáneamente entre portafolios y proyectos sin perder su lugar, reduciendo la carga y acelerando la detección de incidencias.

- **AI CodeFix independiente del modelo**: Nuevas sugerencias inteligentes de corrección de código directamente en tu entorno seguro autogestionado, sin depender de un modelo específico. Esto garantiza que las vulnerabilidades se parcheen rápidamente mientras tu código permanece protegido detrás de tu firewall, completamente aislado de LLMs públicos.

<h2>Ampliación del soporte de lenguajes y frameworks</h2>

Aumenta el soporte para los frameworks empresariales recientes, abordando específicamente los errores sutiles que introducen los asistentes de codificación basados en IA modernos.

- **Soporte completo para Java 25**: Adopta de forma segura los paradigmas de Java 25 LTS con análisis profundo y parseo sin errores. Se añaden reglas críticas para detectar código que es sintácticamente correcto pero semánticamente incorrecto, a menudo generado por asistentes de IA entrenados con APIs previas obsoletas, evitando fallos graves en tiempo de ejecución.

- **Frameworks web de Python más profundos**: Se incorporan reglas nuevas para FastAPI, Flask y Django, asegurando el cumplimiento de contratos de API, la conformidad RESTful y reforzando la infraestructura contra fugas de datos.

- **Soporte de primera clase para Groovy**: Extiende los estándares de calidad de código a tus pipelines de DevOps con más de 20 nuevas reglas de calidad para Groovy.

- **Soporte mejorado para Apex**: Para equipos de Salesforce, el soporte ampliado para Apex alcanza la paridad con PMD con una tasa de falsos positivos inferior al 5%, permitiendo consolidar todas las herramientas de desarrollo en una única plataforma.

<h2>Seguridad empresarial y gobernanza</h2>

Los líderes en seguridad y los responsables de cumplimiento ahora disponen de controles granulares y reportes para gestionar el riesgo tanto del código propio como de las dependencias de terceros.

- **Resolución de incidencias estructurada en el código (sonar-resolve)**: Se sutituye el comentario "all-or-nothing" NOSONAR. Ahora los desarrolladores pueden usar sonar-resolve para silenciar reglas específicas con un estado obligatorio directamente en el código. Esto conecta los flujos de trabajo ágiles de los desarrolladores con la auditoría rigurosa requerida por estándares de cumplimiento como MISRA C++:2023.

- **Riesgos de dependencias unificados en los reportes de seguridad**: Los clientes de SonarQube Advanced Security obtienen una visión completa de la postura de seguridad de su software. Los informes listos para ejecutivos y PDFs exportados integran de manera nativa los datos de Software Composition Analysis (SCA) junto con la información de salud del código propio, reflejando el riesgo real de toda la cadena de suministro de software. Además, los datos de Software Bill of Materials (SBOM) y riesgos de dependencias ahora se incluyen en la descarga del informe regulatorio del proyecto.

- **Configuraciones avanzadas de SAST para el top 1K de Python**: Aumenta la precisión del análisis de seguridad para Python. El motor Advanced SAST de SonarQube Advanced Security ahora rastrea de forma automática los datos contaminados en las 1.000 librerías de Python más utilizadas, reduciendo los falsos negativos sin necesidad de configuraciones manuales.

Y hasta aquí todas las novedades de la <a href="https://www.sonarsource.com/blog/announcing-sonarqube-server-2026-2" target="_blank" rel="nofollow">release anunciada por Sonar</a>. Si quieres más información sobre esta versión o sobre cómo actualizar, puedes ponerte en contacto con nuestro equipo a través de [este enlace](/contacto). 