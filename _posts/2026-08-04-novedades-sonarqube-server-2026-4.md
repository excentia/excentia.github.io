---
layout: post
title: 'SonarQube Server 2026.4: todas las novedades de la nueva actualización'
description: Descubre las novedades de SonarQube Server 2026.4 con Sonar way for Agentic AI, Architecture Management, mejoras de rendimiento y nuevas reglas.
date: '2026-08-04T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-08-04-novedades-sonarqube-server-2026-4.png

---

Sonar ha presentado SonarQube Server 2026.4, una actualización centrada en **reforzar la verificación del código** generado mediante inteligencia artificial. Esta nueva versión incorpora una Quality Gate específico para desarrollo asistido por agentes, añade **Architecture Management a SonarQube Server**, mejora la visibilidad sobre el **cumplimiento de las Quality Gates** e introduce importantes mejoras de rendimiento, nuevas reglas y una configuración más sencilla para GitHub App.

<h2>¿Qué incluye SonarQube Server 2026.4?</h2>

<ul>
    <li><a href="#sonar-way-agentic-ai">¿Qué es Sonar way for Agentic AI?</a></li>
    <li><a href="#architecture-management">Architecture Management sin coste adicional</a></li>
    <li><a href="#panel-versiones">Nuevo panel de evolución del número de versiones publicadas</a></li>
    <li><a href="#mejoras-rendimiento">¿Qué mejoras de rendimiento incorpora SonarQube Server 2026.4?</a></li>
    <li><a href="#github-app">Nueva configuración de GitHub App</a></li>
    <li><a href="#nuevas-reglas">Nuevas reglas de análisis</a></li>
</ul>

<h2 id="sonar-way-agentic-ai">¿Qué es Sonar way for Agentic AI?</h2>

**Sonar way for Agentic AI** es un nuevo Quality Gate diseñado específicamente para **verificar el código generado mediante inteligencia artificial** y **agentes de desarrollo**. El código generado por agentes presenta un **perfil de riesgo diferente al del código escrito por personas**. Aunque los agentes rara vez escriben código con problemas de estilo, sí pueden introducir con mayor frecuencia nuevos riesgos relacionados con dependencias, vulnerabilidades de seguridad y problemas de fiabilidad. Esta Quality Gate se ha ajustado a esa realidad porque aplica **criterios más estrictos** en materia de seguridad, fiabilidad y nuevas dependencias, y es más permisiva con problemas menores de mantenibilidad que no representan un riesgo real. 

También incorpora nuevas **condiciones relacionadas con la cadena de suministro**, diseñadas específicamente para hacer frente a amenazas propias del desarrollo asistido por agentes, como la incorporación automática de paquetes con errores tipográficos (typosquatted). Además, esta versión amplía la promoción dentro del propio producto de los perfiles de **calidad Agentic AI para JavaScript, TypeScript, Python y Java**, facilitando que los equipos descubran y adopten conjuntos de reglas centrados en los riesgos que la IA introduce realmente en el código. La detección de problemas de seguridad relacionados con la IA también se amplía con una **nueva familia de reglas específicas** para la seguridad en entornos agentic, que cubren superficies de ataque propias del código de línea de comandos (CLI), riesgos adicionales asociados a MCP y fugas de datos en mecanismos de inteligencia artificial, detectando amenazas que aparecen específicamente cuando son los agentes quienes escriben el código.

<h2 id="architecture-management">Architecture Management sin coste adicional</h2>

Los **arquitectos de software** ahora pueden visualizar la **arquitectura actual**, definir qué componentes pueden depender entre sí y permitir que **SonarQube detecte automáticamente las infracciones**. Con ello se elimina una diferencia funcional que hasta ahora solo existía en [SonarQube Cloud](/sonarcloud) y se ofrece a los equipos una forma de controlar la deriva arquitectónica antes de que se convierta en una deuda técnica costosa.

<h2 id="panel-versiones">Nuevo panel de evolución del número de versiones publicadas</h2>

Para ayudar a los equipos a comprobar si las [Quality Gates funcionan](/que-es-un-quality-gate-sonarqube) en la práctica, se incorpora un **nuevo panel que muestra la evolución del número de versiones publicadas** desde la rama principal que superan o no un Quality Gate. Además también señala las "risky releases", aquellas versiones que se han desplegado aunque las comprobaciones hubieran fallado. Los responsables de desarrollo disponen así de **datos objetivos en lugar de percepciones**, mientras que los responsables de ingeniería cuentan con una forma de medir el riesgo organizativo que supone tratar las Quality Gates como algo opcional.

<h2 id="mejoras-rendimiento">¿Qué mejoras de rendimiento incorpora SonarQube Server 2026.4?</h2>

Los proyectos con numerosos puntos de entrada y *taint graphs* pueden reducir el tiempo de análisis **hasta en un 90%**. En algunos proyectos Java de gran tamaño, el tiempo de análisis pasa de aproximadamente veinte minutos a menos de un minuto. La cobertura permanece inalterada y no es necesario realizar cambios en la configuración. Además, los hallazgos relacionados con la seguridad, incluidas las vulnerabilidades por inyección y otros problemas de flujo de datos, llegan a los desarrolladores mucho antes durante el proceso de revisión del código. 


<h2 id="github-app">Nueva configuración de GitHub App</h2>

La configuración de la **GitHub App** también se simplifica gracias a un **nuevo asistente guiado** que permite completar la integración **con un solo clic**. Reduce el tiempo de configuración de unos doce minutos a menos de dos y elimina la configuración manual y el riesgo de conceder más permisos de los necesarios. Por último, las acciones **masivas para la clasificación de riesgos** en dependencias completan estas mejoras de eficiencia, alineando los flujos de trabajo del análisis de composición de software con la forma en que ya se gestionan las incidencias habituales del código.

<h2 id="nuevas-reglas">Nuevas reglas de análisis</h2>

La versión se completa con **nuevas reglas capaces de detectar errores** especialmente difíciles de reproducir en la gestión de fechas y horas en Java, compatibilidad completa con el lenguaje Gosu, lo que permite que las organizaciones del sector asegurador que utilizan Guidewire puedan **aprovechar SonarQube por primera vez**, y nuevas referencias de rendimiento que ofrecen a los equipos una definición común de lo que se considera una duración de análisis normal.

SonarQube Server 2026.4 ya está disponible. Si necesitas más información o quieres actualizar puedes ponerte en contacto con nuestro equipo a través de [este formulario](/contacto). Y recuerda, en nuestro videopodcast Quality Gates Live Show vamos comentando todas las releases de SonarQube. Puedes ver los capítulos en <a href="https://www.youtube.com/watch?v=rLkZMmuXjew&list=PLZ5oF-c2V6nPOdVPMflg2T04YAsA2P46m" target="_blank" rel="nofollow noopener">nuestro canal de YouTube</a>.