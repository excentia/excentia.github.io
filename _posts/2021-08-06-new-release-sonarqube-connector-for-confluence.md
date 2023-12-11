---
layout: post
title: 'La seguridad de tu proyecto bajo control'
description: Security Review, un nuevo rating para el SonarQube Connector for Confluence
date: '2021-07-30T08:00:00.000+01:00'
author:  Anna Torres
categories: 
- productos
- novedades
- atlassian

cover: /img/posts/2021-08-10-seguridad-bajo-control-con-sonarqube-connector-for-confluence-1-11-thumb.png
modified_time: '2021-08-10T08:00:00.000+01:00'
---


Ya está disponible la nueva versión del <a href="/sonarqube-connector-confluence" target="_blank">SonarCloud / SonarQube Connector for Confluence 1.11</a>.


### Nueva funcionalidad 

--  Se ha añadido a la macro Issue Breakdown un nuevo apartado mostrando la información sobre los Security Hotspots del proyecto o proyectos configurados, con enlace asociado a los mismos en caso de un solo proyecto. Se han cambiado los iconos de severidad de todas las issues en el Issue Breakdown.

-- Se ha añadido un nuevo Rating en la SonarQube Connector Macro, llamado <strong>Security Review</strong> basado en el calculo de los security hostpots de los proyectos configurados.

-- Se han añadido los security hotspots y el rating a cada tarjeta de proyecto cuando se muestra la información de varios proyectos configurados en la Macro.

<a href="https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?hosting=server&tab=overview" target="_blank"><img src="/img/posts/2021-08-10-new-release-sonarqube-connector-for-confluence-1-11-2.png" alt="Security hotspots de tus proyectos de SonarCloud y SonarQube en el report en Confluence" width="100%"></a>
<a href="https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?hosting=server&tab=overview" target="_blank"><img src="/img/posts/2021-08-10-new-release-sonarqube-connector-for-confluence-1-11-1.png" alt="Issue breakdown de tus proyectos de SonarCloud y SonarQube en el report en Confluence" width="100%"></a>
<a href="https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?hosting=server&tab=overview" target="_blank"><img src="/img/posts/2021-08-10-new-release-sonarqube-connector-for-confluence-1-11-3.png" alt="Security hotspots de tus proyectos de SonarCloud y SonarQube en el report en Confluence" width="100%"></a>

Versión disponible para Cloud y Server.

<a href="https://marketplace.atlassian.com/apps/1218460/sonarqube-connector-for-confluence?hosting=server&tab=overview" target="_blank" class="btn btn-outline-white btn-xl" style="background:#FF8200;border:none; font-weight:bold;font-size:0.6em" >PRUÉBALO GRATUITAMENTE POR 30 DÍAS</a>

<br/>

## Documentación

Para más detalles visita la pagina de <a href="https://confluence.excentia.es/display/SQCONF?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=sonarqube_connector_confluence" target="_blank">SonarCloud / SonarQube Connector for Confluence</a>.

<br/>

<div style="border:1px solid #253858; padding:20px 20px;background:#253858; color:#fff; ">
<h3>¿Estas buscando otras funcionalidades para Jira?</h3> 
<p style="font-size:1.1em;">Descubre todos nuestros plugins y si no encuentras lo que necesitas contáctanos sin compromiso, somo tú <strong>Silver Marketplace Partner</strong> de confianza.
</p>
<a href="https://marketplace.atlassian.com/vendors/1210681/excentia?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=sonarqube_connector_Confluence" target="_blank"><span class="btn btn-outline-white btn-xl" style="background:#FF8200; border:none; font-size:0.6em; font-weight: bold;" >Descubre todos los plugins</span></a>
<br/>
<br/>
</div>


<br/>
<hr>
<br/>

<div id="contact-form">
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


