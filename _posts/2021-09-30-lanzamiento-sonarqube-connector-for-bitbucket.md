---
layout: post
title: 'Nuevo SonarQube Connector for Bitbucket'
description: Conecta SonarCloud o SonarQube con tu instancia de Bitbucket
date: '2021-09-30T08:00:00.000+01:00'
author:  Anna Torres
categories: 
- noticias
- atlassian
- calidad
- devops

cover: /img/posts/2021-09-30-lanzamiento-sonarqube-connector-for-bitbucket-thumb.png
modified_time: '2021-09-30T08:00:00.000+01:00'
---

Hemos respondido a vuestras solicitudes y estamos orgullosos de anunciar que hemos publicado la primera versión del [SonarQube Connector for Bitbucket](/sonarqube-connector-bitbucket) para DataCenter.

Este nuevo plugin permite:

- ver el informe de análisis de SonarQube (o SonarCloud) en la parte superior de la página de código del repositorio de Bitbucket
- configurar diferentes servidores de SonarQube/SonarCloud 
- buscar los proyectos desde la configuración del repositorio para que sea más fácil su configuración (sin la necesidad de la clave del proyecto)

<img src="/img/posts/2021-09-30-lanzamiento-sonarqube-connector-for-bitbucket-view-metrics.png" alt="Ver las métricas de SonarQube / Sonarcloud en Bitbucket" width="70%">
<img src="/img/posts/2021-09-30-lanzamiento-sonarqube-connector-for-bitbucket-view-quality-gate.png" alt="Quality gaate de SonarQube / Sonarcloud en Bitbucket" width="70%">
<img src="/img/posts/2021-09-30-lanzamiento-sonarqube-connector-for-bitbucket-view-connections.png" alt="Crea diferentes conexiones SonarQube / Sonarcloud en Bitbucket" width="70%">

<br/>

## Descarga el SonarQube Connector for Bitbucket

La versión del [SonarQube Connector for Bitbucket](https://marketplace.atlassian.com/apps/1226407/sonarqube-connector-for-bitbucket?tab=overview&hosting=datacenter) para Data Center está disponible en el marketplace de Atlassian.

<a class="btn btn-warning btn-xl" style="background: #fff; color:#FF8200;font-size: 0.6em;" href="https://marketplace.atlassian.com/apps/1226407/sonarqube-connector-for-bitbucket?tab=overview&hosting=datacenter" target="_blank">Pruébalo por 30 días </a> &nbsp;&nbsp;
<a class="btn btn-warning btn-xl" style="font-size: 0.6em;" href="https://www.atlassian.com/purchase/addon/es.excentia.bitbucket.plugins.sonarqube-connector-app.data-center" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Comprar ahora&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>


Más información disponible en la página de [documentación](https://confluence.excentia.es/display/SQBIT).


<br/>
<hr>
<br/>
<!--Calidad de Software Contact Form-->
<div id="contact-form">
	<h1>Contáctanos</h1>
	<p>Rellena el formulario y te responderemos en menos de 24 horas.</p>
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


