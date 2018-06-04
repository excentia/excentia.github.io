---
layout: post
title: 'Herramientas y DevOps I. Construye tu propia navaja suiza'
description: No existe el conjunto perfecto de aplicaciones para decir que trabajamos con DevOps. Quizás no exista Excalibur, pero siempre podremos montar con todos los elementos que necesitamos, nuestra propia navaja suiza a medida y… ¡Qué demonios! , no necesitamos Excalibur en nuestro día a día, siempre será más útil nuestra versátil navaja suiza.
date: '2018-04-13T08:00:00.000+01:00'
author: Manuel Velázquez
categories: 
-devops

modified_time: '2018-04-13T08:00:00.000+01:00'
cover: /img/posts/2018-04-13-herramientas-devops.png
---

<a href="http://www.excentia.es/search?query=devops" target="_blank"><img class="center" width="100%" alt="Herramientas y ciclo DevOps" title="Herramientas y ciclo DevOps" src="/img/posts/2018-04-13-herramientas-devops.png"></a>


¡Sí! ¡Ha vuelto! En [excentia](http://www.excentia.es/) seguimos hablando de DevOps, y ya vamos por la quinta entrega.  En los últimos posts mis compañeros nos han contado [qué es DevOps](http://www.excentia.es/que-es-DevOps), la importancia de la [comunicación](http://www.excentia.es/ChatOps-pieza-fundamental-ciclo-DevOps) en el ciclo, los [beneficios](http://www.excentia.es/Beneficios-de-adoptar-devops) de adoptar esta filosofía e incluso han tratado de crear un [vocabulario](http://www.excentia.es/Integraci%C3%B3n-continua,-automatizaci%C3%B3n,-entrega-continua...-El-vocabulario-clave-en-DevOps) propio para esta corriente. Estoy seguro de qué os habrán descubierto muchas cosas. 


Sin embargo, es posible que os preguntéis por herramientas para poder desarrollar en vuestro día a día DevOps. Al final del día, lo que a todos nos preocupa es poder llevar estas ideas a la práctica y que además, funcionen. Siento deciros que tengo una mala noticia para vosotros… **No existe el conjunto perfecto de aplicaciones para decir que trabajamos con DevOps**. Quizás no exista Excalibur, pero siempre podremos montar con todos los elementos que necesitamos, nuestra propia navaja suiza a medida y… ¡Qué demonios! , no necesitamos Excalibur en nuestro día a día, siempre será más útil nuestra versátil navaja suiza.


## ¿Herramientas DevOps?
**Para poder construir nuestra navaja suiza multifunción – que no es lo mismo que nuestras herramientas DevOps - existen un sinfín de aplicaciones**. La cantidad de herramientas que podrían incluirse en nuestro ciclo DevOps es casi infinita (porqué será…) así que hoy os vamos a mostrar una parte de todas ellas. El criterio para saber cuáles destacar: aquellas que nosotros utilizamos. Lo de hablar de herramientas de las que sólo hemos visto demos no nos interesa demasiado. 

Bien, allá vamos:

**[Jenkins](https://jenkins.io/)**: Es el núcleo de gran parte de nuestro ciclo DevOps. Se trata de un servidor de integración continua, fácil de usar y con gran cantidad de plugins, que nos permite lanzar *Jobs* que hagan uso de todo tipo de tecnologías. Para nosotros es **indispensable para la construcción automática de proyectos, para la parte de deploy y la integración continua**. Como alternativa os podríamos recomendar también [Bamboo](https://es.atlassian.com/software/bamboo).

**[SonarQube](https://www.sonarqube.org/)**: es una herramienta que nos permite realizar análisis de código con diferentes lenguajes de forma automatizada. **Se integra con toda la cadena de herramientas de DevOps, incluidos los sistemas de compilación, los motores de CI, utilizando webhooks y su RestAPI integral**.

**[SonarLint](https://www.sonarlint.org/)**: es una herramienta que se integra en el IDE para poder ver las incidencias de tu código antes de subirlo a tu sistema de control de versiones y de analizarlo con SonarQube.

**[Git](https://git-scm.com/)**: Software de control de versiones. Simplemente, indispensable.

**[Bitbucket](https://es.atlassian.com/software/bitbucket)**: Se trata de un servicio que permite administrar tus proyectos usando Git pero en la nube, siendo altamente colaborativo y escalable. Como alternativa se podría usar [GitHub](https://github.com/) o [Gitlab](https://about.gitlab.com/). Sin embargo, **estamos viendo como Bitbucket está creciendo exponencialmente frente a sus alternativas**. ¿Por qué? Porque cada vez **más desarrolladores usan [Jira Software](http://www.excentia.es/atlassian) por su perfecta aplicación en metodologías ágiles**, y adivina qué, la integración entre Bitbucket y Jira Software es sencillamente maravillosa. Transicionar de una a otra es extremadamente sencillo, además de la claridad que aporta al proceso de desarrollo. Sí, todo ello, es por definición aquello que persigue DevOps. 

**[Maven](https://maven.apache.org/)**: Es una de las herramientas más útiles a la hora de utilizar librerías de terceros. Maven se utiliza en la gestión y construcción de software. Posee la capacidad de realizar tareas claramente definidas, como la compilación del código y su empaquetado, hace posible la creación de software con dependencias incluidas dentro de la estructura del JAR.

**[Nexus](https://www.sonatype.com/nexus-repository-sonatype)**: Se trata de un gerente de repositorio de librerías que nos permite recompilar y administrar nuestras dependencias para no tener que estar haciendo malabarismos constantemente con una colección de JAR. Es altamente recomendable usarlo junto a Maven y como alternativa también os animamos a que probéis [artifactory](https://jfrog.com/artifactory/).



Y con estas siete recomendaciones ya hemos avanzado un poco. Sin embargo, aún falta un poco para completar nuestra navaja suiza. Pero de momento, ¿qué os parecen estas recomendaciones? Estaremos encantados de leerte y seguir aprendiendo. Espero que os haya podido guiar un poco y que hayáis disfrutado de esta lectura. Volveremos pronto con más herramientas para añadir a vuestro ciclo [DevOps](http://www.excentia.es/search?query=devops). 
 
