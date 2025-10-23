---
layout: post
title: 'Sonar mejora LLMs de programación con SonarSweep'
description: Descubre SonarSweep para limpiar datos de entrenamiento para LLMs, reduciendo errores y vulnerabilidades en código generado por IA.
date: '2025-10-21T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-10-21-sonar-lanza-sonarsweep-mejorar-entrenamiento-LLMs.png

---

Sonar ha lanzado SonarSweep un servicio innovador que tiene como objetivo **mejorar los datos de entrenamiento de LLMs** para programación. Esta solución permite **eliminar errores y vulnerabilidades** en código generado por la IA, permitiendo a las organizaciones crear modelos de IA más seguros y de calidad. Desde excentia, como **Gold Partner de Sonar** te vamos a explicar en este artículo todo lo que debes saber sobre este lanzamiento.

<h2>Qué es SonarSweep</h2>

SonarSweep es un servicio que **corrige, optimiza y protege** el código utilizado para el entrenamiento de modelos de lenguaje para programación (LLMs). Este sistema asegura que los modelos aprendan de ejemplos de **código seguros y de alta calidad**, desde el entrenamiento hasta la alineación del modelo, un paso crítico para construir modelos de IA fiables.

Según un estudio realizado por Sonar, los modelos preparados por SonarSweep ofrecen código con hasta un **67% menos de vulnerabilidades de seguridad** y hasta un **42% menos de errores**, sin pérdida de rendimiento. En <a href="https://www.sonarsource.com/blog/announcing-sonarsweep-improving-training-data-quality-for-coding-llms/" target="_blank" rel="nofollow">este enlace tienes</a> el artículo en inglés de este estudio, que se ha realizado con una amplia gama de modelos, incluyendo **Llama 3.1 70B y GPT-4o**. 

En la siguiente imagen te dejamos los resultados de este estudio.

<img src="/img/posts/SonarSweep-resultados-estudio-llama-gpt.webp" alt="Resultados estudio Sonar reducción errores SonarSweep" width="80%">

<h2>Problema que resuelve SonarSweep</h2>

Como ya sabrás, los LLMs de programación se entrenan con **grandes volúmenes de código abierto**, que pueden contener errores y vulnerabilidades de seguridad. Incluso pequeñas cantidades de datos defectuosos pueden **degradar el rendimiento y la precisión** del modelo, afectando directamente la calidad del código generado.

La calidad de los datos es el "talón de Aquiles de la IA" para programación. Los errores presentes en datasets públicos se amplifican durante el entrenamiento, generando código con más fallos y riesgos de seguridad.

Como hemos visto en los datos anteriores, SonarSweep **reduce en un alto porcentaje** el número de errores y vulnerabilidades de este código. 

<h2>Declaración del CEO / Cita destacada</h2>

Aquí te dejamos las declaraciones de **Tariq Shaukat, CEO de Sonar**: “Las últimas investigaciones confirman lo que sospechábamos: la calidad de los datos es el talón de Aquiles de la generación de código de IA. La mejor manera de impulsar la productividad del desarrollo de software, reducir los riesgos y mejorar la seguridad es abordar el problema desde el inicio, dentro de los propios modelos. La ingeniería que aprovecha modelos mejorados con SonarSweep tendrá menos problemas en producción, reduciendo la carga para desarrolladores y empresas. Combinado con sólidas prácticas de verificación, esto eliminará un importante obstáculo en el desarrollo de software de IA”.

<h2>Cómo funciona SonarSweep</h2>

Lo que sabemos hasta ahora es que SonarSweep **analiza los datasets** a gran escala utilizando los **motores de análisis de código de Sonar**. Esto permite **eliminar automáticamente** problemas de calidad y seguridad, asegurando que los modelos aprendan de ejemplos de alta calidad.


<h3>Disponibilidad y próximos pasos</h3>

SonarSweep está disponible en <strong>acceso anticipado</strong>. Los equipos y empresas interesadas pueden solicitar la prueba a través de <a href="https://www.sonarsource.com/products/sonarsweep/early-access/" target="_blank" rel="nofollow">este enlace</a>.

<h3>FAQS</h3>

**¿Qué es SonarSweep y para qué sirve?**
Es un servicio que depura, optimiza y protege datasets de código para entrenar LLMs de programación, reduciendo errores y vulnerabilidades.

**¿Qué tipos de problemas de código corrige SonarSweep?**
Detecta y corrige vulnerabilidades críticas, errores y problemas de calidad directamente en los datos de entrenamiento.

**¿SonarSweep funciona con cualquier lenguaje soportado por SonarQube?**
Sí, aprovecha la compatibilidad de SonarQube con más de 35 lenguajes de programación para analizar y depurar datasets de forma efectiva.

**¿Cómo puedo probar SonarSweep?**
Actualmente está disponible en acceso anticipado.

**¿Qué mejoras puedo esperar en seguridad y calidad del código?**
Modelos entrenados con SonarSweep reducen hasta un 67 % menos de vulnerabilidades y hasta un 42 % menos de errores.

Gracias a SonarSweep, ahora puedes entrenar tus modelos con datasets depurados, reduciendo errores y vulnerabilidades sin comprometer el rendimiento. Como **Gold Partner de Sonar**, excentia puede ayudarte a integrar SonarSweep en tu flujo de trabajo y sacar el máximo partido a tus herramientas de desarrollo. Si quieres más información, no dudes en [ponerte en contacto](/contacto) con nuestro equipo. 