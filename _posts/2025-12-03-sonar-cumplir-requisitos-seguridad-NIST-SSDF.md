---
layout: post
title: 'Cómo SonarQube ayuda a cumplir los requisitos de seguridad del NIST SSDF'
description: Descubre cómo SonarQube mejora la seguridad del código y facilita el cumplimiento del marco NIST SSDF.
date: '2025-12-03T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia

cover: /img/posts/2025-12-03-sonar-cumplir-requisitos-seguridad-NIST-SSDF.png

---

Actualmente, el desarrollo de software seguro es más complicado que nunca. Por ello, el **Instituto Nacional de Estándares y Tecnología (NIST)** ha desarrollado el **Secure Software Development Framework (SSDF)** con el objetivo de proporcionar recomendaciones que mitiguen el riesgo de vulnerabilidades de software y ataques de ciberseguridad. Está diseñado para ser adaptable sin vincularse a ninguna metodología concreta, de modo que puedas integrarlo fácilmente en tu ciclo de vida de desarrollo de software (SDLC) y ajustarlo al tamaño, perfil de riesgo y prácticas de seguridad específicas de tu organización.

Este artículo, realizado por <a href="https://www.sonarsource.com/resources/library/nist-ssdf/" target="_blank" rel="nofollow"><strong>Robert Curlee, del equipo de Sonar</strong></a>, analiza cómo las soluciones de análisis estático de código SonarQube Server, SonarQube Cloud y SonarQube for IDE ayudan a las organizaciones a cumplir los requisitos de seguridad de código del NIST SSDF.

<h2>¿Qué es el NIST SSDF?</h2>

Las especificaciones del NIST SSDF tienen como objetivo **reducir el número de vulnerabilidades** en el software publicado, mitigar el impacto potencial de la explotación de vulnerabilidades no detectadas y afrontar las causas raíz para evitar que vuelva a pasar en el futuro.

El marco NIST SSDF 1.1 está organizado en los siguientes cuatro grupos, cada uno centrado en un aspecto específico del riesgo de seguridad durante el desarrollo de software:

- Prepare the Organization (PO) – Preparar la organización. <br>

- Protect the Software (PS) – Proteger el software. <br>

- Produce Well-Secured Software (PW) – Producir software seguro. <br>

- Respond to Vulnerabilities (RV) – Responder a las vulnerabilidades. <br>

Cada grupo contiene **prácticas y tareas** específicas para mejorar la seguridad y la calidad del software. Las [soluciones de Sonar](/sonarsource) son esenciales para estas prácticas, especialmente en el análisis de código, la detección de vulnerabilidades y la mejora continua.

<h3>1. Prepare the Organization (PO) — Preparar la organización</h3>

Este grupo se centra en establecer una cultura de seguridad dentro de la organización y crear un entorno que priorice las prácticas de desarrollo seguro.

**Implement Supporting Toolchains (PO.3)**

**SonarQube Server** se integra perfectamente en las cadenas de soluciones existentes, proporcionando **análisis de código automatizado** e **inspección continua**. Al incorporarlo al pipeline de desarrollo, las organizaciones garantizan que las prácticas de seguridad se apliquen de forma constante a lo largo del SDLC.

**Define and Use Criteria for Software Security Checks (PO.4)**

Una vez definida la postura de seguridad específica, puedes configurar **perfiles de calidad** y configuraciones personalizadas del motor de seguridad de SonarQube Server (disponibles en la edición Enterprise) para que los equipos de desarrollo sigan las políticas específicas de la empresa mientras programan.

Las organizaciones pueden definir [quality gates personalizadas](/que-es-un-quality-gate-sonarqube) y reglas de seguridad en SonarQube Server que se alineen con sus requisitos de seguridad. Estos criterios pueden aplicarse automáticamente, garantizando que el código cumpla los estándares antes de fusionarse o liberarse.

<h3>2. Protect the Software (PS) — Proteger el software</h3>

Este grupo pone el foco en salvaguardar todos los componentes del software para **permitir únicamente el acceso autorizado** y prevenir manipulaciones.

**Protect All Forms of Code from Unauthorized Access and Tampering (PS.1)**

La integración de SonarQube Server con sistemas de control de versiones (VCS) como Git y sus estrictos mecanismos de autenticación aseguran que todos los cambios de código se rastreen y auditen. La configuración de la autenticación de SonarQube Server y la sincronización de permisos a través de las plataformas CI o el IDP evita accesos no autorizados, protege contra modificaciones indebidas y mantiene la integridad del repositorio.

**Provide a Mechanism for Verifying Software Release Integrity (PS.2)**

Los **Quality Gates** permiten definir criterios que deben cumplirse **antes de la liberación del código**, garantizando la integridad del proceso de desarrollo.
SonarQube Server también **genera informes detallados de calidad** y seguridad que pueden utilizarse para verificar la integridad de las versiones. Estos informes ofrecen información sobre posibles bugs, vulnerabilidades y code smells, asegurando que solo se despliegue software bien asegurado.

<h3>3. Produce Well-Secured Software (PW) — Producir software bien asegurado</h3>

Este grupo destaca las actividades necesarias para desarrollar software con un **número mínimo de vulnerabilidades**: principios de diseño seguro, modelado de amenazas, prácticas de codificación segura, revisiones recurrentes y análisis estático.

**Design Software to Meet Security Requirements and Mitigate Security Risks (PW.1)**

El análisis estático de SonarQube Server ayuda, no solo a identificar vulnerabilidades de seguridad, sino también **problemas de calidad del código en etapas tempranas**.

Incluye un **motor SAST con Deeper SAST** y análisis avanzado de propagación (taint analysis) para detectar problemas ocultos derivados de interacciones con **librerías open source**.

La detección de secretos (incluyendo secretos personalizados en Enterprise Edition) evita **filtraciones y reduce la exposición** a accesos ilícitos. Los security hotspots identificados alertan a los equipos de posibles amenazas y refuerzan el cumplimiento de políticas.

**Review the Software Design to Verify Compliance… (PW.2)**

Los **informes detallados y dashboards de SonarQube Server** proporcionan visibilidad sobre calidad y seguridad, facilitando revisiones de diseño y comprobaciones de cumplimiento.

Las **evaluaciones de riesgo** pueden basarse en los informes descargables de seguridad de la Enterprise Edition, alineados con estándares como **OWASP Top 10, OWASP ASVS y CWE Top 25**.

**Reuse Existing, Well-Secured Software (PW.4)**

SonarQube Server **detecta duplicaciones de código**, fomentando la reutilización de componentes existentes y probados.

**Create Source Code by Adhering to Secure Coding Practices (PW.5)**

SonarQube Server admite una amplia gama de **estándares y prácticas de codificación segura**. Aplica estos estándares mediante sus reglas (personalizables) y ofrece feedback accionable para reducir vulnerabilidades.

**Configure Compilation, Interpreter, and Build Processes (PW.6)**

Al integrarse en el **proceso de build**, SonarQube Server garantiza que las comprobaciones de seguridad se realicen en cada etapa, incluyendo análisis SAST temprano para reducir costes de remediación.

**Review/Analyze Code to Identify Vulnerabilities (PW.7)**

Esta es una de las fortalezas principales de SonarQube Server. Su **motor SAST analiza en profundidad buscando vulnerabilidades**, violaciones de estándares y problemas de seguridad, como SQL injection, XSS o desbordamientos. Los informes y dashboards robustos ayudan a verificar el grado de cumplimiento.

<h3>4. Respond to Vulnerabilities (RV) — Responder a las vulnerabilidades</h3>

Este grupo aborda procesos para **identificar, mitigar y remediar vulnerabilidades** descubiertas tras liberar el software.

**Identify and Confirm Vulnerabilities on an Ongoing Basis (RV.1)**

SonarQube Server monitoriza continuamente el código en busca de nuevas vulnerabilidades, aportando feedback en tiempo real. Esto acorta el **ciclo detección–remediación** e integra la seguridad en el flujo de trabajo diario.

**Assess, Prioritize, and Remediate Vulnerabilities (RV.2)**

Los informes priorizan las vulnerabilidades según su **severidad e impacto**, permitiendo centrarse en las más críticas. El sistema también ofrece orientación de remediación para corregirlas eficazmente.

**Analyze Vulnerabilities to Identify Root Causes (RV.3)**

Las **descripciones detalladas de los issues**, la metodología Learn as You Code (LaYC) y las funciones de navegación ayudan a los desarrolladores a comprender y abordar las causas raíz, posibilitando prevenir problemas similares en el futuro.

Y hasta aquí este artículo de Sonar donde hemos podido comprobar que puedes crear **software seguro, fiable y mantenible** con las soluciones integradas de calidad y seguridad de código de Sonar.