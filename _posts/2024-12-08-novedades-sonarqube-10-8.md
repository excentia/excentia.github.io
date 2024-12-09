---
layout: post
title: 'Novedades SonarQube 10.8'
description: Nuevo Quality Gate con IA, dos nuevos modos de funcionamiento y actualizaciones de idiomas. ¡Ya está aquí la nueva versión de SonarQube server!
date: '2024-12-08T08:00:00Z'
author: Belén Casanovas
categories:

- productos
- sonar
- sonarqube
- release


cover: img/posts/2024-12-08-novedades-sonarqube-10-8.png

---

<img width="100%" src="img/posts/2024-12-08-novedades-sonarqube-10-8.png" alt="Novedades SonarQube 10.8">

¡Ya tenemos la **versión 10.8 de SonarQube Server**! Y como en cada versión, dedicamos un artículo a contarte las novedades. Estas son las características principales que vas a encontrar: 

- Nuevo Quality Gate para la garantía del código AI. <br>

- AI CodeFix disponible para la Developer Edition. <br>

- Standar Experience y MQR mode. <br>

- Nuevas reglas de arquitectura para Java y otras actualizaciones de idioma.<br>

Y ahora te lo contamos en más detalle a continuación. 


<h2>IA para SonarQube server</h2>

La versión 10.8 de SonarQube server incluye potentes mejoras relacionadas con la IA. Por un lado, ahora la **Developer Edition incluirá las sugerencias de AI CodeFix**, la funcionalidad que te ofrece soluciones de código generadas por la IA adaptadas al contexto de tu código y corregirlo directamente en tu IDE (IntelliJ, VS Code, Eclipse y ahora Visual Studio). 

Por otro lado, esta versión incluye un nuevo **Quality Gate AI Code Assurance** recomendado por Sonar. Ahora, tanto el nuevo código como el código general se comprobarán para asegurar que toda la base de código cumple con los más estrictos estándares de calidad. Para hacer uso de este Quality Gate, simplemente tendrás que marcarlo como "Calificada para AI Code Assurance", y sabrás qué Quality Gate se utilizará para AI Code Assurance.
<br><br>

<img width="80%" src="/img/sonarsource-products/quality gate ai sonarqube server.png" alt="Quality Gate AI in SonarQube">


<h2>Elegir entre dos modos de funcionamiento</h2>

Esta nueva versión de SonarQube serves incluye dos modos de operación que te explicamos a continuación: 

- **Standar Experience**: Este modo mantiene las cualidades familiares de reglas y problemas (Bug, Vulnerability y Code Smell) y severidades personalizadas que Sonar ha ofrecido históricamente.

- **MQR mode**: Este modo muestra el nuevo modelo de taxonomía de Clean Code, en el que las reglas y los problemas pueden tener múltiples cualidades, incluida una configuración de severidad por calidad. En el modo MQR, también se ha añadido la capacidad de establecer niveles de severidad personalizados al igual que en la experiencia estándar, para que puedas anular el nivel predeterminado con un nivel de severidad que se adapte a tus necesidades comerciales.
<br><br>

<img width="100%" src="/img/sonarsource-products/standar experience and mqr mode.png" alt="Standar experience and MQR mode">


Además, en todo momento puedes elegir **qué modelo funciona mejor para ti**. Si no estás seguro de cuál es el más adecuado, por defecto, SonarQube server selecciona el que mejor se adapte al comportamiento de la versión de SonarQube desde la que estás trabajando.
<br><br>


<h2>Actualizaciones de idiomas</h2>

Esta versión introduce las **primeras reglas de arquitectura** para encontrar **dependencias de clase circular en el código Java**, ya que este tipo de problemas arquitectónicos pueden ser difíciles de detectar por los desarrolladores. 

Por otro lado, ahora SonarQube Server incluye el soporte para Ansible IaC para ayudar a los desarrolladores a **mejorar su calidad y seguridad**. Recordemos que Ansible IaC es una de las principales herramientas de infraestructura de código (IaC) para automatizar el aprovisionamiento, la configuración, la actualización y la implementación de aplicaciones.

Seguimos. La versión 10.8 de SonarQube server incluye **115 reglas para Dart**, lo que significa que Sonar mueve Dart/Flutter del 'acceso anticipado' a un lenguaje totalmente soportado. 

Por último, SonarQube Server **incluye 119 reglas** que cubren **166 patrones secretos** y 113 servicios en la nube para fortalecer la 'detección de secretos'.


¡Estas han sido todas las novedades de la versión de SonarQube 10.8! Si quieres leer el artículo original de Sonar, te lo dejamos en [este enlace](https://www.sonarsource.com/blog/sonarqube-server-10-8-release-announcement/). 

