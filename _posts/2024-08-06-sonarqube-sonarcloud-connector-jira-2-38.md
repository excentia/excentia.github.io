---
layout: post
title: 'SonarQube Connector For Jira Cloud 2.38'
description: Elige la pantalla principal del conector, mejoras en la interfaz y configuración del informe de descarga. ¡Te lo contamos aquí!
date: '2024-08-06T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- sonarcloud
- jira cloud
- jira data center
- marketplace

cover: /img/posts/2024-08-06-sonarqube-sonarcloud-connector-jira-2-38.png

---

<img width="100%" src="img/posts/2024-08-06-sonarqube-sonarcloud-connector-jira-2-38.png" alt="SonarQube Connector for Jira Cloud 2.38">

Lanzamos la **versión 2.38** de nuestra aplicación SonarQube/SonarCloud Connector for Jira para las instancias Cloud y Data Center. Esta actualización trae consigo nuevas funcionalidades y mejoras que te vamos a explicar a continuación. 

<br>
<h2>Elije la pantalla principal</h2>

Te presentamos la primera de las nuevas funcionalidades. Ahora el usuario podrá elegir qué **pantalla se mostrará como pantalla inicial** de carga del conector: Overview, CWE Top 25, OWASP, ASVS o ISO5050. Hasta este momento, la pantalla inicial siempre era la del Overview. Esta configuración de pantalla se podrá realizar a **nivel general o a nivel de proyecto**. 

Para configurar esta nueva funcionalidad únicamente tendrás que dirigirte a 'Visualization settings' (a nivel general o por proyecto) y seleccionar la pantalla en el **desplegable 'Main Panel Screen'**. 

Aquí te dejamos una imagen para que puedas localizarlo: 

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-main-panel-screen.png" alt="SonarQube Connector for Jira Cloud Main Panel Screen">

<br>

<h2>Habilitar/deshabilitar la función de Open AI</h2>

Esta funcionalidad se puede aplicar únicamente a nivel general y no por proyecto. Ahora, el administrador podrá **habilitar o deshabilitar la función de Open AI**, con el objetivo de poder controlar si se quiere que el usuario puede o no utilizar esta función. 

En la siguiente imagen comparamos la configuración de un proyecto cuando tienen la función de Open AI habilitada y cuando la tiene deshabilitada: 

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-open-ai.png" alt="SonarQube Connector for Jira Cloud Open AI">

<br>

<h2>Mejoras de visualización</h2>

Esta actualización incluye dos mejoras de visualización de la información. En primer lugar, ahora se mostrará con **texto enriquecido** las descripciones de los asuntos o las issues creadas con la aplicación. 

Por otro lado, el informe que puedes descargar en PDF se descargará con la información que ha **configurado el usuario en el issues breakdown**. Por ejemplo, si el usuario tiene configurado que solo se muestre la información relativa a los bugs, el informe solo descargará esa información. 



<h3>Más información sobre nuestro conector</h3>

Si quieres más información sobre esta aplicación, aquí te dejamos una serie de **enlaces de interés** para que puedas ampliar tus conocimientos: 

1 - [Demo](https://youtu.be/3YXbauc0zuY?si=Hmc1D0ILeagoViTj) del producto.<br>
2 - Lista de [releases](https://www.youtube.com/watch?v=mNI0rK-Ci2Q&list=PLZ5oF-c2V6nPl05DRCJU0q9iN2ouz2_1B&ab_channel=excentiaTube) de las aplicaciones.<br>
3 - [Página](https://www.excentia.es/sonarqube-connector-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace) de producto y documentación.<br> 

Si no tienes esta app y quieres probarla, puedes descargar la **prueba gratuita de 30 días** a través de [este enlace](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace).

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