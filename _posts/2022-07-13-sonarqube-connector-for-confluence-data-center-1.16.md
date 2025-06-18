---
layout: post
title: 'SonarQube/SonarCloud Connector for Confluence Server/Data Center 1.16'
description: Nueva macro mostrar la información de un perfil de calidad en Confluence

date: '2022-07-13T08:00:00Z'
author: Marisa Martín
categories: 

- sonarqube
- calidad
- devops
- atlassian

cover: /img/posts/2022-07-13-sonarqube-connector-for-confluence-data-center-1.16-rules.png

---

En **SonarQube**&trade;/**SonarCloud**&trade; los perfiles de calidad son uno de los componentes clave en la inspección de 
código ya que son los que permiten definir los subconjuntos de reglas a aplicar durante los análisis. Estos perfiles de calidad 
se definen de forma individual para cada lenguaje de programación.

El resultado de un análisis dará lugar a un conjunto de evidencias de incumplimiento de las reglas que están configuradas en el perfil, 
resultados que se computarán en valores de métricas (calificación de fiabilidad, calificación de seguridad, etc.) que podrán ser usadas como condiciones para el umbral de calidad.
Esto permite que se pueda evaluar la calidad del código de forma homogénea para todos los lenguajes y usar un conjunto de métricas comunes.

Esta nueva macro refleja la información relativa a esos perfiles de calidad en cualquier página de Confluence. De esta forma
esa información puede estar disponible para todos los equipos junto con el resto de información del proyecto o con las normativas
de desarrollo que están en los espacios de Confluence.

La nueva macro te permite visualizar en dos tablas toda la información de un perfil de calidad específico:

- En una tabla puedes observar la cantidad de reglas que contiene el perfil de calidad distribuidas por tipo de regla
(Bugs, Vulnerabilidades, Code Smells y Security Hotspots) y si están activas o inactivas.
<img width="100%" src="/img/posts/2022-07-13-sonarqube-connector-for-confluence-data-center-1.16.png">

- En la otra tabla verás la información detallada de las reglas del perfil de calidad que están activas (severidad, 
nombre, lenguaje, tipo y si contiene etiquetas).
  <img width="100%" src="/img/posts/2022-07-13-sonarqube-connector-for-confluence-data-center-1.16-rules.png">

Configurarlo es muy sencillo, tan solo debes crear la macro, seleccionar el servidor de SonarQube&trade; o SonarCloud&trade; y rellenar el campo con el nombre del perfil de calidad.


En el caso de que utilices SonarCloud&trade;, será necesario que configures de forma adicional el campo de "organización" con la clave de tu organización
de SonarCloud&trade;.

¡Ya no hay excusas para no saber que reglas se están utilizando en el análisis de la calidad y seguridad del código!

---
<br>

La nueva versión ya está disponible en la [página del marketplace de Atlassian](https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?tab=overview&hosting=datacenter)
