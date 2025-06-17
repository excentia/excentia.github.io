---
layout: post
title: 'Nuevo SonarQube Connector Migration Tool'
description: Herramienta de migración para el SonarQube Connector for Jira
date: '2021-12-21T08:00:00.000+01:00'
author:  Anna Torres
categories: 

- sonarqube
- calidad
- devops
- atlassian

cover: /img/posts/2021-12-22-nueva-version-sonarqube-connector-for-jira-cloud-2-14-thumb.png
modified_time: '2021-12-21T08:00:00.000+01:00'
---


Ya está disponible la versión 2.14 para Server y 2.15 para Cloud del <a href="https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=sonarqube_connector_jira" target="_blank">SonarCloud / SonarQube Connector for Jira</a> para el ecosistema de <a href="https://marketplace.atlassian.com/vendors/1210681/excentia?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=sonarqube_connector_Confluence" target="_blank">Atlassian</a>.


### Novedades 

#### Versión 2.14 para Server

El **SonarQube Connector for Jira** añade una nueva herramienta que permite exportar a fichero la información que disponemos de el Conector en Server para poder migrar luego a Cloud.

**¿Qué información exportamos en el fichero?**

La configuración global del conector y por cada proyecto(se pueden seleccionar qué poyectos se exportan al fichero),la configuración del panel del conector e issues creadas con el Conector.

#### Versión 2.15 para Cloud

Además de la nueva Herramienta de Migración en la versión para Cloud se ha mejorado la carga del Issue Breakdown,  separado los Security Hotspot del Issue Breakdown para que estén en una tabla diferente y mejorado el diseño del Issue Breakdown.

<br/>
<img src="/img/posts/2021-12-22-nueva-version-sonarqube-connector-for-jira-cloud-2-14-issues-breakdown.png" alt="Issues Breakdown" width="100%">
<img src="/img/posts/2021-12-22-nueva-version-sonarqube-connector-for-jira-cloud-2-14-hotspots.png" alt="Hotspots breakdown" width="100%">

<a href="https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?utm_source=blog&utm_medium=post&utm_campaign=new_release&utm_content=sonarqube_connector_Jira" target="_blank" class="btn btn-outline-white btn-xl" style="background:#FF8200;border:none; font-weight:bold;font-size:0.6em" >PRUÉBALO GRATUITAMENTE POR 30 DÍAS</a>

<br/>

## Documentación

Más detalles sobre el <a href="https://confluence.excentia.es/display/SQCON/SonarQube+Connector+Migration+Tool" target="_blank">SonarQube Connector Migration Tool</a>.

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


