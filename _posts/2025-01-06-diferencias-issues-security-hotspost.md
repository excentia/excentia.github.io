---
layout: post
title: '¿Cuál es la diferencia entre una issue y un Security Hotspot?'
description: Te contamos las diferencias entre estos dos tipos de problemas y cómo gestionarlos en una instancia de SonarQube
date: '2025-01-06T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: img/posts/2025-01-06-diferencias-issues-security-hotspot.png

---

<img width="100%" src="img/posts/2025-01-06-diferencias-issues-security-hotspot.png" alt="¿Cuál es la diferencia entre una issue y un Security Hotspot?">

Nuestra labor como Partners exclusivos en España de Sonar también es aclararte las dudas sobre los conceptos de SonarQube. Así que en este artículo vamos a hablar sobre los Security Hotspots, su diferencia de las issues y también, sobre cómo gestionarlos. 

Para comprender bien las diferencias lo que vamos a hacer en este artículo es definir bien cada concepto y luego explicar las diferencias. ¡Empezamos!
<br>

<h2>¿Qué es una issue?</h2>

Una issue es un **fragmento del código que contiene problemas** y que impide que el código esté limpio y seguro (filosofía Clean Code). En versiones anteriores de SonarQube las issues se clasificaban en **bugs, code smells y vulnerabilidades**. Ahora, en la versión más reciente de SonarQube las issues están asignadas a un **atributo de Clean Code** (consistency, intentionality, adaptability o responsibility) que estan asociados con una o más **cualidades de software** (security, reliability o maintainability) y cada una con un **nivel de gravedad** (blocker, high, medium, low o info).  
<br>

A continuación te mostramos un **ejemplo de issue en SonarQube**. En concreto, Sonar sugiere que se elimine esa expresión por estar obsoleta. Además, en el recuadro naranja de la imagen podrás ver la clasificación de esa issue (cualidad del software = a maintability, atributo de Clean Code = a consistency). 

<img width="100%" src="/img/sonarsource-products/issue-deprecated-sonarqube-excentia.png" alt="Ejemplo de issue deprecated en SonarQube">
<br>

<h2>¿Qué es un Security Hotspot?</h2>

Un **Security Hotspot** es una parte del código que presenta **un riesgo de seguridad**. Es un fragmento que **debe ser revisado por un desarrollador** para decidir si debe aplicar alguna solución para proteger el código o confirmar que no hay ninguna amenaza. 

En una instancia de SonarQube los hotspots son señalados para que los desarrolladores hagan esta revisión, ya que si no se gestionan o pasan por alto los hotspots se pueden convertir en una **vulnerabilidad**. 

Aquí te dejamos un ejemplo de Security Hotspot. SonarQube ha detectado la palabra "contraseña" en un fragmento de código e indica que puede ser un riesgo porque "es fácil extraer cadenas del código fuente o binario de una aplicación" así que sugiere que "las contraseñas no deberían estar codificadas de forma rígida. Esto es particularmente cierto en el caso de aplicaciones distribuidas o de código abierto". 

<img width="100%" src="/img/sonarsource-products/security-hotspot-sonarqube-pasword-excentia.png" alt="Ejemplo de Security Hotspot en SonarQube">

En este caso,  la palabra contraseña pertenece a una variable y no habría riesgo alguno.

Y vistas las dos definiciones pasamos ahora a las diferencias entre una issue y un Security Hotspot. 
<br>

<h2>Issue vs Security Hotspot: Las diferencias</h2>

La diferencia entre una issue y un Security Hotspot **es el contexto**. Las dos son fragmentos de código, pero la issue está claro que tiene un problema mientras, que el Security Hotspot, requiere de la revisión de un desarrollador para confirmar si es un problema o no. Un ejemplo de Security Hotspot que no es un problema es cuando un desarrollador aplica una cualidad en ese código que quiere que sea así, porque en ese contexto no provoca que sea un problema (como en el ejemplo anterior).
<br>

<h2>¿Cómo gestionar los Security Hotspot en SonarQube?</h2>

Si estas ante un Security Hotspot ya sabes que debe pasar por la revisión de un desarrollador. Aquí te sugerimos cómo puedes gestionarlo. SonarQube te permite clasificar un Security Hotspot en: 

- **To review**: Necesita ser revisado porque supone un riesgo.  <br>

- **Acknowledged**: El security Hotspot ha sido revisado, supone un riesgo y necesita ser solucionado. <br>

- **Fixed**: El códgio ha sido revisado y solucionado. <br>

- **Safe**: El código ha sido revisado y no supone un riesgo. No necesita ser modificado.  <br>

Para que quede más claro, nuestro **Sonar Bug Hunter, Mario Bastardo**, nos expone ejemplos prácticos precisamente este tema: cómo gestionar correctamente los Security Hotspot en SonarQube. 

<iframe width="730" height="450" src="https://www.youtube.com/embed/v7POgjuDZZ8?si=vAJDcoocDQtey9eb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br>

Y hasta aquí este post en el que profundizamos sobre conceptos de SonarQube. No dudes en ponerte en contacto con nuestro equipo si tienes más dudas o preguntas. 
