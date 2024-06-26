---
layout: post
title: 'Novedades SonarQube 10.6'
description: Escalado automático en Kubernetes, nueva configuración para proyectos C y C++... ¡Conoce todas las novedades!
date: '2024-06-24T08:00:00Z'
author: Belén Casanovas
categories:

- productos
- sonar
- sonarqube
- release


cover: img/posts/2024-06-24-novedades-sonarqube-10-6.png

---
<img width="100%" src="img/posts/2024-06-24-novedades-sonarqube-10-6.png" alt="Novedades SonarQube 10.6">

Ya tenemos todas las novedades de SonarQube 10.6 aquí. En excentia, como **partners exclusivos de Sonar** en España y Latinoamérica te vamos a contar en este artículo todas las novedades. ¡No te lo pierdas!

<br>
<h2>Autoescalado de SonarQube en Kubernetes</h2>

SonarQube admite ya el **escalado automático horizontal de pods** de aplicaciones cuando se ejecutan en un **clúster de Kubernetes**. Lo que permite que los developers no esperen a que se complete un análisis debido a limitaciones de recursos. Además, como los pods de aplicaciones se amplían y reducen automáticamente según la demanda, los recursos necesarios para ejecutarlos se optimizan para ahorrar costes.

Opciones disponibles para la edición: **Data Center Edition.**

<br>
<h2>Autoconfiguración de proyectos C y C++.</h2>

Con la introducción de la **configuración automática para proyectos C y C++**, ya no es necesario configurar 'Build Wrapper' y 'Compilation Database' para analizarlos. Ahora, la mayoría de los compiladores, incluso los que anteriormente no eran compatibles, funcionarán sin configuración adicional. Esto reduce drásticamente el tiempo que lleva configurar un proyecto C y C++ y, el análisis se ejecuta sin problemas.

Opciones disponibles para las ediciones **Developer Edition, Enterprise Edition, Data Center Edition.**

<br>
<h2>SonarQube se ejecuta en un entorno reforzado con FIPS</h2>

La ejecución del servidor SonarQube en un **entorno FIPS** garantiza que los algoritmos criptográficos utilizados para el cifrado, descifrado y las firmas digitales estén aprobados por el [National Institute of Standards and Technology (NIST)](/sonar-aisic-consortium-ia).

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<h2>Establecer prioridad de regla para evitar la publicación de código deficiente</h2>

Ahora SonarQube permite configurar la **prioridad de las reglas** en un perfil de calidad para que todos los problemas que coincidan con las reglas priorizadas **no pasen el control de calidad**. Esto facilita que las empresas puedan establecer políticas para identificar **qué problemas deben abordar los developers** en el código general antes del próximo lanzamiento para garantizar que el lanzamiento cumpla con el estándar de código limpio de su empresa.

Opciones disponibles para las ediciones **Enterprise Edition, Data Center Edition.**

<br>
<h2>Bibliotecas de aprendizaje Scikit en Python</h2>

Nueva compatibilidad con la biblioteca Scikit-learn, una de las principales bibliotecas de Python utilizadas para el **desarrollo de IA y aprendizaje automático**. Ahora, SonarQube admite las cuatro principales bibliotecas de Python que utilizan los profesionales del aprendizaje automático: TensorFlow, Scikit-learn, NumPy y Pandas. 

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
<h2>Fácil configuración de monorepos para todas las plataformas DevOps </h2>

En la versión 10.5 Sonar agregó una configuración sencilla de **monorepos para GitHub y GitLab**. Ahora, la misma configuración de flujo único para monorepos está disponible en **Azure DevOps y Bitbucket**, completando la configuración simplificada de monorepos en las cuatro plataformas DevOps.

Opciones disponibles para las ediciones <strong>Enterprise Edition, Data Center Edition.</strong>

<br>
<h2>Supervisar el tiempo de actualización y el progreso durante las actualizaciones </h2>

Ahora, Sonar hace que la actualización de SonarQube sea más predecible al **estimar el tiempo que llevará realizarla**. Esta nueva característica permitirá planificar mejor la actualización. Además, durante la actualización, se podrá monitorear el tiempo restante para completar la actualización y saber cuándo la instancia de SonarQube estará lista para ejecutarse nuevamente.

Opciones disponibles para las ediciones <strong>Community Edition, Developer Edition, Enterprise Edition, Data Center Edition.</strong>

<br>
Y hasta aquí todas las novedades que anunció el equipo de Sonar en [este artículo](https://www.sonarsource.com/products/sonarqube/whats-new/sonarqube-10-6/). 

Si necesitas **más información sobre SonarQube**, gestión de **licencias o soporte**, puedes ponerte en contacto con nuestro equipo a través del siguiente formulario.

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