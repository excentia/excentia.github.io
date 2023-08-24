---
layout: post
title: Cómo limpiar el codigo de tu infraestructura con Sonar
description: Sonar incluye reglas específicas para encontrar vulnerabilidades en la Iac. Te lo contamos en este artículo. 

date: '2023-08-24T08:00:00Z'
author: Belén Casanovas
categories:

- sonar
- sonarqube
- sonarcloud

cover: /img/posts/2023-08-24-como-limpiar-codigo-sonar.jpg

---

Las infraestructuras como código (Iac) no son nuevas, pero su popularidad no hace más que crecer. Uno de los mejores aspectos de IaC es que aporta una **nueva dimensión a lo que los desarrolladores pueden conseguir**. 

Como ya sabrás, se trata de una tecnología poderosa que ofrece más **flexibilidad e independencia** a los desarrolladores de plataformas cloud. 

Un gran poder conlleva una gran responsabilidad. Igual que en el código fuente, en la IaC también hay problemas, en forma de bugs y vulnerabilidades. Estos pueden causar estragos en tu infraestructura y en la reputación de tu organización. Por ello, recomendamos **Sonar como la plataforma ideal para corregir** estos code smells y aquí te vamos a explicar cómo.



<h2>Asegura tu IaC con Sonar</h2>

En primer lugar, vamos a recordar la **definición del concepto IaC**:

'IaC es el proceso de administración y aprovisionamiento de infraestructura a través de archivos de definición legibles por una máquina, en lugar de configuraciones de hardware físico o herramientas de configuración basadas en GUI. Las definiciones pueden mantenerse en un sistema de control de versiones como Git'. 

Ahora vamos a lo interesante. Las **reglas específicas de Sonar para la IaC** encuentran vulnerabilidades en la infraestructura de nube para minimizar el riesgo del usuario. Gracias a SonarQube o SonarCloud puedes escanear el código fuente de tus aplicaciones nativas, también en versión cloud.  

En este video puedes ver cómo hacer un análisis en SonarCloud: 

<div class="col-md-12">
        <iframe width="660" height="415" src="https://www.youtube.com/embed/Zn4CXrXYe7k?si=WMlQqGhA_3x_6Qxj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
<br>
<br>

Tanto si se trata de JavaScript que se ejecuta en el backend, como de funciones de AWS Lambda como parte de tu microservicio, Sonar detecta los problemas de calidad y seguridad y **te ayuda a solucionarlos**.

Aquí te dejamos dos ejemplos de problemas detectados por las reglas específicas de IaC:

<img width="60%" src="/img/posts/2023-08-24-como-limpiar-codigo-sonar-azure.jpg" alt="captura de azure">

**Ejemplo 1: Vulnerabilidad de los permisos de alcance en Azure con una ubicación secundaria.**

<img width="60%" src="/img/posts/2023-08-24-como-limpiar-codigo-sonar-aws.jpg" alt="captura de aws">

**Ejemplo 2: Vulnerabilidad de autenticación en AWS.**

Otro de los beneficios reside en la siguiente razón: No todos los usuarios cuentan siempre con un único proveedor de nube. Por ello, Sonar **es compatible con los proveedores Amazon Web Services (AWS), Google Cloud y Azure**. 

Y hasta aquí otro capítulo de los beneficios de Sonar para tu código. No dudes en seguirnos para estar al tanto de todas las novedades de Sonar.

¿Tienes alguna consulta? Contáctanos a través de nuestro [formulario de contacto](https://www.excentia.es/contacto). 

El artículo original de Sonar lo pudes [leer aquí](https://www.sonarsource.com/blog/iac_code_quality/) 