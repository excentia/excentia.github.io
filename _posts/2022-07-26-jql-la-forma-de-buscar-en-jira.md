---
layout: post
title: 'JQL: la forma más flexible de buscar en Jira'
description: Jira Query Language (JQL) es la forma más potente y flexible de buscar tus asuntos en Jira. Aquí te enseñamos cómo hacerlo.

date: '2022-07-26T08:00:00Z'
author: Marisa Martin
categories:

- productos
- atlassian
- jira cloud

cover: /img/posts/2022-07-26-jql-la-forma-de-buscar-en-jira.png

---

JQL son las siglas de Jira Query Language (Lenguaje de consulta de Jira) y es la forma más potente y flexible de buscar tus
asuntos en Jira. JQL es para todo el mundo: desarrolladores, evaluadores, gestores de proyectos ágiles y usuarios
empresariales. 

Este artículo busca ser un tutorial para aquellos que no tienen experiencia en las consultas de base de
datos y quieren un acceso más rápido a la información en Jira Cloud. 

Así que básicamente si trabajas en Jira Cloud este artículo es para ti.
<br><br>

## Buscar en Jira: ¿cómo empezar?

### El cuadro de búsqueda

La función de búsqueda más sencilla de Jira es el cuadro de búsqueda situado en la parte superior derecha de la pantalla.

<img width="100%" src="/img/posts/2022-07-26-jql-la-forma-de-buscar-en-jira-cuadro-de-busqueda.png">

Puedes utilizar este cuadro de búsqueda para buscar:

- Una incidencia o asunto en particular: 
<pre>JiraKEY-15</pre>

- Buscar en el texto (busca en el resumen del asunto, la descripción y los comentarios).
<pre>atlassian</pre>

- Y por último, el campo ofrece la posibilidad de lanzar [consultas inteligentes](https://confluence.atlassian.com/jiracoreserver073/quick-searching-861257204.html#Quicksearching-Smartquerying).
    - Esto te dará una lista con todos los Bugs que están en estado Abierto y asignados a ti.
<pre>my open bugs</pre>

<br><br>
### Búsqueda de asuntos

También puedes buscar asuntos desde la sección "Issues" del menú desplegable.

<img width="100%" src="/img/posts/2022-07-26-jql-la-forma-de-buscar-en-jira-seccion-busqueda.png">

En la pantalla que se acaba de abrir podrás filtrar fácilmente en función de los valores de 
determinados campos. Puedes filtrar en cualquier campo disponible en Jira (en función de los proyectos seleccionados).

<br>
## Búsquedas básicas y avanzadas

Hay dos tipos de búsquedas en Jira: básicas y avanzadas. 

Las búsquedas básicas, como las que se muestran arriba, 
presentan un conjunto de formularios que puedes rellenar, como el nombre del proyecto, el tipo de incidencia, el 
estado y la persona asignada. La búsqueda básica puede ser útil para obtener una visualización de prioridad de sus 
asuntos y su estado.

Ahora, la [búsqueda avanzada](https://confluence.atlassian.com/jira064/advanced-searching-720416661.html) es donde te adentrarás en JQL, usándolo para hacer consultas. Las consultas son una serie 
de elementos simples encadenados para formar una pregunta más compleja. Una consulta tiene tres partes básicas: campos, 
operadores y valores.

- **Campo** - Los campos son diferentes tipos de información en el sistema. Los campos de Jira incluyen prioridad, fixVersion, tipo de incidencia, etc.

- **Operador** - Los operadores son el corazón de la consulta. Relacionan el campo con el valor. Los operadores comunes incluyen igual (=), no igual (¡!), menos que (<), etc.

- **Valor** - Los valores son los datos reales de la consulta. Suelen ser el elemento que se busca.

- **Palabra clave** - Las palabras clave son palabras específicas del lenguaje que tienen un significado especial. En este post nos centraremos en AND y OR.

<br><br>
## Palabras clave importantes que hay que conocer

Atlassian ha creado una referencia JQL donde puedes encontrar todas las palabras clave, operadores, etc. que se pueden
utilizar en JQL. Esta es tu guía cuando quieras descubrir nuevas capacidades de búsqueda. Aquí están algunas de las
palabras clave y operadores más comunes:

**AND**

Esto solo devolverá las incidencias que coincidan con ambas cláusulas (que formen parte del proyecto Collaboration y 
que tengan su estado establecido como "En curso").

<pre>project = Collaboration AND status = "In Progress"</pre>

**OR**

Devuelve todas las incidencias del proyecto Collaboration o que tienen el estado "En curso".

<pre>project = Collaboration OR status = "In Progress"</pre>

**IS**

Esto devolverá todas las incidencias o asuntos que no tienen descripción.

<pre>description IS EMPTY</pre>

<br><br>
## Operadores
**!=**
<pre>status != "To Do"</pre>
Devuelve todos los asuntos excepto los que tienen su estado establecido como "Por hacer".

**>=**
<pre>"Story Points" >= 5</pre>
Encuentra todos los temas que tienen Puntos de Historia que son mayores o iguales a un valor determinado.

**Similar**

\> | greater than
\< | smaller than
\<= | smaller than or equal

**IN**
<pre>status IN ("To Do", "In Progress", "Closed")</pre>

es lo mismo que
<pre>status = "To Do" OR status = "In Progress" OR status = "Closed"</pre>

Encuentra todas las cuestiones que tienen el estado "Por hacer", "En curso" o "Cerrado".

**Negación**

- **NOT IN**

<br>
## Poniéndolo en práctica

Empecemos con un ejemplo sencillo. Digamos que quieres ver qué asuntos ha reportado tu compañero de equipo en un 
determinado proyecto. Tu consulta sería:
<pre>reporter = jsmith AND project = Pipeline</pre>

Aquí usamos la palabra clave "AND" para consultar en Jira los asuntos reportados por John Smith en el proyecto "Pipeline".

Otras veces puedes querer que la consulta haga referencia a un conjunto de elementos. Por ejemplo:

**¿Qué asuntos bloquean o son críticos en los proyectos A, B y C?**
<pre>priority in (Blocker, Critical) AND project in (ProjA, ProjB, ProjC)</pre>

La palabra clave "in" incluirá cualquier elemento que coincida con cualquier elemento de la lista. En el ejemplo anterior, 
devolverá todos los errores bloqueadores y críticos de los proyectos A, B y C.

Esto es extremadamente útil para las organizaciones que tienen acuerdos de nivel de servicio (SLA) con su base de clientes. 
Una consulta JQL puede encontrar fácilmente los problemas que no están cumpliendo ese SLA.

**¿Qué asuntos están sin asignar y no han sido actualizados en el último día?**
<pre>assignee is EMPTY and created < -1d</pre>

En esta consulta el estado "está vacío" solo incluye las incidencias en las que el valor del campo "asignado" 
está en blanco. Esta consulta también muestra cómo Jira ofrece las fechas relativas. El valor -1d se evalúa como 
un día previo a la fecha actual cuando se ejecuta la consulta. 

Como resultado, la consulta anterior devolverá todas las incidencias que no están asignadas y que tienen al menos 
un día de antigüedad.

> ¡No te dejes intimidar por la búsqueda avanzada de Jira! El editor JQL de Jira facilita el aprendizaje de JQL. El editor te sugiere a medida que escribes. Por ejemplo, si queremos escribir el siguiente JQL: "project = Pipeline", Jira da sugerencias en cada paso del camino para cada uno de los tres componentes de nuestra consulta. Haz clic en "Ayuda de sintaxis" en cualquier momento si te quedas atascado.

Visita la [guía del producto de Jira Software](https://www.atlassian.com/software/jira/guides/expand-jira/jql) para obtener más información sobre JQL, la búsqueda avanzada con casos de 
uso y mucho más.

También hemos diseñado una infografía resumen de todo lo que explicamos en este artículo para realizar búsquedas con JQL, que la puedes encontrar a continuación. 

¡Nos vemos en próximos artículos!

<iframe src="//www.slideshare.net/slideshow/embed_code/key/3ul8viYXa0Kf4u" width="856" height="585" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/BelnCasanovasBabilon/infografa-jql-el-lenguaje-para-buscar-en-jirapdf" target="_blank">Infografía - JQL, el lenguaje para buscar en Jira.pdf</a></strong>