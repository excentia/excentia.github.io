---
layout: post
title: Los principios del desarrollo sostenible
date: '2012-05-22T07:00:00.000+02:00'
description: Qué es desarrollo sostenible, sus objetivos y principios. ¡Nuestro CEO nos habla de ello!
author: Antonio Calero
categories:
- opinion
- deuda
- calidad
- desarrollo
---

A finales de Abril se llevó a cabo el evento de semanainformatica.com, referencia del sector TIC de la Comunidad Valenciana (o eso nos gustaría a todos los ingenieros), organizado anualmente, desde 2006, por el Colegio Oficial de Ingenieros en Informática de la Comunidad Valenciana (COIICV) y en el que excentia fue colaborador. 

Bajo el lema "Optimiza, la informática te lo pone fácil" tuvimos la oportunidad de disfrutar de jornadas técnicas, del VIII Congreso de Ingeniería, de formación, de reciclaje y de networking. Desde excentia queremos dar la enhorabuena al Colegio Oficial de Ingenieros Informáticos de la Comunidad Valenciana por esta 8ª edición, esperando poder volver a participar el año próximo. 

En relación con el lema de la jornada ("Optimizar") tuve la oportunidad de dar un seminario... Seminario en el que me centré en cómo conseguir que el desarrollo de software sea sostenible, siendo capaces de optimizar, de controlar la calidad de nuestro software, y de esa manera gestionar la deuda técnica para poder "ahorrar" esfuerzos.

Ya hemos hablado anteriormente de la deuda técnica como concepto y de métodos para gestionarla (SQALE) por lo que lo único que quería con este artículo es remarcar los principios básicos para seguir aclarando los conceptos un poco más.

<h2>¿Por qué tenemos que medir?</h2>

"Lo que no se puede definir, no se puede medir, lo que no se puede medir no se puede mejorar, y lo que no se puede mejorar se deteriora siempre"

"Si algo puede ser medido y expresado con números, entonces es que se sabe algo acerca de eso"

Ambas citas son de Lord Kelvin Thompson y no dejan lugar a dudas de que si queremos conocer algo, hemos de poder medirlo.

<h2>El objetivo del desarrollo sostenible</h2>

"A well-written program is a program where the cost of implementing a feature is constant throughout the program’s lifetime." (Itay Maman)


Esto quiere decir que un desarrollo sostenible será aquel en el que se mantenga constante el coste de implementar una nueva funcionalidad o característica durante su ciclo de vida. Ya está. Ni más ni menos. Esto no es fácil pero debe ser siempre nuestro objetivo. No debemos olvidarlo.

En el momento en el que el coste aumente, significará que nuestro proyecto está generando deuda técnica. La deuda técnica es la clave del desarrollo sostenible:
Hacer las cosas rápido y de malas maneras introduce deuda técnica, de forma similar a la deuda financiera.
Igual que la deuda financiera, la deuda técnica provoca el pago de ciertos “intereses”, que se traducen en forma de esfuerzos extra que se tienen que llevar a cabo en el futuro.
Podemos decidir continuar pagando esos intereses en el futuro, o invertir lo necesario para reducir el capital refactorizando y aplicando buenas prácticas de diseño.
Aunque el coste de reducir el capital pueda ser alto, se gana al estar reduciendo la cantidad de intereses a pagar en el futuro.

<h2>Principios del desarrollo sostenible</h2>

1. Mantener una aplicación sin ninguna prueba unitaria es como pedir un préstamo cada vez que añades o cambias una línea de código

2. Evitar el diseño técnico es como pedir un préstamo para tener un retorno de inversión “rápido” y “previsible” gracias al propio préstamo

3. Refactorizar es pagar el capital

4. La productividad del desarrollo decrece cuando los intereses aumentan

5. Los gestores no se preocupan de la calidad del código, pero pídeles que paguen la deuda de su proyecto y verás como atraes su atención

6. La bancarrota es el equivalente a una deuda técnica sin control. Es volver a desarrollar algo desde cero