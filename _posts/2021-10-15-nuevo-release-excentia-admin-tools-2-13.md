---
layout: post
title: 'Novedades para el excentia Admin Tools for Jira'
description: Nuevos informes para el seguimiento de tus proyectos y asuntos
date: '2021-10-15T08:00:00.000+01:00'
author:  Anna Torres
categories: 
- productos
- novedades
- atlassian

cover: /img/posts/2021-10-15-nuevo-release-excentia-admin-tools-2-13-thumb.png
modified_time: '2021-10-15T08:00:00.000+01:00'
---


Hemos publicado la nueva versión del <a href="https://marketplace.atlassian.com/apps/1219118/excentia-admin-tools-for-jira?hosting=datacenter&tab=overview" target="_blank">excentia Admin Tools </a>.


## Nuevas funcionalidades

**- Nuevo informe de archivos adjuntos al proyecto**

Genera un informe de todos aquellos ficheros mayores de 1MB adjuntos en los asuntos del proyecto.

**- Nuevo informe de Evolución de creación de asuntos**

Muestra una gráfica con la evolución en la creación de cada uno de los tipos de asuntos del proyecto, esta evolución se puede elegir que sea diaria, mensual o anual.

<img src="/img/posts/2021-10-15-nuevo-release-excentia-admin-tools-2-13-evolucion-asuntos.png" alt="Evolución asuntos" width="100%">

**- Nuevo informe de Tiempo en estado** 

Detalla por cada proyecto, a partir de una consulta JQL o unas fechas de inicio y fin el tiempo que han transcurrido los asuntos del proyecto en cada uno de los estados.

<img src="/img/posts/2021-10-15-nuevo-release-excentia-admin-tools-2-13-tiempos-asuntos.png" alt="Tiempo promedio asuntos" width="100%">

**- Modificación del Informe de ANS's**

Se ha reformulado el informe para que sea más útil. Se puede elegir que ANS's se quiere que muestre el informe, calculando las estadísticas para cada uno de esos ANS seleccionados de manera individual, no como se hacía antes que se calculaba todo de manera conjunta, a parte se han incluido gráficas que reflejan estas estadísticas individuales).


<a href="https://marketplace.atlassian.com/apps/1219118/excentia-admin-tools-for-jira?" target="_blank" class="btn btn-outline-white btn-xl" style="background:#FF8200;border:none; font-weight:bold;font-size:0.6em" >PRUÉBALO GRATUITAMENTE POR 30 DÍAS</a>

<br/>

## Documentación

Para más detalles visita la pagina de <a href="/excentia-admin-tools">excentia Admin Tools for Jira</a>.

<br/>

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


