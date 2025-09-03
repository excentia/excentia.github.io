---
layout: post
title: Cómo garantizar la seguridad del código con SonarQube
description: Escribimos sobre las características y usos de SonarQube para garantizar la seguridad de tu código. 
date: '2024-04-04T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops


cover: /img/posts/2024-04-04-garantizar-seguridad-codigo-sonarqube.png

---
<img width="100%" src="img/posts/2024-04-04-garantizar-seguridad-codigo-sonarqube.png" alt="Consejos para garantizar la seguridad en el">

SonarQube es una **potente herramienta** que no solo te ayudar a desarrollar código de calidad, si no que también te permite **garantizar la seguridad** de lo que estas desarrollando. En excentia, como Partners exclusivos de Sonar en España y Lationamérica, te vamos a explicar en este artículo por qué. ¡Empezamos!

<h2>¿Qué es SonarQube?</h2>

Primero, vamos a recordar que SonarQube es una herramienta open source de **inspección continua de código** que detecta **bugs, vulnerabilidades, code smells y hotsposts**. Ofrece a los equipos DevOps una solución de seguridad y calidad de código, con el objetivo de entregar código limpio.

Dicho esto, ya podemos empezar a responder las preguntas clave.

<h2>¿Cómo puede SonarQube ayudar a corregir vulnerabilidades de seguridad en el código?</h2>

Seleccionamos las características principales de SonarQube que ayudan a eliminar esas vulnerabilidades que se generan durante el desarrollo de código: 

- **Generación de código seguro**: SonarQube facilita el cumplimiento de los estándares de vulnerabilidad y el cumplimiento de los Quality Gate para que estés seguro de que entregas código seguro. 

- **Reglas de seguridad**: Aprovecha las 5.000 reglas de codificación y análisis de lenguajes como Java, C#, PHP, Python, TypeScript y JavaScript, perfectamente explicadas para aplicar la mejor resolución a los inconvenientes detectados. 

- **Información en tiempo real**: Los desarrolladores pueden obtener comentarios en tiempo real sobre la seguridad de su código, durante el análisis del mismo. 

- **Seguimiento de cambios**: Los administradores pueden descargar registros de auditoría para mantener un seguimiento de los cambios relacionados con la seguridad, realizados en su instancia de SonarQube. 

<h2>¿Qué características de seguridad ofrece SonarQube?</h2>

Ahora, vamos a detallar algunas característcas de producto que ofrece SonarQube a los equipos de seguridad y también, para los DevOps. 

- **Integración con el IDE con SonarLint**: SonarLint, la extensión de Sonar para tu IDE te permitirá corregir los errores detectados por SonarQube en el lugar exacto en el IDE. 

- **Informes de seguridad**: Los informes de seguridad te permiten tener una visión general del cumplimiento de los estándares de seguridad de tu código. Estos informes incluyen el PCI DSS, OWASP Top 10, CWE Top 25 y el OWASP ASVS. 

- **Detección de secretos**: Los secretos hacen referencia a la información confidencial que está en tu código y que compromete la seguridad de la organización (Por ejemplos, las contraseñas, claves API, credenciales, etc.). SonarQube utiliza una combinación de expresiones regulares y análisis semántico para detectar secretos en el código fuente mientras estás desarrollando. Lo que permite la detección de esos secretos y su corrección para que no ingresen al repositorio. 

- **Integración CI/CD**: Las integraciones de Sonar son compatibles con plataformas DevOps y CI/CD populares, incluidas GitHub, GitLab, Azure Devops, TravisCI, CircleCI y Bitbucket. Esta integración permite mejorar la postura de seguridad de tu software y garantizar que las vulnerabilidades se identifiquen tempranamente en el ciclo de vida de desarrollo.

Si quieres más información sobre SonarQube, sobre nuestro servicio de mantenimiento o gestión de licencias, puedes ponerte en contacto con nosotros a través del siguiente formulario.

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
         <input type="hidden" name="_subject" value="Post Seguridad SonarQube"/>
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