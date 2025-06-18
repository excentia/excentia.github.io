---
layout: post
title: 'SonarQube/SonarCloud Connector for Confluence Data Center 1.15'
description: Nueva macro para seguimiento de hotspots de seguridad y evolución y tendencias de las métricas principales

date: '2022-05-05T08:00:00Z'
author: Marisa Martín
categories: 

- sonarqube
- calidad
- devops
- atlassian

cover: /img/posts/2022-05-05-sonarqube-connector-for-confluence-data-center-1.15.png

---

Al igual que la versión para Confluence Cloud, ya está disponible una nueva versión del [conector de SonarQube para Confluence Server y Data Center](https://www.excentia.es/sonarqube-connector-confluence) 
con las mejoras respecto a la visualización de la información relativa a los hotspots de seguridad que nos ofrece SonarQube/SonarCloud y a la evolución de las métricas. 
Todo ello disponible a través de las macros que podrás insertar en cualquier página de tus espacios de Confluence Cloud.

Concretamente esta versión incluye:

## Macro "_Security Hotspots Breakdown_"

Una nueva macro "_Security Hotspot breakdown_" que permite conocer de forma independiente los hotspot de seguridad. 

Los Hotspots de Seguridad nos muestran evidencias de código sensibles a la seguridad y que requieren una revisión, ya 
que únicamente viendo el código no es posible saber si realmente existe un problema o no.

La principal diferencia entre un hotspot y una vulnerabilidad es la necesidad de una revisión antes de decidir si hay
que aplicar cambios en el código o no. 

Es por eso que es importante diferenciarlos del resto de evidencias de SonarQube/SonarCloud (_bugs, vulnerabilidades, code smells_) y 
razón por la que hemos incluido este nuevo macro específico para los hotspots.

<img style="width: 100%" src="/img/posts/2022-05-05-sonarqube-connector-for-confluence-data-center-1.15-hotspots-macro.png" />

## Evolución histórica en las métricas principales

Cuando configures un solo proyecto en la macro principal del conector (_SonaQube Connector Macro_), ahora se mostrarán 
unos gráficos con los datos del historial de las métricas.

La evolución temporal es una de las características más demandadas por los usuarios y en esta nueva versión por fin 
ya está disponible. 

<img style="width: 100%" src="/img/posts/2022-05-05-sonarqube-connector-for-confluence-data-center-1.15.png" />

## Más allá de la nueva versión

**SonarQube Connector for Confluence** te permite visualizar las métricas de **calidad y seguridad de tu código** en cualquier página de **Confluence**, 
pero además también puedes ver el estado de las **condiciones de umbral de calidad** para saber cuando un proyecto cumple o no cumple con el nivel de calidad exigido, 
o también dispones de una macro para ver el valor de una **determinada métrica para poder utilizarla como un "badge"** en la página del proyecto.

Además con la nueva versión se han hecho mejoras internas en el rendimiento y el funcionamiento general de la app.

Más información en la [página del marketplace de Atlassian](https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?tab=overview&hosting=datacenter)
