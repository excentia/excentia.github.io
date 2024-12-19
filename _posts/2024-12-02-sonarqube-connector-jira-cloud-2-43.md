---
layout: post
title: 'SonarQube Connector for Jira Cloud 2.43'
description: Nuevo PDF para el OWASP Top 10 y nueva forma para etiquetar issues 
date: '2024-12-02T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube server
- sonarqube cloud
- jira cloud
- marketplace


cover: img/posts/2024-12-02-sonarqube-connector-jira-cloud-2-43.png

---

<img width="100%" src="img/posts/2024-12-02-sonarqube-connector-jira-cloud-2-43.png" alt="SonarQube Connector for Jira Cloud">

¡Tenemos nuevas funcionalidades para nuestra aplicación SonarQube Connector for Jira Cloud! Lanzamos la **versión 2.43** que incluye dos nuevas funcionalidades y mejoras en la interfaz. ¡Te lo contamos!

<h2>Descarga un nuevo informe en PDF</h2>

Con esta nueva versión podrás descargar un informe en PDF sobre el análisis del **OWASP Top 10**. Simplemente, tendrás que dirigirte a la sección OWASP Top 10 y pulsar sobre el botón 'Download PDF'.

Aquí te dejamos una imagen de la sección y la ubicación del botón:

<img width="90%" src="img/atlassian-addons/sonarqube-connector-jira-cloud-owasptop10.png" alt="OWASP Top 10 SonarQube Connector for Jira Cloud OWASP Top 10">
<br>


A continuación podrás encontrar una imagen de la primera imagen del informe OWASP Top 10 de un proyecto de ejemplo: 

<img width="90%" src="img/atlassian-addons/sonarqube-connector-jira-cloud-pdf-owasptop10.png" alt="SonarQube Connector for Jira Cloud OWASP Top 10 PDF">
<br>

<h2>Añade etiquetas automáticamente al crear issues</h2>

Con la siguiente funcionalidad podrás etiquetar de **forma automática y masiva las issues** que crees desde el conector. Tienes dos opciones de configuración que te explicamos a continuación.
<br> 

<h3> Configurar etiquetas a nivel global</h3>

Para realizar una configuración de etiquetas que sea aplicable a todos los proyectos donde tengas configurado el conector, tendrás que realizar los siguientes pasos: 

1 - Accede a 'Manage your apps' y a 'SonarQube Connector'. 

2 - Dirígete a la sección 'Create Jira Issue settings' y configura las etiquetas que quieras. Si vas a poner más de una etiqueta, tienes que **separarlas con comas**. 
<br>

<h3> Configurar etiquetas a nivel de proyecto</h3>

Si lo que quieres es que un proyecto se **etiquete de forma independiente** a la configuración general, deberás seguir los siguientes pasos. 

1 - Accede a 'Project Settings' del proyecto que quieras configurar y a 'Apps' y 'SonarQube'. 

*Aquí hay una nueva mejora. Nuestro equipo de desarrollo a separado la información en 5 pestañas para facilitar la lectura*

2 - Dirígete a la pestaña 'Issue Creation' y a 'Override Global Issue Labels Config'. 

3 - Antes de añadir las etiquetas que quieras tendrás que activar la siguiente opción: *Check these options if you want to override global issue labels configuration.*

4 - Ya puedes añadir las etiquetas que quieras. Recuerda que si vas a añadir más de una etiqueta tendrás que separarlas por comas. 


Para que puedas ver esta guía paso a paso te dejamos aquí este video que incluye todas las novedades de esta release: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/CG_STsVbJjM?si=GfkSD02Q2FuvLK4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<h3>Más información sobre nuestro conector</h3>

Si quieres más información sobre esta aplicación, aquí te dejamos una serie de **enlaces de interés** para que puedas ampliar tus conocimientos: 

1 - [Demo](https://youtu.be/3YXbauc0zuY?si=Hmc1D0ILeagoViTj) del producto.<br>
2 - Lista de [releases](https://www.youtube.com/watch?v=mNI0rK-Ci2Q&list=PLZ5oF-c2V6nPl05DRCJU0q9iN2ouz2_1B&ab_channel=excentiaTube) de las aplicaciones.<br>
3 - [Página](https://www.excentia.es/sonarqube-connector-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace) de producto y documentación.<br> 

Si no tienes esta app y quieres probarla, puedes descargar la **prueba gratuita de 30 días** a través de [este enlace](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace).