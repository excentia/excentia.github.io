---
layout: post
title: 'Guía completa: Aprovecha al máximo la API de SonarQube'
description: Aprende a utilizar la API de SonarQube con esta guía que te hemos preparado. 
date: '2025-02-20T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube


cover: img/posts/2025-03-04-guia-completa-uso-api-sonarqube.png

---

<img width="100%" src="img/posts/2025-03-04-guia-completa-uso-api-sonarqube.png" alt="Guía completa: Aprovecha al máximo la API de SonarQube">

SonarQube es una de las herramientas más poderosas para el **análisis del código**. Te permite identificar problemas, te sugiere cómo puedes resolverlos y, sobre todo, te ayuda a mantener la calidad y seguridad de tus proyectos. A través de su API, los usuarios puede realizar peticiones e integrar su instancia en su flujo de trabajo, más allá de utilizar su interfaz gráfica. Así que en este artículo, te vamos a realizar una guía para que utilices la API de SonarQube correctamente. 

<h2>¿Qué es la API de SonarQube?</h2>

La **API de SonarQube** es un método que permite a los usuarios comunicarse con su instancia de SonarQube. Gracias a esta API, los desarrolladores pueden integrar SonarQube en sus flujos de trabajo y obtener la información que necesitan. Este mecanismo es muy útil, ya que permite **extraer información de interés** sin la necesidad de interactuar con la interfaz de usuario. 


<h2>¿Cómo utilizar la API de SonarQube?</h2>

Para utilizar la **API de SonarQube tienes que hacer llamadas HTTP** a los endpoints para que te devuelva la información que necesitas. Lo primero que tienes que hacer es **obtener un token** de autenticación para hacer peticiones a la API de SonarQube de forma segura. Aquí te dejamos los pasos para obtener este token. 

1 - Accede a tu instancia de SonarQube logeándote con tu usuario. <br>
2 - Accede a My Account -> Security. <br>
3 - Escribe un nombre para tu token, selecciona el tipo y el tiempo de expiración. <br>
4 - Copia tu token. <br>

Con este token **ya puedes realizar peticiones** a la API de SonarQube. A continuación, te dejamos un ejemplo de petición para obtener una **lista de proyectos de tu instancia de SonarQube**:

<code>curl -u <'tu_token'>: "http://<tu-servidor-sonarqube>/api/projects/search"</code>

Aquí te dejamos un listado de endpoints útiles para realizar llamadas a la API de SonarQube:


- Obtener un listado de hotspots <code>GET api/hotspots/search</code> <br>

- Extraer un listado de issues <code>GET api/issues/search</code> <br>

- Conocer si un proyecto tiene código IA o no <code>GET api/projects/get_contains_ai_code</code> <br>

- Listado de proyectos relacionado con su Quality Gate <code>GET api/qualityprofiles/projects</code> <br>

- Actualizar una rama en una aplicación de una aplicación en concreto <code>POST api/applications/update_branchs</code> <br>

En [este enlace](https://next.sonarqube.com/sonarqube/web_api){:target="_blank"} tienes el listado completo de servicios que ofrece la API de SonarQube Server.


<h3>Ejemplos de solicitud a la API de SonarQube</h3>


Nuestro **Sonar Bug Hunter, Mario Bastardo** ha preparado dos videos en los que te enseña a realizar dos tipos distintos de llamadas a la API.

En este primer video, Mario te enseña a ejecutar una **llamada a la API de SonarQube** para consultar el estado de la instancia:


<iframe width="560" height="315" src="https://www.youtube.com/embed/rJsjOBhcFz8?si=zxdEz5pj7WavQvDM" title="Llamada a la API para consultar el estado de la instancia de SonarQube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
En este segundo video, muestra un tutorial en el que aprenderás a realizar una **llamada a la API de SonarQube Cloud** para obtener una lista de servicios disponibles:

<iframe width="560" height="315" src="https://www.youtube.com/embed/FBgCZ_71Hy8?si=lQ13KvGsgESWAyt2" title="Llamada a la API para consultar el estado de servicios disponibles" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br><br>
Hasta aquí este artículo de hoy. Recuerda que si quieres ampliar la información sobre licencias o servicios de SonarQube Server o SonarQube Cloud, puedes ponerte en contacto con nosotros a través de [este enlace](/contacto). Y si quieres ver más tutoriales sobre las herramientas de SonarQube, puedes suscribirte a [nuestro canal de YouTube](https://www.youtube.com/@excentiaTube){:target="_blank"}. 

