---
layout: post
title: 'Automatización de pruebas'
description: Reflexionamos acerca de la automatización de pruebas funcionales de software. Qué es exactamente esta práctica, cuándo aplicarla y por qué. 
date: '2018-01-11T08:00:00.000+01:00'
author: Andrea Crespo
categories: 
- calidad

modified_time: '2018-01-11T08:00:00.000+01:00'
cover: /img/posts/2018-01-11-automatización-de-pruebas.png
---

<a href="http://www.excentia.es/" target="_blank"><img class="center" width="100%" alt="Cabecera_Automatización de peurbas" title="Automatizacion de pruebas" src="/img/posts/2018-01-11-automatización-de-pruebas.png"></a>

La automatización es uno de los temas del momento. Ya os lo contamos cuando hablamos acerca de las [tendencias tecnológicas]( http://www.excentia.es/tendencias-tecnol%C3%B3gicas) más relevantes de nuestros tiempos, pero hoy nos centramos en el *testing automation*. Y lo primero que hay que decir al respecto, es que **la automatización de pruebas de software no garantiza la calidad del software. ¿Sorprendido? Entonces recuerda que la calidad de software va mucho más allá del testing**. Cuando hablamos de calidad de software hemos de tener en cuenta tres núcleos: la calidad del proceso de creación de código, la calidad del producto en sí, y la calidad del equipo que lo desarrolla. Sin [metodologías ágiles]( http://www.excentia.es/que-es-agile-y-como-adoptarlo) en el proceso, y un equipo de trabajo motivado, la calidad del producto en sí, aquello que parcialmente mides con el testing, se ve mermado. El testing es imprescindible para conseguir una buena calidad del software, sí, pero el testing solo mide software en ejecución. Además todos sabemos que el hecho de que el software funcione no significa necesariamente que esté bien construido **La [calidad del software]( http://www.excentia.es/calidad-producto-software) engloba un conjunto de factores y como tal, cada uno de estos factores es imprescindible para el conjunto, pero no determina el umbral de calidad por sí solo**. Así que hoy, nos centramos en una de esas pequeñas partes imprescindibles para el resto – la automatización de pruebas – pero sin olvidarnos que necesitará de sus compañeros de viaje para funcionar como se espera. 
## ¿Qué es la automatización de pruebas de software?
**La automatización de pruebas es la práctica que permite controlar la ejecución de un producto software de manera automática, comparando los resultados obtenidos con los resultados esperados**. Esta práctica permite no solo realizar pruebas repetitivas dentro de un proceso sino probar ejecuciones que manualmente serían difíciles de controlar. Sin embargo, la automatización de pruebas funcionales, no tiene como objetivo eliminar el testing manual, sino ayudarlo y complementarlo. Si automatizamos aquello que puede ser automatizado, entonces los testers tendrán más tiempo y podrán centrar sus esfuerzos en resolver los aspectos más complejos que se le escapan a la automatización de pruebas unitarias o repetitivas. 
En palabras de [Alexandra Blasco]( https://www.clavei.es/blog/2012/automatizacion-de-pruebas-un-paso-fundamental-para-mejorar-la-calidad-del-software/): *“la automatización consiste en la construcción de un conjunto de scripts reutilizables, con los que podemos aumentar drásticamente la capacidad de testear software en lo que respecta a pruebas de regresión antes y después de la publicación de una nueva versión. Dichos scripts se ajustan a cada funcionalidad y nos aportan una información del impacto de los cambios realizados”*. 

## ¿Por qué automatizar las pruebas funcionales?
Podríamos preguntárnoslo de otra manera, ¿cómo es que ahora todo el mundo automatiza? o ¿qué está sucediendo para que la automatización sea indispensable? Bien, la respuesta es lógica y sencilla. Dadas las nuevas tecnologías y enfoques clave como la [cultura DevOps]( http://www.excentia.es/que-es-DevOps), la productividad de los equipos de software ha aumentado mucho y el *time-to-market* se ha reducido considerablemente. Por tanto, todo aquello que: a) ayude a ser más ágil, b) permita a los desarrolladores dedicar tiempo a lo que realmente necesita de su atención, y, sobre todo, c) permita llegar al mercado mucho más rápida y eficientemente, es estratégicamente indispensable si se quiere sobrevivir en el mercado. A todo ello contribuye y mucho la automatización de pruebas funcionales- no sólo porque dejan tiempo al tester, sino porque además estas pruebas son reutilizables. 
Además, la automatización de las pruebas aporta tranquilidad al ajustar y mejorar las principales funcionalidades, ya que brindan información sobre el impacto de los cambios realizados.

## Beneficios de la automatización de pruebas funcionales
**La automatización del testeo de software permite reducir los costes de cualquier organización que necesite probar sucesivas versiones de un mismo producto**. Inviertes una vez en crear esas pruebas, y las automatizas múltiples veces. 
¿Qué otros beneficios aporta la automatización?  Nos gusta este [resumen](https://josepablosarco.wordpress.com/2009/09/29/testing-automatizado-automated-testing/) de Jose Pablo Sarco:

* Rapidez: Las herramientas de testing automatizado ejecutan pruebas significativamente más rápido que los testers humanos.
* Fiabilidad: Las pruebas ejecutan precisamente las mismas operaciones cada vez que se ejecutan, eliminando el error humano.
* Repetición: Se puede testear cómo reacciona el software bajo repetidas ejecuciones de las mismas operaciones.
* Programable: Se pueden programar pruebas sofisticadas y complejas que muestren información oculta de la aplicación.
* Reusabilidad: Se pueden rehusar los scripts con pruebas automatizadas, las funciones, etc…

## ¿Cuándo realizar automatización de pruebas funcionales de software?
Dadas las características de la automatización de pruebas funcionales que hemos descrito podemos deducir que no siempre y para todo sirven. **Las pruebas están diseñadas para funcionalidades concretas - fueron pensadas para agilizar una parte del proyecto, no para gestionar toda la calidad del código** (sí volvemos a la idea inicial). Por eso encontramos y encontraremos detractores de la automatización. Tenemos que ir con cuidado con el *testing automation*: es un arma de doble filo y como tal hay que saber usarla.
Entonces, ¿qué casos de prueba se deberían automatizar?

* Casos de prueba que se deban ejecutar en cada nueva versión de la aplicación - *Sanity Testing*.
* Casos de prueba que utilicen distintos datos de prueba para las mismas acciones - *Data Driven Testing*.
* Funcionalidades críticas de la aplicación - *Smoke Testing*.
* Funcionalidades que no cambiaran en un periodo de tiempo relativamente corto

## Herramientas para la automatización de pruebas de software. 
La pregunta del millón -  ¿qué herramientas utilizo para automatizar pruebas funcionales de software? – no tiene una respuesta sencilla.
Son tantas las variables y aspectos a tener en cuenta para elegir las herramientas adecuadas que sería difícil realizar un listado. Dependerá de la funcionalidad, del tipo de aplicación, del lenguaje, del sistema de trabajo… 
Sin embargo, [aquí]( https://testeandosoftware.com/las-mejores-herramientas-para-realizar-pruebas-de-software/) te dejamos un listado que consideramos bastante completo, pero, nuestra recomendación en este aspecto es clara: **antes de invertir en una herramienta de testeo de software, sea para automatizar o no, consulta a un experto en calidad de software**. Ninguna herramienta, por muy buena que sea, puede hacer magia. Recuerda que el testing es una pequeña, pero indispensable parte de un conjunto, por lo que no puedes tratarlo por separado, ni desintegrarlo del resto de factores que influyen en la calidad de tu software. 
