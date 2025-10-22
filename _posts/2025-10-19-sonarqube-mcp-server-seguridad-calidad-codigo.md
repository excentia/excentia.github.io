---
layout: post
title: 'Lanzamiento de SonarQube MCP Server para garantizar la calidad del código generado por IA'
description: Descubre cómo SonarQube MCP Server conecta tus agentes de IA con SonarQube para analizar y asegurar la calidad del código.
date: '2025-10-19T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-10-19-sonarqube-mcp-server-seguridad-calidad-codigo.png

---

Cuando el volumen de código se **duplica, triplica o crece de forma exponencial**, garantizar la calidad y seguridad del código se vuelve todo un desafío. Es por este motivo que Sonar ha lanzado **SonarQube MCP Server**, el Servidor de Protocolo de Contexto de Modelo (MCP) diseñado **para cerrar la brecha entre la productividad ofrecida por las herramientas de codificación de IA** y la excelencia en calidad de software que SonarQube garantiza.

<h2>¿Qué es SonarQube MCP Server?</h2>

SonarQube MCP Server **es un servidor que se ejecuta localmente** y actúa **como puente** entre tus agentes de codificación de IA y SonarQube Server o SonarQube Cloud. Su función principal es **permitir que los agentes de IA analicen**, gestionen y comprendan la calidad del código en tiempo real, directamente desde el IDE o la CLI, sin alternar entre herramientas. Al actuar como un traductor universal, el Servidor MCP estandariza la comunicación, permitiendo que las herramientas de IA analicen un fragmento de código en busca de errores o verifiquen un Quality Gate.

Aquí te dejamos un **esquema** para que comprendas el concepto de SonarQube MCP Server

<img src="/img/posts/sonarqube-mpc-server-funcionalidad.png" alt="Cómo funciona SonarQube MCP Server" width="80%">

<h2>Casos de uso de SonarQube MCP Server</h2>

El Servidor MCP transforma a tu agente de IA de un simple generador de código en un "copiloto completo de calidad de software", tal y como indica Sonar en su comunicado. Entre sus aplicaciones destacan:

- **Gestión de calidad del código**: El agente de IA puede filtrar problemas por gravedad o estado, y marcar falsos positivos. <br>

- **Análisis de código bajo demanda**: Solicita al agente de IA que evalúe fragmentos de código antes del commit, obteniendo métricas inmediatas sobre seguridad y calidad. <br>

- **Control del estado del proyecto**: Conoce al instante si un proyecto cumple con los estándares de calidad para su lanzamiento. <br>

- **Análisis de composición de software (SCA)**: Si utilizas [SonarQube Advanced Security](/aumenta-seguridad-codigo-sonarqube-advanced-security), el servidor se puede usar para verificar si un proyecto tiene problemas de dependencia de SCA. <br>

<h2>Integraciones y disponibilidad</h2>

El Servidor MCP de SonarQube es compatible con un amplio ecosistema de asistentes de IA, CLI y editores de código, incluyendo:

- Claude, Codex CLI, Cursor, Devin, Windsurf, Gemini CLI, GitHub Copilot (IDE y CLI), Amazon Q Developer, Kiro AI y Zed. <br>

- Disponible en marketplaces MCP como Docker MCP Hub, Anthropic MCP Market y MCP.so. <br>

Estas integraciones permiten que tu flujo de trabajo de desarrollo asistido por IA mantenga siempre los estándares de calidad y seguridad de SonarQube, sin fricciones.

<h3>Primeros pasos con SonarQube MCP Server</h3>

El Servidor MCP es gratuito, de código abierto y fácil de desplegar:

- Ejecutable vía Docker o Jar con Java.

- Compatible con SonarQube Server y SonarQube Cloud.

Los pasos que debes seguir son los siguientes: 

- Explora el <a href="https://github.com/SonarSource/sonarqube-mcp-server" target="_blank" rel="nofollow">código en GitHub</a>. <br>

- Revisa la <a href="https://docs.sonarsource.com/sonarqube-for-vs-code/ai-capabilities/sonarqube-mcp-server" target="_blank" rel="nofollow">documentación de producto</a>. <br>

- Obtén <a href="https://hub.docker.com/r/mcp/sonarqube" target="_blank" rel="nofollow">aquí la imagen</a> de Docker. <br>


<h3>FAQ – Preguntas Frecuentes sobre SonarQube MCP Server</h3>

**¿Qué es exactamente SonarQube MCP Server?**
Es un servidor que conecta agentes de codificación asistida por IA con SonarQube (Cloud o Server), permitiendo análisis de calidad y seguridad en tiempo real dentro del IDE o la CLI.

**¿Necesito SonarQube Cloud o SonarQube Server para usar MCP?**
Sí, SonarQube MCP Server requiere una instancia de SonarQube Cloud o Server para funcionar.

**¿Es compatible con todos los agentes de IA?**
Actualmente soporta agentes populares como Claude, GitHub Copilot, Codex CLI, Devin, Gemini CLI, Windsurf, Zed, Kiro AI y Amazon Q Developer.

**¿Puedo analizar código antes de hacer commit?**
Sí, MCP permite análisis de código bajo demanda para detectar problemas de calidad y seguridad incluso antes de realizar commit.

Si quieres integrar **SonarQube MCP Server** en tu desarrollo asistido por IA y asegurar que tu código cumpla siempre con los estándares de calidad y seguridad, nuestro equipo puede ayudarte a implementarlo rápidamente. No dudes en ponerte en [contacto](/contacto) con nosotros para resolver tus dudas con SonarQube.