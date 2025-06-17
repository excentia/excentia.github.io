---
layout: post
title: 'SonarQube Connector for Jira v2.28'
description: ¡Ahora con creación de asuntos del CWE Top 25, visualización del nombre del Quality Gate y visualización de los tags!

date: '2023-05-23T08:00:00Z'
author: Juanvi Bolufer
categories:

- sonarqube
- calidad
- devops
- atlassian

cover: /img/posts/2023-05-26-jiracloud-sonarqube-connector-2.28-cover.png

---

¡La nueva versión 2.28 del SonarQube Connector for Jira ha llegado!

En esta nueva versión, hemos incluido la posibilidad de crear asuntos de Jira desde el reporte de CWE Top 25, añadido el nombre del Quality Gate y los tags del proyecto

<img width="100%" src="/img/posts/2023-05-26-jiracloud-sonarqube-connector-2.28-cover.png">

Los asuntos se crearán incluyendo en el nombre la posición del ranking que ocupan, el nombre de la regla incumplida y el CWE incumplido. 
Dentro podrás ver la descripción de la regla incumplida y un link externo que apunta a las issues asociadas para que puedas visitar SonarQube/SonarCloud y consultarlas.

<img width="100%" src="/img/posts/2023-05-26-jiracloud-sonarqube-connector-2.28-issue-description-and-link.png">

Los nombres de los Quality Gate de los proyectos se pueden ver en la parte inferior izquierda de las tarjetas:

<img width="100%" src="/img/posts/2023-05-26-jiracloud-sonarqube-connector-2.28-quality-gate-name.png">

Pero si utilizas SonarCloud tendrás que configurar la organización desde la configuración del proyecto de Jira o desde la configuración global con el nuevo parámetro que hemos añadido para poder visualizarlo:

<img width="100%" src="/img/posts/2023-05-26-jiracloud-sonarqube-connector-2.28-organization-param.png">

Y por último las etiquetas que tengan los proyectos de SonarQube/SonarCloud puedas verlas de un solo vistazo en la parte inferior derecha de las tarjetas.

<img width="100%" src="/img/posts/2023-05-26-jiracloud-sonarqube-connector-2.28-tags.png">

La nueva versión ya está disponible en la página del marketplace de Atlassian

¡[Descárgala](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview) hoy y mejora tu integración entre Jira y SonarQube/SonarCloud!

No dudes en [contactarnos](/contacto) para compartir tu opinión

¡Muchas gracias!
