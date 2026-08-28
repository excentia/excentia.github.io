---
layout: post
title: 'Sonar lanza SonarQube Hunter Agent para detectar vulnerabilidades con IA'
description: SonarQube Hunter Agent ya está disponible en SonarQube Cloud para detectar vulnerabilidades que el análisis SAST tradicional no encuentra.
date: '2026-08-27T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-08-27-que-es-sonarqube-hunter-agent.png

---

Sonar ha anunciado la disponibilidad general de **SonarQube Hunter Agent**, un agente de seguridad basado en inteligencia artificial diseñado para detectar vulnerabilidades que el análisis tradicional basado en patrones no está concebido para encontrar.

La propuesta de Hunter Agent parte de una idea sencilla. No todos los problemas de seguridad pueden detectarse buscando patrones concretos en el código. Algunas vulnerabilidades requieren **comprender cómo funciona una aplicación**, cómo circulan los datos y cómo se gestiona la identidad dentro de un sistema.

<h2>¿Qué es SonarQube Hunter Agent?</h2>

SonarQube Hunter Agent **es un agente de seguridad basado en IA** que analiza el código completo de un proyecto para **identificar vulnerabilidades que requieren razonamiento** y comprensión del funcionamiento de la aplicación.

El agente se centra en tres categorías de **problemas especialmente relevantes**:

- Controles de acceso incorrectos
- Vulnerabilidades en la lógica de negocio
- Problemas relacionados con la autenticación y la gestión de sesiones

Se trata de vulnerabilidades que pueden **pasar desapercibidas** para los sistemas de análisis que se basan principalmente en la identificación de patrones.

<h2>Cómo funciona SonarQube Hunter Agent</h2>

Hunter Agent trabaja de forma similar a un investigador de seguridad humano. En lugar de limitarse a buscar determinadas estructuras en el código, **rastrea cómo se mueven el código**, los datos y la identidad a través del sistema.

A partir de este análisis, el agente investiga **cada posible problema** y lo verifica antes de presentarlo a los desarrolladores.

Este proceso de investigación y verificación es especialmente importante para que los equipos puedan centrarse en problemas de seguridad que realmente requieren su atención.

Los hallazgos verificados **aparecen directamente en el flujo de trabajo de SonarQube**, junto al resto de incidencias del equipo. De esta forma, los equipos de desarrollo y seguridad pueden clasificar, asignar y realizar el seguimiento de los problemas desde el mismo entorno que ya utilizan.

No es necesario incorporar una herramienta independiente ni cambiar de contexto para gestionar los hallazgos.

<h2>Hunter Agent complementa el análisis SAST de SonarQube</h2>

SonarQube Hunter Agent **no está diseñado para sustituir** al análisis SAST de SonarQube, sino para complementarlo. El [SAST](/sonarqube-herramienta-sast) permite detectar problemas relacionados con la forma en la que está escrito el código. Hunter Agent aborda otro tipo de problemas, relacionados con lo que el código está diseñado para hacer.

Esta diferencia permite cubrir un punto ciego del análisis tradicional. Mientras el SAST identifica determinados fallos a partir del código y sus patrones, Hunter Agent analiza el comportamiento y la lógica para **detectar vulnerabilidades** que requieren un nivel de razonamiento diferente.

<h2>Disponibilidad de SonarQube Hunter Agent</h2>

SonarQube Hunter Agent está disponible de [forma general](https://www.sonarsource.com/products/sonarqube/hunter-agent/) desde hoy **para SonarQube Cloud**. La compatibilidad con SonarQube Server llegará próximamente.