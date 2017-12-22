---
layout: post
title: 'La calidad del producto software'
description: La calidad interna del código es el elemento determinante de alrededor del 80% del coste de un producto software, ya que la capacidad de mantenibilidad del producto software de hoy determinará el coste de mañana.
date: '2017-12-22T08:00:00.000+01:00'
author: Antonio Calero 
categories: 
- opinion
- calidad
- Desarrollo
- Metodologia
- Integracion
modified_time: '2017-12-22T08:00:00.000+01:00'
---

<a href="http://www.excentia.es/" target="_blank"><img class="center" width="100%" alt=" La calidad del producto software" title="La calidad del producto software" src="/img/posts/2017-12-22-calidad-producto-software.png"></a>


En [excentia](www.excentia.es) queremos celebramos la Navidad con todos vosotros hablando de uno de los temas que más nos apasiona: la calidad del software. Sabemos que este artículo no es tan apasionante como la lotería de navidad, pero, ¿sabéis qué?, asegurar la calidad de tu producto software es casi como si te tocara el gordo, y aquí vienen las razones. 

Las estadísticas de la industria muestran que en promedio el 80% del coste de un producto software se invierte en mantenimiento durante todo su ciclo de vida, y que los **costes de mantenimiento tienen alta variabilidad en función de la calidad interna del código**. Por tanto, **la calidad interna del código es el elemento determinante de alrededor del 80% del coste de un producto software**, ya que la capacidad de mantenibilidad del producto software de hoy determinará el coste de mañana.

Los enfoques tradicionales de control de la calidad del código implican auditorias puntuales, que vienen siendo las clásicas auditorias periódicas del código fuente. Estas auditorías se realizan generalmente por auditores externos durante la última recta del proceso de desarrollo, durante o después de las pruebas funcionales. Por su naturaleza, las auditorias puntuales pueden provocar perturbaciones en el ciclo de desarrollo, ya que dan lugar a cambios en el software “completado”. 
En el mejor de los casos este método tradicional de control de calidad ocasionará retrasos y repetir trabajo. En el peor de los casos conduce a la liberación de software de mala calidad. En cualquier caso, **el enfoque tradicional fomenta la percepción de que la construcción de software de calidad es demasiado complejo y caro. Hay una necesidad urgente de un modelo más nuevo, que haga hincapié en la calidad en todo el ciclo de desarrollo, y que tenga bucles de retroalimentación más cortos, para asegurar una rápida resolución de los problemas internos de calidad**, en definitiva, un modelo que se base en medir la calidad desde el principio, en lugar de considerarse después de los hechos. Y este modelo tiene nombre: inspección continua del código. Afortunadamente son muchos los que ya han abandonado ese modelo tradicional y se han adaptado a un modelo de inspección mucho más eficiente, especialmente tras la aparición de tecnologías y herramientas como las de [SonarSource](http://www.excentia.es/novedades-importantes-en-sonarsource), que permiten conseguir una mayor calidad y superar todos los obstáculos que supone una auditoria puntual. 

**La inspección continua de código es un proceso holístico, con alta efectividad, diseñado para convertir la calidad del código interno en una parte integral del proceso del ciclo de vida de desarrollo de un producto software**. Al aumentar su visibilidad para todos los interesados en el ciclo de vida, la inspección continua permite a las organizaciones adoptar, en su cultura, la inspección de código. Hablaremos detalladamente de la inspección continua de código en otra entrada el próximo año (tranquilos no falta mucho), pero primero es importante entender cuáles son las dificultades que resuelve este nuevo modelo. 


## Los retos clave en la gestión de la calidad del código 

Las auditorias puntuales se ejecutan por diseño a intervalos específicos y no de forma continua. Este enfoque de la gestión de la calidad del código tiene cuatro grandes tipos de deficiencias, que detallamos a continuación: 

* Demasiado poco, demasiado tarde

Las auditorias puntuales identifican dos tipos de mejoras: cambios cosméticos y cambios estructurales. Mientras que los cambios cosméticos requieren modificaciones menores, los cambios estructurales pueden incluir importantes reingenierías de software. Si bien pueden ser necesarios estos cambios, **los planes de acción resultantes de las auditorias puntuales se definen demasiado tarde en el proceso**; de manera que o la fecha de lanzamiento de una versión software necesita ser ampliada, para incluir esta reingeniería del software, o peor todavía, el software llegara a producción con un nivel bajo de calidad, y por lo tanto con baja mantenibilidad y capacidad de adaptación cuando surjan nuevos requisitos del negocio. 

* El rechazo de los desarrolladores

Los desarrolladores tienden a rechazar los planes de acción generados a partir de auditorías puntuales, ya que: 

a. Se generan fuera del equipo, y son vistos como una nueva restricción en el trabajo diario.

b. Son subjetivos; hallazgos que se basan en el juicio de los auditores más que en medidas objetivas.

c. Se pierde el contexto e historia de la información, y por lo tanto se consideran irrelevantes. 

d. Están invalidados por los cambios en curso y rápidamente quedan obsoletos. 

e. No involucra a los desarrolladores y otras partes interesadas en el proceso de revisión y auditoría. Intervienen demasiado tarde en el proceso; para cuando una característica es auditada, los desarrolladores necesitan “reaprender” el código para hacer frente a un hallazgo. 


* Falta de propiedad de los procesos

Hay una clara falta de apropiación del proceso de calidad dentro de la organización. **Los auditores no pueden poseer el proceso, debido a que ni son propietarios del código ni tienen control sobre la resolución de problemas**. Del mismo modo, el carácter de mando y control del modelo evita que el equipo de desarrollo sea dueño del proceso, ya que no está involucrado en las revisiones. Así que aparecen dos grupos inconexos que son ambos responsables de calidad, mientras que en realidad ninguno de ellos es responsable.

* Heterogeneidad de los requisitos

Los enfoques tradicionales miden el software en valores absolutos, como el número total de problemas encontrados en unos umbrales de calidad, y eso fuerza a los evaluadores a medir cada aplicación contra diferentes requisitos, en función de su origen. Por ejemplo, un proyecto *legacy* se hace con el mismo estándar de alta calidad que se espera de un proyecto nuevo, y el desarrollo interno podría ser juzgado de manera diferente que el código subcontratado. Esto se debe al hecho de que se debe “autorizar” el software para pasarlo a producción. 
**Que cada proyecto deba alcanzar los mismos valores absolutos para los umbrales de calidad antes de su lanzamiento es a menudo poco práctico**. El uso de este tipo de valores absolutos implica que sea casi imposible conseguir requisitos comunes para todas las aplicaciones, y por lo tanto difícil de adoptar buenas prácticas en todos los ámbitos. 

## La inspección continua como modelo de calidad de código. 
Tras leer estas afirmaciones no apetece demasiado adoptar un modelo tradicional de auditorías puntuales, por lo que el siguiente paso es cambiar la mentalidad y empezar a adoptar un nuevo modelo. Como regalo de reyes os traeremos el nuevo modelo, pero mientras tanto, puedes ir contagiándote del espíritu moderno de la calidad aprendiendo un poco más sobre la [filosofía DevOps](http://www.excentia.es/Integraci%C3%B3n-continua,-automatizaci%C3%B3n,-entrega-continua...-El-vocabulario-clave-en-DevOps). Solo nos queda desearos unas felices fiestas y como siempre sabéis que podéis [contactar](https://twitter.com/excentia?lang=es) con nosotros para cualquier duda o sugerencia. ¡Felices Fiestas! 

