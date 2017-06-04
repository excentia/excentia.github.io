---
layout: post
title: 'Kill the noise! Mejorando los analizadores de SonarQube'
description: En los últimos meses se ha hecho un esfuerzo para que los analizadores de SonarQube sean más eficientes en la detección de bugs.
date: '2017-06-02T10:08:00.000+01:00'
author: Freddy Mallet
categories: 
- sonarqube
modified_time: '2017-06-02T10:08:09.803+01:00'
---

Si estás al día con las versiones de ciertos plugins de [SonarQube](http://sonarqube.org) te habrás dado cuenta que en las [últimas semanas](https://www.sonarsource.com/resources/product-news/) en todos ellos se menciona el concepto "*Kill the noise!*". Esta iniciativa se inició a principio de año para afinar la detección de evidencias de tipo *Bug* en ciertos analizadores de código: **SonarJS, SonarC#, SonarJava** y **SonarCFamily**. 

En otras palabras, esto significa que el objetivo es estar seguros que cuando un usuario de [SonarQube](http://sonarqube.org) pulsa en la sección de *Bugs* del espacio de un proyecto este será capaz de encontrar y solucionar bugs reales en lugar de intentar entender si las evidencias que está revisando son de verdad bugs o no. 

Mucha gente puede pensar que eso puede sonar algo obvio y que debería ser el comportamiento obligatorio de un analizador de código a la hora de informar sobre los bugs detectados. Pero la pregunta es, ¿conoces actualmente algún analizador en el mercado que tenga al menos un 90% de precisión?

En los últimos años en [SonarSource](http://sonarsource.com) se ha desarrollado la tecnología para realizar análisis del flujo de datos (_data flow analysis_, o dicho de otra forma, "_path-sensistive DFA_") en los lenguajes C#, Java, JavaScript, C y C++. Esta tecnología nos permite recorrer todos los caminos de ejecución del código mientras se simula la ejecución de cada sentencia. 

Con la ayuda de esos motores DFA ahora somos capaces de detectar bugs muy escurridizos como este encontrado en el kernel de Linux:

<img width="100%" src="/img/posts/2017-06-02-kill-the-noise-sonarqube-1.jpg">

Así que al ver esto nos dimos cuenta de dos cosas:

- Una gran cantidad de las reglas antiguas categorizadas como "Bug" realmente no estaban detectando errores obvios, sino que estaban reforzando buenas prácticas para conseguir un código más robusto, y por tanto, más fiable. Aquí tienes un par de ejemplos: [Non empty switch cases should end with unconditional break statement](https://sonarqube.com/coding_rules#rule_key=squid%3AS128) y [Two branches in a conditional structure should not have the same implementation](https://sonarqube.com/coding_rules#rule_key=squid%3AS1871). Esas reglas localizan problemas de calidad pero la mayoría de veces ese código se ha hecho así a propósito, y realmente no está llevando a un comportamiento erróneo en producción. 

- Algunas reglas combinan la detección de bugs con cuestiones generales de calidad. Este es el caso por ejemplo de la regla para detectar condiciones que siempre se evaluan a verdadero o a falso. ¿Suena extraño? Esta es la razón: cuando una rama no es posible alcanzarla debido a una condición que siempre se evalua a falso, no hay ninguna duda del hecho de que es un bug. Sin embargo cuando una sub-condición es siempre evaluada a verdadero puede que esté hecho a propósito, simplemente para hacer que el código sea más autoexplicativo... así que... ¡boom! Una regla para dos situaciones totalmente distintas. 

Así que hemos hecho un gran esfuerzo para la reclasificación y la división de muchas de las reglas que están en esa situación. Evidentemente se ha hecho todo esto siempre manteniendo al día la caza de los infames falsos positivos.

En el equipo de [SonarSource](http://sonarsource.com) estamos todos trabajando para conseguir el objetivo de tener analizadores que tengan un 90% de precisión a la hora de detectar evidencias de tipo "Bug", y lo cierto es que no estamos muy lejos de hacer este sueño realidad. Cualquier feedback sobre las últimas versiones de los analizadores SonarJS, SonarC#, SonarJava y SonarCFamily será siempre bienvenida y ayudará muchísimo a "matar el ruido".

[Enlace al artículo original en inglés](https://blog.sonarsource.com/kill-the-noise-to-change-gear-in-our-code-analyzers/)
