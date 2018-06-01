---
layout: post
title: 'Mantenimiento de Atlassian Apps, ¿cómo lo hacemos?'
description: El mantenimiento, la actualización de versiones, la introducción de nuevas funcionalidades, el soporte… son solo algunos de los elementos clave si queremos mantenernos en el top de desarrolladores en la comunidad Atlassian.
date: '2018-04-25T08:00:00.000+01:00'
author: José Carlos Esparza
categories: 
- opinion
- calidad
- metodologia
- desarrollo
- testing
modified_time: '2018-04-25T08:00:00.000+01:00'
cover: /img/posts/2018-04-25-mantenimiento-atlassian-apps.png
---

<a href="https://marketplace.atlassian.com/vendors/1210681/excentia" target="_blank"><img class="center" width="100%" alt="Cabecera Blog - Mantenimiento Atlassian Apps" title="Mantenimiento de Atlassian Apps, ¿cómo lo hacemos?" src="/img/posts/2018-04-25-mantenimiento-atlassian-apps.png"></a>


El mantenimiento, la actualización de versiones, la introducción de nuevas funcionalidades, el soporte… son solo algunos de los elementos clave si queremos mantenernos en el top de desarrolladores en la comunidad [Atlassian](https://www.atlassian.com/). En todos lados escuchamos decir que es importante estar a la última para tener los mejores resultados, pero no nos cuentan cómo hacerlo. Por eso hoy explicaremos qué hacemos para tener siempre a la última nuestras [Atlassian Apps](http://www.excentia.es/#atlassian-addons).

## ¿Por qué actualizar las aplicaciones?
Puede haber diferentes razones para tener que actualizar nuestras aplicaciones. Las más importantes son que Atlassian saque una nueva versión de algunos de sus productos donde se producen cambios en su API o cambios estéticos. Otras razones incluyen la **implementación de mejoras a nuestro producto y la corrección de bugs detectados**. 

## Metodología de actualización de aplicaciones
Nuestro primer paso es el uso de la herramienta [SonarQube](http://www.excentia.es/sonarsource). Esto nos ayuda a detectar errores y tener un código limpio con gran facilidad, evitando perder tiempo de trabajo revisando el código, línea por línea manualmente.

**SonarQube nos permite un análisis estático de nuestro código y nos informa del código duplicado, estándares de codificación, pruebas unitarias, cobertura de código, etc.** Además, nos permite examinar diferentes tipos de lenguaje a la vez, funcionalidad de mucha utilidad ya que nuestras aplicaciones utilizan más de un lenguaje de programación.

Para trabajar en nuestros proyectos utilizamos [Git](http://www.excentia.es/crear-un-ciclo-de-desarrollo-de). Esta herramienta nos aporta eficiencia y confiabilidad a la hora de **controlar las versiones de nuestro producto, así podemos registrar los cambios en los archivos de forma automática y coordinar el trabajo que varias personas realizan en archivos compartidos**. Git es fundamental para trabajar en equipo, ya que todos podemos desarrollar en un mismo proyecto, sin preocuparnos en sobrescribir el trabajo de los demás, ya que todos los cambios provisionales o *commits* se guardan en local y tendremos que hacer un *push* para subirlo a nuestro cliente de Git - como BitBucket, GitHub o GitLab -  para controlar las versiones. Esto **nos permite tener un historial de cambios perfectamente documentado por si fuera necesario rectificar algún cambio nuevo que no funciona**.

Cuando hemos realizado todos los cambios entramos en la fase de *testing*, donde probaremos todas las funcionalidades de nuestra app para que esté lista sin ningún error para el cliente. Aquí es cuando **un compañero ajeno al proyecto prueba nuestra app, como si él fuera el usuario final**. Si detecta algún fallo o alguna mejora, ésta será registrada y el proyecto volverá a ser analizado utilizando SonarQube y pasado al equipo de desarrollo para que realice los cambios que considere oportunos. Esto se repite hasta que el encargado de testear la app la apruebe y la de por válida como una nueva versión. 

**Cuando se ha aprobado una nueva versión de prueba esta se convierte en una versión de lanzamiento o *release***. Esta *release* ya ha sido testeada y corregida por el equipo de desarrollo y está lista para ser utilizada por el usuario final.

Y con esto llegamos al final de esta humilde explicación acerca del mantenimiento que en [excentia](http://www.excentia.es/) se hace de las [Apps de Atlassian](https://marketplace.atlassian.com/vendors/1210681/excentia). Espero que os haya sido útil, y sobretodo que os ayude a manteneros siempre competitivos y referentes en vuestros desarrollos. 
