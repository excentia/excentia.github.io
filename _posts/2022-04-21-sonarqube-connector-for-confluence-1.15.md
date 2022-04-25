---
layout: post
title: 'SonarQube/SonarCloud Connector for Confluence Cloud 1.15'
description: Nueva macro disponible para visualizar los hotspots de seguridad y por fin podemos ver las tendencias de las métricas principales

date: '2022-04-21T08:00:00.000+01:00'
author: Marisa Martín
categories: 
- productos
- atlassian
- sonarqube

cover: /img/posts/2022-04-21-sonarqube-connector-confluence-cloud.png
modified_time: '2022-04-21T08:00:00.000+01:00'
---

Ya está disponible una nueva versión de [SonarQube/SonarCloud Connector para Confluence Cloud](https://www.excentia.es/sonarqube-connector-confluence) 
centrada en la mejora de la visualización de la información relativa a los hotspots de seguridad que nos ofrece SonarQube/SonarCloud y a la evolución de las métricas. 
Todo ello disponible a través de las macros que podrás insertar en cualquier página de tus espacios de Confluence Cloud.

Concretamente esta versión incluye:

## Nueva macro "_Security Hotspots Breakdown_"

Una nueva macro "_Security Hotspot breakdown_" que separa los hotspots de seguridad del resto de evidencias que detecta
SonarQube/SonarCloud y que permite **visualizar los hotspots de seguridad de forma independiente y
ordenados por prioridad**. 

Los hotspots con una prioridad de revisión “alta” habitualmente contienen código que necesitará 
ser modificado y son los que requieren primero tu atención. 

La prioridad de la revisión se determina por la categoría de la regla del hotspot de seguridad, las reglas en categorías
que están en el **OWASP Top 10** y el **CWE Top 25** se consideran con prioridad “alta” de revisión, puesto que son 
las que utilizarán la mayoría de atacantes para intentar vulnerar tu código.

<img style="width: 100%" src="/img/posts/2022-04-21-sonarqube-connector-confluence-cloud.png" />

## Evolución histórica en las métricas principales

Ahora podrás visualizar la evolución histórica y tendencias de las métricas de referencia en la macro principal 
"_SonarQube Connector Macro_".

La evolución temporal es una de las características más demandadas por los usuarios y en esta nueva versión por fin 
ya está disponible. 

<img style="width: 100%" src="/img/posts/2022-04-21-sonarqube-connector-confluence-cloud-evolucion.png" />

Una de las bases de la mejora continua es precisamente el poder ver como evolucionan las métricas 
a lo largo del tiempo. Ahora con esta nueva versión podrás ver fácilmente en las páginas de Confluence el histórico de 
la calidad y seguridad de tu código y así conocer las tendencias
y tomar las decisiones oportunas, viendo rápidamente si tu proyecto empeora o mejora.

## Y mucho más...

Con la nueva versión se han hecho mejoras internas que solucionan algunos problemas detectados así como mejoras en el 
rendimiento y el funcionamiento general de la aplicación.

En **excentia**, trabajar en la mejora constante de nuestros productos forma parte de nuestra filosofía. Nuestra 
app para Confluence se encuentra actualmente en la lista top de nuestros productos más vendidos en el Marketplace de Atlassian.

[SonarQube/SonarCloud Connector for Confluence](https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?hosting=cloud&tab=overview) se distingue por 
integrar tus proyectos de SonarQube/SonarCloud en cualquier página de Confluence, con la finalidad de hacer esta información accesible a todo el equipo, aún cuando no 
tengan acceso a SonarQube/SonarCloud.

Gracias a las funcionalidades las distintas macros disponibles **SonarQube Connector Macro**, **SonarQube Connector Badge**, 
**SonarQube Connector Issues Breakdown**, **SonarQube Connector Issues by Authors** y **SonarQube Connector Security Hotspots Breakdown**, 
podrás visualizar la información de la calidad y seguridad el código en tus espacios de Confluence. 

Tu mejora, nuestra motivación.
