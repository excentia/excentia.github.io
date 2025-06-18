---
layout: post
title: '¿Cómo insertar un listado de issues en Jira Cloud?'
description: Nuevo tutorial en el que te enseñamos esta funcionalidad para organizar las issues de Jira.
date: '2024-04-02T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- atlassian


cover: img/posts/2024-04-02-como-insertar-listado-issues-jira.png

---
<img width="100%" src="img/posts/2024-04-02-como-insertar-listado-issues-jira.png" alt="Diferencias entre Jira Work Management y Trello">


¡Nueva **funcionalidad disponible** para los usuarios de Jira Cloud! En el Atlassian Community se anuncian muchas [nuevas funcionaldiades](https://community.atlassian.com/) y esta es una de ellas. Así que en este tutorial, te vamos a explicar rápidamente cómo puedes añadir una lista de issues creadas en Jira en Jira Cloud. 

Lo primero que tendrás que hacer es acceder a la issue de Jira donde quieras añadir ese listado de issues. Una vez dentro de ella, dentro del apartado 'Descripción' tendrás que introducir la **siguiente macro**: /jira. A continuación, se te abrirá un desplegable y deberás seleccionar la opción 'Jira Issues'. En la siguiente imagen te enseñamos este punto: 

<img width="80%" src="img/atlassian-products/jira-issues-macro.png" alt="macro Jira issues">

Una vez insertada esa macro se abrirá una ventana donde ya podrás empezar a añadir ese listado de issues. En concreto, se abre un **filtro** para que elijas el proyecto del cual quieres importar las issues y filtrarlas por tipo de issue, el estatus y por el usuario asignado.

Una vez estés satisfecho/a con el resultado, tan solo tendrás que clicar sobre Insert issues y ya tendrás el listado de issues insertado en tu tarea de Jira. 


<img width="80%" src="img/atlassian-products/jira-insert-issues.png" alt="Insert Jira issues">


<h2>Videotutorial</h2>

Para que entiendas bien estos pasos, te dejamos aquí el **videotutorial** que hemos grabado de cómo insertar un listado de issues de Jira en Jira Cloud: 
<iframe width="660" height="415" src="https://www.youtube.com/embed/oDgIgSo8uR0?si=4oSCsA-EtaVWM4P9" title="Insert Jira issues en Jira Cloud" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
Y hasta aquí este tutorial de hoy. En [este enlace](https://www.excentia.es/archivo-tutorial) podrás encontrar más tutoriales sobre estas herramientas. Y recuerda, que si tienes alguna pregunta puedes ponerte en contacto con nosotros a través del formulario que encontrarás a continuación.

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
         <input type="hidden" name="_subject" value="Contacto Blog tutorial issues de Jira en Jira Cloud"/>
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