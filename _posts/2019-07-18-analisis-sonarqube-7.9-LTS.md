---
layout: post
title: 'Analizamos la nueva versión LTS de SonarQube.'
description: La versión 7.9 es la nueva LTS de SonarQube. Recoge muchas de las novedades aportadas en el último año y da un gran peso a la seguridad de las aplicaciones. Descubre las novedades y el análisis en este artículo.  
date: '2019-07-18T08:00:00.000+01:00'
author: Andrea Crespo
categories: 
- sonarsource
- productos
- noticias

cover: /img/posts/2019-07-18-sonarqube-7.9-LTS.png
modified_time: '2018-09-14T08:00:00.000+01:00'
---

¡Por fin está aquí! Ya tenemos disponible la nueva versión LTS de [SonarQube](https://www.sonarqube.org/)! 
La versión 7.9 sucede a la versión 6.7 (lanzada en noviembre de 2017) y como puedes imaginar, en un año y ocho meses han mejorado muchas cosas. 

EL primer paso es saber qué es una LTS y qué implica. Una versión LTS (Long Term Support) es la culminación de pequeñas *releases*, pruebas, y mejoras incorporadas, que ya tienen un recorrido y utilidad testada en multitud de entornos y situaciones, y que por tanto, garantizan estabilidad a largo plazo para todas aquellas organizaciones y equipos para los que SonarQube es una herramienta clave en su ecosistema de inspección continua. Estar en una versión LTS acarrea también el compromiso por parte de SonarSource de ofrecer soporte  dedicado. 

Tomar la decisión de realizar un upgrade de la versión de SonarQube no es fácil para todos los equipos. Hacerlo a una LTS conlleva ese plus de tranquilidad e inversión a largo plazo garantizada (y soportada). 


# La nueva versión de SonarQube

Ya se podía adivinar el enfoque que está siguiendo SonarQube, una de [las más reconocidas herramientas SAST](https://resources.infosecinstitute.com/secure-coding-top-15-code-analysis-tools/) en el mercado, viendo las funcionalidades que han ido incorporando durante los últimos meses. 

**En SonarQube apreciamos una clara apuesta por la seguridad de las aplicaciones y la apuesta por ser la herramienta que cubra más lenguajes de programación disponibles.** 
Algo ya anunciado y reiterado por la compañía y de lo que ya hablamos hace unos meses [con detalle](https://www.excentia.es/seguridad-de-aplicaciones-a-la-manera-de-sonarsource). 

También apreciamos una apuesta clara por la óptima visualización de los datos y reporting ejecutivo, siendo una de las sorpresas de la LTS, el rediseño y mejora de su funcionalidad [portfolio](https://docs.sonarqube.org/latest/user-guide/portfolios/) (sólo disponible en ediciones comerciales Enterprise y Data Center)

Si algo está claro, es que SonarQube sigue creciendo y mejorando, formando una de las [comunidades](https://community.sonarsource.com/) más activas, incorporando cada vez más mejoras en cada una de sus *releases*, ampliando constantemente su equipo, mejorando su web y sus comunicaciones... Y nosotros, como únicos partnes en España, Portugal y Latinoamérica, estaremos ahí para contarlo y contribuir. 

## Pre-requisitos técnicos

La nueva versión y su naturaleza de soporte y estabilidad a largo plazo, también implican ciertos cambios para estar preparados para el futuro. Ten muy en cuenta esta información y prepara bien tu infraestructura antes de lanzarte a realizar un upgrade: 

- Instala Java 11 en tu máquina. Versiones anteriores ya no están soportadas.

- SonarQube ya no es compatible con MySQL. Las bases de datos que puedes usar son: PostgreSQL, Microsoft SQL Server y Oracle. 

- ¿Dudas con los requisitos hardware? Comprueba la [documentación oficial](https://docs.sonarqube.org/latest/requirements/requirements/) 

Por cierto, si usas Microsoft SQL Server, descarga la versión 7.9.1, ya que gracias a la comunidad se detectaron problemas que ya han sido mejorados con el primer parche. Tienes más información en la [documentación oficial de la versión](https://docs.sonarqube.org/latest/setup/upgrade-notes/). 


# ¿Qué encontramos en SonarQube 7.9?

Analicemos todas las novedades ya disponibles: 

**1. Nuevos lenguajes:** desde la última LTS, se han unido a la familia: Kotlin, Scala, Ruby, CSS, Go y Apex. 

El cuadro definitivo de lenguajes por ediciones queda así: 

- Community Edition: Java, JavaScript, C#, TypeScript, Kotlin, Ruby, Go, Scala, Flex, Python, PHP, HTML, CSS, XML y VB.NET

- Developer Edition: Todos los de la community más C/C++, Objective-C, T-SQL, ABAP, PL/SQL y Swift.

- Enterprise y Data Center Editions: En estas ediciones se unen a las tecnologías ya mencionadas Apex, COBOL, PL/I, RPG y VB6. 


**2. Seguridad:** el equipo de desarrollo encuentra vulnerabilidades directamente en la revisión de código, donde son más fáciles de solucionar (y más baratas)

Con tal de incrementar el alcance en cuanto a seguridad, **SonarSource anunció un nuevo tipo de evidencia, los Security Hotspots.** Estas evidencias son un paso previo a las evidencias de tipo vulnerabilidad - creando así una doble capa o filtro para asegurar la seguridad de las aplicaciones. Un experto en seguridad evaluará los Security Hotspots detectados con el fin de determinar si se tratan efectivamente de vulnerabilidades que pongan en peligro la seguridad.
Escribimos un [artículo](https://www.excentia.es/seguridad-de-aplicaciones-a-la-manera-de-sonarsource) dedicado a esta gran noticia. No dudes en leerlo para entender todos los detalles. 

Pero además de este nuevo tipo de evidencias, también encontramos un nuevo tipo de informes, aunque ahora solo están disponibles en la versión Enterprise, mucho más amigables con los desarrolladores y que cumplen con los estándares OWASP Top 10 y Sans Top 25. También tienes información sobre ellos en el artículo arriba citado. 


Por último, destacan la detección de *injection flaws* para Java, PHP y C#. También conocido como *Taint Analysis*, esta funcionalidad permite rastrear las entradas de usuarios no confiables a lo largo del flujo de ejecución. La seguridad de la aplicación proviene de asegurarse de que los datos se desinfecten antes de llegar a partes críticas del sistema (Base de datos, Sistema de archivos, SO, etc.)
Se incorpora una interfaz dedicada para realizar un seguimiento de las entradas de usuarios no confiables.
Navega rápidamente a cualquier problema desde la propia fuente de la vulnerabilidad, en la ubicación del código ("sink") donde se compromete ese código.

<a target="_blank"><img class="center" width="100%" alt="Muestra de la funcionalidad injection flaws" title="Muestra de la funcionalidad injection flaws" src="/img/posts/2019-07-18-taint-analysis-injection-flaws.png"></a>


**3. DevOps, integración y despliegue continuo**: análisis por ramas, análisis de pull requests y "decoración" de los mismos en el propio ALM (Bitbucket Server, GitHub Enterprise y Azure DevOps Server) son algunas de las novedades. 


Los *Pull Request Analysis* muestran el *Quality Gate* de cada Pull Request en Sonar. 

<a target="_blank"><img class="center" width="100%" alt="Muestra de la funcionalidad injection flaws" title="Muestra de la funcionalidad injection flaws" src="/img/posts/2019-07-18-pull-request-analysis.png"></a>


Por otra parte, se ha trabajado mucho en la integración con terceros. Esta colaboración nos permite mostrar los resultados de los análisis lanzados en SonarQube en las herramientas externas (Github, Bitbucket, Azure...)

<a target="_blank"><img class="center" width="100%" alt="Muestra de la funcionalidad injection flaws" title="Muestra de la funcionalidad injection flaws" src="/img/posts/2019-07-18-pull-request-decoration-bitbucket-server.png"></a>


**4. Portfolio y Governance**

Finalmente, destacan las mejoras en reporting, visualización y organización de portfolios. Funcionalidades pensadas para grandes empresas y equipos que necesitan tener una visión global del estado de la calidad de su código. 

La construcción de portfolios se actualiza ahora automáticamente a medida que se analizan los proyectos subyacentes. 
También se ha mejorado el formato de los archivos PDF, para que sean más concisos con datos procesables, y que son fáciles de integrar en presentaciones y compartir con audiencias más grandes.

Por último, la página de portfolio ahora se centra en los portfolios globales que has definido, haciendo más sencilla su exploración y consiguiendo una jerarquía visualmente más atractiva. 

<a target="_blank"><img class="center" width="100%" alt="Muestra de la funcionalidad injection flaws" title="Muestra de la funcionalidad injection flaws" src="/img/posts/2019-07-18-portfolio-jerarquia.png"></a>



Hay algunas otras mejoras, además de las obvias actualizaciones de reglas y métricas y la mejora en el rendimiento, la usabilidad y la estabilidad, pero estas cuatro destacadas nos dan una visión bastante clara de la apuesta y el valor de SonarQube. 


# ¿Listo para subir de versión en SonarQube?

Esperamos haberte convencido y que estes ya preparando el upgrade de tu versión, o incluso decidido a incorporar SonarQube en tu organización si es que aún no lo tienes. 

Para ambos casos y mucho más, no dudes en [ponerte en contacto con nosotros](https://excentia.atlassian.net/servicedesk/customer/portal/14). 

Por cierto, ya que lo hemos mencionado varias veces y es algo que todavía genera dudas, [aquí tenéis los planes de licenciamiento](https://www.sonarsource.com/plans-and-pricing/) por ediciones. Beneficiate de un descuento o de licencias de evaluación al ponerte en contacto con nosotros. 




