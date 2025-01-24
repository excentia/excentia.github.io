---
layout: post
title: '¿Cómo gestionar las issues en SonarQube?'
description: Te enseñamos a gestionar las issues en SonarQube Server correctamente. ¿Cómo las debes clasificar?
date: '2025-01-01T08:00:00Z'
author: Belén Casanovas
categories:

- sonar
- sonarqube
- sonarqube server

cover: img/posts/2025-01-01-gestionar-issues-sonarqube.png

---

<img width="100%" src="img/posts/2025-01-01-gestionar-issues-sonarqube.png" alt="¿Cómo gestionar las issues en SonarQube Server?">

¿Primeros pasos con SonarQube? No te preocupes, las issues son en el eje central de SonarQube (ahora conocido como SonarQube Server). Como **partners exclusivos en España de Sonar**, hemos preparado este artículo resumen para que gestiones correctamente las issues en SonarQube. ¡No te lo pierdas!

<h2>¿Qué es una issue?</h2>

Te recordamos rápidamente que una issue es un fragmento de código que **no cumple con una regla de codificación**. Una regla de codificación estará definida por un **Quality Gate** (perfil de calidad) y estará asociado a un lenguaje de programación. 

Las issues que anteriormente se clasificaban en bugs, code smells y vulnerabilidades ahora están asignadas a los siguientes atributos de [Clean Code](https://docs.sonarsource.com/sonarqube-server/9.8/user-guide/clean-as-you-code/) 

- **Consistent**: Relacionado con la coherencia. El objetivo es que todo el código de una empresa tenga una apariencia similar, indendientemente de si ha sido desarrollado por varias personas. <br>

- **Intentional**: Hace referencia al código que se ha desarrollado con atención y cuidado. Tiene que ser sencillo y permitir solo una interpretación. <br>

- **Adaptable**: Código que se segmenta y organiza de forma sencilla, de tal forma que simplifica el proceso de reutilización de sus partes. <br>

- **Responsible**: Fragmentos de código que "éticos" con los datos y que no presentan un riesgo permanente que pueda dañar a terceros. <br>

A su vez, estos atributos estan asociados con una o más cualidades de software (security, reliability o maintainability) y cada una con un nivel de gravedad: blocker, high, medium, low o info. 

<h2>¿Cómo puedes clasificar una issue en SonarQube?</h2>

Ahora vamos a lo importante. Tu instancia de SonarQube ha detectado una issue y la tiene que gestionar. ¿Cómo lo vas a hacer? Pues aquí te lo contamos paso por paso.

Primero debes seleccionar la issue y abrir el desplegable 'Open'. Aquí tendrás que clasificar la issue en **Accept** (cuando aceptamos que es una issue, pero la solucionaremos más adelante) o **False Positive** (no es una issue y puede ser que haya sido un error de análisis, por lo tanto, la marcamos como falso positivo).

Una vez aclarado este punto, podemos asignar la issue a otra persona para que la solucione. Aquí abrimos el desplegable 'Not assigned' y **seleccionamos al usuario**.

Por último, podemos asignar **las etiquetas** que queramos a la issue que estamos gestionando.

Nuestro Sonar Bug Hunter, Mario Bastardo nos explica en el siguiente video precisamente estos pasos. Te compartimos esta píldora informativa a continuación:

<iframe width="730" height="450" src="https://www.youtube.com/embed/T7Rit0ijY_Y?si=JYoSWyxod_p_420p" title="Cómo gestionar las issues en SonarQube"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Si tienes dudas sobre SonarQube Server, los [cambios de nombres o versiones](/nueva-nomenclatura-versiones-sonarqube){:target="_blank"}, puedes ampliar la información en nuestro blog y también puedes ponerte en contacto con nosotros directamente [aquí](/contacto){:target="_blank"}. 