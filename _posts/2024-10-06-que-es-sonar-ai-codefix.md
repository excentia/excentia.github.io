---
layout: post
title: '¿Qué es AI CodeFix de Sonar?'
description: Manish Kapur nos explica la nueva funcionalidad de Sonar AI CodeFix. ¡No te lo pierdas!
date: '2024-10-06T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops


cover: img/posts/2024-10-06-que-es-sonar-ai-codefix.png

---

<img width="100%" src="img/posts/2024-10-06-que-es-sonar-ai-codefix.png" alt="Qué es AI CodeFix">

En la actualidad, los desarrolladores se enfrentan a una presión constante para **escribir, corregir e implementar código de manera eficiente**. Por su parte, los líderes de ingeniería buscan herramientas que mejoren la productividad, reducir el tiempo de comercialización y todo ello a la vez que se mantiene la calidad del código. Para satisfacer estas demandas, Sonar presenta **Sonar AI CodeFix**, una solución diseñada para agilizar la forma en la que los desarrolladores abordan los problemas del código.

<h2>¿Qué es Sonar AI CodeFix?</h2>

Sonar AI CodeFix es una funcionalidad que ofrece correcciones para las issues detectadas por SonarQube Server y SonarQube cloud. Al automatizar la resolución de problemas comunes de codificación, AI CodeFix aumenta significativamente la velocidad y productividad del desarrollador. Con **solo un clic** en la interfaz del usuario se podrán recibir sugerencias sobre cómo resolver problemas, agilizando el proceso de depuración.


<h2>¿Cómo funciona Sonar AI CodeFix?</h2>

El **análisis de código estático de SonarQube server y SonarQube cloud** escanea los repositorios para detectar **bugs, vulnerabilidades de seguridad y problemas de calidad del código en lenguajes y frameworks populares**. El análisis de código se activa durante eventos como la solicitudes de inserción o una solicitud pull. Cuando se identifica un problema, se presenta al usuario como un bug, vulnerabilidad o problema de calidad del código. 

Basándose en esta detección, Sonar AI CodeFix puede ir un paso más allá al **utilizar un modelo extenso de lenguaje (LLM)** para generar una solución de código impulsada por IA para los problemas detectados por el análisis de código estático. El principio básico detrás de AI CodeFix es sencillo: cuando se solicita una corrección para un problema, se envía el fragmento de código afectado junto con una descripción del problema a un LLM. Las revisiones de código propuestas generadas por el LLM están diseñadas para resolver el problema sin alterar la funcionalidad existente del código.


<h2>Características principales de Sonar AI CodeFix</h2>

**Soluciones instantáneas de código**: AI CodeFix genera automáticamente sugerencias de corrección de código con un clic, minimizando los esfuerzos de corrección manual y permitiendo a los desarrolladores centrarse en tareas más críticas.

**Comprensión contextual de los resultados del Sonar**: Al aprovechar los LLM, AI CodeFix entiende el contexto de su código y proporciona las correcciones pertinentes, asegurando que las soluciones sugeridas sean precisas y adaptadas a la base de código.

**Flujo de trabajo sin interrupciones**: AI CodeFix permite a los desarrolladores solucionar problemas directamente dentro de su entorno de desarrollo integrado (IDE) utilizando el modo conectado SonarLint, asegurando un flujo de trabajo sin problemas.

**Aprendizaje continuo**: AI CodeFix mejora continuamente las sugerencias basadas en los comentarios de los usuarios, nuevos datos y mejoras de LLM, asegurando que la herramienta se mantenga actualizada con las últimas prácticas y tendencias de codificación.

**Soporte de varios idiomas**: Admite lenguajes de programación emblemáticos, incluidos Java, JavaScript, TypeScript, C#, Python, C y C++, lo que garantiza que una amplia gama de proyectos de desarrollo puedan aprovechar las capacidades de Sonar AI CodeFix.

<h2>¿Cómo utilizar Sonar AI CodeFix?</h2>

Por tiempo limitado, Sonar AI CodeFix está disponible de **forma gratuita en Early Access en SonarQube server y SonarQube cloud**. AI CodeFix se puede habilitar en la interfaz de usuario de administración para cualquier organización, desde los ajustes de la organización.

<img width="100%" src="img/sonarsource-products/AI-generated-fix-suggestions.webp" alt="AI Generated Fix Suggestions">

Sonar AI CodeFix se dirige a los problemas detectados en las **solicitudes de extracción y las ramas del código**, que van desde simples bugs y vulnerabilidades de seguridad hasta áreas donde la calidad del código puede mejorarse. Junto a cada problema detectado que puede resolver, encontrarás un botón llamado 'Generate AI Fix'. 

Al hacer clic en este botón se activa AI CodeFix para analizar el problema y generar una solución sugerida. Esta sugerencia aparece justo en la página de solicitud de extracción, lo que le permite ver la solución en contexto. Esto permite a los desarrolladores revisar, confirmar, descartar o editar la sugerencia. La corrección sugerida puede copiarse para su implementación manual o aplicarse directamente abriendo el archivo en el IDE que tiene SonarLint configurado en modo conectado.

<img width="100%" src="img/sonarsource-products/AI-CodeFix-Example.webp" alt="Ejemplo AI CodeFix">

AI CodeFix ya está disponible con acceso anticipado para todos los clientes de **SonarQube server 10.7 y SonarQube cloud**. Se incluye en los planes Team y Enterprise de SonarQube cloud y en la edición Enterprise y Data Center de SonarQube server.

Aquí te dejamos un vídeo para que puedas ver en acción AI CodeFix en una instancia de SonarQube server. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/2WdUmuQ7us4?si=w8OHDsxJKNiJ31uw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Y hasta aquí el artículo de Sonar sobre AI CodeFix. ¡No dudes en testear esta nueva funcionalidad!

