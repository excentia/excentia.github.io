---
layout: post
title: La gran trilogía de Eclipse. Parte 1.
date: '2012-09-11T09:00:00.000+02:00'
author: Míriam Luján
categories:
- plugins
- desarrollo
modified_time: '2012-09-11T09:04:45.788+02:00'
blogger_id: tag:blogger.com,1999:blog-6299073294914176200.post-6813298724103469533
redirect_from: /2012/09/la-gran-trilogia-de-eclipse-parte-1.html
---

Eclipse es el IDE estrella para los desarrolladores java. Si programas con Eclipse estás acostumbrado a renombrar variables o realizar algunas refactorizaciones tan importantes como, ya se comentó, en el artículo ¡¡Refactoriza y vencerás!!.
Además Eclipse se puede personalizar con numerosos plugins como: findbugs, m2eclipse, subclipse, ...

Muchos desarrolladores programan plugins para Eclipse de manera sencilla pero muchos programadores querrían desarrollar productos tan potentes como los plugins de eclipse pero sin necesidad de lanzar eclipse para ejecutarlos.

Esta trilogía sobre Eclipse pretende detallar de manera técnica como convertir un plugin de eclipse en un producto standalone. En el primer artículo de la trilogía la manera de convertir el plugin será a través del entorno gráfico de eclipse. En el segundo artículo explicaré como convertir el plugin desde consola. Para terminar la trilogía escribiré un artículo sobre como testear el proyecto implementado.

<h2>Convierte un plugin de eclipse en un producto standalone</h2>

Este artículo es el primero de una trilogía sobre como convertir un plugin de eclipse en un producto standalone. En él se pretende explicar un pequeño ejemplo de como convertir un plugin de eclipse en un producto standalone desde el entorno gráfico de eclipse.

Eclipse cuenta con un tipo de proyecto para construir aplicaciones y productos a partir de un plugin de eclipse que pueden ser ejecutados con un comando de consola.

En primer lugar hay que crear un plugin de eclipse. Selecciona en eclipse **File → Other → Plug-in Project**. Dale un nombre al proyecto y cambia las carpetas que sugiere eclipse por las que se usan en mave **src/main/java** y **target**.

Al darle a next hay que desmarcar que el plugin necesita intefaz gráfica y debemos seleccionar **Yes** en la pregunta de si va a ser un RCP.

Al seleccionar el resto de ventanas podemos elegir el ejemplo típico de Hello world. El proyecto tendrá dentro de **src/main/java** el código y un fichero llamado **plugin.xml** en el que al abrir podemos encontrar una página como esta en la pestaña **Overview**.

En dicha venta podemos encontrar un apartado testing en el que al seleccionar **Launch an Eclipse application** ejecutaremos la aplicación obteniendo el típico mensaje Hello RCP World! en la consola.

Es necesario crear una feature que contenga el plugin. Para ello creamos una feature en eclipse **File → New → Feature Project**.

Al crear la feature seleccionamos el plugin anterior y en la pestaña **Plug-ins** del fichero feature.xml deberemos encontrar el plugin. Es necesario que la versión coincida con la del plugin:

Es necesario crear otra feature con las dependencias que se necesiten. Para ello volvemos a crear una feature basada en la aplicación. En la pestaña de **Plug-ins** del fichero **feature.xml** añadiremos el plugin **org.eclipse.rcp**.

Por último,hay que crear un producto. Para ello creamos un nuevo proyecto en eclipse **File → New → Project** y dentro del proyecto vacío creamos un producto: **File → New → Product Configuration**.

En el producto ahora tenemos un fichero llamado ejemplo-product.product en el que la pestaña overview debemos completar los campos:

En la parte de **Product Definition** debemos crear un nuevo producto con el plugin y la aplicación y seleccionamos que el producto se basa en features. 

Ahora sólo nos queda añadir las features al producto. Para ello en la pestaña Dependencies del producto añadimos las dos features.

Para exportar el producto debemos seleccionar en el producto en la parte de **Exporting Eclipse Product export wizard**. En la ventana que obtendremos debemos indicar la configuración, el directorio de salida y marcar la casilla de Generate metadata repository.

De esta manera en el directorio de salida podemos encontrar un ejecutable que se puede ejecutar desde consola y obtener de nuevo **Hello RCP World!**:

En conclusión, es posible construir un producto standalone a partir de un plugin de eclipse desde el entorno gráfico de eclipse. El problema es que este ejecutable es dependiente del sistema donde se construye. Para construir un ejecutable para cada entorno se puede utilizar el delta-pack pero sólo es necesario para construir aplicaciones desde el entorno de eclipse. Nuestro propósito en próximos artículos es construir aplicaciones con maven desde consola y sin necesidad de hacerlo desde el entorno de eclipse.

Por lo tanto, si quieres saber como crear un producto standalone a partir de un plugin de eclipse con maven y desde consola tendrás que leer mi próximo artículo de la trilogía de eclipse.