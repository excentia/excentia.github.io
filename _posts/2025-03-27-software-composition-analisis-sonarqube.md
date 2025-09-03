---
layout: post
title: 'Software Composition Analysis (SCA): Disponible en SonarQube'
description: ¿Sabes que SonarQube incluye SCA? En este artículo te contamos en que consiste esta nueva funcionalidad. 
date: '2025-03-27T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- security
- sca

cover: /img/posts/2025-03-27-software-composition-analisis-sonarqube.png

---

Sonar ha anunciado que incluirá funciones de **Software Composition Analysis (SCA)** en las soluciones de SonarQube Server y SonarQube Cloud. El equipo de excentia está en **Early Access** gracias a que somos Gold Partners de Sonar y a que **Antonio Calero es Sonar Navigator**. Así que, a continuación, te vamos a explicar qué es el SCA y cómo te va a beneficiar esta funcionalidad cuando esté añadida en SonarQube. 
<br>

<h2>¿Qué es el SCA?</h2>

El Análisis de Composición de Software (SCA) es un **proceso automatizado dentro del ciclo de desarrollo de software** que identifica, analiza y gestiona componentes del código open source dentro de las aplicaciones. El objetivo es reducir los riesgos y garantizar la seguridad de los desarrollos.

En el [anuncio del lanzamiento](/aumenta-seguridad-codigo-sonarqube-advanced-security){:target="_blank"} de SonarQube Advanced Security vimos cómo entre sus funcionalidades estaba la del SCA. A continuación, te dejamos una infografía de Sonar donde resumían las características principales de este lanzamiento: 
<br><br>


<img width="90%" src="/img/sonarsource-products/sonarqube-code-security-excentia.webp" alt="Infografía de funcionalidades de seguridad de SonarQube">
<br>

<br><br>

En la [Comunidad de Sonar](https://community.sonarsource.com/t/is-software-composition-analysis-planned-in-the-future/113154){:target="_blank"} publicaron que esta nueva funcionalidad estará **disponible a partir de mayo de 2025** para las instancias de SonarQube Server y más adelante para las instancias de SonarQube Cloud. Faltará saber cómo van a añadir el SCA en las soluciones de SonarQube y en qué ediciones. 

Además, te recordamos que a finales del 2024 Sonar anunció la [adquisición de Tidelift](https://www.sonarsource.com/company/press-releases/sonar-to-acquire-tidelift/){:target="_blank"}. El objetivo era integrar esta solución para "reducir el riesgo del software open source", ya que amplía el alcance de las soluciones de Sonar para **analizar bibliotecas open source, las del código escrito por desarrolladores y las del código generado por la IA**. 

<h2>Funcionalidades clave del SCA</h2>

A continuación, te vamos a contar las **funcionalidades clave del SCA** y que, por tanto, se incluirán en las soluciones de SonarQube Server y SonarQube Cloud. 

- **Detección de vulnerabilidades (CVE)**: Las herramientas de SCA buscan vulnerabilidades. Estas vulnerabilidades se identifican con CVE únicos y se almacenan en bases de datos públicas como la Base de Datos Nacional de Vulnerabilidades (NVD). Cuando se detecta una vulnerabilidad, las herramientas de SCA proporcionan información detallada sobre: nivel de graverdad, parches disponibles, versiones afectas, etc. <br>

- **Cumplimiento de la licencia**: El SCA ayuda a identificar todas las licencias en uso, marca las incompatibles, garantizar el cumplimiento de las mismas y gestionan el mantenimiento de inventario de licencias. 

- **Gestión de dependencias**: Las funcionalidades SCA permite monitorizar el estado de salud de una dependencia, sugerir actualizaciones de versión e identificar dependencias directas y transitivas. 

- **Lista de materiales de software (SBOM)**: El SCA permite generar un SBOM que incluye: nombres y versiones de los componentes, información de licencias, vulnerabilidades conocidas, relaciones y dependencias de componentes e información de origen y proveedor. 

<h2>Beneficios del SCA</h2>

Si Sonar incluye el **SCA en SonarQube Server y SonarQube Cloud**... ¿Qué beneficios vas a tener? Pues te los contamos a continuación...

- Reduce los riesgos de seguridad. <br>

- Mejora la eficiencia de los equipos de desarrollo. <br>

- Reduce costes. <br>

- Mejora la calidad y seguridad del código. <br>


¡Hasta aquí este artículo sobre el SCA! Nada más podamos compartir más información sobre esta nueva funcionalidad, lo haremos en **nuestro blog**. Si necesitas más información sobre SonarQube puedes ponerte en contacto con nuestro equipo a través de este formulario. ¡Estaremos encantados/as de atenderte! 

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
         <input type="hidden" name="_subject" value="Post Sonar Conector Jira"/>
                </div>
            <div class="row control-group">
              <div class="form-group-2 col-xs-12 floating-label-form-group controls">
                <textarea name="message" class="form-control" rows="3" placeholder="Tu mensaje" id="message" required
                          data-validation-required-message="Por favor escribe un mensaje."></textarea>
                <p class="help-block text-danger"></p>
              </div>
              <div>
              <input type="hidden" name="_subject" value="Blog SCA en SonarQube"/>
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