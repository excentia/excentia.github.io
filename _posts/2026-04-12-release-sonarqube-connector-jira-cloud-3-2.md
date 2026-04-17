---
layout: post
title: '¡Ya está aquí la nueva versión de SonarQube Connector for Jira'
description: Descubre las novedades del conector de Jira y SonarQube con búsqueda inteligente, comentarios automáticos y modo oscuro para mejorar tu flujo en Jira
author: Belén Casanovas
categories:

- atlassian
- noticias

cover: /img/posts/2026-04-12-release-sonarqube-connector-jira-cloud-3-2.png

---

¡Ya está disponible la nueva versión de **SonarQube Connector for Jira Cloud**! Esta release trae tres nuevas funcionalidades que aumentan la integración **entre Jira y SonarQube**, reducen los pasos de configuración y mejoras en la visualización. A continuación, te explico cuáles son estas novedades. 

- **Búsqueda inteligente**: Ahora puedes buscar directamente desde la configuración del conector los proyectos y tags con una simple palabra y sin salir de la interfaz de Jira. Antes tenías que copiar y pegar la key en SonarQube, ir a la configuración de la app y pegarla. Ahora evitas estos y puedes buscar directamente a través del selector. Aquí tienes una imagen para que encuentres fácilmente esta funcionalidad: 

<img width="100%" src="/img/atlassian-addons/sonarqube-select-busqueda-inteligente.png" alt="Búsqueda inteligente">
<br>

- **Comentarios automáticos**: Una de las mejoras más interesantes es la nueva capacidad de añadir comentarios automáticos en las issues de SonarQube cuando se crea un ticket en Jira. Para hacer uso de esta funcionalidad, hay que activarla desde la Configuración de la aplicación. A continuación te explico paso a paso cómo activarla. 

1 - Accede a *Space Settings* del proyecto en el que quieras activarlo. <br>
2 - En el listado de la izquierda, haz clic en *Apps* y *SonarQube*. <br>
3 - Selecciona la pestaña *Issue Creation* y al final tendrás que activar el check *Add Jira issue key as comment in SonarQube issues*. <br>
4 - Al activarlo podrás dejar el comentario por defecto de [Jira] o añadir tu propio comentario. <br>

<img width="100%" src="/img/atlassian-addons/sonarqube-connector-jira-add-Jira-issue-key-comment-sonarQube-issues.png" alt="Add Jira issue key comment">
<br>


Cuando haces clic
 para crear la issue, se añade automáticamente un comentario con un prefijo (configurado por el usuario o Jira por defecto) diciendo que esa issue ya ha sido creada en Jira con un enlace al propio ticket.

- **Modo oscuro**: Antes, si un usuario tenía activado el modo oscuro en Jira, los reportes del conector aparecían en blanco, generando un contraste agresivo. Con esta versión, la interfaz del conector se adapta automáticamente al modo oscuro, manteniendo la coherencia visual y mejorando la experiencia de uso.

Si todavía no has probado esta app, puedes instalarla directamente desde el [Marketplace de Atlassian](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira) en tu instancia de Jira Cloud.

Y si tienes cualquier duda o necesitas soporte, nuestro [equipo de soporte](/contacto) está disponible para ayudarte.