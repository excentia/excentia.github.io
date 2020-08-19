---
layout: post
title: '12 Nuevas funciones para DevOps'
description: Las herramientas que te facilitarán la vida
date: '2020-08-19T08:00:00.000+01:00'
author:  Anna Torres
categories: 
- devops
- atlassian

cover: /img/posts/2020-08-19-12-nuevas-funciones-para-devops-thumb.jpg
modified_time: '2020-08-19T08:00:00.000+01:00'
---

**DevOps**, es una metodología de desarrollo de software basada en la integración y la colaboración entre los equipos de **desarrollo**, **operaciones** de **TI** y **negocios**.

Sin embargo, esta mayor colaboración puede tener un costo para los desarrolladores. En lugar de codificar y construir soluciones innovadoras, los desarrolladores pueden terminar pasando una gran parte de su día integrando múltiples herramientas, actualizando el estado del trabajo y compartiéndolo con otros equipos.

En la [Encuesta de Tendencias DevOps](http://www.atlassian.com/whitepapers/devops-survey-2020) que Atlassian realizó a principios del 2020 descubrieron que las mismas prácticas que se suponía que facilitarían la vida de los desarrolladores estaban causando nuevos tipos de problemas. 

**Demasiadas herramientas desconectadas, procesos manuales y prácticas de colaboración en constante cambio están impidiendo llegar al objetivo.**

El 90% de los equipos informaron que DevOps tuvo un impacto positivo en el negocio, pero también existe el peligro de que esto pueda quitarle tiempo a la innovación, y el 84% dijo que no fue tan fácil la implementación.

## 12 nuevas funciones de Atlassian para los desarrolladores DevOps

![DevOps](/img/posts/2020-08-19-12-nuevas-funciones-para-devops-1.jpg){:width="90%" .center-image}

### Planificar

Atlassian ha creado integraciones entre **Jira Software Cloud** y **Bitbucket Cloud**, **GitHub** y **GitLab** para que el seguimiento de problemas y las actualizaciones de proyectos ocurran justo donde se codifica, automáticamente. No será necesario volver a Jira. El gerente de proyecto no tendrá que enviar un ping para obtener actualizaciones e interrumpir el flujo de codificación, porque su tablero de proyecto se actualizará automáticamente en función del trabajo en Bitbucket, GitHub o GitLab.

- El nuevo **panel de control Your Work en Bitbucket Cloud** se ha ampliado para incluir los problemas de Jira asignados para que se pueda pasar rápidamente de una tarea a la siguiente, sin saltar de una herramienta a otra. 
- En Jira Software Cloud, han mejorado las capacidades de automatización con nuevos y potentes [**activadores de automatización DevOps**](https://community.atlassian.com/t5/Jira-Software-articles/New-automation-triggers-across-Jira-Cloud-Bitbucket-and-Github/ba-p/1337351). Con solo unos pocos clics, se puede crear reglas de automatización para mantener el trabajo sincronizado con las actividades de desarrollo, con desencadenantes de la actividad de solicitud de confirmación o extracción en cualquier repositorio de código conectado. Estas nuevas automatizaciones también permiten reglas más complejas como reasignar problemas de Jira para control de calidad o revisión de código, o incluso enviar un mensaje al canal Slack de su equipo. Estas reglas de automatización funcionan con Bitbucket Cloud, GitHub, GitLab y cualquier otro repositorio de código que se integre con Jira Software Cloud.

![Automation](/img/posts/2020-08-19-12-nuevas-funciones-para-devops-2-plan.jpg){:width="90%" .center-image}

## Construir

Cada equipo quiere las mejores herramientas posibles para escribir y revisar el código, y con Bitbucket Cloud lo tenemos. Ya sea que los desolladores prefieran trabajar en Bitbucket o su IDE, el objetivo de Atlassian es mantenerlo en el flujo y reducir los rebotes innecesarios entre las herramientas.

- [**La nueva experiencia de solicitud de extracción de Bitbucket Cloud**](https://bitbucket.org/product/features/code-review) ofrece un diseño innovador que facilita y agiliza la revisión de los cambios en el código. Las nuevas características, como la lista consolidada de tareas, la creación integrada de problemas de Jira y los filtros de alimentación de actividades, significan que los desarrolladores pueden completar sus revisiones de código más rápidamente.
- La [**integración de Atlassian VS Code**](https://bitbucket.org/blog/atlassian-for-vscode-bitbucketcloud-and-jirasoftware-extension-for-visual-studio-code) trae toda su canalización de desarrollo a su editor, con su lista de tareas de Jira Software Cloud, una experiencia completa de revisión de código y seguimiento de CI / CD de Bitbucket Pipelines.

## CI / CD

Atlassian ha incorporado informes de escaneo y calidad en la experiencia de revisión de código de Bitbucket Cloud para que los revisores reciban alertas de posibles problemas antes de que algo pase a producción. 

- [**Code Insights en Bitbucket Cloud**](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) permite incorporar las mejores herramientas de escaneo, prueba y análisis de DevOps en el proceso de revisión de código, incluyendo[ Mabl](https://www.mabl.com/) para la automatización de pruebas y[ Sentry](https://sentry.io/welcome/) para el monitoreo automatizado. Nuestra nueva integración de DevSecOps con[ Snyk](https://snyk.io/?utm_medium=Partner&utm_source=Atlassian&utm_campaign=Atlassian-DevOps-Launch-Blog-Q2-2020) es especialmente importante, ya que Snyk puede escanear y resaltar vulnerabilidades críticas de seguridad antes de que se conviertan en un incidente de seguridad Sev-1. Todas estas integraciones también se basan en una[ API abierta](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html), por lo que puede ampliar Bitbucket Cloud con informes de código adicionales para sus propias herramientas.

![Report](img/posts/2020-08-19-12-nuevas-funciones-para-devops-3-ci-cd.jpg){:width="90%" .center-image}

- [**La gestión de cambios automatizada con Jira Service Desk Cloud y Bitbucket Pipelines**](https://community.atlassian.com/t5/Jira-Service-Desk-articles/ANNOUNCING-Early-access-ITSM-features-in-Jira-Service-Desk/ba-p/1332385) (actualmente en acceso temprano) pausará su proceso de CI / CD, creará una solicitud de cambio en Jira Service Desk y luego activará la implementación una vez que se apruebe:

- - El **motor de evaluación de riesgos en Jira Service Desk Cloud** califica rápidamente el riesgo de un cambio y aprueba automáticamente e implementa cambios de bajo riesgo.
  - La **Vista de gestión de cambios en Jira Service Desk Cloud** agiliza el proceso de aprobación de cambios de alto riesgo al reunir toda la información en solicitudes de cambio rastreables que el equipo puede revisar y aprobar manualmente si es necesario.
  - La gestión de cambios automatizada admite Bitbucket Pipelines, Jenkins, Circle CI y Octopus Deploy.

![Service Desk Project](img/posts/2020-08-19-12-nuevas-funciones-para-devops-4-ci-cd.jpg){:width="90%" .center-image}

## Operar y monitorear

Cuando ocurren incidentes, la clave para una resolución rápida es determinar la **causa del problema rápidamente**. Y a medida que sus equipos adoptan DevOps y automatizan sus procesos de implementación, las fallas relacionadas con el cambio se vuelven cada vez más comunes. Cuando te despiertan para lidiar con una interrupción, ¿no sería bueno saber si un cambio reciente en el código causó el problema e inmediatamente recibir ayuda del desarrollador adecuado?

[La nueva y profunda integración de Opsgenie en Jira Software Cloud y Bitbucket Cloud](https://www.atlassian.com/software/opsgenie/bitbucket) ayuda a los equipos en este proceso.

- La [**integración con Opsgenie y Bitbucket Cloud**](https://www.atlassian.com/software/opsgenie/bitbucket) centraliza todas las alertas para garantizar que se resuelvan los problemas correctos, se avise a las personas adecuadas y se tomen las medidas correctas. Con el [**Panel de investigación de incidentes**](https://youtu.be/GfG6iSYiUEU), los equipos pueden ver que ocurrió justo antes del incidente, agregarlo como una causa potencial y contactar al desarrollador que realizó el cambio para que puedan revertirlo y resolver el incidente.

![Investigating](/img/posts/2020-08-19-12-nuevas-funciones-para-devops-5-operate-and-monitor.jpg){:width="90%" .center-image}

## Comunicación y colaboración

La implementación exitosa de DevOps no termina al conectar las herramientas. Por eso Atlassian ha creado un nuevo lugar donde aprender y compartir las mejores prácticas de DevOps.

- [**Nuestro centro de recursos**](http://www.atlassian.com/devops/best-practices) donde se comparte información sobre cómo conectar herramientas con prácticas y cultivar una cultura DevOps:

- - [Comunidad DevOps](https://community.atlassian.com/t5/DevOps/ct-p/devops) (con AMA exclusivos con líderes de opinión DevOps)
  - Plantillas de Confluencia de DevOps (para mejorar los rituales de DevOps y establecer objetivos de equipo a largo plazo)
  - Guías de DevOps (sobre cómo conectar herramientas como Jira con las mejores prácticas de la industria como CI / CD)

También ha extendido las integraciones automatizadas a las herramientas de comunicación: [integraciones de Slack](https://marketplace.atlassian.com/search?query=slack%20official) e [integraciones de la página de estado](https://www.atlassian.com/software/statuspage/integrations), que ayudan a adoptar las mejores prácticas de DevOps en las comunicaciones internas y externas.


## Servicio y soporte técnico

Si quieres empezar o simplificar tu flujo de trabajo DevOps [contáctanos a info@excentia.es](mailto:info@excentia.es).

<em><sub> [Articulo original](https://www.atlassian.com/blog/devops/new-collaboration-features) de Atlassian.</sub></em>