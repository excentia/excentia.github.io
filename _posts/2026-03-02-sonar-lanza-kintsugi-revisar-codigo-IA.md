---
layout: post
title: 'Sonar lanza Kintsugi, el experimento para revisar código generado por IA'
description: Kintsugi de Sonar integra agentes CLI y SonarQube para revisar y controlar código generado por IA con seguridad y eficiencia.
date: '2026-03-02T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-03-02-sonar-lanza-kintsugi-revisar-codigo-IA.png

---

En la Comunidad de Sonar se está cocinando algo interesante. Se llama **Kintsugi**, un experimento que busca resolver una de las grandes preguntas del desarrollo asistido por IA: ¿Cómo gestionamos y revisamos con confianza el código generado por agentes como Claude Code sin perder calidad, seguridad y control? La respuesta de Sonar es clara: un Entorno de Desarrollo Agéntico (ADE) pensado no para escribir código, sino para orquestar agentes y revisar su trabajo.

<h2>¿Qué es Kintsugi?</h2>

Kintsugi es un **ADE (Agentic Development Environment)** que se ejecuta junto a **tus agentes CLI actuales** y añade capacidades visuales de creación, iteración y coordinación. A diferencia de un IDE tradicional, aquí el foco no está en teclear línea a línea, sino en:

- Supervisar sesiones de IA.

- Revisar planes generados por agentes.

- Solicitar cambios.

- Garantizar calidad y seguridad con análisis profundo.

Sonar ha lanzado este experimento para potenciar **agentes CLI como Claude Code, Gemini CLI o Codex**, no para sustituirlos. Eso sí, en esta fase inicial **solo es compatible con Claude Code**.

<h2>¿Por qué nace Kintsugi?</h2>

Los **agentes CLI como Claude Code** son potentes. Pueden generar grandes bloques de código en segundos.Pero revisar ese código con rigor, mantener estándares de calidad, evitar vulnerabilidades y asegurar coherencia arquitectónica requiere tiempo y atención.

Muchos usuarios avanzados construyen sus propios mecanismos de control. Kintsugi hace algo diferente, los construye por ti.

<h2>Funcionalidades clave de Kintsugi</h2>

- **Desarrollo multihilo**: Permite gestionar múltiples sesiones y tareas de IA en paralelo sin perder el contexto. Incluye una cola visual que deja claro qué requiere tu atención en cada momento. Ideal para equipos que ya trabajan con varios prompts, ramas o tareas generadas por IA y necesitan orden.

- **Revisión de planes**: Kintsugi permite revisar planes generados por IA, dejar comentarios e iterar sobre ellos mediante una interfaz diseñada para revisión humana, no para flujos de texto en bruto. Es una diferencia relevante frente al uso puro de terminal: aquí la revisión es estructurada.

- **Solicitud de cambios como en un PR**: Puedes revisar el código generado por IA como si fuera un Pull Request humano (dejar comentarios, solicitar cambios e iterar hasta que quede alineado con tus estándares)

- **Trabaja donde prefieras**: Puedes trabajar en la terminal, en tu IDE o dentro de la propia aplicación.La app rastrea los procesos de Claude independientemente de dónde se ejecuten. <br>

- **Guardrails impulsados por Sonar**: Kintsugi integra el análisis profundo de Sonar en el flujo agéntico. Se integra con SonarQube para garantizar que cada línea de código generada por IA cumpla tus estándares de calidad y seguridad.

<h2>Cómo participar en el experimento</h2>

Kintsugi es un experimento **por tiempo limitado y actualmente**:

- Es un prototipo exclusivo para macOS.

- Se utiliza en trabajo real con agentes CLI (Claude Code en esta fase).

- Requiere completar un breve formulario de feedback. (Es el que encontrarás al final de <a href="https://events.sonarsource.com/kintsugi/" target="_blank" rel="nofollow">esta página</a>).

- Opcionalmente, incluye una conversación con el equipo de Sonar.

Sonar busca usuarios de Claude Code que quieran probar Kintsugi y compartir su experiencia, puntos de dolor e ideas.

<h2>Gestión de datos</h2>

Kintsugi es una aplicación de escritorio local. Aquí te dejamos algunos comentarios con respecto a la gestión y privacidad de los datos. 

- No envía tu código fuente a los servidores de Sonar.

- Claude Code se comunica con sus propios proveedores.

- Se recopilan datos de uso anónimos para mejorar la herramienta.

- Puedes desactivar esa recopilación en cualquier momento desde la configuración.


<h2>Requisitos del sistema</h2>

Actualmente, Kintsugi:

- Solo es compatible con macOS

- Requiere suscripción a Claude Code

- Necesita tener instaladas las siguientes herramientas:

- Claude Code 2.0.57 o superior

- Git

- Node.js

- Java 17 o superior

Ahora es el momento de probar Kintsugi, aportar tu feedback y participar en la construcción de una herramienta pensada para equipos que no quieren elegir entre velocidad e ingeniería sólida. Recuerda que, como **Gold Partner de Sonar**, podemos ayudarte con tu instancia. Si quieres ponerte en contacto con nuestro equipo, puedes hacerlo a través del siguiente [enlace](/contacto).