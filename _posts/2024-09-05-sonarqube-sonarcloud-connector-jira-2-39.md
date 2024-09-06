---
layout: post
title: 'SonarQube Connector For Jira Cloud 2.39'
description: Nuevo botón para descargar un informe en PDF del CWE Top 25. ¡No te pierdas esta actualización!
date: '2024-09-05T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- sonarcloud
- jira cloud
- jira data center
- marketplace

cover: img/posts/2024-09-06-sonarqube-sonarcloud-connector-jira-2-39.png

---

<img width="100%" src="img/posts/2024-09-06-sonarqube-sonarcloud-connector-jira-2-39.png" alt="SonarQube Connector for Jira Cloud 2.39">

Nueva funcionalidad en la **versión 2.39** de nuestra aplicación SonarQube/SonarCloud Connector for Jira para las instancias Cloud y Data Center. 

Nuestro equipo de desarrollo ha añadido un **nuevo botón en el panel del CWE Top 25** para que puedas descargar un informe en formato PDF sobre las 
vulnerabilidades de los proyectos configurados que afectan a dicho estándar. 

En la siguiente imagen puedes ver dónde está **este nuevo botón**: 

<br>
<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-sonarcloud-connector-jira-pdf-cwe-top.png" alt="SonarQube Connector for Jira Cloud PDF CWET Top 25">

<br>

Y, a continuación, te enseñamos un **ejemplo del informe en PDF** del CWE Top 25 que puedes descargar: 

<br>
<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-sonarcloud-connector-jira-pdf-cwe-top-report.png" alt="SonarQube Connector for Jira Cloud PDF Report CWET Top 25">


Por último te dejamos **un video** para que veas el proceso completo sobre cómo descargar este nuevo informe: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/k_phk6hsQ0U?si=HSTYvbzpvi118D4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



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