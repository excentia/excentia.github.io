---
layout: post
title: 'La evolución de la calidad del software en estos últimos 10 años'
description: En nuestro décimo aniversario realizamos un repaso sobre el estado de la calidad cuando empezamo y cómo es ahora. 
date: '2019-08-06T08:00:00.000+01:00'
author: Óscar Moreno
categories: 
- devops
- opinion

cover: /img/posts/2019-08-07-evolucion-calidad-software.png
modified_time: '2018-09-14T08:00:00.000+01:00'
---

Todos hemos experimentado como las fechas destacadas provocan nostalgía y reflexión, también en excentia. En el año de nuestro décimo aniversario echamos la vista atrás para ver el estado de la calidad cuando empezamos y cuál es la situación actual. Un ejercicio que os recomendamos a todos. 

## ¿Qué entendíamos por calidad hace 10 años?

El concepto de calidad de software no ha cambiado si echamos la vista atrás. A pesar de los avances en esta década, **el objetivo de mantener una alta calidad de código era el mismo que hoy en día: disponer de software que haga lo que queramos, cuando queramos y sin resultados imprevistos.**


### Herramientas
SonarQube, antes llamado simplemente Sonar, andaba en Marzo de 2009 por su versión 1.7, y entre sus novedades destacaban elementos tan imprescindibles hoy en día como poder ver el resultado de los test unitarios o ver las líneas duplicadas en el código. Además, mejoraba su compatibilidad con… (redoble de tambores)...¡Internet Explorer 6!

<a target="_blank" href="https://www.sonarqube.org/downloads/"><img class="center" width="80%" alt="Screenshot de la primera versión de SonarQube" title="SonarQube en sus inicios" src="/img/posts/2019-08-07-sonarqube-primera-version.jpg"></a>


En cuanto a calidad de procesos, Jira anunciaba en 2010 su versión 4.2, en la que entre sus características destacaban: el gestor universal de plugins para poder gestionarlos todos [(UPM)](https://confluence.atlassian.com/upm/about-the-universal-plugin-manager-305759439.html), los tableros con interesantes métricas de cada *issue*, o la inclusión de los diálogos para establecer parámetros de éstos. 

En 2011, la comunidad de Hudson aprobó por mayoría [la decisión](https://www.infoq.com/news/2011/01/jenkins/) de renombrar el proyecto a Jenkins, tal y como lo conocemos hoy en día. Considerada por muchos [la mejor herramienta de integración continua](https://www.cloudbees.com/blog/five-reasons-why-developers-choose-jenkins-over-hudson-continuous-integration), por aquel entonces ya contaba con casi 400 plugins que ampliaban sus funcionalidades, pero seguían siendo casi la mitad de hoy en día, pues actualmente cuenta con más de 1000.

Podríamos citar más herramientas, como por ejemplo Selenium, surgida en 2004, y que facilita la automatización de pruebas web, pero sin duda son tres claros ejemplos que aportaban un gran valor (y a día de hoy lo siguen haciendo) a la calidad del software y sus procesos.


## ¿Qué ha ocurrido desde entonces?

### Los errores siguen ocurriendo
En 2010, la compañía japonesa Toyota [reconoció un fallo de software en su modelo Prius](https://www.bbc.com/mundo/economia/2010/02/100204_toyota_vehiculos_prius_frenos_ganancias_prius_jp), que afectó a 1,53 millones de vehículos. La empresa estimó pérdidas ese año por valor de 2.000 millones de dólares.

Un par de años más tarde, en 2012, Knight Capital, [perdió 440 millones de dólares en a penas 45 minutos.](https://www.elconfidencial.com/tecnologia/2017-08-23/inteligencia-artificial-knight-capital-quiebra-delta-airlines-british-airways_1429756/) Su software empezó a ejecutar operaciones programadas para una semana en un sólo día, sin ninguna intervención ni control humano. Esto hizo también que las acciones de la compañía americana cayeran un 75% en tan solo 2 días.

En 2013, La empresa de aviación American Airlines, sufrió un caos debido a problemas en su sistema de reservas, provocado al intentar unificar plataformas escritas en diferentes lenguajes de programación.

Pero no es necesario remontarse mucho tiempo para localizar catástrofes provocadas por falta de calidad. A principios de 2019 ocurrieron los dos accidentes de los [Boeing 737](https://es.euronews.com/2019/06/17/boeing-admite-errores-en-los-accidentes-del-737-max) debido a un error en los datos facilitados por los sensores. Este error, no de puro de código pero si de calidad, provocó que los pilotos no pudieran controlar los aviones. El desenlace fue trágico: acabó con la vida de 347 personas.

En 2017,  [Tricentis cifró en 1.7 billones de dólares las pérdidas ocasionadas por 314 compañías.](https://www.tricentis.com/resources/software-fail-watch-5th-edition/)


### Certificaciones
Sin embargo, no todo ha sido negativo en estos 10 años. Organizaciones como ISO, ISQTB  o el CMMI Institute han seguido creciendo y evolucionado para intentar establecer las bases de la calidad en el desarrollo de productos de software.

ISO, cuenta con la certificación ISO 25000, conocida como SQuaRE (System and Software Quality Requirements and Evaluation), actualizada  en 2014. Te lo contamos todo en [este artículo](https://www.excentia.es/iso-25000).

ISTQB, ha seguido ampliando sus certificaciones, adaptándose a los nuevos tiempos, incluyendo por ejemplo la *Advanced Agile Technical Tester* o [*Advanced Level Test Automation Engineer*](https://www.istqb.org/certification-path-root/test-automation-engineer.html).

Mientras que el CCMI publicó en 2018 la [versión 2.0](https://cmmiinstitute.com/cmmi) de su programa.


## ¿Qué ha cambiado a día de hoy?

### Agilidad, agile, y mucho más
Uno de los conceptos más escuchados, debatidos, cuestionados y tratados en estos 10 años en referencia a las necesidades de las empresas son [las metodologías ágiles](https://www.excentia.es/que-es-agile-y-como-adoptarlo). 

Siempre se han necesitado, pero hoy en día quizás más que nunca. Las compañías necesitan reducir en gran medida el Time To Market, necesitan entregar lo antes posible el producto a sus clientes, en un entorno donde a penas unos días o semanas pueden marcar la diferencia.
Para ello, la cultura ágil se ha ido (o al menos intentado cada vez más) aumentando y expandiendo, gracias al incremento de publicaciones (libros, blogs…) conferencias, y establecimiento de startups con hambre de diferenciarse.


### Automatización
Sin duda un gran avance en cuanto a productividad se refiere, ha sido la implementación cada vez más extendida de automatizaciones en tareas repetitivas. 
Y no solo hablamos de la automatización de pruebas, también es parte fundamental hoy en día en otras áreas como la inspección continua, la entrega continua o el despliegue continuo. 
Estas automatizaciones han ayudado en gran medida a reducir el tiempo de entrega y los errores.


### Número de empresas tecnológicas
Hace 10 años, era muy fácil diferenciar una empresa tecnológica de una que no lo era. La mayoría de éstas últimas, apenas contaban con una sencilla página web para mostrar información de sus productos y dónde se encontraban (eso en el caso de que la tuvieran)

Sin embargo, hoy en día es muy habitual que las empresas cuenten con: sitios web más elaborados donde pueden recibir las posibles incidencias de sus productos, tiendas online donde vender a un mayor número de público, redes sociales en permanente contacto con sus seguidores, o aplicaciones móviles para consultar el estado de sus cuentas o pedidos.
Este incremento de la tecnología de una empresa, es directamente proporcional a sus necesidades de asegurar que su software sea de una alta calidad. 


### DevOps
Pero si tengo que destacar algo durante estos últimos años, es sin duda DevOps.
Simplemente es necesario echar un vistazo en Google Trends para hacerse una idea del impacto que cada vez más está generando.

<a target="_blank" href="https://trends.google.es/trends/explore?date=2009-07-08%202019-08-07&q=devops"><img class="center" width="100%" alt="Gráfico obtenido de Google Trends mostrando el creciente interés y aumenta en la búsqueda del término DevOps" title="Evolución búsqueda de DevOps en Google Trends " src="/img/posts/2019-08-07-devops-google-trends.jpg"></a>

Y ¿por qué este aumento? Pues sin duda por todos los [beneficios que aporta DevOps a una empresa](https://www.excentia.es/Beneficios-de-adoptar-devops).

**DevOps pretende automatizar los procesos de creación e implantación del software para publicar con mayor rapidez y fiabilidad.**

En 2009, se celebró la primera conferencia conocida, llamada DevOps Day, en Gante (Bélgica). Patrick Debois, consultor, *Project manager* y fiel al agilismo, presentó las bases de DevOps, pero aún sin nombrarlo como tal. 
Las conferencias, con el paso de los años, se han ido incrementando tanto en número como en localizaciones, y desde entonces han ayudado a crear mejor software, significando que está a disposición del usuario mucho antes y con una mejor calidad.


### Concienzación
Hablando de forma más global, otro punto a destacar es la concienciación que hemos adquirido todos tanto desde el punto de vista de los desarrolladores como del de los clientes.
Y esto lo sabemos bien en excentia, donde, además de desarrollar productos mediante los procedimientos más adecuados, **venimos desde hace 10 años realizando una notable labor de formación, y hasta incluso de evangelización, sobre la importancia y los beneficios de mantener un alto nivel de calidad en la programación.**

El resultado, la satisfacción de nuestros clientes, quienes han podido comprobar como el seguimiento de las pautas recomendadas por nuestro equipo, les han proporcionado mejores resultados, y, en un tiempo inferior al que esperaban, un retorno sobre la inversión elevado.

### ¿Qué ventajas aportan a las empresas esta evolución?

Por último, me gustaría remarcar los beneficios que han conseguido las empresas, y es que, el camino que ha seguido la evolución de la calidad del software, y la irrupción del movimiento DevOps en las empresas les ha facilitado la oportunidad de:

* Diferenciarse de la competencia: Gracias al elevado incremento de características que se pueden implantar en producción y estar a disposición de los usuarios en menos tiempo.

* Mejorar la productividad: Debido al crecimiento del número de herramientas que facilitan la automatización de tareas.

* Incrementar la satisfacción de los clientes: Conseguido por la mejor calidad del producto gracias al aumento de las pruebas y la calidad de las mismas.

* Aumentar los beneficios: Obviamente como consecuencia de alcanzar los beneficios anteriormente nombrados.


## Nuestro décimo aniversario
Todas estas reflexiones, lo aprendido, lo ganado y lo perdido, un poco de nostalgía con versiones de herramientas que hoy son indispensables, y que hasta no hace tanto eran absolutamente desconocidas, y mucho mucho más se podrá disfrutar en nuestro décimo aniversario. 
Contaremos con Vlad Cavalcanti de Atlassian, varios representantes de SonarSource, y alguna que otra sorpresilla. No te lo pierdas y ven a celebrar con nosotros. Queremos pasar otros 10 años más junto a todos vosotros.
Todavía quedan plazas disponibles, no dudes en [registrarte ya](https://www.excentia.es/aniversario)

<a target="_blank" href="https://www.excentia.es/aniversario"><img class="center" width="100%" alt="Banner anunciando nuestro décimo aniversario. En Valencia, el 17 de octubre" title ="Banner Décimo Aniversario" src="/img/posts/2019-08-07-banner-evento-decimo-aniversario.png"></a>
