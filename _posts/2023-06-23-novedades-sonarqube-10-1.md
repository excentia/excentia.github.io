---
layout: post
title: 'SonarQube 10.1: Novedades de la nueva versión'
description: Te contamos las novedades de la última versión que ha lanzado Sonar

date: '2023-06-23T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: /img/posts/2023-06-23-novedades-sonarqube-10-1.png

---

<img width="90%" src="img/posts/2023-06-23-novedades-sonarqube-10-1.png" alt="Novedades SonarQube 10.1">

Sonar ha anunciado que la nueva versión SonarQube 10.1 ya está disponible. Desde excentia, como **partners exclusivos de Sonar en España y Latinoamérica**, te vamos a contar en este artículo cuáles son las novedades de esta versión.

<h2>Gestión de acceso centralizado más fluido con GitHub</h2> 

Los nuevos usuarios o grupos que se creen en GitHub podrán **ser añadidos de forma automática a SonarQube**. De esta forma, se garantiza un aprovisionamiento seguro y centralizado de usuarios y la sincronización de los grupos. Además, SonarQube ya es compatible con Okta/Azure AD, a partir de la edición Enterprise, para aquellas empresas que prefieran utilizar SAML. 

<h2>Análisis de variantes de código C/C++ múltiples</h2>

En esta versión, los desarrolladores podrán analizar **múltiples variantes de código** usando el mismo proyecto. No es necesario crear proyectos/ramas separadas por variante ni administrar duplicados. Por lo tanto, los usuarios tendrán una vista unificada de su código con visibilidad completa del análisis, incluida la variante de código de la que surge el problema. 

<h2>Mejoras en la cobertura de seguridad de Java</h2>

El motor de análisis de seguridad de Java detecta y ayuda a solucionar **más problemas de seguridad**. Gracias a estas mejoras, los usuarios alcanzarán una tasa de verdaderos positivos (TPR) superior al 90% en los principales puntos de referencia de seguridad de OWASP. Por ejemplo:

•	El análisis realizado en el punto de referencia OWASP desprendió un TPR del 90%. 

•	El punto de referencia Security Shepherd mostró un TPR de ~98%.

•	Más del 88% en el punto de referencia WebGoat. 


<h2>Sincronización en tiempo real de puntos de acceso de seguridad en IDE</h2> 

SonarLint en su IDE proporciona el primer nivel de verificación para encontrar y solucionar problemas mientras escribe el código. El usuario que utilice los IDE de la familia VSCode o IntelliJ podrán **sincronizar el estado de los puntos de acceso** de seguridad en tiempo real con SonarQube. Una vez se configura el modo conectado, el estado de los puntos de acceso marcados en SonarQube se reflejará automáticamente en SonarLint, mostrando solo aquellos problemas en el IDE que necesitan la atención del usuario. Además, el estado del punto de acceso de seguridad también se puede cambiar directamente en el IDE después de la revisión. A medida que los líderes de equipo evangelizan el uso del ecosistema de Sonar en su organización, ahora pueden ver cómo los desarrolladores de la instancia específica de SonarQube están adoptando SonarLint. 

<h2>Comprobaciones de orientación de Clean as You Code</h2> 

A medida que se generen nuevos proyectos, SonarQube guiará a los administradores para que configuren el período de ‘New Code’ en función de su contexto de desarrollo. De esta forma, se garantiza que los proyectos sigan las **directrices del ‘Clean as You Code’ desde el inicio**. Por lo tanto, las organizaciones estarán seguras de que están utilizando SonarQube de forma óptima y eficiente.

<h2>Actualizaciones de idioma</h2>


A continuación, desglosamos las novedades según el idioma. 

**Python**

•	Compatibilidad con el marco Django con reglas básicas que cubren errores de código.

•	Detección de contraseñas codificadas cuando las API usan 'contraseñas' como parámetros.

•	Más reglas para la detección de patrones complejos de expresiones regulares y reglas sobre las mejores prácticas para usar sugerencias de tipo en Python.

•	Nuevas reglas para operaciones aritméticas básicas (por ejemplo, IndexError, DivByZero, campo, operadores mod). 

**Java** 

•	Soporte para Java 20. 

•	Tres nuevas reglas que cubren el método Singleton, Monster Class, Brain para permitir a los desarrolladores escribir código Java bien diseñado y fácil de mantener.

•	Nuevas reglas que verifican operaciones aritméticas básicas (por ejemplo, IndexError, DivByZero, operadores).

**JavaScript/Mecanografiado** 

•	Compatibilidad con TypeScript 5. 

•	22 nuevas reglas para las funciones incorporadas de TypeScript y JavaScript estándar.

•	Detección mejorada de proyectos de TypeScript kotlin.

•	Reglas de redundancia para aumentar la legibilidad y la fiabilidad del código. 

**Kotlin** 

•	Reglas sobre mejores prácticas para escribir código idiomático de Kotlin.

•	Compatibilidad con el análisis de proyectos multiplataforma (KMP) de Kotlin para el desarrollo de código multiplataforma.

**C#** 

•	Mejoras en el seguimiento nulo y la detección de desbordamientos de cálculo, particularmente en C# 9-11.

•	10 nuevas reglas para un procesamiento más eficiente. 

**TerraForm y DockerFiles** 

•	Soporte para importar análisis 'tflint' y 'HadoLint' en SonarQube.


Y para terminar, compartimos contigo este video de Sonar donde resumen las principales novedades de SonarQube 10.1:

<div class="col-md-6">
        <iframe width="660" height="415" src="https://www.youtube.com/embed/nvwwIurQ6ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

