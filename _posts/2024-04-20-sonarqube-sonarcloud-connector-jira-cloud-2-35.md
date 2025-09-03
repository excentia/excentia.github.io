---
layout: post
title: 'SonarQube Connector For Jira Cloud 2.35'
description: Nueva funcionalidad para nuestro conector. Ahora puedes seleccionar un rango de fechas para personalizar la visualización de las gráficas. 
date: '2024-04-20T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- sonarcloud
- jira
- marketplace

cover: /img/posts/2024-04-20-sonarqube-sonarcloud-connector-jira-cloud-2-35.png

---

<img width="100%" src="img/posts/2024-04-20-sonarqube-sonarcloud-connector-jira-cloud-2-35.png" alt="SonarQube Connector for Jira Cloud 2.35">

Nueva actualización de nuestro producto **SonarQube/SonarCloud Connector for Jira Cloud**. Ya está disponible **la versión 2.35** con una nueva funcionalidad que te vamos a explicar en este artículo.

¿Te gustaría personalizar con fechas el gráfico que muestra nuestro conector? Pues ya lo puedes hacer con esta última actualización. Ahora, podrás configurar a **nivel de configuración global, de productos y en los gadgets** un rango de fechas para personalización al visualización de la información. 

Los rangos de fechas que podrás seleccionar son los siguientes: histórico del último mes, histórico de los 6 últimos meses, una fecha en concreto y todo el historial. 

En la siguiente vamos a comparar dos configuraciones del mismo proyecto para que puedas ver la diferencia. La diferencia la podrás ver en los gráficos de las visualizaciones.

**Configuración con 'Histórico del último mes'**

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-cloud-1-month.png" alt="SonarQube Connector for Jira Cloud Visualization 1 month">


**Configuración del periodo 'Todo el historial'**

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-cloud-all-history.png" alt="SonarQube Connector for Jira Cloud Visualization All history">

<h2>¿Cómo configurar esta nueva opción?</h2>

Si quieres empezar a trabajar con esta nueva funcionalidad, únicamente sigue estos pasos. Primero vamos a explicar cómo configurar esta opción a nivel de **configuración general**

1 - Clica la opción 'App' de la barra de menú y, sobre el desplegable, accede a 'Manage your apps'.<br>
2 - En la barra de la izquierda accede a **SonarQube Connector** y deslízate hasta la opción 'Visualization settings'. Aquí te dejamos una imagen para que sepas cuál es la opción exactamente:<br> 

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-cloud-visualization-option.png" alt="SonarQube Connector for Jira Cloud Visualization settings">
<br>
3 - Como verás, hemos añadido un nuevo campo llamado 'History Date' para que puedas seleccionar la fecha que desees. 
4 - Guarda la nueva configuración. 

Esta nueva funcionalidad también la puedes aplicar a **un proyecto en concreto**. Es decir, ahora acabamos de realizar la configuración general, pero está la opción de que quieras que esta configuración se aplique a un proyecto en concreto o tener **varios proyectos con distintas configuraciones**. Así que ahora te lo vamos a explicar. 

1 - Dentro del proyecto tendrás que ir a la opción 'Project settings' que encontrarás en la barra izquierda, en la parte inferior.<br>
2 - Ahora verás los detalles de proyecto y tendrás que clicar en 'App' y en 'SonarQube' en la misma barra de la izquierda. <br>
3 - Aquí ya estarás en la configuración del conector dentro del proyecto. Nuevamente, tendrás que deslizarte a la opción 'Visualization setting' y proceder con la configuración. 

**Importante**: En las configuraciones por proyecto tienes que tener activado el check que verás en la siguiente imagen para que esta configuración sea prioritaria de la global. 

<img width="100%" src="img/atlassian-addons/atlassian-app-sonarqube-connector-jira-cloud-check.png" alt="SonarQube Connector for Jira Cloud Check">

Aquí te dejamos un vídeo donde podrás ver esta release: 

<iframe width="660" height="415" src="https://www.youtube.com/embed/1GVGZuLlnwo?si=-q3TLB52MO_Z3Xiv" title="SonarQube/SonarCloud Connector for Jira Cloud 2.35" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>

**Recordatorio**: Tu aplicación SonarQube/SonarCloud Connector for Jira Cloud se actualiza de forma automática, así que no tienes que hacer nada más. 

Como siempre, te dejamos aquí una serie de **enlaces de interés** para que puedas ampliar la información de nuestro conector: 

1 - [Demo](https://youtu.be/3YXbauc0zuY?si=Hmc1D0ILeagoViTj) del producto.<br>
2 - Lista de [releases](https://www.youtube.com/watch?v=mNI0rK-Ci2Q&list=PLZ5oF-c2V6nPl05DRCJU0q9iN2ouz2_1B&ab_channel=excentiaTube) de las aplicaciones.<br>
3 - [Página](https://www.excentia.es/sonarqube-connector-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace) de producto y documentación.<br> 

Si no tienes esta aplicación y quieres probarla, puedes descargar la **versión gratuita de 30 días** a través de [este enlace](https://marketplace.atlassian.com/apps/1217471/sonarqube-connector-for-jira?utm_source=post&utm_medium=web&utm_campaign=Marketplace).

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