---
layout: post
title: 'SonarQube Connector for Jira v2.27'
description: ¡Ahora con inteligencia artificial!

date: '2023-03-30T08:00:00Z'
author: Juanvi Bolufer
categories:
- productos
- atlassian
- apps

cover: /img/posts/2023-03-30-jiracloud-sonarqube-connector-2.27-cover.png

---

Cuando escuchas "Inteligencia Artificial" seguro que lo primero que te viene a la mente es una película de ciencia ficción o algo futurista, pero la verdad que a día de hoy ya es una realidad y por eso no podíamos quedarnos atrás y hemos decido integrarla en nuestro producto gracias a [OpenAI](https://openai.com/).

<div style="display: flex; justify-content: center; margin: 30px;">
    <img src="/img/posts/2023-03-30-awesome.gif" alt="Awesome gif"/>
</div>

Y aunque sabemos que los desarrolladores son muy buenos, siempre existen evidencias de **SonarCloud**&trade; o **SonarQube**&trade; que les cuesta entender o no saben como pueden solucionarla, pues bien, en esta nueva versión vamos a intentar ayudarlos.

<h3>¿Y cómo lo haremos?</h3>
Pues muy sencillo, desde la configuración global o desde la configuración en los proyectos ahora puedes ver el siguiente campo donde puedes configurar un token de la API de [OpenAI](https://openai.com/).

<div style="display: flex; justify-content: center; margin: 30px;">
    <img width="100%" src="/img/posts/2023-03-30-jiracloud-sonarqube-connector-2.27-config-token.png" alt="token-config">
</div>

Una vez configurado de forma completamente automática, se va a generar 1 comentario por evidencia en el asunto creado con una propuesta de solución generada gracias a [OpenAI](https://openai.com/).

Eso si, para no sobrecargar de comentarios los asuntos, hemos limitado a 3 el número de comentarios que se van a generar de forma automática con [OpenAI](https://openai.com/), así que se utilizarán la primera, segunda y/o tercera evidencia para generar las propuestas de solución.

Aquí puedes ver un ejemplo del comentario que se creará:
<div style="display: flex; justify-content: center; margin: 30px;">
    <img width="100%" src="/img/posts/2023-03-30-jiracloud-sonarqube-connector-2.27-comment-example.png" alt="comment-example">
</div>

Como añadido, hemos incluido otro parámetro de configuración para que puedas configurar el máximo de días que lleva un proyecto sin analizar, para que si supera estos días aparezca una advertencia indicando que el proyecto lleva tiempo sin analizarse.

<div style="display: flex; justify-content: center; margin: 30px;">
    <img width="100%" src="/img/posts/2023-03-30-jiracloud-sonarqube-connector-2.27-warning-message.png" alt="warning-message">
</div>

También hemos aprovechado para aplicar mejoras internas y solucionar problemas.

La nueva versión ya está disponible en la página del marketplace de Atlassian

¡[Descárgala](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview) hoy y mejora tu integración entre Jira y SonarQube/SonarCloud con la inteligencia artificial!

No dudes en [contactarnos](/contacto) para compartir tu opinión

¡Muchas gracias!
