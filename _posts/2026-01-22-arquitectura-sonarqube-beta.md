---
layout: post
title: 'SonarQube incorpora capacidades de arquitectura para mejorar la calidad del código'
description: Olivier Gaudin nos cuenta cómo SonarQube introduce la arquitectura para escribir código más modular y mantenible.
date: '2026-01-22T08:00:00Z'
author: Olivier Gaudin
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-01-22-arquitectura-sonarqube-beta.png

---

En este artículo, **Olivier Gaudin** nos explica cómo SonarQube da un paso más allá en la gestión del código al **incorporar capacidades de arquitectura**. Esta novedad permitirá a los equipos entender, formalizar y mantener la estructura de sus proyectos de software, asegurando que el código siga siendo modular, mantenible y listo para evolucionar de manera eficiente.

*Este es un artículo traducido del original publicado en Sonar, la versión en inglés la puedes encontrar <a href="https://www.sonarsource.com/blog/introducing-architecture-in-sonarqube/" target="_blank" rel="nofollow">aquí</a>.*

<h2>Una base para un software saludable</h2>

La **arquitectura del software** no es solo un concepto abstracto; es esencial para determinar cómo funcionan y evolucionan los sistemas. La arquitectura consiste en la estructura del proyecto: **cómo se organiza el software en componentes distintos**, las relaciones entre esos componentes y el diseño que regula sus interacciones. Una buena arquitectura es modular y transparente. Garantiza que los cambios en el código se mantengan localizados y tengan un impacto limitado en el resto de la aplicación.

Por el contrario, **descuidar la arquitectura del software** en tu proyecto conduce directamente a la erosión de la coherencia del código. A medida que aumenta la deriva arquitectónica, la evolución del software se vuelve más difícil y la productividad de los desarrolladores se estanca. Sin herramientas que ayuden a **gestionar la arquitectura del software**, los equipos no podrán detener la erosión, se darán cuenta demasiado tarde y tendrán dificultades para corregirla. Esto lleva a una situación en la que los cambios en la aplicación se vuelven tan costosos que reescribirla es la única solución. Esta tarea monumental frena la innovación y ralentiza el tiempo de salida al mercado.

<h2>Por qué la arquitectura importa más en la era de la IA</h2>

Aunque la arquitectura siempre ha sido fundamental, la necesidad de claridad a alto nivel se vuelve urgente debido al **creciente volumen y velocidad de producción de código**. Las bases de código ya son inherentemente complejas, compuestas por numerosos componentes y sus dependencias. A medida que los desarrolladores utilizan **asistentes de codificación basados en IA** para resolver tareas específicas, corren el riesgo de perder la “visión global” del sistema, acelerando su erosión.

Por esta razón, a medida que avanzamos hacia una era de **orquestación de agentes**, tanto los humanos como los agentes necesitan comprender las restricciones y la dirección de su arquitectura. Deben asegurarse de que están cumpliendo con la promesa de acelerar el desarrollo de software, no solo de resolver la necesidad inmediata. Creemos que Sonar puede ayudar a fundamentar estos **nuevos flujos de trabajo** con información arquitectónica sólida, permitiendo que desarrolladores y agentes construyan con confianza.

<h2>¿Qué capacidades de arquitectura hay en SonarQube?</h2>

Creemos que la industria del software necesita una solución definitiva, sencilla y accesible para que los equipos gestionen la arquitectura de sus proyectos. Con el **lanzamiento beta de las nuevas capacidades de arquitectura en SonarQube**, ofrecemos un enfoque práctico para que los equipos comprendan la estructura real del código de sus proyectos, formalicen su arquitectura prevista y gestionen las brechas.

SonarQube **es la única solución en el mercado** capaz de ofrecer estas capacidades arquitectónicas, a gran escala, en cientos de miles de bases de código. Están diseñadas para ayudar a gobernar la arquitectura del software a través de cuatro funciones clave:

**Descubrir**: SonarQube **genera una imagen precisa del estado arquitectónico** de tu proyecto mediante ingeniería inversa del código. Ayuda a los equipos a comprender rápidamente la estructura actual y las relaciones de los componentes en todos los niveles. La arquitectura actual sirve como “verdad fundamental” para los desarrolladores y proporciona el contexto necesario para los agentes de IA.

**Formalizar**: Puedes **definir formalmente la estructura objetivo** para los componentes nuevos y existentes, junto con sus relaciones con otros componentes. Esta arquitectura prevista sirve como plano que los desarrolladores deben seguir al programar. Configurar la arquitectura prevista puede hacerse de forma incremental, con una mínima inversión de tiempo inicial. Puedes comenzar definiendo componentes de alto nivel e ir detallando con el tiempo, ofreciendo flexibilidad según las necesidades del proyecto.

**Priorizar**: SonarQube realiza **revisiones automáticas contra tu plano arquitectónico establecido**, identificando brechas incluso con solo unas pocas decisiones de arquitectura configuradas inicialmente. Estas desviaciones se detectan automáticamente cuando el código real difiere del objetivo definido. SonarQube también evita representar el mismo problema en múltiples dimensiones. Esto permite a los equipos priorizar y abordar la causa raíz.

**Corregir**: Los problemas arquitectónicos **se descomponen en incidencias a nivel de código** que se muestran como acciones concretas dentro del flujo de trabajo habitual del desarrollador. Estas incidencias aparecen en el [Quality Gate](https://www.excentia.es/que-es-un-quality-gate-sonarqube), evitando una mayor erosión. Esto garantiza una resolución oportuna antes de que la deriva arquitectónica se acumule. SonarQube realiza un seguimiento detallado de las brechas restantes y del progreso.

<h2>Un primer paso</h2>

En resumen, estas nuevas capacidades de arquitectura en [SonarQube](https://www.excentia.es/sonarqube) permiten a desarrolladores y agentes de IA aprovechar la arquitectura actual como contexto para escribir el código correcto, y la arquitectura prevista para escribir el código de la manera correcta. Esto asegura que el software permanezca modular y mantenible, listo para evolucionar de forma continua y rentable.

Por supuesto, se **trata de una beta**, por lo que se espera que evolucione rápidamente según el feedback recibido. Dicho esto, creemos que es una base sólida que ya genera un valor significativo para los equipos de desarrollo. Por ahora está disponible en SonarQube Cloud (SonarQube Server llegará más adelante), compatible con Java, JavaScript, TypeScript, Python y C#.

Ahora que la beta está disponible, puedes solicitar <a href="https://www.sonarsource.com/solutions/architecture/" target="_blank" rel="nofollow">acceso a través de este enlace</a>.
