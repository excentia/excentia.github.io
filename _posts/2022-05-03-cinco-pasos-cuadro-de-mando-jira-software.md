---
layout: post
title: '5 pasos para crear un cuadro de mando excelente en el software Jira'
description: Descubre cómo potenciar tus prácticas ágiles con este cuadro de mando ágil en Jira Software

date: '2022-05-03T08:00:00Z'
author: Marisa Martín
categories: 
- productos
- atlassian

cover: /img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software.png

---

Imagínate saber con antelación que una reunión va por buen camino antes de que nadie diga una palabra. O volver de 
vacaciones y ver las actualizaciones detalladas del proyecto de un vistazo, antes incluso de consultar el correo 
electrónico. **¡Esto podría pasarte con [Jira Software](https://www.excentia.es/calidad-de-procesos)!**

¿Y qué pasa cuando las cosas van (inevitablemente) mal? ¿Conoces el momento en el que no para de crecer los errores y 
te sobrepasan? Identifica qué miembros del equipo son críticos antes de seleccionarlos para un proyecto nuevo.

¡Crea un tablero de control en Jira Software! Vigila e identifica los obstáculos con antelación:

<img style="width: 100%" src="/img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software-dashboard.png" />

---

## Paso 0: crea un nuevo Dashboard.

Fácil. Ve a Dashboard, selecciona "Crear Dashboard", y ponle el nombre que quieras.

## Paso 1: añade estos cinco gadgets.

Empieza con lo estrictamente necesario: el progreso general, el trabajo dividido por persona o subtarea, y las 
tareas de alta prioridad en primer plano. Añade:

•	Filtrar resultados

•	Gráfico de creados vs. resueltos

•	Estadísticas de las incidencias: añade este dos veces

•	Hoja de ruta

<img style="width: 100%" src="/img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software-add-gadget.png" />

Cuando hayas añadido los cinco, cierra el cuadro de diálogo.

## Paso 2: échale un vistazo al progreso.

Todas las mañanas tienes un "presentimiento" sobre cómo van a ir las cosas. Utiliza el gadget de la “Hoja de ruta” 
para reafirmar tu corazonada cada vez que eches un vistazo al cuadro de mando.

<img style="width: 100%" src="/img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software-roadmap.png" />

El gadget de la “Hoja de ruta” te ofrece una **vista rápida del número de tareas asignadas a tu próxima versión**, y 
cuántas de ellas se han resuelto.

•	Para simplificar las cosas, configura este _gadget_ para que muestre solo un proyecto (nos quedaremos con este mismo 
proyecto para todo el cuadro de mando), y deja los otros campos con las selecciones por defecto.

•	Haz clic en "guardar" y verás la evolución del progreso de las incidencias, basado en la _Versión Correctora_ 
seleccionada. Ten en cuenta que el estado de las incidencias sin versión de correctora no se reflejará aquí.

## Paso 3: detectar los obstáculos y los problemas con antelación.
### Quién lleva el peso

¿Cuánto trabajo se retrasará si un miembro del equipo se pone enfermo? ¿Y si alguien se ve obligado a ayudar en un 
proyecto secundario? Tienes que saber qué miembros del equipo tienen una mayor carga de trabajo, para poder demostrar 
quién es crítico para tu lanzamiento y por qué, y tener un plan de apoyo.

Una indicación visual de la carga de trabajo por persona es fundamental para controlar el progreso del equipo.

•	Para el primer gadget de estadísticas de incidencias, elige el mismo proyecto que el anterior y selecciona 
comparar las estadísticas por asignado.

•	Establece "Mostrar estadísticas de incidencias resueltas" en “Ninguna”, porque las incidencias resueltas no 
afectaran al progreso futuro.

### Qué áreas del proyecto requieren más esfuerzo

Naturalmente, algunos aspectos de tu proyecto son más importantes que otros. Depende de ti mantener a tu equipo 
trabajando en las partes correctas: si el resto de la empresa se centra en la incorporación de los primeros usuarios, 
pero tu trabajo actual se centra en aumentar el rendimiento con grandes conjuntos de datos, tienes un problema.

<img style="width: 100%" src="/img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software-components.png" />

La visualización de la carga de trabajo de equipo, en la forma que tu equipo categoriza las subsecciones de tu proyecto, 
“Componentes de Jira”, te permitirá ver dónde el equipo está invirtiendo más tiempo para que puedas estar seguro de 
que tu proyecto encaja dentro de los objetivos de la organización.

•	Para el segundo gadget de estadísticas de incidencias, vuelve a elegir el mismo proyecto.

•	Compara las estadísticas por Componente (de nuevo establece "mostrar estadísticas de incidencias resueltas" en Ninguna).

Ten en cuenta que puedes cambiar esta selección más adelante si, por ejemplo, deseas supervisar el tipo de incidencia 
para ver el porcentaje relativo de trabajo de corrección de errores y de características restante.

## Paso 4: trabajar para el hito actual

Si quieres saber inmediatamente cuando las cosas se desbaratan, es fundamental estar atento en el progreso hacia la 
próxima versión. Cuando los errores se acumulan a un ritmo superior al habitual, o el cambio de alcance añade nuevas 
características después de que se hayan fijado las fechas de lanzamiento, vas a tener que reevaluar los hitos del 
proyecto.

<img style="width: 100%" src="/img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software-search.png" />

Observar la **cantidad de trabajo que se está añadiendo** es la forma de garantizar que las fechas planificadas sean realistas.

Los gadgets del panel de control de Jira pueden mostrar información por proyecto, como hemos visto anteriormente, 
y puedes profundizar en detalles más específicos mediante la creación de una búsqueda guardada, llamada filtro.

•	Ve a la pestaña “Asuntos” en la cabecera de Jira, y cambia al modo “Avanzado”. Comienza a escribir y Jira 
autocompletará las opciones de búsqueda por ti.

•	Selecciona tu proyecto y añade el parámetro para configurar la versión. El operador dinámico _earliestUnreleasedVersion()_ 
mostrará las incidencias en función de las fechas de publicación que hayas establecido para las versiones de tu proyecto.

•	Guarda este filtro y dale un nombre descriptivo, algo así como **_Issues in Next Fix Version_**.

•	Vuelve a tu panel de control para seleccionar su nuevo filtro, **Incidencias en la próxima versión correctora**, 
para el gadget de gráfico creado frente a resuelto. Deja los otros campos con sus valores por defecto por ahora.

### ¿Cumplirás con los objetivos de las fechas?

Si el progreso está dentro del objetivo, el número de incidencias resueltas (trabajos completados) debería superar el 
número de incidencias creadas (nuevos proyectos añadidos). Si aparecen incidencias por sorpresa, poniendo en riesgo la 
fecha de lanzamiento, el gráfico podría parecerse al de la izquierda. Si el progreso se ajusta al objetivo, el número 
de problemas resueltos (trabajo completado) debería superar el número de problemas creados (nuevo trabajo añadido). Si 
aparecen problemas por sorpresa, con el riesgo de retrasar la fecha de lanzamiento, el gráfico podría parecerse al de 
la izquierda.

<img style="width: 100%" src="/img/posts/2022-05-03-cinco-pasos-cuadro-de-mando-jira-software-progress.png" />

La cantidad de trabajo añadido (en rojo) está aumentando, mientras que la cantidad de trabajo completado (en verde) se 
mantiene constante. O bien el equipo tiene que intensificar su trabajo o la fecha de lanzamiento estimada se retrasará.

## Paso 5: cuidado con los elementos de alto riesgo

Siempre hay una subsección del trabajo del proyecto que conlleva un riesgo adicional. Se sabe que los temas con una 
estimación de tiempo mayor son complejos, y el trabajo existente que ha sido revisado como un mayor consumo de tiempo 
son banderas rojas.

Modificar un filtro existente es una buena manera de profundizar en un subconjunto del trabajo actual. Vuelve a la 
búsqueda de Jira seleccionando la pestaña “Asuntos”. El filtro del paso 4 probablemente todavía está allí, y vamos a 
basarnos en él (si no hay ninguna búsqueda seleccionada, encuéntralo en tu lista de Historial de búsqueda a la 
izquierda, o en el menú desplegable de Asuntos en la parte superior).

•	Selecciona la pestaña Editar para crear otra búsqueda avanzada. Añade el parámetro de estimación de tiempo:

<pre>project = "Angry Nerds" AND fixVersion = earliestUnreleasedVersion() AND originalEstimate > 4h</pre>

•	**Guarda esto como un nuevo filtro**, dándole otro nombre descriptivo como “**Estimación de más de 4 horas**”.

### Mantén las grandes incidencias al frente y en el centro

Vuelve a tu panel de control y configura su nuevo filtro para que aparezca en el gadget Resultados de los filtros.

•	Selecciona el filtro “Estimación en más de 4 horas” y añada el campo “Asignado” además de las cuatro columnas que 
aparecen por defecto. Querrás ver de un vistazo quién está trabajando en esos grandes asuntos.

## Termina tu cuadro de mando: limpio, ¿y qué más falta?

Este tutorial fue diseñado para darte una idea de lo que es posible. Naturalmente, detectarás áreas en las que querrás 
profundizar en el trabajo del proyecto; un cuadro de instrumentos es una página viva, y debes ajustar y evolucionar 
las cosas según sea necesario. He aquí algunas ideas:

•	Hacia el final de un ciclo de lanzamiento, las correcciones de errores se vuelven críticas. Edita el filtro del 
gadget del gráfico de “Creados vs. Resueltos” para limitar la búsqueda a sólo los fallos.

•	Vigila las incidencias huérfanas: añada un gadget de “Filtro de resultados” con un filtro que seleccione todas las 
incidencias de su proyecto en las que fixVersion haya cambiado a EMPTY.

•	A algunas personas les gustan más los gráficos que las barras de porcentajes, así que muestra los desgloses de 
trabajo de forma visual: prueba el gadget “Mapa de calor” o “Gráfico circular” con tu filtro “Incidencias en la próxima 
versión de corrección”.

Si aún no conoces las [3 claves del éxito de Jira Software Cloud](https://www.excentia.es/tres-claves-exito-jira-software-cloud) no dudes de visitar nuestro blog para descubrirlo.

Referencia al artículo original de **Cristina Bang**:
[Atlassian](https://www.atlassian.com/blog/jira-software/5-steps-to-build-a-killer-dashboard)
