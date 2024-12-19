---
layout: post
title: 'SonarCloud vs SonarQube'
description: ¿Dudas entre elegir SonarCloud o SonarQube? Desde excentia te ayudamos a detectar cuál necesitas con esta guía.

date: '2022-07-21T08:00:00Z'
author: Marisa Martin
categories:
- productos
- sonarqube
- sonarcloud

cover: /img/posts/2022-07-21-sonarcloud-vs-sonarqube-thumb.png

---

📢 <strong>Ahora SonarQube es SonarQube Server y SonarCloud es SonarQube Cloud. Te lo contamos en [esta noticia](/nueva-marca-productos-sonarqube){:target="_blank"}.</strong>


Y ahora si, empezamos con la comparativa:

<img width="100%" src="/img/posts/2022-07-21-sonarcloud-vs-sonarqube.png">


Tanto **SonarCloud** y **SonarQube** son herramientas válidas para ayudarte a escribir un código seguro y de calidad enS tus 
proyectos. Pero siempre pueden surgir la duda, ¿qué producto es mejor para ti y tu equipo?

En este artículo, desglosaremos algunos de los aspectos más importantes de cada producto para que puedas tomar la 
decisión correcta antes de empezar. En este recorrido abordaremos las consideraciones relacionadas con la puesta en 
marcha así como todos los elementos relacionados con la funcionalidad y la extensibilidad. También cubriremos el soporte 
a los distintos lenguajes y el motor de análisis estático subyacente.

Pero, antes de entrar en materia, te dejamos esta **infografía donde encontrarás las diferencias básicas entre SonarCloud y SonarQube**. 

<iframe src="https://www.slideshare.net/slideshow/embed_code/key/mY8PwyEMPkzbNC?startSlide=1" width="670" height="715" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px;max-width: 100%;" allowfullscreen></iframe><div style="margin-bottom:5px"><strong><a href="https://es.slideshare.net/slideshows/cules-son-las-diferencias-entre-sonarqube-y-sonarcloud/266787164" title="¿Cuáles son las diferencias entre SonarQube y SonarCloud?" target="_blank">¿Cuáles son las diferencias entre SonarQube y SonarCloud?</a></strong> from <strong><a href="https://www.slideshare.net/BelnCasanovasBabilon" target="_blank">Belén Casanovas Babiloni</a></strong></div>


## La base: análisis de código estático para más de 25 lenguajes

Ambos productos cubren esencialmente los mismos lenguajes si se trata de la edición **SonarQube**&trade; Enterprise (excepto que **SonarCloud**&trade; 
no es compatible con PL/I, RPG o VB6). Si comparamos con la edición **SonarQube**&trade; Community las capacidades de análisis
de **SonarCloud**&trade; son mucho mayores, más aún teniendo en cuenta que **SonarCloud**&trade; es gratuito para proyectos públicos.

<img width="100%" src="/img/posts/2022-07-21-sonarcloud-vs-sonarqube-languages.png">

Ambos comparten el mismo motor de análisis estático subyacente para detectar bugs, vulnerabilidades, hotspots de
seguridad y code smells, y generan valiosas métricas de calidad de código. 


## La distinción esencial: tu pipeline actual de desarrollo de software

Una de las diferencias clave es cómo se aloja y gestiona cada producto. Si tu equipo, código y flujo de trabajo están 
completamente basados en la nube (por ejemplo, GitHub.com + Travis), **SonarCloud**&trade; es una buena opción.

**SonarCloud**&trade; se integra fácilmente con GitHub.com, Azure DevOps, Bitbucket.org y GitLab.com. **SonarCloud**&trade; está 
alojado en SonarSource en AWS y es el camino más fácil para comenzar a escanear tu código en minutos.

SonarSource hace todo el trabajo pesado en **SonarCloud**&trade; para que no tengas que preocuparte por la instalación o el 
mantenimiento. Y evidentemente, como solución SaaS, **SonarCloud**&trade; te brinda acceso inmediato a nuevas 
características y funcionalidades.

<img width="100%" src="/img/posts/2022-07-21-sonarcloud-vs-sonarqube-pipeline.png">

**SonarQube**&trade;, junto con una base de datos compatible, se instala en tus propios servidores on-site o en un entorno de nube 
autogestionado. Una vez instalado, **SonarQube**&trade; se integra fácilmente con tu instancia de GitHub, Azure DevOps, Bitbucket 
o GitLab. Si tienes un entorno híbrido en el que almacenas código en la nube y confías en pipelines de CI / CD 
administrados localmente, **SonarQube**&trade; también puede integrarse con las versiones en la nube de todas estas herramientas 
de administración de código. 

Seguir la ruta de **SonarQube**&trade; significa que estarás involucrado en la instalación y el mantenimiento de tu entorno. También 
serás responsable de instalar nuevas versiones cuando se liberen. En promedio, hay una nueva versión de **SonarQube**&trade; 
cada dos meses. No actualizar significa que te perderás nuevas características, funciones y correcciones de bugs. 

Y ya que hablamos de versiones, es importante tener en cuenta que **SonarQube**&trade; ofrece una versión 
de soporte a largo plazo (LTS). SonarSource libera una versión LTS de **SonarQube**&trade; aproximadamente cada 18 meses. Para la versión LTS, 
se hace hincapié en la estabilidad y la confiabilidad, y los errores graves se van parcheando en versiones puntuales.

## Para usos Enterprise, explora **SonarQube**&trade;

**SonarQube**&trade; **Enterprise Edition** (EE) incluye algunas funciones de administración que pueden ser valiosas para tu organización. 
Estas vienen en forma de visualizaciones e informes de proyectos.

**SonarQube**&trade; **Enterprise Edition** incluye la gestión de aplicaciones y portfolios, que son contenedores visuales que te 
permiten organizar proyectos de una manera y nivel de abstracción más ejecutivo y estratégico. Las aplicaciones te permiten agregar todos 
los proyectos para verlos como un único proyecto en la herramienta, ya que a veces puedes tener muchos modulos que se analizan por separado pero 
te interesa navegar por la información agregada. La gestión de Portfolios es similar pero con una visión más estratégica, con nuevas
métricas y calificaciones que te permiten agrupar proyectos por equipo, tecnología, departamento, ámbito geográfico, etc. Esto
te permite comparar entre sí los distintos portfolios y conocer mejor la calidad y seguridad a nivel global.

<img width="100%" src="/img/posts/2022-07-21-sonarcloud-vs-sonarqube-enterprise.png">

**SonarQube**&trade; **Enterprise Edition** también incluye capacidades de generación de informes ejecutivos. Estos informes 
van de la mano con tus Portfolios para brindarte información sobre métricas clave agregadas como fiabilidad, seguridad, mantenibilidad 
y capacidad para llegar a producción. 

Además, también dispones de informes centrados en seguridad te permiten realizar un seguimiento 
de las métricas de seguridad del proyecto y del Portfolio según los estándares OWASP y SANS Top 25. 

Por ahora, **SonarCloud**&trade; NO incluye la funcionabilidad de Executive Reporting, Applications or Portfolios. 

**SonarQube**&trade; comenzó 
sus inicios hace más de una década. A medida que el producto maduraba, identificaban el uso “Enterprise” distinto del 
uso de la funcionalidad “Core” que se centra en los desarrolladores.  Es común para las grandes organizaciones tener 
una audiencia “no desarrolladora” que requiera una medición desde una perspectiva y un contexto más amplios. Para satisfacer 
esta necesidad para informes y KPI comerciales, se añadió un conjunto de funciones de “gobernanza” a **SonarQube**&trade;.

Para **SonarCloud**&trade;, el enfoque principal está en el flujo de trabajo del desarrollador y en aportar valor al equipo de 
desarrollo dentro de su entorno ALM existente. Por lo tanto, **SonarCloud**&trade; no aborda actualmente el uso “Enterprise”.

## Una nota sobre la extensibilidad

Por último, hablaremos de la capacidad para extender la funcionalidad. Existe una biblioteca extensa y robusta de plugins de **SonarQube**&trade; desarrollada y 
mantenida por la comunidad Open-Source. Estos plugins mejoran la funcionalidad principal de **SonarQube**&trade; en un ecosistema más grande. 

Ejemplos de esto incluyen: soporte adicional para lenguajes de programación, integración con motores SCM menos convencionales o la 
localización a distintos idiomas de la interfaz.

Por ahora, **SonarCloud**&trade; no está abierto para contribuciones de plugins de terceros a la comunidad. Una vez más, la razón 
de esto vuelve al enfoque del producto. La visión de **SonarCloud**&trade; es proporcionar un servicio de seguridad y calidad de 
código con ALM como plataforma para integrar funcionalidades adicionales. Dicho de otra forma, se entiende que los ALM 
se ocupan muy bien de crear una experiencia de flujo de trabajo para el desarrollador valiosa y la intención de **SonarCloud**&trade; 
es mejorar y aumentar este valor. 

## Conclusión

En resumen, si tu equipo está completamente basado en la nube, no quieres problemas con el mantenimiento y quieres el 
acceso más rápido a las nuevas funciones, entonces **SonarCloud**&trade; es una excelente opción. Si estás conforme con el self-hosting y 
el mantenimiento o ves valor en las capacidades de administración, entonces **SonarQube**&trade; tiene más sentido para ti.

Una vez que hayas elegido tu camino, te animo a que visites los sitios web dedicados a **SonarQube**&trade; y **SonarCloud**&trade; para 
obtener todos los detalles sobre cómo empezar.

El objetivo de este artículo no era enumerar exhaustivamente todas las diferencias de productos, ya que cada entorno 
es único. Sin embargo, ahora tienes la información que es relevante para la mayoría de los casos. 

Por si te interesa, te dejamos este enlace donde puedes encontrar [nuestros cursos de SonarQube](/formacion.html) y este otro donde te hablamos de la filosofía [Clean as You Code de Sonar](/whitepaper-clean-code-sonar.html). 