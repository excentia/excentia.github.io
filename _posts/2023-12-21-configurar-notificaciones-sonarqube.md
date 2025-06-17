---
layout: post
title: '¿Cómo configurar las notificaciones en SonarQube?'
description: Te enseñamos a recibir notificaciones de "tus issues" de SonarQube.
date: '2023-12-21T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: /img/posts/2023-12-21-configurar-notificaciones-sonarqube.png

---

<img width="100%" src="img/posts/2023-12-21-configurar-notificaciones-sonarqube.png" alt="Notificaciones en SonarQube">

<h2>¿Qué son las notificaciones de SonarQube?</h2>

SonarQube permite que los usuarios de su instancia puedan **recibir alertas o notificaciones** si aparecen cambios en un análisis. Sin embargo, **no es una acción automática** y tiene que ser el propio usuario el que active estas notificaciones para recibirlas.

<h2>¿Quién puede recibir notificaciones en SonarQube?</h2>

**Todos los usuarios** con acceso a una instancia de SonarQube. Como hemos dicho anteriormente, es el propio usuario el que se tiene que inscribir. Además, un administrador de una instancia **no puede inscribir a otro usuario** para recibir notificaciones. 

<h2>¿Cómo configurar las notificaciones por email?</h2>

Recibir las notificaciones de SonarQube es muy sencillo. Veamos a continuación cómo se debe realizar: 

Primero, hay que asegurarse de que el **servidor de SonarQube** está configurado para enviar correos electrónicos. Para revirsarlo tienes que dirigirte a *Administration > General Settings > Email*. 

En segundo lugar, debes suscribirte a recibir los emails. Para ello, *pulsa sobre tu avatar (arriba a la derecha) My account Notifications> Overall o Notifications per projects*. Las acciones a las que te puedes apuntar son las siguientes: 


- Background **tasks in failure** on my administered projects.	
- Changes in **issues/hotspots assigned to me**.	
- Quality gate changes on **all available projects**.	
- My **new issues**.

Recuerda que en la opción *Notification per projects* puedes inscribirte a ese tipo de acciones pero específicas de un proyecto que elijas. Para configurar esta acción, únicamente tendrás que indicar el proyecto y seleccionar las notificaciones que quieras. 

<img width="100%" src="img/posts/2023-12-21-notifications-per-project-sonarqube.png" alt="Notifications per project">

<h2>Notificación de expiración de tokens</h2>

Como excepción de las notificaciones, siempre que tengas **configurado el servidor de correo** en SonarQube, **recibirás un email 7 días** antes de la fecha de vencimiento de tu token para recordarle que debes renovarlo. Si el token no se renueva antes de su caducidad, recibirá otro email cuando haya caducado para indicarte que **ya no lo puedes utilizar**.

<h2>Notificación de Quality Gate</h2>

Otra de las **excepciones de las notificaciones** las encontramos en los perfiles de calidad. Los usuarios con derechos de administración de Quality Gates recibirán una notificación cuando se actualicen los Quality Gates. 

Estas notificaciones están configuradas de forma predeterminada y se puede alternar globalmente en *Administración > Configuración > Configuración general > General > General* .

<img width="100%" src="img/posts/2023-12-21notifications-quality-gates.png" alt="Notifications Quality Gates">

Y hasta aquí este post sobre las **notificaciones de SonarQube**. Si quieres más información sobre nuestros servicios o sobre SonarQube, puedes ponerte en contacto con nosotros a través de [este formulario](/contacto).