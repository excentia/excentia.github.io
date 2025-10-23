---
layout: post
title: 'Fin del soporte para Connect: Todo lo que debes saber'
description: Descubre todo sobre el fin del soporte de Connect de Atlassian, las fases y lo que tienes que hacer. 
date: '2025-09-17T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2025-09-17-fin-soporte-connect.png

---

A principios de año, Atlassian anunció su **plan para finalizar el soporte de Connect** de manera gradual, un proceso que se desarrollará en tres fases. Desde entonces, la compañía ha hablado con cientos de desarrolladores y analizado los datos de encuestas para definir un cronograma y los requisitos previos de cada fase. Además, se han identificado **ciertos módulos y funcionalidades de Connect** que no se replicarán en Forge, debido a su **uso limitado o incompatibilidad** con el modelo de seguridad de Forge. Ahora estamos en la Fase 2 y aquí te vamos a contar todo lo que debes saber. 

<h2>Fase 1: No se permitirán nuevas apps Connect en el Marketplace</h2>

- Inicio del periodo de aviso: **17 de marzo de 2025**

- Inicio de la aplicación: **17 de septiembre de 2025**

Todas las nuevas aplicaciones que se han publicado en el Marketplace deberán haberse creado en Forge y no podrán contener módulos Connect. Las aplicaciones Connect existentes no habrán sido afectadas en esta etapa. Atlassian se compromete a mantener la transparencia y el diálogo, permitiendo que los desarrolladores sigan el progreso a través del roadmap de equivalencia de Connect y consulten solicitudes existentes en el proyecto FRGE.

<h2>Fase 2: No se permitirán nuevas actualizaciones mediante cambios en el descriptor Connect</h2>

- Inicio del periodo de aviso: **septiembre de 2025**

- Inicio de la aplicación: **marzo de 2026**

En esta fase, las aplicaciones con un descriptor Connect **ya no podrán actualizarse**. Esto facilitará la migración de apps activamente desarrolladas a Forge.

Las apps que ya **utilicen módulos Connect** podrán seguir recibiendo actualizaciones si han adoptado el manifiesto de Forge.

La instalación de nuevas **aplicaciones privadas Connect** a través de Connected Apps **dejará de estar disponible**. El desarrollo privado deberá trasladarse a Forge.

<h2>Fase 3: Connect entra en fin de soporte</h2>

Inicio del periodo de aviso: **Q4 2025**

Inicio de la aplicación: **Q4 2026**

En la última fase, Connect estará en estado de **fin de soporte**, lo que significa que las aplicaciones podrán seguir usando módulos Connect **bajo su propio riesgo**. No se introducirán nuevas funcionalidades y solo se corregirán **errores críticos o de seguridad**. Los tiempos de respuesta para consultas sobre Connect serán más largos y las prioridades se enfocarán en la plataforma Forge.

Aunque los clientes con aplicaciones Connect instaladas no perderán acceso, este será un **estado no recomendado**, y no se podrán entregar nuevas versiones de estas aplicaciones. A medida que las aplicaciones de Atlassian evolucionen, los puntos de **integración Connect** podrían volverse incompatibles y pasar a estar disponibles únicamente en Forge.

<h3>Qué significa “fin de soporte” para Connect</h3>

Connect incluye capacidades como **JWT, descriptores, módulos (web items, web panels, macros) y extensibilidad a través de APIs y JavaScript**. El fin de soporte implica:

- No habrá nuevas actualizaciones ni funcionalidades.

- Se atenderán solo errores críticos o de seguridad.

- El soporte de Forge tendrá prioridad sobre consultas de Connect.

En la práctica, se recomienda a los desarrolladores migrar a Forge para garantizar compatibilidad y acceso a soporte completo.

<h3>Qué desaparece de Forge</h3>

Aunque Forge y Connect permiten extender aplicaciones de Atlassian, algunos módulos de Connect no se trasladarán a Forge, ya sea porque su uso es reducido o no se ajustan al modelo de seguridad.

Si alguna de estas capacidades es crítica para tu aplicación, puedes:

- Consultar <a href="https://developer.atlassian.com/platform/adopting-forge-from-connect/connect-forge-equivalences/connect-forge-capabilities-notavailable/" target="_blank" rel="nofollow">a través de este enlace</a> los módulos que ya no estarán en Forge.  

- Revisar los módulos <a href="https://developer.atlassian.com/platform/adopting-forge-from-connect/connect-forge-equivalences/connect-forge-capabilities-available/" target="_blank" rel="nofollow">en este enlace</a> que tienen equivalencias.

Si tienes dudas sobre cómo afectará el **fin de soporte de Connect** a tus aplicaciones o necesitas asesoramiento para planificar la migración a Forge, no dudes en ponerte en [contacto](/contacto) con nosotros. Nuestro equipo de expertos en Atlassian estará encantado de ayudarte a encontrar la mejor estrategia y asegurarse de que tus aplicaciones sigan funcionando de manera óptima en la nueva plataforma.