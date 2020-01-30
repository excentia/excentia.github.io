---
layout: post
title: 'Limpia tu código. El concepto Clean as You Code llega a SonarQube'
description: SonarSource redefine su propuesta de valor, antes conocida como Fix the Leak , para adaptarla a los principios del código limpio y las capacidades de su potente herramienta de análisis estático de código. 
date: '2020-01-30T08:00:00.000+01:00'
author: Adaptación y traducción por Andrea Crespo. Artículo original por G. Ann Campbell. 
categories: 
- sonarsource
- calidad


cover: /img/posts/2020-01-30-clean-as-you-code.png
modified_time: '2018-10-01T08:00:00.000+01:00'
---

Con el [lanzamiento de SonarQube 8.1](https://www.excentia.es/sonarqube-8.1), además de las mejoras técnicas, nuevas funcionalidades y corrección de errores, se introdujo un nuevo paradigma de calidad de código en SonarSource. 

Ya tenemos disponible en la página oficial de SonarQube, un [apartado dedicado](https://www.sonarqube.org/features/clean-as-you-code/) para conocer todos los detalles.
Además, el pasado día 20, SonarSource compartía en su [blog](https://blog.sonarsource.com/clean-as-you-code) la reflexión y el razonamiento tras "Clean as You Code". 
Hoy lo traducimos en excentia con el objetivo de mejorar su comprensión en la comunidad hispanohablante.  
¡Descubre todos los detalles!

---

La primera vez que analizas un proyecto heredado, y aquí nos referimos a cualquier proyecto de más de dos meses, los resultados suelen ser realmente abrumadores. Puede haber miles de *code smells*, cientos de *bugs*, duplicidad elevada y, según la antigüedad y la tecnología del proyecto, hasta 0% de cobertura de código. La respuesta emocional habitual a esto es: miedo, tristeza e incluso desesperación. Luego vienen las preguntas: ¿por dónde empiezo? ¿Cómo elijo? ¿Qué debo corregir primero, errores, vulnerabilidades, cobertura de pruebas? ¿O debería comenzar con todas las evidencias bloqueantes e ir bajando según esa escala?

La gente pasa a la resolución de problemas tan rápido que puede ser difícil darse cuenta que nada de eso es realmente necesario.

## Deja el pasado atrás

> "Primera norma del programador: si el código funciona no lo toques"

Si no has usado una camiseta con esa frase, probablemente al menos te has reído de ella. Y es divertido porque hasta cierto punto es verdad. Picar código antiguo sin otra razón que arreglar la deuda técnica conlleva el riesgo de una regresión funcional. Además, la realidad es que muy pocos desarrolladores tienen la capacidad para obtener los recursos (tiempo, presupuesto, reevaluación de la parte de negocio, etc) para abordar problemas en el código que "funciona". Así que dejemos de lado el código antiguo por un momento y centrémonos en el código nuevo. Como desarrollador, tu eres responsable del código nuevo. Cada caracter es tuyo, y puedes asegurarte de que cumple con tus propios estándares. **Como desarrollador, tú eres responsable de tu código, y también de la calidad de ese código nuevo.** 


## Responsabilidad personal, no heroica

Tener responsabilidad personal (no heroica) significa que **en lugar de buscar problemas en un código que no se ha tocado en años, deberías concentrarte en asegurarte de que el código que tocas ahora (nuevas funcionaliadades y correcciones de errores reportados por el usuario) esté limpio.** Las "evidencias antiguas" en el código que estás tocando se solucionan, no se agregan problemas nuevos, se limpian las duplicaciones y se escriben las pruebas si aún no existían. Y ya está. Todo lo que tienes que hacer es lo que quieres hacer de todos modos: asegurarte de que el código que escribes hoy sea bueno. 

Por si fuera poco, centrarse en el código que los responsables de negocio necesitan que toques, en lugar de desenterrar viejos problemas aleatorios, te permite concentrarte en hacer las cosas. Eso significa que eres más productivo como individuo, y tu equipo también.


## Estándares consistentes en todos los lenguajes, proyectos... en toda la organización 

"¡Pero trabajo en un proyecto heredado en (*introduce lenguaje muy antiguo*)!" 

Pues genial. Las herramientas son las mismas independientemente del lenguaje. Así que simplemente mantén los mismos estándares que tus compañeros que trabajan en (*introduce lenguaje nuevo y atractivo*). 

**Haz un buen trabajo en el código nuevo (creado desde cero o modificado por tí) en el que estás trabajando hoy.** No importa la antigüedad o lo feo y mal diseñado que esté tu proyecto. Todo el mundo puede mantener limpio su nuevo código, independientemente del lenguaje de programación, la antigüedad del proyecto o la deuda técnica existente.


## Herramientas para finalizar trabajo (get things done)

Sé que estás diciendo: "claro si todo eso está muy bien, pero ¿cómo lo hago?" 

Afortunadamente, [SonarQube](https://www.sonarqube.org/) te ofrece múltiples alternativas. 

Primero, la **asignación automática de problemas** - nadie es responsable del código de otra persona. Si agregas nuevos problemas, se te asignarán automáticamente a ti, y lo mismo para tus compañeros, por lo que no se le pide a nadie que limpie los desperfectos de otra persona. 
Esto se aplica tanto a los problemas antiguos que SonarQube encuentra como a los nuevos. De esta manera, si consultas el filtro *"My Issues"* en la página *Issues* verás evidencias antiguas y nuevas. Por esta razón, hay otras funcionalidades para ayudarte.

La funcionalidad más importante es un ***Quality Gate* centrado en el periodo en el que se ha desarrollado código nuevo.** Este *Quality Gate* (umbral de calidad) solo utiliza condiciones "en código nuevo", de tal modo que el *releasibility indicator*  solo analiza la calidad de los cambios recientes. 

También está la **página de inicio del proyecto, que enfatiza los resultados obtenidos en el "Período de Código Nuevo".** Si haces clic en un resultado del periodo de código nuevo o en una condición que ha fallado en el umbral de calidad, accederás a una nueva página en la que se filtrarán automáticamente las evidencias para mostrar solo las que se han producido en el código nuevo. 

Finalmente, también hay análisis de pull requests (en ediciones comerciales) y SonarLint en tu IDE, para que puedas asegurarte de que los nuevos problemas introducidos nunca se suban (arreglar problemas antes de que aparezcan)


## Remediar la deuda técnica: efecto secundario de las tareas del día a día

"¡Pero qué pasa con los bugs bloqueantes existentes en el código!" 

Antes he dicho que los desarrolladores son responsables de su código nuevo y de la calidad del mismo. Pero no he comentado que son los responsables/managers los que se deben responsabilizar de la calidad en el código antiguo. Recuerda, los desarrolladores no tienen los recursos (tiempo, presupuesto, etc.) para trabajar con código antiguo. Los responsables del proyecto sí los tienen. 

Tiene sentido en cuanto a que los responsables también lo son de los riesgos para el negocio de arreglar proactivamente código del que nadie se está quejando, rompiendo potencialmente alguna otra cosa en ese proceso. En definitiva, **si los problemas en el código antiguo deben abordarse o no, es una decisión de negocio, y depende de los responsables de negocio priorizar o no el trabajar con código antiguo.**

E incluso si no deciden limpiar el código proactivamente, el código se irá limpiando de forma gradual de todas maneras. 
Ocurre por el curso normal del negocio al modificar el código antiguo para hacer nuevos cambios. **Las áreas de código que se modifican con frecuencia se corregirán rápidamente. Eso hace que el mantenimiento futuro de esas áreas de más interés sea más fácil, más barato y mucho menos doloroso.** El código con menos tráfico (menos arreglos, menos interés) se limpiará más lentamente, pero el hecho de que no se vea afectado por las solicitudes de los usuarios significa que es menos crucial y pueden permitirse el lujo de esperar.

## ¡A limpiar código!

Eso es todo. Simplemente mantén limpio tu código nuevo para asegurarte de que el código que liberes en producción mañana sea al menos tan bueno como el código que está en producción hoy. SonarQube te brinda todas las herramientas que necesitas para que eso pueda suceder.








