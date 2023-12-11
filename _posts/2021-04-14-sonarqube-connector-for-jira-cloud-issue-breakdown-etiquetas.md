---
layout: post
title: 'Crea asuntos de cualquier severidad de SonarQube / SonarCloud'
description: Disponible para Jira Server, Data Center y Cloud
date: '2021-04-14T08:00:00.000+01:00'
author:  Anna Torres
categories: 
- productos
- novedades
- atlassian

cover: /img/posts/2021-04-14-sonarcloud-sonarqube-connector-jira-etiquetas-issues-breakdown.png
modified_time: '2021-04-14T08:00:00.000+01:00'
---

Ya está disponible la nueva versión de <a href="sonarqube-connector-jira" target="_blank">SonarQube Connector for Jira Server, Data Center y Cloud</a> para el ecosistema de <a href="https://marketplace.atlassian.com/vendors/1210681/excentia?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=app" target="_blank" >Atlassian</a>.

Disponible para Jira Server, Data Center y Cloud.

<a href="https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=app" target="_blank" class="btn btn-outline-white btn-xl" style="background:#253858;border:none; font-weight:bold;font-size:0.6em" >Descarga SonarCloud / SonarQube Connector for Jira </a>

<br/>



### Nuevas Funcionalidades

- Se añade un nuevo campo de configuración del conector, "Etiquetas". Se trata de un campo opcional que permite obtener la información de un proyecto/s mediante la configuración de una etiqueta,o una lista de etiquetas separadas por comas, que tengan proyectos asociados en SonarQube/SonarCloud.

<br/>
<img src="/img/posts/2021-04-14-sonarqube-connector-jira-project-setting.png" width="100%" alt="SonarQube Connector for Jira Cloud / DataCenter / Server">
<br/>

- Se añaden todas las severidades de las evidencias que muestra el IssueBreakdown, pudiendo ahora crear asuntos de cualquier severidad, hasta ahora solo se mostraban las severidades "Blocker" y "Critical" , se han añadido "Major", "Minor" y "Info". 

<img src="/img/posts/2021-04-14-sonarqube-connector-jira-mayor.png" width="100%" alt="SonarQube Connector for Jira Cloud / DataCenter / Server">
<img src="/img/posts/2021-04-14-sonarqube-connector-jira-minor.png" width="100%" alt="SonarQube Connector for Jira Cloud / DataCenter / Server">
<img src="/img/posts/2021-04-14-sonarqube-connector-jira-info.png" width="100%" alt="SonarQube Connector for Jira Cloud / DataCenter / Server">

<br/>
<a href="https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?hosting=cloud&tab=overview?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=app" target="_blank" class="btn btn-outline-white btn-xl" style="background:#FF8200;border:none; font-weight:bold;font-size:0.6em" >Descarga SonarCloud / SonarQube Connector for Jira</a>

<br/>

## Documentación

Para más detalles visita la pagina de <a href="https://confluence.excentia.es/display/SQCON/Features?utm_source=website&utm_medium=page&utm_campaign=atlassian&utm_content=atlassian_marketplace" target="_blank">SonarQube Connector for Jira </a>.

<br/>

<div style="border:1px solid #253858; padding:20px 20px;background:#253858; color:#fff; ">
<h3>¿Estas buscando otras funcionalidades para Jira?</h3> 
<p style="font-size:1.1em;">Nuestros plugins son el resultado de la innovación y mejora continua con la garantía de haber sido certificados como <strong>Silver Marketplace Partner</strong>.
</p>
<a href="/atlassian#atlassian-marketplace"><span class="btn btn-outline-white btn-xl" style="background:#FF8200; border:none; font-size:0.8em; font-weight: bold;" >Descubre todos los plugins</span></a>
<br/>
<br/>
</div>


<br/>
<hr>
<br/>

<div id="contact-form">
	<h2>¿Necesitas soporte para tus productos de Atlassian?</h2>
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


