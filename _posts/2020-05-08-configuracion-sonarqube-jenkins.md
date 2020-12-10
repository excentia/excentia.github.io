---
layout: post
title: 'Configuración de SonarQube y Jenkins'
description: La integración continua se ha consolidado en el desarrollo de software como un modelo imprescindible en la construcción de aplicaciones. 
date: '2020-05-08T08:00:00.000+01:00'
author: Oscar Moreno
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/2020-05-08-configuracion-sonarqube-jenkins.png
modified_time: '2020-05-08T08:00:00.000+01:00'
---

La **integración continua** se ha consolidado en el desarrollo de software como un **modelo imprescindible** en la construcción de aplicaciones.

Y ello es principalmente debido a la serie de ventajas que ofrece respecto a métodos más tradicionales,  de entre las que podríamos destacar:

 - Menor tiempo de construcción (y por lo tanto posteriormente, de despliegues)
 - Facilidad de ejecución de pruebas unitarias
 - Ahorro de costes

No obstante, y a pesar de las herramientas disponibles, incluso de software libre, para llevar a cabo la integración 
continua, no es gratuito dar ese paso, y muchos menos mantenerlo.

En este caso, el mayor coste no es directamente el económico, sino el de la especialización, que repercute sobre el 
tiempo necesario tanto para el aprendizaje del dominio de las distintas herramientas que se deben utilizar, como el 
de la experiencia a la hora de resolver las incidencias más habituales, o dedicar lo necesario para el mantenimiento 
y actualizaciones que permitan disponer de una infraestructura estable y segura.

Así que hoy, damos un paso más allá en el fomento de la cultura [DevOps](https://www.excentia.es/que-es-DevOps), para hablar de ese trabajo tan fundamental como es el de mantener y configurar las herramientas necesarias para llevar a cabo la integración continua.

## **Herramientas necesarias**

Las herramientas son necesarias son básicamente dos.

Principalmente, un **servidor de automatización,** que será el encargado de realizar las tareas necesarias para la 
compilación del proyecto.

Pero, además, y como hoy en día no es suficiente con desarrollar software, sino que hay que desarrollarlo con calidad, 
y en la integración continua también se incluyen las pruebas unitarias, cada vez es más importante complementarlo con una herramienta de análisis de código, que ayudará a asegurar que el producto se construye cumpliendo con los requisitos establecidos.

En primer lugar, como servidor para la integración contina, hablaremos de **[Jenkins](https://jenkins.io/)**, por la 
versatilidad que ofrece y la cantidad de plugins disponibles para obtener una configuración acorde a nuestras necesidades.

Mientras que la parte de inspección de código, tomaremos **[SonarQube](https://www.sonarqube.org/)** como referencia.

## **Jenkins, el mayordomo que construye aplicaciones**

Ya hemos hablado en varias ocasiones de Jenkins y obviamente de fundamental papel en la [integración continua](http://oscarmoreno.com/integracion-continua-fundamentos-y-beneficios/).

Pero el mayor aprovechamiento de esta herramienta, se obtiene principalmente por 3 elementos:

### **1) Configuración del sistema (Configure System)**

En este apartado de la configuración, es donde se debe definir los aspectos básicos de su instancia como, por ejemplo, la URL mediante la cual se podrá acceder a la herramienta.

Y también en este apartado será donde se debe especificar los datos relativos a la instancia de Sonarqube que tengamos disponible.

![Como configurar el sistema!](/img/posts/2020-05-08-configuracion-jenkins.png)

En la mayoría de situaciones, sobretodo si las herramientas pertenecen a una organización empresariales, también es imprescindible que se configure un token, necesario para poder conectar con la instancia de SonarQube sin necesidad de que sea pública y por lo tanto haya que poner en riesgo la **seguridad**.

### **2) Configuración global de las herramientas (Global Tool Configuration)**

Por otro lado, el resto de herramientas se configurarán en esta sección, y donde se debe prestar especial atención es en los apartados:

 - **SonarQube Scanner**: Incluye tanto la configuración para los escáneres de proyectos MSBuild, como para el resto de proyectos
 - **Maven**: Para hacer uso de la herramienta para la gestión y construcción de proyectos Java más utilizada
 - **JDK**: donde se debe especificar las distintas configuraciones e instalaciones de Java para los proyectos que lo requieran
 - **Docker**: para configurar e instalar en entorno necesario para la construcción y gestión de contenedores

### **3) Gestión de plugins (Manage Plugins)**

Una de las características más destacables de Jenkins es su **gran cantidad de plugins disponibles** que permiten ampliar su versatilidad

No solo es admirable el número de Jenkins plugins existentes, sino la facilidad para instalarlos.

Si bien es fácil su selección e instalación, siempre será necesario conocer el plugin, para poder validar su compatibilidad, tanto con la instancia de Jenkins, como con los proyectos que se integren en ella.

Además, para poder configurar las herramientas de la sección anteriormente presentada, es necesario en muchos casos instalar su respectivos plugins: como, por ejemplo, el **Maven plugin** o el **SonarQube plugin**.

## **SonarQube, el inspector de código**

Como decíamos antes, la integración continua, no se limita solo a compilar, en ella se incluyen también las **pruebas unitarias**, por lo que una herramienta de inspección de código se convierte en el complemento ideal.

Y cuando hablamos de SonarQube, no debemos hacer referencia simplemente a su instancia y su sonar scanner.

También es recomendable contar con **sonarlint** en los respectivos IDE’s de desarrollo del equipo, con lo que podremos evitar un buen número de evidencias lleguen al repositorio,  por lo tanto, a su construcción en Jenkins.

Todo ello, teniendo siempre en mente el objetivo de contar con [un código limpio y seguro](https://www.excentia.es/limpia-tu-codigo).

En este caso, la configuración necesaria para la correcta sincronización Jenkins Sonar, pasa por las siguientes secciones:

### **1) Configuración general**

Donde se deben establecer los parámetros de la instancia de SonarQube, necesarios como contábamos anteriormente para establecerlo en la instancia de Jenkins

Además, en este apartado es donde se especifican los distintos valores necesarios para el correcto análisis de código de un proyecto en función del lenguaje que utilice.

Por otro lado, SonarQube cuenta con un archivo llamado **sonar properties**, en el que se pueden establecer estos valores.


### **2) Marketplace**

En este caso, también SonarQube cuenta con una **amplia variedad de plugins** que permiten ampliar sus funcionalidades y, 
como en el caso anterior, aunque su instalación es sencilla, es necesario asegurar la compatibilidad y escoger los 
adecuados para obtener los mejores resultados y mantener una instancia estable y segura.

![SonarQube Marketplace!](/img/posts/2020-05-08-sonarqube-marketplace.png)

<br/>
<hr>
<br/>

<div id="contact-form-hubspot">
	<h1>¿Quieres mejorar la calidad y la estabilidad de tu software con la inspección continua de código?</h1>
<p>Contáctanos y te guiaremos hacia la mejor implementación.</p>
<br/>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	portalId: "7892756",
	formId: "88c36f66-edb7-403c-8200-d4518c6329cc"
});
</script>
<br/>
</div>