---
layout: post
title: 'Atlassian lanza la integración de Rovo y ChatGPT'
description: Descubre cómo conectar ChatGPT y Rovo para potenciar tus flujos de trabajo en Jira y Confluence.
date: '2025-12-03T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias

cover: /img/posts/2025-12-03-integracion-atlassian-rovo-chatgpt.png

---

A principios de este año, Atlassian lanzó en versión beta su **Atlassian Rovo Model Context Protocol (MCP) Server**. Tras escuchar a sus socios sobre las prioridades de los usuarios, quedó evidente que **Jira y Confluence eran las integraciones más demandadas**. Por ello, tras este lanzamiento y la investigación posterior, Atlassian anuncia ahora el Atlassian Rovo MCP Connector **para ChatGPT**.

Esta integración permite a los usuarios **aprovechar Jira y Confluence como fuentes en tiempo real**, directamente dentro de ChatGPT. Ahora puedes resumir actualizaciones, destacar información relevante y tomar decisiones basadas en los datos de tu organización, todo sin cambiar de pestaña.

<h2>Qué puedes hacer con Rovo MCP y ChatGPT</h2>

Con esta integración, las posibilidades son amplias y realmente prácticas:

- **Resumir elementos de trabajo** de Jira o páginas de Confluence al instante dentro de ChatGPT. <br>

- Profundizar en la información utilizando las **capacidades de razonamiento** e investigación de ChatGPT. <br>

- **Crear issues en Jira directamente desde ChatGPT**, gracias al soporte de writeback. <br>

- **Automatizar acciones multi-paso**, como generar o actualizar issues de forma masiva. <br>

- Enriquecer contenido de Jira con **contexto extraído de múltiples fuentes** accesibles desde ChatGPT. <br>

Esta integración de Atlassian Rovo MCP y ChatGPT es accesible para **todos los perfiles dentro de la empresa**. Por ejemplo, si trabajas en **operaciones**, puedes empezar el día con un resumen generado automáticamente. Para **marketing**, los agentes pueden monitorizar tareas, resumir su estado y sugerir próximos pasos basados en lo que esté en curso, en riesgo o bloqueado. Incluso para el área de soporte, los agentes pueden clasificar nuevos tickets, sugerir respuestas según casos previos y crear automáticamente issues en Jira para bugs.

<video width="100%" controls autoplay loop muted>
  <source src="https://atlassianblog.wpengine.com/wp-content/uploads/2025/12/chatgpt-mcp-gif_final.mp4" type="video/mp4">
</video>

<h2>Cómo conectar ChatGPT con Atlassian Rovo MCP</h2>

A continuación, te explico **cómo habilitar la integración de Atlassian Rovo MCP con ChatGPT**, aunque actualmente solo se puede hacer a través del modo desarrollador en ChatGPT, disponible en los planes Business y Enterprise.

Antes de empezar, asegúrate de contar con:

- Un sitio de Atlassian Cloud con Jira o Confluence. <br>

- Una cuenta de ChatGPT con acceso a modo desarrollador. <br>

- Un navegador moderno para completar el flujo de autenticación. <br>

<h3>Paso 1: Habilitar el modo desarrollador en ChatGPT</h3>

- Abre ChatGPT en tu navegador. <br>

- Ve a Configuración → Modo desarrollador. <br>

- Activa Habilitar modo desarrollador. <br>

Con esto, podrás crear y gestionar conectores personalizados, incluyendo el Atlassian Rovo MCP Server. Un aviso: este modo permite integrar conectores experimentales o de terceros, así que úsalos con precaución, especialmente en entornos de producción.

<h3>Paso 2: Añadir el conector Atlassian Rovo MCP Server</h3>

- Ve a Explorar GPTs (Explore GPTs) en ChatGPT. <br>

- Selecciona Crear un nuevo conector (disponible cuando el modo desarrollador está activado). <br>

Introduce los siguientes detalles:

- Nombre del conector: Atlassian Rovo MCP <br>

- URL base: https://mcp.atlassian.com/v1/sse  <br>

- Tipo de autenticación: OAuth <br>

- Sigue las indicaciones para autorizar a ChatGPT a acceder a tu servidor MCP. <br>

<h3>Paso 3: Configurar el conector en ChatGPT </h3>

Tras completar la autorización OAuth:

- Selecciona Modo desarrollador → Atlassian Rovo MCP de tus conectores disponibles. <br>

- Elige los productos de Atlassian que quieres que ChatGPT acceda (Confluence, Jira, Compass). <br>

- Guarda la configuración. <br>

Paso 4: Probar la integración

- Abre un chat nuevo en ChatGPT y haz preguntas como: "Resume la última página de Confluence sobre nuestra planificación del Q4". <br>

Si todo está configurado correctamente, ChatGPT responderá usando los datos de tu espacio de trabajo Atlassian.

Con esta integración, Atlassian da un paso más hacia flujos de trabajo inteligentes y asistidos por IA. Conectar ChatGPT con Rovo MCP Server no solo facilita la gestión de proyectos, sino que también mejora la colaboración y permite que los equipos se centren en lo que realmente importa.