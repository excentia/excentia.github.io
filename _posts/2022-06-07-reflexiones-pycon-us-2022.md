---
layout: post
title: 'Reflexiones desde la PyCon US 2022'
description: Algunas cosas importantes tras el paso por la PyCon para reflexionar.

date: '2022-06-07T08:00:00Z'
author: Marisa Martin<br><br>(artículo original Andrea Guarino y Guillaume Dequenne)
categories:
- productos
- sonarsource
- eventos

cover: /img/posts/2022-06-07-reflexiones-pycon-us-2022.jpg

---

<img width="100%" src="/img/posts/2022-06-07-reflexiones-pycon-us-2022.jpg">

Del 27 de abril al 1 de mayo, el equipo de Sonar asistió a la PyCon US 2022 en Salt Lake City, Utah. La conferencia de
este año se celebró en persona por primera vez en tres años con 1.700 asistentes, 60 patrocinadores, 12 talleres y
más de 100 tutoriales. Fue maravilloso disfrutar de muchas charlas interesantes, talleres y conversaciones.

Este año, el patrocinio de Sonar incluía un taller de una hora y un stand en la sala de exposiciones principal.

## Mantenga su código limpio

El taller de Sonar presentado, titulado ["Cómo configurar tu CI/CD para mantener tu código limpio"](https://us.pycon.org/2022/schedule/presentation/123/),
contó con una sala llena de 67 asistentes. Este taller se
centró en el enfoque "Clean as You Code" que Sonar ha defendido durante mucho tiempo. Se demostró el uso de nuestra
solución Sonar con SonarCloud como plataforma central para supervisar la calidad del código y SonarLint para detectar
problemas directamente en el IDE.

En el stand de Sonar, se mantuvieron muchas conversaciones interesantes y discusiones perspicaces en torno al código limpio
y se ofrecieron demostraciones de la solución.

No es ningún secreto que la ciencia de los datos es el principal motor de la adopción de Python. Durante la conferencia,
tuvimos la oportunidad de ver como varios analistas de datos utilizan Jupyter Notebooks para escribir código.
Creemos que es crucial integrarse con las herramientas que los analistas o científicos de datos utilizan y adoran, por lo que
está previsto en dar soporte a Jupyter Notebooks a finales de este año.

Otra de las cosas que nos llevamos fue la reacción positiva que escuchamos con los "Quick Fixes" (refactorización
automática del código para solucionar un problema) en los analizadores de Python, que está previsto que se publiquen en
SonarLint -el plugin para el IDE- este año. Esto se une a la familia de Quick Fixes para Java, JS/TS y C++ que
se publicaron a finales del año pasado. 

Estamos muy contentos de poder tener esta función para más de 40 reglas de Python.

## Charlas interesantes y conclusiones clave

Durante la conferencia asistimos a varios tutoriales, algunos de los cuales fueron de especial interés para nosotros.

Peter Wang, director general de Anaconda, hizo una impresionante presentación del último proyecto de Anaconda, 
[PyScript](https://anaconda.cloud/pyscript-python-in-the-browser), que permite ejecutar Python en el navegador. 
Peter hizo su impresionante [presentación](https://www.youtube.com/watch?v=qKfkCY7cmBQ&list=PL2Uw4_HvXqvYeXy8ab7iRHjA-9HiYhRQl&index=4) mientras codificaba 
en vivo varias demostraciones de este nuevo proyecto, lo que fue una hazaña notable. 

El objetivo de PyScript es hacer que Python sea aún más accesible y fácil de usar. PyScript se basa en [Pyodide](https://pyodide.org/en/stable/), 
una adaptación de CPython a WebAssembly. Creemos que es un avance significativo que impulsará aún más la adopción de Python.

[Lukasz Langa](https://lukasz.langa.pl), gestor de la versión de Python 3.8 y Python 3.9, y creador de [Black](https://black.readthedocs.io/en/stable/), ofreció una interesante 
[ponencia](https://www.youtube.com/watch?v=wbohVjhqg7c&list=PL2Uw4_HvXqvYeXy8ab7iRHjA-9HiYhRQl&index=2) sobre las mejores 
prácticas de tipado moderno. Como nuestros analizadores de Sonar se basan en sugerencias de tipo para algunas de sus 
reglas, esto fue de particular interés para nosotros. Las recomendaciones de Lukasz probablemente nos inspirarán para 
ofrecer nuevas reglas que promuevan estas prácticas.

Asistimos a una emocionante demostración de DataSpell (un nuevo IDE de JetBrains para científicos de datos) y de las 
mejores prácticas de Panda que se impartió en el stand de JetBrains. Aunque no somos científicos de datos, las mejores 
prácticas y las nuevas formas de escribir código siempre nos interesan, ya que ayudan a mejorar nuestro analizador 
de Python con nuevas reglas para escribir código limpio.

Si te pasaste por el stand de SonarSource, ¡gracias! Si no lo hiciste, puedes ver la presentación del taller en el 
canal de [YouTube](https://www.youtube.com/watch?v=BNTkWQfqP_c) de la [PyCon](https://us.pycon.org/2022/). 

Esperamos verte en [EuroPython](https://ep2022.europython.eu) este verano.

_Traducción del artículo original: [Reflections from PyCon US 2022](https://blog.sonarsource.com/reflections-from-pycon-us-2022/)_
