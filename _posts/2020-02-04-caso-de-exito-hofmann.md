---
layout: post
title: 'Asegurando la calidad de los productos software en Hofmann'
description: Apostar por la calidad de producto software implica realizar muchos cambios que no siempre son sencillos, quizás especialmente en una empresa que no desarrolla software ni cuyo beneficio proviene directamente de la comercialización del mismo. Descubrimos las claves tras la implantación de un sistema de inspección continua en Hofmann. 
date: '2020-01-30T08:00:00.000+01:00'
author: Andrea Crespo. 
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/
modified_time: '2018-10-01T08:00:00.000+01:00'
---

[Hofmann](https://www.hofmann.es/) es líder en álbumes digitales y productos personalizados. Fundada en 1923, la empresa ha acompañado a muchas generaciones de familias en España. Desde los marcos físicos que tienen nuestras abuelas hasta los actuales álbumes digitales personalizados, Hofmann ha estado presente en la historia fotográfica de nuestro país. 
La empresa valenciana ha sabido adaptarse a los nuevos tiempos y en 2005 ya fabricaban sus primeros álbumes digitales. La innovación, su capacidad de adaptación demostrada a lo largo de su longeva [historia](https://www.lasprovincias.es/economia/201412/28/historia-hoffman-imprimir-libros-20141228120556.html?ref=https%3A%2F%2Fwww.google.com%2F) y su indiscutible presencia de marca y liderazgo de mercado, llevaron a Photobox (líder europeo) a adquirir la empresa valenciana, resultando en una alianza única. 

Tras toda esta innovación, se encuentran múltiples proyectos de software que necesitaban ser analizados para asegurar la operativa del negocio. Y la calidad es precisamente, un elemento diferenciador en los productos Hofmann. 

Aplicaciones para movil y escritorio que descargan los usuarios para poder crear sus productos personalizados, el ecommerce (backoffice y pasarela), un dashboard de producción, aplicaciones de uso interno, toda la suite de la fabrica de producción, son algunos de los ejemplos del software que maneja Hofmann. Desarrollos en Visual Basic, C y C#, Java, PHP, NodeJS, Swift, Kotlin, etc., alojados en 30 repositorios de Git y GitHub. 
A todo ello, hay que añadir un nivel más de complejidad: el software se desarrolla a través de empresas externas. 


## ¿Cómo surgió la necesidad de medir la calidad del código?

Hofmann no tenía control sobre su código, era un total desconocido. Sin código, tampoco se tenía la posibilidad de medir la calidad del software, ni de las entregas de los proveedores. 
Esta situación, en la que internamente no se participaba en gran parte del desarrollo, provocaba también un sentimiento de frustación en el equipo de Hofmann. No se sentían útiles al no poder participar en el desarrollo de software.

Además, esta situación también se traducía en una situación de descentralización y descontrol. No había un lugar único en el que residiesen las aplicaciones software de la compañía. 

El primer paso era centralizar el control y la gestión de todo ese software. 
Hasta el momento, ¡Hofmann no tenía disponible su propio código! Esto, además del descontrol comentado, también implicaba una respuesta muy lenta a errores y un reporte de bugs muy pobre. 

El primer paso fue pasar del envío de binarios al FTP de Hofmann, a un SVN compartido. Se incorporó el control de versiones, siendo ésta la pieza clave y necesaria del entorno de calidad e integración continua que estaba arrancando. 

Una vez superada esta situación inicial (una condición básica para poder medir, es disponer del elemento a medir, también en la calidad software) se plantearon nuevos retos que había que superar. 

El primero era cambiar el paradigma que hasta ese momento dirigia el departamento de calidad y la relación con los proveedores. Testear al final, siguiendo una metodología en cascada, era muy costoso, poco útil y se le dedicaba un esfuerzo demasiado limitado (a penas quedaba tiempo entre la entrega y la puesta en producción) 
El testing no ágil tenía muchas consecuencias. Las actualizaciones de la aplicación de escritorio son críticas y su paralización es muy costosa para el negocio (todo el tiempo en el que el usuario no puede crear álbumes ni productos, es tiempo en el que no se están recibiendo pedidos). 

El desarrollo estaba descontrolado, con parches y nuevas versiones constantes para "ir tirando". Las aplicaciones de Hofmann se estaban convirtiendo en grandes proyectos críticos para el negocio, que se cambian constantemente sin ningún tipo de control. Cualquier error o cambio, se podía traducir en una gran impacto. 

Con la incorporación del control de versiones, se pretende no solo mejorar la gestión y transparencia en el código, sino proveer al equipo técnico de un sistema de versiones que les permita mejorar el código de sus aplicaciones sin tener un impacto negativo y directo en el negocio. Una clara apuesta por trabajar en la calidad desde el principio, de manera escalable y transparente. 

## ¿Por qué eligieron a excentia y apostaron por la inspección continua?

Centralizar el código y conseguir un uso básico de herramientas de control de versiones, es relativamente sencillo. Pero la apuesta de Hofmann iba mucho más allá, y por eso necesitaban ayuda para gestionar todo el proceso y proveer de un entorno completo. 

Con excentia, Hofmann encontró un compañero que les acompaña en el camino de inspección continua. Especializados en SonarQube (somos partners exclusivos en España y Latinoamerica) para medir desde el principio (¡*shift left*!), les ayudamos en la implantación de SonarQube y su integración con herramientas como Jenkins, creando un sistema completo de inspección continua de código. 

En palabras del departamento de calidad de Hofmann: 

> Contar con el apoyo de excentia nos resulta muy útil. Nos proporcionan nuevas ideas basadas en toda su experiencia. Nos presentaron un proyecto estructurado en fases muy bien identificadas que nos transmite mucha confianza. Su incorporación ha resultado enriquecedora para todos los implicados, tanto para Hofmann como para los proveedores externos. 

## Mejorar la calidad del código es posible

¿Qué hemos hecho junto a Hofmann para mejorar la calidad del código?

- Migración a repositorios de Git/GitHub de todo el código.

- Construir un entorno de calidad e integración continua, que permita una detección temprana de errores, basada en Git/GitHub + Jenkins + SonarQube + Pruebas unitarias y automáticas.

- Implantación y configuración de SonarQube y SonarLint para análisis estático de código.

- Definir una estrategia de *pipelines* y de *pipelines* multirama. 

- Definir estrategia de pruebas y planes de prueba bien definidos.

- Evangelización de "Fix the Leak" [(ahora "Clean as you Code")](https://www.excentia.es/limpia-tu-codigo) para trabajar con código legado y aplicaciones críticas. 


Con todas estas acciones, poco a poco, Hofmann va conociendo mejor su código, se ha depurado la detección de errores y como consecuencia son más concretos a la hora de reportar bugs. 

Tras un primer análisis, han podido identificar los bugs bloqueantes o críticos y centrarse en su reparación, priorizando así mejor sus tareas. La foto inicial muestra un buen estado en la calidad del código con muy buenos datos de mantenibilidad, y calificaciones adecuadas en seguridad y fiabilidad. No obstante, se ha detectado un alto porcentaje de código duplicado. Con toda esta información, Hofmann conoce sus virtudes y defectos, el código y la calidad del mismo que le ofrecen sus proveedores, y puede trabajar bajo una metodología definida y argumentada, sin afectar al funcionamiento del negocio. 

## Mirando hacia el futuro

Queda mucho camino por recorrer. La calidad es un trabajo de mejora continua que nunca para. 
Sin embargo, y aún estando en una fase inicial de la implantación y perfeccionamiento del ecosistema propuesto por excentia, Hofmann ya destaca muchos beneficios y resultados obtenidos. 

El éxito ha sido tal, que desde Photobox y tras comprobar el trabajo de sus compañeros en España, también están interesados en este modelo. 


En el camino que está por desarrollar, seguiremos trabajando en la evangelización de la calidad, en aspectos más técnicos como la adaptación de reglas para reducir el número de falsos positivos o la creación de reglas personalizadas a sus requisitos y necesidades particulares. 
