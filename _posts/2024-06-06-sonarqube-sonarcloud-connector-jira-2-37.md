---
layout: post
title: 'SonarQube Connector For Jira Cloud 2.37'
description: Nueva funcionalidad llamada Require All Tags para buscar proyectos a partir de etiquetas. ¡Te lo contamos!
date: '2024-06-06T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- atlassian

cover: img/posts/2024-06-06-sonarqube-sonarcloud-connector-jira-2-37.png

---

<img width="100%" src="img/posts/2024-06-06-sonarqube-sonarcloud-connector-jira-2-37.png" alt="SonarQube Connector for Jira Cloud 2.35">

Nueva actualización de nuestro producto **SonarQube/SonarCloud Connector for Jira**. Ya está disponible **la versión 2.37** para las ediciones Cloud y Data Center y te vamos a explicar cuáles son las novedades. ¡Empezamos! 

Nuestro equipo de desarrollo ha lanzado dos nuevas funcionalidades que permiten, la primera, **buscar todos los proyectos de SonarQube o SonarCloud** que tengan añadidas **todas las etiquetas** que indiques en la configuración y, la segunda, encontrar un proyecto a partir de la key de tu proyecto de Jira.

**Buscar proyectos con todas las etiquetas configuradas**

Por ejemplo, imaginemos que queremos todos los proyectos que contengan las etiquetas 'apache' y 'test'. Si tenemos **desactivada** la opción 'Require All Tags', nos aparecerá los proyectos que tengan configuradas las etiquetas 'apache' **o** 'test'. Si tenemos **activada** la opción 'Require All Tags' solo nos mostrará los proyectos que tengan configuradas las etiquetas 'apache' **y** 'test'.

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-require-tags.png" alt="SonarQube Connector for Jira Cloud Require All Tags">


**Buscar proyectos a partir de la key del proyecto de Jira**

Otra de las nuevas funcionalidades es la búsqueda de un proyecto de **SonarQube/SonarCloud** a partir de la **key configurada en un proyecto de Jira**. Ahora, cuando un usuario acceda por primera vez a la aplicación, a nivel de proyecto y sin haber configurado nada (solo el servidor y el token a nivel global o por proyecto), se realizará una búsqueda en SonarQube o SonarCloud con la misma key que tenga el proyecto de Jira. 

¡Y hasta aquí todas las novedades de esta nueva versión! Aquí te dejamos una serie de **enlaces de interés** para que puedas ampliar la información de nuestro conector: 

1 - [Demo](https://youtu.be/3YXbauc0zuY?si=Hmc1D0ILeagoViTj) del producto.<br>
2 - Lista de [releases](https://www.youtube.com/watch?v=mNI0rK-Ci2Q&list=PLZ5oF-c2V6nPl05DRCJU0q9iN2ouz2_1B&ab_channel=excentiaTube) de las aplicaciones.<br>
3 - [Página](https://www.excentia.es/sonarqube-connector-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace) de producto y documentación.<br> 

Si no tienes esta aplicación y quieres probarla, puedes descargar la **prueba gratuita de 30 días** a través de [este enlace](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace).

Y si necesitas asesoramiento o tienes alguna pregunta, puedes ponerte en contacto con nosotros a través de este formulario: 

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