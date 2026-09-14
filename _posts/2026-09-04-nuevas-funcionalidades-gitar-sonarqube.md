---
layout: post
title: 'Sonar actualiza Gitar con nuevas funciones de IA, integraciones DevOps y opciones de configuración Enterprise'
description: Sonar amplía Gitar con Bring Your Own Model, nuevas integraciones y más control sobre las revisiones de código
date: '2026-09-04T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-09-04-nuevas-funcionalidades-gitar-sonarqube.png

---

Sonar ha incorporado nuevas funcionalidades a **Gitar**, su solución de [revisión de código basada en IA](/bienvenida-gitar-sonar). Gitar es una solución *AI-native code review* que revisa pull requests, sugiere correcciones y puede aplicarlas y hacer commit en la rama cuando el usuario se lo solicita.

Entre las novedades destacan **Bring Your Own Model**, nuevas integraciones con plataformas CI y herramientas de gestión de trabajo, un repositorio de configuración compartido para toda la organización, integraciones personalizadas mediante endpoints MCP y nuevas opciones para controlar qué ramas se revisan.

<h2>Bring Your Own Model para usuarios Enterprise</h2>

Una de las principales novedades está dirigida a los usuarios Enterprise. Además de poder configurar Gitar para utilizar una clave propia de Anthropic, ahora también es posible utilizar un **rol propio de AWS Bedrock** o un gateway gestionado por la propia organización, como LiteLLM, Portkey u OpenRouter.

Gitar continúa decidiendo qué modelo utilizar para cada tarea. La organización decide desde qué cuenta se ejecuta y en qué región.Esto permite adaptar Gitar a requisitos de residencia de datos o a políticas de *guardrails* ya establecidas por la organización.

Además, la configuración incorpora ahora un botón de **«probar conexión»**, que permite comprobar que todo funciona correctamente.

<h2>Más integraciones para revisiones más completas</h2>

Gitar amplía sus integraciones con herramientas de CI. **Harness, Jenkins y TeamCity** ya pueden conectarse como proveedores de CI. Cuando una compilación falla, Gitar puede recuperar el registro y explicar por qué se ha producido el fallo.

También se amplían las fuentes de elementos de trabajo. **Plane y YouTrack** se incorporan a las integraciones existentes con Jira y Linear.

<h2>Functional Validation amplía sus fuentes</h2>

La funcionalidad **Functional Validation** también amplía su compatibilidad. Esta característica permite a Gitar leer el ticket vinculado, desglosarlo en objetivos y comprobar si el pull request realmente hace lo que se supone que debe hacer.

Ahora Functional Validation funciona con incidencias de **GitHub, GitLab, Azure DevOps, Bitbucket Cloud, YouTrack y Plane**, además de Jira y Linear.

<h2>Una configuración compartida para todos los repositorios</h2>

Gitar permite ahora designar un repositorio como **repositorio de configuración** de una organización. A partir de ahí, el resto de repositorios pueden heredar automáticamente sus *skills*, reglas e instrucciones de revisión. Cada repositorio mantiene la posibilidad de sobrescribir la configuración predeterminada central cuando sea necesario.

Las **skills** son instrucciones versionadas que pueden incluir scripts cuando sea necesario. Estas instrucciones pueden ser invocadas por nombre desde las reglas o los comentarios de los pull requests.

<h2>Las integraciones personalizadas pasan a utilizar endpoints MCP</h2>

Otra de las novedades afecta a las **integraciones personalizadas** de Gitar. Ahora estas integraciones son simplemente la URL de un servidor **MCP**. Para configurarlas, hay que proporcionar a Gitar el endpoint, las cabeceras de autenticación y las herramientas a las que tiene permitido acceder.

De esta forma, Gitar puede utilizar sistemas internos de una organización como parte de una revisión o automatización.

<h2>Más control sobre las ramas que revisa Gitar</h2>

Los nuevos ajustes de ramas **«allowed» y «excluded»** ofrecen un mayor control sobre dónde interviene Gitar. Estas opciones están pensadas para equipos que trabajan con un flujo de ramas apiladas y necesitan indicar a Gitar que no intervenga en las fusiones intermedias, sino únicamente en la fusión final que importa.

<h2>Más plataformas DevOps compatibles</h2>

Gitar también amplía el número de plataformas DevOps compatibles. **Azure DevOps y Bitbucket Cloud** han salido de la fase beta y ya están disponibles de forma general. Por su parte, las versiones *self-hosted* de estas plataformas, **Azure DevOps Server y Bitbucket Data Center**, se encuentran en fase beta.

Además, la edición **Free self-hosted de GitLab** ya está disponible de forma general.

<h2>Gitar amplía sus opciones de configuración e integración</h2>

Las nuevas funcionalidades de Gitar amplían las posibilidades de configuración, integración y control de la solución de revisión de código basada en IA.

Entre las principales novedades se encuentran la posibilidad de utilizar modelos a través de la infraestructura propia de la organización, una configuración compartida entre repositorios, nuevas fuentes de elementos de trabajo, más proveedores de CI y nuevas opciones para controlar las ramas que se revisan.


