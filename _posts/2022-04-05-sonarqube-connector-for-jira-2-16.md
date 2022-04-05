---
layout: post
title: 'SonarQube&trade; Connector for Jira Cloud 2.16'
description: ¡Ahora con evolución temporal para las métricas principales!
date: '2022-04-05T08:00:00.000+01:00'
author: Marisa Martín
categories: 
- productos
- sonarqube
- atlassian
- 
cover: /img/posts/2022-04-05-sonarqube-connector-for-jira-2-16.png
modified_time: '2022-03-31T08:00:00.000+01:00'
---

La era de la digitalización hace que el sector tecnológico siga creciendo sin parar. A día de hoy, ya son más de 65.000 empresas 
las que confían en [Jira Software](https://www.youtube.com/watch?v=iTdnMWa6Jdw&list=PLaD4FvsFdarR9RNlvUfee_iJ6WKRsRJn4&index=5) 
para gestionar sus proyectos, en equipos de trabajo de 2.000 personas o incluso más. 

Por ello, en **excentia** continuando con la mejora de [nuestros plugins](https://www.excentia.es/atlassian#atlassian-marketplace) 
hemos realizado algunos cambios en nuestro [conector de SonarQube para Jira Cloud](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview) y os presentamos
esta nueva versión 2.16. 

Estas son las actualizaciones que destacamos:

-- **Tendencias con el histórico de las métricas en el panel principal del proyecto**. Una de las funcionalidades más demandadas, 
poder visualizar las tendencias principales y así ver si tu código está mejorando con un solo vistazo desde tu proyecto 
de Jira. 

-- **Agrupación de hotspots de seguridad por categoría y prioridad**. Como sabemos que los hotspots tienen un tratamiento especial, 
ahora puedes ver el detalle en una pestaña individual, separada de las evidencias más clásicas de SonarQube (bugs, vulnerabilidades y code smells). 
Puedes ver los hotspots agrupados por categoría, y también ordenados por prioridad para que empieces a revisar los más importantes primero.

<img style="width: 100%" src="/img/posts/2022-04-05-sonarqube-connector-for-jira-2-16-post.png" />

**¿Sabes la diferencia entre la severidad de las evidencias (bugs, vulnerabilidades y code smells) y la prioridad de los hotspots de seguridad?**

La severidad de las evidencias nos indica el impacto que tendrá cuando nuestro código esté en producción (bloqueante, crítico, ...).
En cambio, cuando se detecta un hotspot, se añade dependiendo de la prioridad requerida para su revisión (*high, medium, low*). 

Los hotspots con una prioridad de revisión “alta” habitualmente contienen código que necesitará ser modificado y son los que requieren primero tu atención.
La prioridad de la revisión se determina por la categoría de la regla del hotspot de seguridad, las reglas en categorías que están en el **OWASP Top 10** 
y el **CWE Top 25** se consideran con prioridad “alta” de revisión, puesto que son las que utilizarán la mayoría de atacantes para intentar vulnerar tu código.

De esta forma puedes crear en Jira tareas específicas para la revisión de los hotspots más prioritarios, y así una vez los revises
podrás marcarlos como seguros o por el contrario, como algo que requiere cambios en el código. 

## Conecta tu proyecto de Jira con SonarQube

Y tendrás al alcance toda la información de la calidad y seguridad de tu código; bugs, vulnerabilidades, code smells, security hotspots, líneas 
duplicadas, deuda técnica, y mucho más. A través del [marketplace de Atlassian](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?tab=overview&utm_campaign=atlassian&utm_content=atlassian_marketplace&utm_medium=page&utm_source=website&hosting=cloud) 
puedes comenzar a utilizar este plugin y probar todas sus funcionalidades.

Estas son las funcionalidades que ayudarán a mejorar la calidad de tu código con [SonarQube Connector for Jira](https://www.excentia.es/sonarqube-connector-jira):

- **Acceso a un panel de proyecto** con toda la información para examinar la calidad y seguridad de tu código.
- Posibilidad de **vincular varios proyectos de SonarQube** a tu proyecto de Jira, y ver la **información agregada** de las métricas y las evidencias.
- **Capacidad para crear tareas de forma automática** ante los problemas principales del proyecto gracias al desglose de evidencias ordenado por severidad.
- Las tareas creadas en Jira tendrán toda la **información relacionada de las evidencias de SonarQube a nivel de asunto en Jira**, para que solo la cierres cuando ya se hayan solucionado en SonarQube.
- Puedes crear **cuadros de mando** (*dasshboards*) con gadgets específicos donde mostrar métricas personalizadas, o incluso las evidencias de SonarQube por autor, para controlar todo 
lo que hace tu equipo y gestionar mejor la resolución de bugs y vulnerabilidades, por ejemplo. 

Conectar herramientas y ecosistemas hace que el ciclo de vida de los proyectos sea más eficiente, si aún no tienes Jira Software, [contáctanos](https://www.excentia.es/contacto) y te informamos sin compromiso.

