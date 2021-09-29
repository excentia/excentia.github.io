---
layout: post
title: 'Nueva versión de SonarQube 8.9 LTS'
description: 7 razones para elegir SonarQube 8.9 LTS
date: '2021-09-27T08:00:00.000+01:00'
author:  Sonsoles Cabrera
categories: 
- noticias
- sonarsource
- calidad
- devops

cover: /img/posts/2021-09-22-nueva-version-sonarqube-8-9-lts.png
modified_time: '2021-09-22T08:00:00.000+01:00'
---

Una nueva versión SonarQube 8.9 LTS incluye una gran cantidad de novedades. Desde que se liberara la versión anterior LTS de [SonarQube 7.9](https://www.excentia.es/analisis-sonarqube-7.9-LTS) (en noviembre de 2019), ha habido más de 5200 tickets de desarrollo fusionados en SonarQube y sus componentes subyacentes. Esto incluye, nuevas funcionalidades, mejoras de las características existentes y arreglos de bugs.

A continuación, vamos a comentar las **7 mejores características** que puede que no supieras que están incluidas en la versión de SonarQube 8.9 LTS.

**#1 – Ramas y Pull Requests configuradas automáticamente en Jenkins**

Jenkins es una herramienta CI muy extendida entre los usuarios de SonarQube. No obstante, siempre ha requerido una configuración para los Análisis de Ramas y Pull Request Decoration demasiado tediosa, a pesar de que el escáner pueda detectar los valores correctos para otras CIs.

Ahora por fin, podrás despedirte de tu manual de configuración ya que SonarQube detecta automáticamente los valores correctos. Es más fácil que nunca empezar a analizar el código desde tu pipeline de Jenkins.

**#2 - Apaga la Quality Gate “Fudge Factor”**

Desde la versión 6.6 de SonarQube, se ha codificado de forma rígida en SonarQube que las condiciones de la Quality Gate en Cobertura y Duplicados no deben de ser evaluados cuando hay menos de 20 líneas de código en el Periodo de Nuevo Código.

Esto se debe a las experiencias con situaciones de rendimiento decreciente, donde los conjuntos de cambio acumulativo eran pequeños y una o dos líneas sin cubrir hacían fracasar el proyecto en la Quality Gate.

Tras el feedback de usuarios y clientes, se entendió que hay equipos e industrias que necesitan estar completamente seguros de que incluso los conjuntos de cambio más pequeños reúnan estas condiciones. Y es por ello, que, en el espíritu de mejora continua de SonarQube, este comportamiento ya se puede configurar. Se puede ajustar tanto en la instancia como en el nivel de proyecto, con el comportamiento por defecto aún siendo la opción permisiva.

### Quality Gate

<img src="/img/posts/2021-09-22-sonarqube-lts-8-9-novedades-2-quality-gate.png" alt="SonarQube 8.9 LTS - Quality Gate" width="25%">

**Ignorar los duplicados y cobertura en pequeños cambios.**

Las condiciones de los duplicados y la cobertura en la Quality Gate del nuevo código son ignoradas hasta que haya un mínimo de 20 líneas.  

**#3 – Los proyectos se aprovisionan en el primer análisis – independientemente de la rama (o pull request)**

Ya no debes preocuparte más por pre-aprovisionar un proyecto antes del análisis, aunque tu rama principal no esté nombrada como master.  Esto ayuda a los usuarios que deciden tener proyectos aprovisionados automáticamente cuando una key del proyecto se utiliza por primera vez.

Tengas una rama principal llamada desarrollo, o el primer análisis de tu proyecto sea un pull request, tu proyecto será aprovisionado y se logrará el análisis con éxito.

**#4 - Compatibilidad con nuevas versiones de lenguaje**

La programación de lenguajes está constantemente evolucionando y se liberan nuevas versiones regularmente. La versión SonarQube LTS 8.9 añade la compatibilidad con las últimas versiones de los lenguajes de programación que estés utilizando, asegurando que el análisis no falle en las nuevas características del lenguaje y que las reglas sigan siendo relevantes incluso en el nuevo contexto.
  
<img src="/img/posts/2021-09-22-comparacion-sonarqube-7-9-lts-8-9-lts.png" alt="Comparación SonarQube 7.9 LTS Vs 8.9 LTS" width="70%">

**#5 - Conéctate a múltiples instancias de una plataforma DevOps**

Ya es posible configurar múltiples instancias de una plataforma DevOps para usar para características como Pull Request Decoration. Mientras anteriormente únicamente una de las plataformas soportadas podía ser configuradas, ahora no existe límite.

Esto es una gran ventaja para las empresas que están migrando su plataforma DevOps entre las versiones on-premise y cloud, o simplemente afrontan un escenario de desarrollo de herramientas interno complejo.


<img src="/img/posts/2021-09-22-sonarqube-lts-8-9-novedades-5-devops_1.png" alt="SonarQube 8.9 LTS - DevOps" width="100%">

Esta característica es muy útil en grandes empresas, y por ello está incluida en la edición de SonarQube Enterprise y superiores.

Hablando de plataformas DevOps, ahora cuando configuras una nueva plataforma DevOps, puedes estar seguro de que has realizado la configuración correctamente (utilizado la URL correcta, establecido los permisos correctamente, etc.). Esto se traduce en que un administrador de SonarQube puede garantizar que la configuración esté bien antes de que los usuarios empiecen a utilizarla.

<img src="/img/posts/2021-09-22-sonarqube-lts-8-9-novedades-5-devops_2.png" alt="SonarQube 8.9 LTS - DevOps" width="100%">

**#6 - Mejor Rendimiento del Compute Engine**

Una vez el análisis ha completado el apartado del escáner, se envía al servidor de SonarQube para ser procesado. Cuanto más rápido se procesen tus análisis por el Compute Engine, más rápido recibirás el status de la Quality Gate de tu proyecto y podrás descubrir si tu código está limpio (y listo para para ser fusionado o liberado) o si debes empezar a arreglar algún problema o mejorar la cobertura del código.

Admitámoslo, a medida que el propio SonarQube se ha vuelto más complejo, también lo ha hecho el proceso de análisis, y el rendimiento se vio afectado en la versión 7.9 de SonarQube LTS.  

En la versión 8.9 LTS de SonarQube, ha habido un progreso significativo en la mejora del rendimiento del Compute Engine para todas las plataformas de base de datos compatibles (utilizando un mejor almacenamiento en caché y consultas optimizadas), pero también ha habido mejoras especialmente para las instancias de SonarQube respaldadas por las bases de datos Oracle o Microsoft SQL.

**#7 - Los indicadores de cobertura ahora son aptos para daltónicos**

En la versión de SonarQube 8.9 LTS, los usuarios notificaron que la forma en la que se presentaba la Cobertura de Código en la interfaz, no era apto para daltónicos. Han mejorado los indicadores de cobertura de SonarQube añadiendo un espacio entre los dos colores y utilizando un rojo más oscuro. 

<img src="/img/posts/2021-09-22-sonarqube-lts-8-9-novedades-7.png" alt="SonarQube 8.9 LTS - Compue Engine" width="60%">

Además:
-   Se ha mejorado la accesibilidad de los treemaps de cobertura para daltónicos.
-   Se garantiza que la información de cobertura de código es accesible para usuarios invidentes que utilicen lectores de pantalla.

Y tú, ¿ya has probado la nueva versión de SonarQube 8.9 LTS? 
Ahora tienes 7 razones más para hacer el upgrade, y si necesitas ayuda en la actualización <a href="#contact-form">ponte en contacto con nosotros</a>.


<br/>
<hr>
<br/>
<!--Calidad de Software Contact Form-->
<div id="contact-form">
	<h1>Contáctanos</h1>
	<p>Rellena el formulario y te responderemos en menos de 24 horas.</p>
<br/>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "na1",
	portalId: "7892756",
	formId: "a4e2e0dd-856c-4d56-9b11-0621661fcdaf"
});
</script>
</div>


