---
layout: post
title: 'Resumen SonarSource City Tour 2017'
description: Conoce en 2 minutos de que se habló en el SonarSource City Tour 2017 y cuáles fueron las impresiones generales.
date: '2017-12-01T08:00:00.000+01:00'
author: Andrea Crespo 
categories: 
- eventos
- sonarsource

modified_time: '2017-12-01T08:00:00.000+01:00'
cover: /img/posts/2017-12-1-resumen-ssct.png
---

<a href="http://www.excentia.es/sonarsource" target="_blank"><img class="center" width="100%" alt="Resumen de las novedades contadas en el SonarSource City Tour 2017" title="Resumen SSCT" src="/img/posts/2017-12-1-resumen-ssct.png"></a>

¿Te perdiste al equipo de [SonarSource](https://www.sonarsource.com/) en Madrid? ¿Quieres saber en 2 minutos de qué se habló y cuáles fueron las impresiones generales? Si es el caso, ¡sigue leyendo! Hoy en [excentia](http://www.excentia.es/) te contamos un resumen de lo que sucedió, e intentaremos ayudarte a que no te pierdas ni una noticia más del ecosistema de **SonarSource**. 

El *SonarSource City Tour 2017* acabó en Madrid el pasado miércoles. [Olivier Gaudin](https://twitter.com/gaudol?lang=es), CEO y co-fundador de **SonarSource**, [Fabrice Bellingard](https://twitter.com/bellingard?lang=es), [Tibor Blenessy](https://twitter.com/saberduck?lang=es) y Adriana Zwierzanska (responsable de negocio para la comunidad [hispanohablante](https://www.sonarqubehispano.org/)), estuvieron en el NH Nacional junto al equipo de [excentia](http://www.excentia.es/#vision). Ambos partners organizamos una sesión muy informativa e intensa. 

Han sido muchas las novedades que han sucedido en **SonarSource** en los últimos meses y tratamos de contarlas todas en una mañana. Las impresiones tanto de los asistentes como de los organizadores fueron sensacionales. Todos los asistentes estuvieron de acuerdo en la importancia de los aspectos explicados y en que fue una gran oportunidad para obtener los mejores consejos sobre **SonarSource** de la mano de los más expertos en ello. 
Desde la cultura que reside en cada producto y oferta de **SonarSource**, pasando por el nuevo modelo de precios y haciendo hincapié en cada una de las nuevas funcionalidades de **[SonarQube 6.7 (LTS)](http://www.excentia.es/novedades-importantes-en-sonarsource)**, todos tuvimos mucho que analizar y estudiar. Así que… ¡allá va el resultado!

## Las principales mejoras que trae SonarQube 6.7 (LTS)

* *Análisis por ramas*: las ramas que están vivas heredan perfiles, umbrales de calidad, configuraciones e incidencias de la rama principal, y reciben una presentación con todos los datos similar a la que se muestra a nivel de proyecto. Las ramas por característica, con ciclos de vida más cortos, se centran solamente en nuevas incidencias.

* *Un análisis más inteligente y poderoso*: con tecnología como la ejecución simbólica y el análisis del flujo de datos, se consigue encontrar los **bugs** más complejos y se evitan **falsos positivos**. Pero no solo eso, con esta nueva versión se pretende mejorar las habilidades del desarrollador. El responsable del proyecto podrá no sólo ver cuando ha habido un **bug**, sino también saber por qué ha ocurrido (con información de los pasos exactos a través del código). Esto sumado con la introducción de la [**complejidad cognitiva**](https://blog.sonarsource.com/cognitive-complexity-because-testability-understandability), facilita y mucho la filosofía imperante de **mejora continua**. Además definimos que entendemos por **bug**: “Un trozo de código que no puede haber sido escrito intencionadamente y que tiene una probabilidad muy alta de provocar un comportamiento no deseado”. Bugs, complejidad cognitiva y falsos positivos… ¡Fue una de las charlas más aclamadas! [*Kill the noise*](http://www.excentia.es/kill-the-noise-sonarqube) amigo mío. 

* *El foco en lo que realmente importa*: ahora será mucho más fácil encontrar aquello que estás buscando. En cada proyecto, los miembros de todo el equipo tendrán acceso a un historial, gráficas de métricas e incluso podrás configurarte tus propias gráficas para vigilar aquello que consideres más relevante. 

* *Inspección continua de la calidad del código*: **SonarSource** apuesta fuerte por la filosofía [**DevOps**](http://www.excentia.es/que-es-DevOps). Queremos que todo simplemente funcione, y por eso ya no tendrás que abandonar el IDE para saber si el *Quality Gate* ha cambiado o si se te ha asignado alguna nueva incidencia. Integración entre aplicaciones = trabajo fluido y continuo.


Y podríamos seguir escribiendo y explicando, pero no es el objetivo. Sin embargo, si es un objetivo facilitar el acceso a todas las novedades y a una explicación concreta de todas sus características. Y para eso sólo tienes que ^[leer esta página](https://www.sonarqube.org/sonarqube-6-7-lts/). 

## Cultura de calidad son SonarSource
[*Fix the Leak*](http://www.excentia.es/una-fuga-de-agua-cambia-el-juego-en-la) es la charla favorita de Olivier. Nos confesó que en una ocasión estuvo más de 50 minutos hablando sobre ello. Eso es convicción por hacer las cosas bien. Cuando tienes una fuga de agua en casa, ¿qué haces primero? ¿Detener la fuga o secar y fregar el piso? La respuesta es muy sencilla e intuitiva: detener la fuga. ¿Por qué? Porque sabes que cualquier otra acción será inútil y que es sólo cuestión de tiempo que la misma cantidad de agua esté de nuevo en el suelo.

Así que ¿por qué tendemos a comportarnos de manera diferente con la **calidad del código**? Cuando analizamos una aplicación con **SonarQube** y averiguamos que tiene una gran cantidad de deuda técnica, por lo general lo primero que queremos hacer es secar y fregar – eso, o idear un plan de remedio. ¿Por qué no aplicamos la lógica simple que usamos en casa al manejar nuestra **calidad del código**? No sé por qué, pero sí sé que el enfoque de remediar primero no es nada bueno. El arreglo de la fuga significa poner toda la atención en el código "nuevo", es decir, el código que se ha añadido o cambiado desde la última versión. Entonces, todo es más fácil.

## SonarCloud
Fabrice nos presentó a su creación con mucho cariño. **SonarCloud** o **SonarQube** como un servicio, eso es. Es difícil acceder a [información](https://about.sonarcloud.io/) sobre el gran desconocido de **SonarSource**. Todos hemos escuchado hablar de **SonarLint** y de **SonarQube** pero muchos hacen caras raras cuando se menciona el servicio en la nube de [**SonarQube**](https://www.sonarqube.org/). De nuevo, facilitamos información para que estés siempre al día con esta apuesta que está funcionando tan bien. 6000 proyectos públicos y 16000 usuarios en solo unos meses de funcionamiento… ¡Enhorabuena compañeros! 


Además de todo esto también hablamos sobre [SonarLint](https://www.sonarlint.org/), *gamificación*, alta disponibilidad… 

Por último, Antonio Calero nos contó en una amena y apreciada charla **cómo escribir código limpio** y recalcó la importancia, repercusión y ahorro de **medir la calidad de código** en el momento adecuado. 

## Para finalizar...
El último consejo que queremos daros hoy para cerrar este resumen creemos que os será bastante útil. Una de las mayores ventajas de **SonarQube** es precisamente la posibilidad de con una misma plataforma analizar lenguajes distintos. No tendremos que usar programas distintos para tecnologías distintas.  Sin embargo, para poder disfrutar de estas ventajas necesitamos estar alerta y disponer siempre de las últimas actualizaciones. Por eso desde [excentia](http://www.excentia.es/) os recomendamos encarecidamente que os suscribáis a este [boletín](https://www.sonarsource.com/resources/product-news/). Recibiereis emails claros y sencillos, sobre las últimas actualizaciones y no os preocupéis por comunicaciones comerciales, eso queda para otras suscripciones. Así que no lo dudéis y darle al [botón](http://feedburner.google.com/fb/a/mailverify?uri=Sonarsource&loc=en_US). 
