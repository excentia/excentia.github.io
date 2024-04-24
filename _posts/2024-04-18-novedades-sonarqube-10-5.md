---
layout: post
title: 'Novedades SonarQube 10.5'
description: Soporte para Java 12, C++23, biblioteca para TensorFlow...¡Aquí te contamos las novedades de la última actualización! 
date: '2024-04-18T08:00:00Z'
author: Belén Casanovas
categories:

- productos
- sonar
- sonarqube
- release


cover: img/posts/2024-04-18-novedades-sonarqube-10-5.png

---
<img width="100%" src="img/posts/2024-04-18-novedades-sonarqube-10-5.png" alt="Novedades SonarQube 10.5">

SonarQube 10.5 ya está aquí. Esta semana, el equipo de Sonar nos ha contado las nuevas actualizaciones que recibe este producto. Y nosotros, como **partners exclusivos en España y Latinoamérica de Sonar** te las vamos a contar. 

En resumen, desde Sonar anuncian el **soporte para Java 21, C++23 y TypeScript 5.4** y mejoras de rendimiento de la **detección de secretos y en el Deeper SAST**. Además, confirman que han **simplificado los proyectos de incorporación para monorepos** en GitHub y GitLab, Maven y GitHub Actions y que han duplicado las reglas para **Kubernetes y Helm Charts**. También indican que han añadido la **biblioteca TensorFlow**, ampliando su soporte para bibliotecas comunes utilizadas por los profesionales de Machine Learning (ML). 

A continuación, vamos punto por punto explicando todas las **novedades de la nueva versión de SonarQube 10.5**.

<br>
<h2>Principales actualizaciones de los lenguajes</h2>

<strong>Java 21 LTS y TypeScript 5.4 ahora soportados</strong>

Sonar confirma el soporte para Java 21 LTS. Ahora SonarQube incluye la **actualización de las reglas existentes** y **30 nuevas reglas** diseñadas para cubrir las nuevas características del lenguaje en Java 21 LTS. 

Por otro lado, los desarrolladores de TypeScript contarán también con soporte para la **última versión de TypeScript 5.4**.

Opciones disponibles para las ediciones **Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.**

<br>
<strong>Soporte para C++23</strong>

También han anunciado el **soporte para C++23**. Ahora los usuarios podrán codificar en C++23 con todas las **medidas de seguridad de SonarQube**. Todas las reglas de C++ existentes se han actualizado para tener en cuenta los cambios en la nueva versión.

Opciones disponibles para las ediciones **Developer Edition, Enterprise Edition, Data Center Edition.**

<br>
<strong>Análisis de detección de secretos más rápida</strong>

Sonar anuncia una **mejora en el rendimiento** de detección de secretos. Ahora, el motor de detección de secretos **aprovecha CPUs paralelas** para realizar el escaneo cuando se ejecuta en una máquina multicore/multi-CPU. 

Esta actualización garantiza que el análisis tenga un impacto cero en el rendimiento general del análisis y, por lo tanto, se realizará más rápido.

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>Más librerías para Deeper SAST</strong>

Con el objetivo de mejorar [el Deeper SAST](https://www.excentia.es/seguridad-clean-code-sonar) Sonar ha aumentado la **cobertura de las bibliotecas públicas de Java**, por lo que ahora cubren las 2.000 bibliotecas públicas más utilizadas por los desarrolladores. Ahora queda reforzada la detección de más vulnerabilidades de inyección de seguridad y errores de flujo de datos que aparecen en los escaneos.

Opciones disponibles para las ediciones **Developer Edition, Enterprise Edition, Data Center Edition.**

<br>
<strong>Kubernetes y Helm Gráficos Mejoras</strong>

A medida que crece la popularidad de Kubernetes y Helm Chart, SonarQube ha aumentado hasta **16 el número de reglas de seguridad** y otras **16 reglas de mejores prácticas** de mantenimiento para Kubernetes y Helm Charts.

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>TensorFlow, bibliotecas de fecha y hora en Python</strong>

Nuevo soporte para TensorFlow, una de las principales bibliotecas de Python utilizadas para el desarrollo de AI/ML. Ahora existen **7 nuevas reglas para evitar errores** al usar las bibliotecas de fecha y hora.

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>C# en .NET Mejores prácticas de registro y ASP.NET MVC Framework</strong>

Añadidas **15 nuevas reglas** para evitar las trampas comunes y asegurarse de seguir las mejores prácticas durante el registro. En esta versión, también se agregan 9 nuevas reglas para soportar el ASP.NET MVC Framework. Combinando el soporte para Blazor, SonarQube ahora cubre la mayoría del desarrollo de aplicaciones web en .NET.

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>Ampliación de la accesibilidad para cubrir HTML</strong>

Sonar añade **16 reglas de JavaScript a HTML** para ayudar durante el desarrollo de código accesible para aplicaciones front-end. Ahora el número total de reglas de accesibilidad entre JavaScript, Typescript y HTML es de alrededor de 100. Esto significa que la misma cobertura de accesibilidad que tiene para escribir código JavaScript y React ahora se cubre cuando se escribe código HTML.

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>Mejora de la eficiencia del código en Java</strong>

Para mejorar la sostenibilidad de tu código, Sonar ha añadido 11 nuevas reglas para desarrolladores móviles **Java Enterprise y Java Android**. Estas nuevas reglas representan el primer paso para ayudar a reducir el consumo de energía y batería de las aplicaciones.

Opciones disponibles para las ediciones **Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.**

<br>
<strong>Limpieza del ecosistema Mainframe</strong>

Sonar ayuda a **limpiar todo el ecosistema del mainframe**, no solo el código COBOL. Ahora, existen reglas para cubrir el Lenguaje de Control de Trabajos (JCL), un lenguaje de scripting de mainframe comúnmente usado para orquestar la ejecución de programas COBOL.

Opciones disponibles para las ediciones <strong> Enterprise Edition, Data Center Edition.</strong>

<br>
<h2>Onboarding de proyecto simplificado y configuración de análisis</h2>

<br>
<strong>Configuración guiada de todos los proyectos en un monorepo</strong>

Con esta versión, el usuario podrá importar sus monorepos desde **GitHub o GitLab**, y SonarQube, le guiará a través de la configuración de cada proyecto en el monorepo. 
SonarQube sugiere un prefijo para los nombres de sus proyectos durante la importación guiada de proyectos. Posteriormente, solo quedará agregar una referencia y clave de proyecto, seleccionando la nueva definición de código, configurar el análisis y los proyectos se configuran automáticamente con la "decoración" del pull request.  

Opciones disponibles para las ediciones <strong>Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>Maven Scanner escanea todos los archivos</strong>

El nuevo SonarScanner para Maven versión 3.11 ahora **escanea automáticamente** todos los archivos de la raíz de un proyecto Maven, incluyendo Dockerfiles, archivos de configuración CI, src/main/resources, etc. 

Antes de esta versión, el escáner Maven solo analizaba archivos de proyectos Java estándar en src/main/java y src/test/java. Ahora, ya no es necesario anular *sonar.sources* y *sonar.tests* para escanear todos los archivos en el directorio raíz de Maven. Esta función está deshabilitada de forma predeterminada para que el escáner no recoja archivos sin querer. Para habilitar esta función, establece *sonar.maven.scanAll* en modo "true".

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<strong>Nueva acción GitHub de C, C++ y Objective-C</strong>

Sonar anuncia una nueva acción de **SonarQube GitHub para C, C++ y Objective-C**. Este hito elimina la configuración manual de una acción de GitHub para escanear su código C, C++ y Objective-C. Puedes encontrar la acción oficial de GitHub suministrada por Sonar en el Mercado de Acción de GitHub.

Opciones disponibles para las ediciones <strong>Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<h2>Otras actualizaciones</h2>

•	**JavaScript/TypeScript**: Se realizaron mejoras continuas de precisión para reducir las tasas de falsos positivos.<br>
•	**Java/Kotlin**: Añadido cinco nuevas reglas.<br>
•	**NET**: Promovió siete reglas al perfil de calidad de la vía Sonar.<br>
•	**Python**: Se realizaron mejoras continuas de precisión para reducir las tasas de falsos positivos.<br>
•	Vistas actualizadas con la nueva taxonomía **Clean Code** para proyectos, aplicaciones y portfolios.<br>
•	**Node.js V16** final de la vida fue el 11 de septiembre de 2023, y SonarQube ya no es compatible con él a partir de esta versión. La mayoría de los desarrolladores no se verán afectados, pero si no está en Linux x64, Windows x64 o Apple ARM64, debe actualizar a la última versión de LTS de Node.js manualmente, o su análisis dejará de funcionar.

Y hasta aquí todas las novedades que anunció el equipo de Sonar en [este artículo](https://www.sonarsource.com/products/sonarqube/whats-new/sonarqube-10-5/). 

Recuerda que si necesitas más información sobre SonarQube, sobre nuestro servicio de mantenimiento o gestión de licencias, puedes ponerte en contacto con nosotros a través del siguiente formulario.

<form action="https://formspree.io/f/xaygrdqg" method="POST">
 <div class="col-md-12 col-sm-12">
   <div class="row control-group">
        <div class="form-group col-xs-12 floating-label-form-group controls">
           <input type="text" name="name" class="form-control" placeholder="Tu nombre" id="name" required data-validation-required-message="Por favor escribe tu nombre.">
            <p class="help-block text-danger"></p>
        </div>
     </div>
<div class="row control-group">
     <div class="form-group col-xs-12 floating-label-form-group controls">
        <input type="email" name="email" class="form-control" placeholder="Correo electrónico" id="email" required data-validation-required-message="Por favor escribe tu dirección de correo.">
           <p class="help-block text-danger"></p>
        </div>
            </div>
            <div>
        <input type="text" name="_gotcha" style="display:none"/>
        </div>
        <div>
         <input type="hidden" name="_subject" value="Post Novedades SonarQube 10.5"/>
                </div>
            <div class="row control-group">
              <div class="form-group-2 col-xs-12 floating-label-form-group controls">
                <textarea name="message" class="form-control" rows="3" placeholder="Tu mensaje" id="message" required
                          data-validation-required-message="Por favor escribe un mensaje."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <p><strong>excentia</strong> se compromete a respetar tu privacidad, y solo usaremos tu información para proporcionar productos, servicios y contenido que pueda ser de interés para tí.</p>
                <input type="checkbox" name="agreement" class="form-check-input" id="agreement" value="accept" required data-validation-required-message="Por favor lee y acepta la política de privacidad y los términos y condiciones">
                <label class="form-check-label" for="agreement">He leído y acepto la <a href="https://www.excentia.es/privacy" target="_blank">política de privacidad</a> y los <a href="https://www.excentia.es/pdf/excentia-terms-and-conditions.pdf" target="_blank">términos y condiciones</a></label>
              </div>
            </div>
            <div id="success"></div>
            <div class="block">
              <button type="submit" class="btn btn-warning btn-xl">Enviar mensaje</button>
            </div>
          </div>
        </form>