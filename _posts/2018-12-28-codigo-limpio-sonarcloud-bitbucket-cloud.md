---
layout: post
title: 'Código limpio con SonarCloud y Bitbucket Cloud'
description: Traducción del blog de Atlassian en colaboración con SonarSource en el que se presenta la integración entre SonarCloud y Bitbucket Cloud    
date: '2018-12-28T08:00:00.000+01:00'
author: Andrea Crespo. Artículo original por Fabrice Bellingard.  
categories: 
- atlassian
- sonarsource
- devops
- calidad

cover: /img/posts/2018-12-28-SonarCloud%20&%20BB%20Cloud.png
modified_time: '2018-09-14T08:00:00.000+01:00'
---

<a href="https://bitbucket.org/blog/write-clean-code-sonarcloud-bitbucket-cloud" target="_blank"><img class="center" width="100%" alt="Sonar Cloud + Bitbucket Cloud" title="Portada colaboración SonarCloud y Bitbucket Cloud" src="/img/posts/2018-12-28-SonarCloud%20&%20BB%20Cloud.png"></a> 


El pasado junio, 2 desarrolladores del equipo de [SonarCloud](https://sonarcloud.io/about), [Julien](https://twitter.com/_henryju_) y [Greg](https://twitter.com/Gr3gAubert), asistieron a la [semana de desarrollo de Atlassian Bitbucket Cloud](https://bitbucket.org/blog/bitbucket-cloud-dev-week-wrap) en San Francisco. ¿Su misión? Crear la primera versión de la aplicación de SonarCloud para Bitbucket Cloud, permitiendo la detección automática de bugs y vulnerabilidades en las ramas de los proyectos y pull requests, ¡en el propio producto! Con el apoyo del equipo de Atlassian Bitbucket Cloud, completaron con éxito esta misión. ¡Veamos las características con más detalle!

## Analiza código facilmente con pipelines de Bitbucket

Una vez que la [aplicación de SonarCloud está instalada en su equipo](https://sonarcloud.io/documentation/integrations/bitbucketcloud/), configurar el análisis de SonarCloud en el pipeline de tu repositorio es simple. Primero, genera un token desde tu cuenta de SonarCloud (bajo "Seguridad"), luego guárdalo como una variable de entorno encriptada en tu proyecto o equipo, y finalmente actualiza el archivo bitbucket-pipelines.yml de tu repositorio para activar el análisis cada vez que el código se suba.


<img src="/img/posts/2018-12-28-bb-cloud-1.png">


Gracias a la estrecha integración con [Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines), SonarCloud detecta automáticamente qué rama o pull request se está construyendo y actualiza el proyecto correspondiente con resultados de calidad de código.

Ten en cuenta que Bitbucket Pipelines no desencadena una compilación tras la creación inicial de un pull request, por lo que SonarCloud solo analizará los cambios posteriores introducidos en la rama subyacente.


## Obtenga información sobre sus pull requests

Una vez que el pipeline esté configurado para desencadenar el análisis, verás que las ramas y los pull requests aparecen progresivamente en tu espacio de proyecto de SonarCloud. Lo más destacado es que en cada pull request encontrarás un resumen del análisis con un enlace a la página detallada de Issues en SonarCloud:

<img src="/img/posts/2018-12-28-bb-cloud-2.png">


Junto con este resumen, SonarCloud crea una tarea de pull request que se marcará como fallida en caso de problemas de calidad. Esto es perfecto para los equipos que utilizan [comprobaciones](https://confluence.atlassian.com/bitbucket/suggest-or-require-checks-before-a-merge-856691474.html?_ga=2.213290003.604458346.1546946302-1819789117.1545995944) ya que les permitirá evitar merges si un pull request tiene tareas abiertas asociadas.


## Comprueba la calidad global

Además de seguir la calidad de tu código día a día a través de pull requests, también puedes ver el estado general de tu código base gracias a un widget de SonarCloud. Si bien está oculto de forma predeterminada, puedes activarlo en la configuración de "SonarCloud" de tu repositorio y aparecerá en la página "Visión general".

<img src="/img/posts/2018-12-28-bb-cloud-3.png">


¡Es bastante útil ver la calidad general de un vistazo! Y si necesitas más información, está a un clic en el espacio de proyecto en SonarCloud donde puedes obtener más detalles.


## Más sobre SonarCloud

[SonarCloud](https://sonarcloud.io/about) es el producto líder de calidad de código continuo online, gratuito para proyectos de código abierto. Es compatible con los principales lenguajes de programación, incluidos Java, JavaScript, TypeScript, C #, C / C ++ y muchos más. Si tu código no es abierto, SonarCloud también ofrece un [plan comercial](https://sonarcloud.io/about/pricing) para ejecutar un análisis privado.




