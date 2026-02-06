---
layout: post
title: 'Descarga un PDF desde Jira con la información de SonarQube'
description: Integra métricas de calidad en Jira, configura el conector paso a paso y genera informes PDF profesionales sin salir de tu flujo de trabajo.
date: '2026-02-02T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-02-02-descarga-pdf-sonarqube-jira.png

---

La información sobre el estado de calidad del código está en SonarQube, pero las decisiones se toman en Jira. Este salto para consultar la información y tomar las decisiones provoca capturas de pantalla, preguntas repetidas, reuniones innecesarias. Para resolverlo existe nuestra app **SonarQube Connector for Jira** que lleva las métricas directamente al lugar donde se gestiona el trabajo.

En esta guía vamos a ver, paso a paso, **cómo instalarla, configurarla y, sobre todo, cómo exportar un informe PDF** con el estado real de calidad del código listo para compartir con equipos, managers o auditorías.

Recordemos que SonarQube Connector for Jira es una **aplicación oficial** en el Atlassian Marketplace que **conecta tu instancia de SonarQube (Server o Cloud) con Jira**. Su objetivo es facilitar la visibilidad de la calidad de tu código en Jira, permitiéndote:

- Consultar **métricas clave** como bugs, vulnerabilidades, code smells, cobertura o duplicaciones dentro de Jira. <br>

- **Crear issues** de Jira directamente a partir de problemas detectados en SonarQube. <br>

- **Generar y descargar informes PDF** completos sobre la calidad y seguridad del código para compartir con equipos, stakeholders o auditorías. Estos informes pueden incluir métricas generales o basarse en estándares como CWE Top 25, OWASP Top 10, ISO 5055, OWASP ASVS, entre otros. <br>

<h2>Cómo instalar el conector en tu instancia de Jira</h2>

Antes de comenzar, asegúrate de tener **permisos de administrador en Jira**. Aquí va el proceso oficial:

- **Accede a tu instancia** de Jira como administrador. <br>

- Ve al **menú de Administración** y luego Atlassian Marketplace.  <br>

- Haz clic en **Encontrar nuevas apps** (Find new add-ons). <br>

- En el buscador, escribe "SonarQube Connector for Jira" y **selecciona la app**. <br>

- Elige **Try free (probar gratis)** o **Buy now (comprar)**. <br>

- También puedes descargar la app desde el [Marketplace de Atlassian](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview).  <br>


<h2>Tutorial de configuración del conector</h2>

Tras instalar el conector, sigue estos pasos para “enchufar” tu SonarQube Server o SonarCloud con Jira:

**1. Configura la conexión de SonarQube y Jira**

- En Jira, accede Manage Apps y selecciona SonarQube Connector. <br>

- Añade la URL de tu servidor SonarQube o credenciales para SonarCloud. <br>

- Introduce tu token de acceso (personal access token) de SonarQube para autenticar la conexión. <br>

El conector soporta vincular múltiples proyectos SonarQube a un proyecto de Jira, útil cuando gestionas varios componentes. <br>

**2. Configura métricas y paneles**

En el panel de cada proyecto de Jira vinculado, encontrarás pestañas con métricas como: **Overview, CWE Top 25, OWASP Top 10, ISO 5055 y OWASP ASVS**. Estas pestañas muestran información extraída directamente de SonarQube para que no tengas que cambiar de herramienta.

**3. Personaliza opciones de informe**

Antes de generar informes, puedes personalizar ciertos aspectos:

- En opciones de configuración, en la sección de **PDF Report Settings** puedes incluir el logotipo de tu empresa en el pie de página de los informes. <br>

- Ajusta si quieres aplicar **configuración global o específica del proyecto** (usando el “override” del logotipo). <br>

<h2>Cómo generar y descargar un PDF del estado de calidad</h2>

Paso a paso para exportar un PDF

- **Abre el proyecto de Jira** en el que el conector está vinculado. <br>

- Dirígete a la **pestaña del panel de SonarQube** que quieras exportar: <br>

- Overview para un resumen general. <br>

- CWE Top 25, OWASP Top 10 o ISO 5055 para informes basados en estándares específicos. <br>

- Dentro del panel, localiza el botón o enlace para descargar el informe PDF. <br>

- Haz clic en “Download PDF” y el sistema generará el documento listo para guardar o compartir. <br>

Aquí tienes un ejemplo de un PDF exportado por SonarQube Connector for Jira:

<img width="90%" src="/img/atlassian-addons/sonarqube-connector-jira-overview-pdf.webp" alt="Exporta un PDF desde Jira con informacion de SonarQube">
<br>

También puedes consultar nuestro canal de YouTube donde te [mostramos en vídeo](https://www.youtube.com/watch?v=3YXbauc0zuY) cómo configurar el conector y cómo utilizarlo. 

**Integrar SonarQube con Jira** y poder exportar informes en PDF mejora la comunicación de métricas entre equipos. Si necesitas soporte para esta aplicación o necesitas ampliar la información, puedes consultar la documentación oficial o ponerte en contacto con [nuestro equipo](https://www.excentia.es/contacto). 