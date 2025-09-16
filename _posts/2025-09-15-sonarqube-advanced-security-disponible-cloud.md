---
layout: post
title: 'SonarQube Advanced Security ya está disponible en SonarQube Cloud'
description: La solución de análisis SAST y SCA ya está disponible para la versión Cloud. 
date: '2025-09-15T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-09-15-sonarqube-advanced-security-disponible-cloud.png

---

Sonar ha anunciado la **disponibilidad general** de **SonarQube Advanced Security** para **SonarQube Cloud**. Esta nueva funcionalidad, que ya estaba disponible como un módulo adicional en SonarQube Server, permite a los desarrolladores identificar y corregir problemas de calidad y de seguridad de tu propio código, el generado por inteligencia artificial (IA) y dependencias de terceros.

Gracias a esta actualización, las organizaciones ahora cuentan con una solución completamente integrada que combina **análisis SAST avanzado y SCA**.

<h2>Un cambio en la gestión de la seguridad del código</h2>

El desarrollo moderno depende cada vez más de **bibliotecas de terceros y generación de código mediante IA**. Esto genera desafíos para mantener tanto la calidad como la seguridad del código sin ralentizar la entrega de software.

Con [SonarQube Advanced Security](/sonarqube-advanced-security), los equipos pueden concentrarse en los problemas que realmente importan gracias a la confirmación de falsos positivos, contexto sobre la explotabilidad real de vulnerabilidades y recomendaciones prácticas cuando no existe una solución inmediata.

<h2>Qué ofrece SonarQube Advanced Security</h2>

Esta funcionalidad **está disponible** para las ediciones **SonarQube Server (Enterprise y Data Center) y para SonarQube Cloud Enterprise**, y amplía las capacidades de análisis para proteger toda la cadena de suministro de tu software. A continuación, te explico algunas de sus características:

<h3>Análisis SCA (Software Composition Analysis)</h3>

El análisis de dependencias de código abierto permite:

- **Detección de vulnerabilidades**: Identifica las vulnerabilidades conocidas (CVE) registradas en bases de datos públicas (como NVD) tanto en sus dependencias directas (bibliotecas que incluye explícitamente) como en las de terceros (bibliotecas de las que dependen sus dependencias).

- **Cumplimiento de licencias**: Los componentes de código abierto incluyen licencias que determinan cómo se pueden usar. Incumplir estas licencias puede generar importantes problemas legales y de cumplimiento.

- **Generación de SBOM**: Genera automáticamente una Lista de Materiales de Software (SBOM) en formatos estándar como CycloneDX y SPDX.


<h3>SAST avanzado (Static Application Security Testing)</h3>

El <a href="https://www.sonarsource.com/solutions/security/sast/" rel="nofollow" target="_blank"> SAST avanzado de SonarQube</a> aborda un problema diferente, a menudo pasado por alto: las vulnerabilidades que surgen de la interacción entre su código y el código dentro de las bibliotecas de terceros. El SAST avanzado de SonarQube supera esta limitación. Amplía el potente motor de análisis de contaminación de SonarQube para rastrear los flujos de datos que entran y salen del código de bibliotecas de terceros. 

<h2>Beneficios clave para los equipos de desarrollo</h2>


- Plataforma unificada de calidad y seguridad del código.

- Alta precisión y velocidad de análisis, ideal para pipelines CI/CD.

- Integración directa en IDE y revisión automática en pull requests.

- Soporte para cumplimiento normativo con OWASP, PCI DSS, CWE y STIG.

- Remediación guiada y recomendaciones accionables.


Con estas capacidades, los equipos pueden desarrollar software seguro y de calidad de manera más eficiente y con menor riesgo.


<h2>Otras novedades en SonarQube Cloud y Server 2025.3</h2>

En el mes de mayo Sonar lanzó la [versión de SonarQube Server](/sonarqube-server-2025-release-3) que, junto a SonarQube Advanced Security consolidó una actualización esencial para organizaciones que buscan proteger toda su base de código sin perder velocidad ni visibilidad. Te recuerdo aquí algunas de las funcionalidades. 

- Detección de secretos ampliada con más de 400 patrones.

- Soporte para nuevos lenguajes como Go y Kotlin.

- Informes de seguridad alineados con CWE Top 25 2024 y OWASP Top 10 Mobile.


<h2>Preguntas frecuentes sobre SonarQube Advanced Security</h2>

<h3>¿Qué ediciones incluyen Advanced Security?</h3>
SonarQube Advanced Security está disponible para SonarQube Server Enterprise o Data Center Edition 2025.3 y posteriores, y SonarQube Cloud Enterprise

<h3>¿Cómo se gestiona la seguridad de dependencias externas?</h3>
Mediante análisis SCA, que valida riesgos y ofrece recomendaciones verificadas para cada dependencia.

<h3>¿Se integra con pipelines de CI/CD?</h3>
Sí, permite análisis rápidos y precisos sin ralentizar la entrega de software.

<h3>¿Es necesario usar otras herramientas de seguridad?</h3>
No. Todo se gestiona desde SonarQube, eliminando la necesidad de herramientas adicionales y simplificando la gestión de calidad y seguridad del código.

<h2>¿Por qué implementar SonarQube Advanced Security en tu equipo?</h2>

Con **SonarQube Advanced Security Cloud**, puedes proteger toda la cadena de suministro de software mientras mantienes altos estándares de calidad de código. El **análisis SAST** avanzado y el análisis de dependencias permiten a los equipos centrarse en lo realmente importante: entregar software seguro, fiable y eficiente.

Si quieres proteger tu código y optimizar tus procesos de desarrollo en la nube, [contacta con nuestro equipo](/contacto) y descubre cómo implementar **SonarQube Advanced Security** en tu organización.
