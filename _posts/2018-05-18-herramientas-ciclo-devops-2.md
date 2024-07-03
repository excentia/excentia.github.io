---
layout: post
title: 'Herramientas y DevOps II. Construye tu propia navaja suiza'
description: Comunicación, documentación, planificación, monitorización y el feedback continuo son áreas fundamentales en el ciclo DevOps. Continuamos construyendo nuestra práctica navaja suiza.
date: '2018-05-18T08:00:00.000+01:00'
author: Alberto Alós
categories: 
- devops

modified_time: '2018-05-18T08:00:00.000+01:00'
cover: /img/posts/2018-04-13-herramientas-devops.png
---

<a href="http://www.excentia.es/search?query=devops" target="_blank"><img class="center" width="100%" alt="Herramientas y ciclo DevOps" title="Herramientas y ciclo DevOps" src="/img/posts/2018-04-13-herramientas-devops.png"></a>


**Comunicación, documentación, planificación, monitorización y el feedback continuo son áreas fundamentales en el [ciclo DevOps](http://www.excentia.es/que-es-DevOps)**. En la [entrada anterior](http://www.excentia.es/herramientas-ciclo-devops) mi compañero Manuel nos habló de numerosas herramientas que participan en la integración de los equipos de trabajo en el día a día de las compañías. Hoy retomamos este ciclo y nuestra metáfora de la navaja suiza. 

## Más herramientas para el ciclo DevOps

Si estamos ante un proyecto y disponemos de nuestra útil navaja con Jenkins, SonarQube, SonarLint, Bitbucket, Maven, Nexus... ¿qué funciones nos gustaría añadirle?, ¿qué más necesitamos para efectivamente unir a los equipos de desarrollo y operaciones?

**La comunicación entre las personas, entre los equipos y entre los departamentos (incluso entre organizaciones) es frecuentemente una de las barreras más difíciles de superar en la ejecución de un proyecto.  El objetivo es que todo el mundo disponga de toda la información necesaria en cualquier momento, y si es posible, en tiempo real. Cuando la comunicación fluye, los proyectos se desarrollan de forma natural, sin barreras.**

Como las palabras se las lleva el viento... una base de conocimientos bien estructurada permite organizar la información de las compañías, proyectos, equipos, productos y todo lo que se nos ocurra, sin obstaculizar la transferencia de conocimientos entre los equipos de trabajo. Este tipo de herramientas nos permite además, documentar todo lo relativo a nuestros proyectos. ¡Podemos elaborar una planificación y dejarla documentada en nuestra *Knowledge base*!

**Una de las piezas clave del ciclo DevOps es el feedback continuo, es decir, tener siempre información actualizada de nuestros sistemas, productos y proyectos mediante herramientas de monitorización, integraciones que responden a eventos y herramientas de comunicación (como no, la comunicación es fundamental) en tiempo real**.

A continuación proponemos diferentes herramientas que nos harán la vida más fácil para construir pilares sólidos en la base de nuestra organización:

**[Confluence](https://es.atlassian.com/software/confluence)**: Es una base de conocimientos que nos permite estructurar toda la información de nuestra organización en diferentes espacios. Confluence permite disponer de una “wiki” empresarial donde se puede registrar toda la información respecto a proyectos, organización de la compañía, actas de reuniones e información en tiempo real de infinidad de fuentes externas. Como su nombre indica, Confluence trata de unir todas las fuentes de conocimiento en un único sistema.

**[HipChat/Stride](https://www.stride.com/)**: Ambas herramientas permiten crear chats individuales o grupos para comunicarnos en tiempo real. Se favorece la comunicación rápida entre equipos y personas, podemos hacer videollamadas y enviar archivos de forma que evitemos acceder al clásico correo electrónico. Una de las claves de la integración de este tipo de herramientas en DevOps es la capacidad que tienen para recibir notificaciones de herramientas externas. Podemos tener salas en Stride que nos notifiquen cuando se ha completado un análisis de SonarQube o cuando se ha creado un asunto en Jira.

**[SonarQube Connector for Jira](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=server&tab=overview)**: Nos permite acceder a la información de calidad de software en tiempo real desde Jira. Los desarrolladores pueden ver directamente en Jira la información relativa a la calidad del código. Se elimina el salto entre herramientas y permite al equipo de software tener feedback continuo de su trabajo.

**[SonarQube Connector for Confluence](https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?hosting=server&tab=overview)**: Queremos documentarlo todo (esto sería lo ideal) pero cuando vamos a rellenar un informe en Confluence del estado de nuestros productos de software, tendemos a llenar las páginas de capturas de pantalla y de texto estático. SonarQube Connector for Confuence nos permite insertar macros de Sonar dentro de nuestros documentos para disponer de la información actualizada.

**[Jira Service Desk](https://es.atlassian.com/software/jira/service-desk)**: Establece un vínculo más allá y abre la puerta a nuestros clientes. Este software de ticketing establece la comunicación entre equipos de trabajo y usuarios externos e internos con el fin de resolver incidentes, peticiones de servicio, dudas y mucho más. Favorece la implicación del usuario final en todo el ciclo de desarrollo de software, de inicio a fin, sin barreras y con feedback continuo.

**[Jira Software/Core](https://es.atlassian.com/software/jira)**: Permite gestionar proyectos dividiéndolos en asuntos, así de sencillo. Desde la planificación hasta la última etapa de implantación de un proyecto, podremos gestionar todo nuestro trabajo. Se trata de un software tan flexible que permite gestionar cualquier tipo de entidad que siga un flujo de trabajo.

**[StatusPage](https://es.atlassian.com/software/statuspage)**: Ofrece información en tiempo real de nuestros servicios. Monitoriza continuamente nuestros procesos y ofrece  una interfaz muy clara donde cualquier usuario puede comprobar el estado de cada servicio. Gracias a StatusPage muchas compañías han conseguido disminuir el número de incidencias creadas durante caídas de servicio. Si el cliente está informado en tiempo real, gana confianza y permite a los equipos trabajar en la solución.


Nosotros ya hemos montado nuestra navaja suiza. ¿Tienes la tuya? No hay dos navajas iguales, tampoco funcionan unas igual de bien que otras... Por supuesto, depende del objetivo y utilidad final de la navaja, que ésta tenga más o menos accesorios, tenga el mango de madera o de plástico, etc. Todo dependerá de las funciones que su dueño necesita que cumpla. Por eso, no creemos en un ciclo de herramientas DevOps como tal. En [excentia](http://www.excentia.es/sonarsource) creemos en la situación particular de cada organización y en la filosofía que cada vez (menos mal...) más personas y [organizaciones](http://www.excentia.es/tendencias-metodolog%C3%ADas-%C3%A1giles) comparten: **son las herramientas las que se tienen que adaptar a ti y no al contrario**.  A nosotros nos encantaría [ayudarte](https://excentia.atlassian.net/servicedesk/customer/portal/14) en la aventura de construir ese ciclo global con herramientas específicas para tí y tus objetivos. ¿Te apuntas?