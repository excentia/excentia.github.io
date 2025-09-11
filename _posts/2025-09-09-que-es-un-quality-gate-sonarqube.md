---
layout: post
title: 'Qué es un Quality Gate y cómo configurarlo correctamente'
description: Aprende qué es un Quality Gate en SonarQube, por qué es clave para la calidad de tu código y cómo configurarlo paso a paso para que tu equipo evite bugs, vulnerabilidades y deuda técnica.
date: '2025-09-09T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-09-09-que-es-un-quality-gate-sonarqube.png

---

¿Cuántas veces ha pasado a producción un **código que está lleno de errores o vulnerabilidades**? Aquí es donde hubiera estado bien trabajar con los **Quality Gates de SonarQube**: un filtro de calidad que garantiza que solo el código que cumple ciertos criterios llega a producción.

En esta guía aprenderás **qué es un Quality Gate**, por qué es tan importante y cómo configurarlo correctamente para tu equipo.



<h2>¿Qué es un Quality Gate en SonarQube</h2>

Un Quality Gate es un **filtro de calidad** que evita que el código con errores o vulnerabilidades pase a producción. A este mecanismo de control se le asignan una serie de criterios definidos por SonarQube o por el propio usuario para **evaluar la calidad de los proyectos**. 

Por ejemplo, en una línea de producción de vehículos, cada coche se revisa antes de salir al mercado. Si **detecta un defecto** como por ejemplo falla un freno, luces u otra característica, se retira de la línea hasta corregirlo. Pues esta es la analogía de un Quality Gate en SonarQube. 

<h2>¿Cómo funciona un Quality Gate</h2>

Hablemos de la práctica. En este apartado te resumo cómo funciona un quality gate: 

- El pipeline de CI/CD **ejecuta un análisis** de SonarQube. <br>

- El Quality Gate **evalúa automáticamente** las métricas definidas. <br>

Resultado:

- **PASSED**: El código cumple con los criterios del Quality Gate configurado y se puede desplegar. <br>

- **FAILED**: El código no cumple con los criterios y, por tanto, debe ser corregido.  <br>

SonarQube incluye dos Quality Gates predefinidos: 

- **Sonar way** únicamente evaluará el código nuevo o modificado. Este Quality Gate sigue el enfoque del [Clean as You Code](https://docs.sonarsource.com/sonarqube-server/9.9/user-guide/clean-as-you-code/){:target="_blank"}. <br>

- **Sonar way for AI Code** está diseñado para evaluar la calidad y seguridad del código generado por herramientas de IA, como GitHub Copilot, ChatGPT u otros asistentes de programación. Es un Quality Gate certificado para [AI Code Assurance](/que-es-sonar-ai-code-assurance).<br>

También es recomendable, y puedes configurar tu propio Quality Gate añadiendo los criterios que consideres.

<h2>Cómo crear y configurar un Quality Gate paso a paso</h2>

Cuando configuras un Quality Gate en SonarQube, tienes la posibilidad de **establecer diferentes condiciones** que tu código debe cumplir para considerarse "aprobado". Estas condiciones funcionan como reglas automáticas que **evalúan aspectos clave** de la calidad y la seguridad.

Por ejemplo, puedes definir que:

- El **número total de issues** no supere cierto límite, asegurando que no se acumule deuda técnica. <br>

- Los **Security Hotspots** se mantengan por debajo de un número aceptable. <br>

- La **cobertura de tests** no caiga por debajo de un porcentaje mínimo. <br>

- El **porcentaje de líneas duplicadas** no exceda un nivel definido. <br>

En conjunto, estas métricas permiten que el **Quality Gate** actúe como un filtro integral, evaluando la salud de tu proyecto desde diferentes ángulos: calidad, seguridad, pruebas y mantenibilidad.

Para configurar tu propio Quality Gate debes seguir los siguientes pasos: 

1 - Dirígete a la sección del menú superior 'Quality Gates'.

2 - Pulsa sobre el botón 'Create'.

3 - Introduce un nombre al Quality Gate. 

4 - Edita las condiciones que hemos nombrado anteriormente. 

5 - Tienes la opción de añadir más condiciones.

6 - Indica si quieres que se aplique a 'New Code' o a 'Overall Code'. 

Aquí te dejo una imagen de la **pantalla de configuración** de un Quality Gate en SonarQube Server: 

<div style="text-align: center;">
<img src="/img/sonarsource-products/sonarqube-configurar-quality-gate.png" width="800" alt="Pantalla configuración de un Quality Gate en SonarQube">
</div>
<br>

<h3>Video sobre cómo configurar un Quality Gate en SonarQube</h3>

Para entender mejor cómo configurar un **Quality Gate en SonarQube**, puedes ver este video de nuestro canal de Youtube donde te lo muestro paso a paso: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/uHgMw08gYag?si=gAcGLKOwG4VYtvyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

¡Importante! Debes saber que puedes configurar a **qué proyectos designar un Quality Gate**. Un Quality Gate predeterminado se aplica a todos los proyectos que no están asignados explícitamente a un Quality Gate. 

En excentia ayudamos a empresas a implementar **Quality Gates efectivos** que aseguran que tu software sea seguro, estable y de alta calidad. Desde la configuración inicial hasta la formación de tu equipo y **auditorías de código periódicas**, somos tu socio de confianza en la mejora continua del código.

¿Quieres llevar la calidad de tu código al siguiente nivel? Ponte en contacto con nuestro equipo a través del [siguiente formulario](/contacto). 