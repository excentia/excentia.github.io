---
layout: post
title: 'Gestión de SLAs en Jira Service Desk'
description: Los SLAs (Service Level Agreements) o en castellano ANS (Acuerdos de Nivel de Servicio) son acuerdos o contratos que realiza un proveedor de servicios con un cliente interno o externo. Este compromiso entre servicio y cliente ayuda a medir la calidad de los servicios contratados. 
date: '2018-03-07T08:00:00.000+01:00'
author: Alberto Alós
categories: 
- opinion
- calidad
- jira
- metodologia
- gestion
- atlassian

modified_time: '2018-03-07T08:00:00.000+01:00'
---

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Gestión de SLA en Jira Service Desk" title="Gestión de SLA en Jira Service Desk" src="/img/posts/Gestion de SLA en JSD.png"></a>

Esta es una de esas entradas que compartimos con mucho orgullo. Demandado por muchos de nuestros clientes y conocidos, hoy os traemos una explicación clara y sencilla de la gestión de SLAs - o en español, ANS - usando la herramienta estrella de Atlassian: [Jira Service Desk](https://es.atlassian.com/software/jira/service-desk). 

## ¿Qué es un SLA?
En el mundo de los servicios, los SLAs (Service Level Agreements) o en castellano ANS (Acuerdo de Nivel de Servicio) son acuerdos o contratos que realiza un proveedor de servicios con un cliente interno o externo. Este compromiso entre servicio y cliente ayuda a medir la calidad de los servicios contratados. 

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Acuerdos de Nivel de Servicio en Jira Service Desk" title="Acuerdos de Nivel de Servicio en Jira Service Desk" src="/img/posts/2018-03-07-sla1.jpeg"></a>

Con el fin de ejemplificar los SLAs, vamos a explicar qué métricas se suelen incluir:

* Disponibilidad de un servicio (porcentaje, suele ser un 99%).
* Métricas de rendimiento de un servicio determinado (velocidad, tiempos de carga).
* Tiempos de notificación en caídas de servicio "downtime".
* Tiempos de respuesta en comunicaciones con el cliente.

El origen del SLA se encuentra en los proveedores de servicios de telefonía, redes e IT en general. En este sector, el cliente contrata servicios relacionados con unas determinadas tasas de velocidad, capacidad y tiempos que deben ser medibles. Si un proveedor ofrece una tasa de velocidad determinada de acceso a la red, debe ser capaz de medirla y de cumplir con lo acordado en el contrato.

Actualmente, el concepto de SLA se ha transportado a los grupos de IT y a los grupos de atención al cliente de las organizaciones. El departamento de IT da servicio a los clientes internos (trabajadores dentro de la misma compañía) y cumple con unos tiempos de respuesta y de resolución previamente establecido. En un CAU (Centro de Atención al Usuario) los clientes realizan solicitudes de soporte y los agentes han de cumplir con los SLAs típicos (tiempo de primera respuesta y tiempo de resolución).

## Configuración de SLAs en Jira Service Desk
En Jira Service Desk, un SLA es representado mediante un cronómetro que se activa cuando llega una nueva solicitud/incidencia y/o cuando ocurre un determinado evento. Pero, ¿no hay determinadas condiciones dónde no debería contar el tiempo? ¿Qué ocurre si en el contrato pactado con los clientes, se han especificado determinados días festivos? ¿Y si un ticket abierto por un cliente está pendiente de información por parte del solicitante? Ese tiempo debe ser excluído de forma automática de nuestros "cronómetros." Los SLAs se componen de dos elementos básicos: tiempo a medir y metas. 

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Configuración SLA en Jira Service Desk" title="Configuración SLA en Jira Service Desk" src="/img/posts/2018-03-07-configuracion-sla-en-JSD.png"></a>

En este caso, se ha configurado un SLA que mide el tiempo de resolución de los tickets en un proyecto de Jira Service Desk. Debemos hacernos varias preguntas antes de comenzar. ¿En qué situaciones debería empezar a contar el tiempo?, ¿y cuándo paramos el tiempo?, ¿hay alguna situación pactada con nuestros clientes dónde no se han de medir tiempos?

Veamos este caso en concreto, nuestro cronómetro comenzará a contar cuando se cree un nuevo ticket, y se detendrá cuando se haya establecido una resolución. ¿En qué caso debería pararse el cronómetro para después volver a reanudarse el tiempo? Por supuesto, si estamos esperando respuesta de un cliente. Existen casos, donde el solicitante puede no estar de acuerdo con la resolución y volver a reabrir un ticket, si es el caso, pondremos que nuestro cronómetro se reinicie cuando el ticket se haya reabierto.

¿Y si no todos los tipos de tickets tienen fijados los mismos tiempos de respuesta o de resolución? Existen determinadas condiciones que requieren tiempos más estrictos. Podemos establecer mediante filtros JQL (Jira Query Language) diferentes metas u objetivos dentro de un mismo proyecto o mesa de servicio en Jira Service Desk. En el caso de la imagen, se ha decidido que todos los tickets que sean incidencias se tendrán que resolver en menos de 4 horas. Se pueden definir tantas "condiciones" o metas como se requiera. Por supuesto, no hay que definir cada caso. Una vez se han establecido las condiciones específicas, todos los demás tickets se rigen por una meta por defecto. En el caso de la figura, serían 40 horas.

La última columna permite elegir un calendario para cada meta. Así de esta forma, controlamos cuándo va a contar el tiempo, a qué horas y qué días del año.

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Configuración SLA en Jira Service Desk" title="Configuración SLA en Jira Service Desk" src="/img/posts/2018-03-07-configuracion-sla-en-JSD-time.png"></a>


## Visualización de SLAs en Jira Service Desk

Los agentes de un Help Desk de Jira Service Desk pueden visualizar el tiempo restante de cada ticket desde las colas de Jira Service Desk y desde el propio ticket.

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Configuración SLA en Jira Service Desk" title="Configuración SLA en Jira Service Desk" src="/img/posts/2018-03-07-1.jpg"></a>

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Configuración SLA en Jira Service Desk" title="Configuración SLA en Jira Service Desk" src="/img/posts/2018-03-07-2.png"></a>

**Esta forma de visualización de SLAs permite a los agentes dedicar su tiempo a los tickets que puedan estar a punto de incumplir las condiciones establecidas en los acuerdos de nivel de servicio**.

Además, Jira Service Desk utiliza colores muy descriptivos que mejoran la visualización y el tiempo de respuesta por parte de los agentes.

**Visualización de SLAs en curso:**

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="300px" height="150px" alt="Configuración SLA en Jira Service Desk" title="Configuración SLA en Jira Service Desk" src="/img/posts/2018-03-07-4.png"></a>

**Visualización de SLAs completados:**

<a href="http://www.excentia.es/atlassian" target="_blank"><img class="center" width="100%" alt="Configuración SLA en Jira Service Desk" title="Configuración SLA en Jira Service Desk" src="/img/posts/2018-03-07-3.png"></a>

## ¿Por qué Jira Service Desk?
Con esta explicación más práctica sobre el funcionamiento de Jira Service Desk, esperamos haberos convencido de por qué esta herramienta está triunfando en la gestión de servicios IT. 
No dudes en comentar o escribirnos si tienes cualquier duda o te gustaría ampliar información. 



