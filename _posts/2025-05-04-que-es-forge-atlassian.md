---

layout: post
title: ¿Qué es Forge? La solución de Atlassian para desarrolladores
description: Descubre qué es Atlassian Forge, cómo se compara con Connect y qué ventajas ofrece para desarrollar apps seguras en Cloud.
date: '2025-05-04T08:04:00Z'
author: Belén Casanovas
categories:

- atlassian
- forge

cover: img/posts/2025-05-04-que-es-forge-atlassian.png

---



<h2>¿Qué es Forge?</h2>

Forge es la plataforma de Atlassian para desarrollar, desplegar y alojar aplicaciones **directamente en la nube de Atlassian**. A diferencia de Atlassian Connect, Forge permite a los desarrolladores **construir apps** sin necesidad de gestionar servidores externos, aprovechando una infraestructura *serverless* con funciones *backend*, almacenamiento, UI y seguridad incluidos de forma nativa.

Tal y como informa Atlassian, las aplicaciones desarrolladas con Forge se ejecutan **dentro de una segunda capa de seguridad** que aplica el aislamiento por tenencia y la restricción de salida de datos por diseño. Esto garantiza un entorno de ejecución **más controlado, reduciendo el riesgo de exposición de datos** entre distintas instancias de clientes.

Además, Atlassian define un modelo de responsabilidad compartida en el que se detalla **qué elementos de la seguridad y el cumplimiento** son gestionados por Atlassian y **cuáles corresponden al desarrollador**. Este enfoque ayuda a tener una visión clara sobre las responsabilidades a la hora de crear y mantener aplicaciones en Forge.

<h2>Forge vs Connect</h2>

A continuación, comparamos [Forge](https://developer.atlassian.com/platform/forge/){:target="_blank"} y Connect en sus **aspectos clave**: arquitectura, despliegue, seguridad e integración. Esta tabla te ayudará a elegir la mejor opción según los requisitos de tu desarrollo en Atlassian Cloud.

| Característica | Forge                        | Connect     |
| -------------- | ---------------------------- | ----------- |
| Hosting        | Gestionado por Atlassian     | Externo     |
| Backend        | Functions (*resolvers*)      | API externa |
| UI             | UI Kit / Custom UI           | HTML/CSS/JS |
| Seguridad      | *Scopes* + *sandbox* nativos | Manual      |
| Despliegue     | Automático (`forge deploy`)  | Manual      |



<h2>Beneficios de Forge</h2>

Si sigues teniendo dudas sobre qué plataforma utilizar, a continuación te explicamos los beneficios que tiene el uso de Forge para tus desarrollos: 

- **Seguridad nativa**: Sandboxes, scopes y autenticación gestionada

- **Desarrollo simplificado**: Hosting, funciones y almacenamiento integrados

- **Despliegue instantáneo**: Un solo comando (deploy) para publicar

- **Escalabilidad automática**: Arquitectura basada en la nube

- Integración total con Jira y Confluence


<h2>Preguntas frecuentes (FAQ)</h2>


<h3>¿Forge es gratis?</h3>

Forge es gratis hasta el **31 de diciembre de 2025**. A partir de esa fecha, Forge tendrá un modelo de precios basado en el consumo. 

<h3>¿Qué productos de Atlassian son compatibles con Forge?</h3>

Forge te permite crear aplicaciones con **Bitbucket, Compass, Confluence, Jira, Jira Service Management** y **Rovo**. 

<h3>¿Qué lenguajes utiliza Forge?</h3>

Las aplicaciones de Forge están en **JavaScript**. El entorno de ejecución es Node.js.


Como has podido ver, Forge se presenta como el futuro del desarrollo en Atlassian Cloud gracias a su simplicidad y seguridad. Es la **plataforma ideal** para equipos que quieren poner en marcha soluciones ágiles y escalables. 

Como siempre te decimos, no dudes en ponerte [en contacto](/contacto){:target="_blank"} con nuestro equipo para resolver tus dudas. 


