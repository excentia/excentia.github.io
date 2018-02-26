---
layout: post
title: 'Mejorar nuestra deuda técnica día a día'
description: ¿Cómo evitar la acumulación de deuda técnica sin interrumpir un desarrollo? Existen estrategias que nos permiten con cada nuevo desarrollo ir mejorando la calidad de nuestro código y reducir nuestra deuda técnica.
date: '2018-02-26T08:00:00.000+01:00'
author: Manuel Velázquez
categories: 
- opinion
- calidad
- estrategia
- metodologia
- desarrollo
- deuda

modified_time: '2018-02-26T08:00:00.000+01:00'
---

<a href="http://www.excentia.es/sonarsource" target="_blank"><img class="center" width="100%" alt="Mejorar nuestra deuda técnica día a día" title="Mejorar nuestra deuda técnica día a día" src="/img/posts/2018-02-26-mejorar-deuda-tecnica.png"></a>


Terminamos el mes con uno de los tópicos favoritos tanto de [excentia](http://www.excentia.es/) como de todos vosotros: la deuda técnica. 

Mucho se ha [escrito](http://www.excentia.es/la-deuda-tecnica-y-el-metodo-sqale) acerca de la deuda técnica y se seguirá haciendo, pues es el principio sobre el que se sustenta el [desarrollo sostenible de software](http://www.excentia.es/los-principios-del-desarrollo)- esto es, la forma óptima de creación de producto software de máxima calidad. Ahí es nada. 

## ¿Qué es la deuda técnica?
La deuda técnica es un concepto muy conocido en el campo del desarrollo del software. Fue introducido por Ward Cunningham a principio de la década de los 90 y **hace referencia a las consecuencias de un desarrollo apresurado de software o un despliegue descuidado de hardware**.

La deuda técnica la podemos comparar con una deuda financiera. Hacer las cosas de manera rápido y mal, provoca que nuestro proyecto acumule deuda técnica. Igual que cuando adquirimos una deuda con el banco debemos pagar intereses, con la deuda técnica debemos pagar con el esfuerzo adicional que tendremos que realizar en futuros desarrollos.
Si tuviéramos una deuda podríamos optar por seguir pagando intereses o con un esfuerzo pagarlo todo de golpe. Aunque cueste, ganaríamos ahorrándonos pagar intereses. Con el código pasa exactamente lo mismo, refactorizando el diseño rápido y deficiente de nuestro proyecto saldaremos nuestra deuda, reduciendo el esfuerzo de los futuros desarrollos.
 
## ¿Cómo reducir la deuda técnica? *Fix the Leak*
Pese a lo explicado arriba, todos sabemos que no siempre es posible parar los desarrollos, refactorizar un proyecto y quitarnos de encima la deuda. Eso no quiere decir que debamos acumular deuda como locos, **la calidad de nuestro código no debe ser algo negociable**. 

Entonces, ¿cómo evitar la acumulación de deuda técnica sin interrumpir un desarrollo? Existen estrategias que nos permiten con cada nuevo desarrollo ir mejorando la calidad de nuestro código y reducir nuestra deuda técnica. De todas estas estrategias, hay una que destaca por su eficacia: [*Fix the Leak*](http://www.excentia.es/una-fuga-de-agua-cambia-el-juego-en-la).

¿Qué es *fix the leak*? Imaginemos que un día llegas a casa y te la encuentras llena de agua por una fuga en una tubería. ¿Qué harías?, ¿achicarías agua o detendrías la fuga? Lo más probable es que cerraras la llave de paso, arreglaras la fuga y luego ya fregarías el suelo. ¿Por qué? Porque sabes que cualquier otra acción sería inútil y que en poco tiempo la misma cantidad de agua estaría de nuevo en el suelo.

Normalmente cuando la deuda técnica nos desborda lo primero que queremos hacer es fregar y secar, en lugar de cerrar la llave de paso ¿Por qué en el desarrollo de software nos comportamos de esta manera? 

**Fix the leak nos propone que nos olvidemos del código viejo y nos preocupemos únicamente de que la calidad del código nuevo introducido sea buena. En un año aproximadamente se modifica un 20% del código antiguo, por lo que poco a poco y sin esfuerzo ni interrupciones vamos a ir cerrando la fuga**, evitando la frustración en los equipos al refactorizar un código que no recuerdan, o que directamente no entienden.

**Dia a día incidiendo en la calidad de nuestro código podemos ir cerrando fugas, reduciendo nuestra deuda técnica y sobre todo mejorando la calidad del producto software**.	

## Aplicación *Fix the Leak*
En un próximo episodio mostraremos cómo la suite de [SonarSource](https://www.sonarsource.com/) nos puede ayudar a mejorar la calidad de nuestro código, aplicando *Fix the Leak*. 
