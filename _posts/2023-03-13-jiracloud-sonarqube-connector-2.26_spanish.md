---
layout: post
title: 'SonarQube Connector for Jira v2.26'
description: ¡Nuevo reporte ISO 5055!

date: '2023-03-13T08:00:00Z'
author: Juanvi Bolufer
categories:
- productos
- atlassian
- apps

cover: /img/posts/2023-03-13-jiracloud-sonarqube-connector-2.26-breakdown.png

---

¡La nueva versión 2.26 del SonarQube Connector for Jira ha llegado!

En esta nueva versión, hemos incluído un nuevo reporte del estándar de seguridad [ISO 5055](https://www.iso.org/standard/80623.html), lo que mejora aún más la integración de Jira con SonarQube viendo de un primer vistazo las evidencias de SonarQube/SonarCloud que incumplen el estándar.

En la parte superior del reporte puedes visualizar un pequeño resumen de los datos totales con los códigos CWE incumplidos, cumplidos, el total de evidencias y hotspots y el Rating calculado haciendo uso del tipo de evidencias.

<img width="100%" src="/img/posts/2023-03-13-jiracloud-sonarqube-connector-2.26-summary.png">

A este resumen le sigue una tabla con el desglose de CWE fallidos, cumplidos y no computables ordenados por las categorías del estándar.

En primer lugar podemos visualizar los códigos CWE fallidos, con su Rating, la cantidad de evidencias asociadas y los hotspots.

<img width="100%" src="/img/posts/2023-03-13-jiracloud-sonarqube-connector-2.26-breakdown.png">

Seguidos de los CWE que si se cumplen en otra tabla

<img width="100%" src="/img/posts/2023-03-13-jiracloud-sonarqube-connector-2.26-breakdown-passed.png">

Y para finalizar, podrás consultar los CWE no computables de la categoría, estos CWE son aquellos que no están disponibles en la instancia de SonarQube/SonarCloud configurada y por tanto no podemos deducir si el código los cumple o no.

<img width="100%" src="/img/posts/2023-03-13-jiracloud-sonarqube-connector-2.26-breakdown-no-computables.png">

En resumen, la nueva versión del SonarQube Connector for Jira incluye un nuevo estándar de Seguridad para ayudar a los desarrolladores y jefes de equipo a poder visualizar rápidamente las evidencias de seguridad para que se puedan solventar y conseguir tener un código más seguro.

La nueva versión ya está disponible en la página del marketplace de Atlassian

¡[Descárgala](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview) hoy y mejora tu integración entre Jira y SonarQube/SonarCloud!

No dudes en [contactarnos](/contacto) para compartir tu opinión

¡Muchas gracias!
