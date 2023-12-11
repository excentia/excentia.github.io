---
layout: post
title: 'Reporte más completo para tus Issues y Hotspots'
description: Nueva versión para el SonarQube Connector for Jira
date: '2021-10-27T08:00:00.000+01:00'
author:  Anna Torres
categories: 
- productos
- novedades
- atlassian

cover: /img/posts/2021-10-27-nuevo-sonarqube-sonarcloud-connector-for-jira-2-12-thumb.png
modified_time: '2021-10-27T08:00:00.000+01:00'
---

Hemos publicado la nueva versión del <a href="https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?tab=overview&hosting=datacenter" target="_blank">SonarQube Connector for Jira</a> para **Server y DataCenter**.


## Novedades

Esta versión incluye una nueva pestaña donde se puede visualizar un reporte más detallado de las issues asociadas a la regla incumplida de SonarQube/SonarCloud que se utilizó para crear el asunto.

Podrás visualizar su severidad, el nombre del archivo donde se encuentra, el mensaje de la issue, un link a la línea de código, el tipo y su estado.

Y en el caso de ser un Sercurity Hotspot se visualizará su prioridad y su resolución.

**Issues** 

<img src="/img/posts/2021-10-27-nuevo-sonarqube-sonarcloud-connector-for-jira-2-12-issue-tab-issues.png" alt="SonarQube Connector para Jira - Issue Tab" width="100%">

**Security Hotspot** 
<img src="/img/posts/2021-10-27-nuevo-sonarqube-sonarcloud-connector-for-jira-2-12-issue-tab-security-hotspot.png" alt="SonarQube Connector para Jira - Security Hotspot" width="100%">

<br/>

<a href="https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?tab=overview&hosting=datacenter" target="_blank" class="btn btn-outline-white btn-xl" style="background:#FF8200;border:none; font-weight:bold;font-size:0.6em" >PRUÉBALO GRATUITAMENTE POR 30 DÍAS</a>

<br/>

## Documentación

Para más detalles visita la pagina de <a href="/sonarqube-connector-jira">SonarQube Connector for Jira</a>.

<br/>

<br/>
<hr>
<br/>

<div id="contact-form-hubspot">
	<h1>¿Necesitas soporte para tus productos de Atlassian?</h1>
	<p>Si necesitas un desarrollo personalizado, asesoramiento con componentes de terceros, migración de datos, unificación de instancias, o otra gestión contactanos sin compromiso y te responderemos en menos de 24 horas.</p>
<br/>
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

</div>


