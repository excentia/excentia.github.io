---
layout: post
title: 'Jira incorpora Formula Field, cálculos en tiempo real directamente en tus work items'
description: Jira incorpora Formula Fields para realizar cálculos en tiempo real, usar fórmulas con JQL y crear cálculos con Rovo sin salir de Jira Cloud.
date: '2026-08-06T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-08-06-campos-formulas-jira.png

---

Jira Cloud incorpora los Formula Fields, <strong>campos de fórmula que permiten realizar cálculos automáticamente dentro de los work items.</strong> Los resultados se actualizan en tiempo real cuando cambian los datos utilizados en la fórmula y pueden utilizarse en búsquedas JQL, dashboards, automatizaciones y filtros.

Esta funcionalidad permite **convertir datos** que hasta ahora podían **requerir cálculos manuales** o **herramientas externas** en información calculada directamente en Jira. Además, con Rovo es posible generar fórmulas a partir de instrucciones en lenguaje natural o recibir sugerencias para corregir errores de sintaxis. Se trata de una de las novedades que ya te avanzamos en la Release de Jira Summer 2026 que publicamos en [este blog](/release-jira-summer-2026). 

<h2>¿Qué son los Formula Fields de Jira?</h2>

Los **Formula Fields** son un nuevo **tipo de campo personalizado de Jira** que permite calcular un valor a partir de otros datos de un mismo work item.

Por ejemplo, podemos crear un campo llamado <strong>RICE Score</strong> para calcular automáticamente la puntuación de una iniciativa mediante la fórmula:

<p><code>{Reach}*{Impact}*{Confidence}/{Effort}</code></p>

Cada vez que **cambie cualquiera de los valores utilizados en la fórmula**, Jira actualizará automáticamente el resultado. De esta forma, el dato calculado permanece sincronizado con la información del work item sin necesidad de actualizarlo manualmente.

Atlassian permite utilizar diferentes funciones y operadores para realizar cálculos matemáticos, condiciones y operaciones sobre los campos disponibles.

<h2>¿Qué puedes hacer con los Formula Fields?</h2>

La principal ventaja de los **campos de fórmula** es que los cálculos dejan de estar separados de los datos que los generan. El resultado forma parte del propio work item y puede utilizarse dentro del ecosistema de Jira.

- **Realizar cálculos en tiempo real**: el resultado se actualiza automáticamente cuando cambia un campo utilizado por la fórmula.

- **Buscar y filtrar resultados**: los valores calculados pueden utilizarse con JQL para localizar y organizar work items según el resultado de una fórmula. 

- **Utilizar diferentes tipos de salida**: las fórmulas pueden devolver resultados de tipo número, texto, fecha o duración, entre otros formatos disponibles.

- **Incorporar los resultados a otros procesos**: los valores calculados pueden utilizarse en dashboards, filtros y automatizaciones.

- **Generar fórmulas con Rovo**: puedes describir en lenguaje natural lo que quieres calcular y utilizar Rovo para ayudarte a crear la fórmula.

<h2>Del cálculo manual a la información accionable</h2>

Una de las consecuencias más interesantes de esta funcionalidad es que **reduce la necesidad de sacar información de Jira para realizar determinados cálculos en herramientas externas**.

Imaginemos, por ejemplo, un equipo que necesita **priorizar iniciativas utilizando una puntuación de riesgo**. Hasta ahora, ese cálculo podía mantenerse en una hoja de cálculo independiente o actualizarse manualmente. Con un Formula Field, la puntuación puede calcularse directamente a partir de los datos del work item.


<h2>Rovo también ayuda a crear las fórmulas</h2>

Otra de las novedades que hacen más accesible esta funcionalidad es su integración con Rovo.

En lugar de tener que conocer desde el principio la sintaxis necesaria, puedes **describir mediante lenguaje natural qué quieres calcular**. Rovo puede generar una propuesta de fórmula a partir de esa instrucción.

También puede ayudarte cuando existe un problema en la fórmula. Si Jira detecta un error de sintaxis, Rovo puede sugerir una corrección.

Esto facilita que los equipos puedan **utilizar cálculos más avanzados** sin tener que aprender previamente todas las funciones y operadores disponibles. Atlassian documenta actualmente funciones matemáticas, operadores condicionales y otras funciones que pueden utilizarse en los campos de fórmula.

<h2>¿Se pueden utilizar los Formula Fields con JQL?</h2>

Sí. Los resultados de los Formula Fields pueden utilizarse en búsquedas y filtros mediante Jira Query Language (JQL).

Esto es especialmente relevante porque convierte el resultado de una fórmula en **un dato que puede utilizarse para organizar y priorizar** el trabajo en Jira. Por ejemplo, podemos crear un campo calculado para obtener una puntuación y después utilizar ese valor para localizar los work items que superen un determinado umbral.

De esta forma, el cálculo no se queda simplemente como información visual dentro de un work item, sino que puede **integrarse en la forma en la que los equipos buscan**, filtran y gestionan su trabajo. 

<h2>¿Dónde se pueden crear los Formula Fields?</h2>

Los **administradores** pueden crear campos de tipo Formula tanto en **espacios gestionados por la empresa (<em>company-managed</em>) como en espacios gestionados por equipos (<em>team-managed</em>)**.


<h2>¿Qué limitaciones tienen actualmente los Formula Fields?</h2>

Aunque los campos de fórmula amplían considerablemente las posibilidades de cálculo dentro de Jira, existe una limitación importante: **las fórmulas se ejecutan sobre un único work item**.

Esto significa que una fórmula puede utilizar los datos disponibles dentro de un work item, pero no realizar cálculos que agreguen información de varios work items diferentes.

Por ejemplo, no podemos utilizar actualmente un Formula Field para sumar automáticamente el valor de varios work items secundarios y mostrar ese total en un Epic. Atlassian especifica expresamente que los cálculos entre diferentes work items no están soportados.

<h2>Conclusión</h2>

Los <strong>Formula Fields de Jira Cloud</strong> permiten llevar los **cálculos directamente a los work items**, actualizar sus resultados automáticamente y utilizar esa información en búsquedas, filtros y automatizaciones.

La incorporación de Rovo añade además una capa de inteligencia que **facilita la creación y corrección** de fórmulas mediante lenguaje natural.

Aunque todavía existen limitaciones, especialmente en los cálculos entre diferentes work items, los campos de fórmula ofrecen **una nueva forma de trabajar** con datos calculados dentro de Jira y pueden resultar especialmente útiles para equipos que necesitan convertir métricas, fechas o valores de distintos campos en información útil para la toma de decisiones.
