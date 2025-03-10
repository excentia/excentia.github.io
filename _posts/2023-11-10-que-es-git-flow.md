---
layout: post
title: '¿Qué es Gitflow y para qué sirve?'
description: Hablamos sobre el modelo de creación de ramas Gitflow y de las ventajas para los proyectos de los equipos de desarrollo. 
date: '2023-11-10T08:00:00Z'
author: Mario Bastardo
categories:
- git
- dev


cover: /img/posts/2023-11-10-que-es-git-flow.jpg

---

<img width="100%" src="img/posts/2023-11-10-que-es-git-flow.jpg" alt="¿Que es Gitflow?">

¡Hola! Me presento, soy **Mario Bastardo, Sonar Bug Hunter en excentia** y he decidido escribir este post porque creo que, como desarrollador/a, te puede ayudar en tu día a día. En concreto, en este artículo voy a hablar del modelo Gitflow. ¡Empecemos!

<h2>¿Qué es Gitflow?</h2>
 
 Gitflow es un modelo de utilización de ramas para Git y que fue creado en 2010 por **Vincent Driessen**. 
 
 
<h2>¿Cuáles son las características de Gitflow?</h2>
 
El [modelo Gitflow](https://github.com/nvie) ofrece una serie de ventajas para los equipos de desarrollo que desglosaremos a continuación:

<strong>- Paralelización</strong>: Podemos trabajar en varias características a la vez y que no interfieran entre ellas. Podremos incluso, dejar un trabajo a medias, centrarnos en otro y volver cuando sea necesario.
<br>
<strong>- Colaboración</strong>: De la misma forma, varios desarrolladores van a poder estar trabajando en paralelo en varias características del software final sin interferirse.
<br>
<strong>- A prueba de fallos</strong>: Con Gitflow vamos a poder separar el trabajo que estamos realizando en este mismo momento del trabajo ya finalizado. De esta manera, podemos tener trabajo en curso que no funcione sin afectar al desarrollo de la aplicación.
<br>

Git es un **sistema de control de versiones** con soporte de ramas. Hay que entender un repositorio Git como las ramas de un árbol. Existirá un primer *commit* de código en una rama principal y posteriormente, saldrán de ahí las ramas que sean necesarias. Cada rama es una **derivación desde la rama principal**. Haremos una serie de cambios en dicha rama y podrá volver o no a encontrarse (en adelante, *mergear*) contra la rama principal.

<div style="text-align: center;">
<img width="40%" src="img/posts/2023-11-10-que-es-git-flow-FIGURA-1.jpg" alt="Ejemplo de ramas en sistema Git">
</div>

### Ramas principales

Gitflow establece que existen **dos ramas principales** dentro de un repositorio: *develop* y *main/master*.

<strong>- Develop</strong>: Rama más interesante de cara al desarrollador. Contendrá los últimos cambios finalizados en nuestro software. Es, por tanto, la rama principal de desarrollo.

<strong>- Main/master </strong>: Rama que va a contener el último estado del desarrollo que consideramos que está preparado para producción. Generalmente, solo se *mergea* contra esta rama cuando generamos una versión para producción del software.

<div style="text-align: center;">
<img width="80%" src="img/posts/2023-11-10-que-es-git-flow-FIGURA-2.jpg" alt="Ramas principales Gitflow">
</div>

<br>

Hay que ser muy estricto con los cambios en *main/master*. **Nunca debe entrar software a esta rama que no esté 100% preparado** para poner en producción. Un desarrollador/técnico de sistemas de despliegue automático debería poder ir a esta rama siempre y encontrarse un software que pueda poner en marcha de inmediato.

Una de las ventajas que ofrece Gitflow es que **nos da la opción (y debemos) de testear** y hacer todos los cambios necesarios en la rama *develop* antes de enviar un paquete a producción, mediante la rama *main/master*. De esta forma, separamos el código que está 100% listo para producción de las versiones que pueden no estar estables, asegurandonos una mayor tolerancia a fallos.

<br>

### Flujo de trabajo - Ramas de soporte

Imaginemos que un desarrollador tiene que realizar una tarea. Para la realización de la misma, creará **nuevas ramas con reglas estrictas** de nomenclatura, rama de origen y rama a la que *mergearán*.

<br>

### Desarrollo activo - Ramas feature

Normalmente estas tareas son implementaciones de nuevas características (*features* en inglés).

Para ello, el desarrollador deberá crearse una rama nueva a partir del último *commit* de la rama *develop* con la nomenclatura **feature/(descripción_de_la_feature)**. En esta nueva rama el desarrollador podrá realizar tantos *commits* como sean necesarios sin preocuparse de si se rompe la compilación, de si quedan cambios incompletos en la característica o incluso, si posteriormente, se deshecha.

Cuando se finalice la característica correctamente, **esta rama se mergeará contra develop**, preferiblemente aunando todos los posibles *commits* de la rama feature en uno solo en la develop. Esto se conoce como *squash*. 

Recomendaciones para estas ramas:
<br>
- Estas ramas son de corta duración, deben contener los mínimos cambios imprescindibles.
<br>
- Deben contener el desarrollo de una sola característica, bien definida. Se debe implementar una sola cosa y se debe hacer bien.
<br>
- Antes de finalizar y mergear estas ramas se debe comprobar que todo funciona correctamente, que no se introducen fallos y que no dejaremos la rama principal inestable.
<br>

<div style="text-align: center;">
<img width="80%" src="img/posts/2023-11-10-que-es-git-flow-FIGURA-3.jpg" alt="Ramas feature">
</div>
<br>

Una vez finalizado el mergeo, se debe borrar la rama.

<br>

### Corrección de errores - Rama bug o bugfix

De igual manera, podemos realizar una corrección de errores. Sacaremos una rama llamada **bug/(descripcion_del_bug)** o **bugfix/(descripcion_del_bug)** desde el último cambio de la develop. 

Estas ramas seguirán los mismos principios que las ramas *feature*. *Mergearán* a la rama develop al terminar.

<br>

### Proceso de release

Ya hemos introducido todos los cambios que consideramos necesarios en la rama *develop*. Hemos corregido todos los fallos que hemos encontrado y hemos probado todo lo necesario. Consideramos que este código **está listo para producción** y queremos sacar una versión.

Para ello, vamos a mergear la **rama develop contra la rama main**. 

Previo a *mergear* debemos realizar todos los cambios necesarios en los descriptores de la aplicación para mostrar la versión que publicaremos, por ejemplo `<version>` en un *pom* de maven. 

Posteriormente, *mergearemos develop* contra main, en esta ocasión sin hacer *squash* de los *commits*. Esto se hace así para conservar todo el historial de características implementadas.

Una vez mergeada la rama, haremos una etiqueta o *tag* con el número de versión en el último *commit* realizado en la main. Será este *tag* el que enviaremos a producción.

<div style="text-align: center;">
<img width="80%" src="img/posts/2023-11-10-que-es-git-flow-FIGURA-4.jpg" alt="Tags, etiquetas y commits en Gitflow">
</div>

<br>

*NOTA: Algunos autores, como el propio Driessen, consideran que debería haber una rama intermedia entre develop y main (rama release), donde almacenemos una versión 'release candidate'. En esta rama preparan el software de cara a la release: cambios de números de versión, posibles bugfixes de última hora. Personalmente creo que este trabajo se debe hacer en la rama develop antes de enviar a main y que las ramas release añaden una complejidad innecesaria.*

<br>

### Hotfix

¿Y qué ocurre si de repente encuentro un fallo mientras la aplicación está en marcha en producción?

No hay que preocuparse. Crearemos una rama con la nomenclatura **hotfix/(descripcion_del_fallo)** que saldrá desde el último *commit* de la rama *main/master* y realizaremos la corrección necesaria sobre dicha rama. Haremos todas las pruebas necesarias y una vez terminado el cambio tenemos que *mergear* contra dos ramas diferentes:

<strong>Main</strong>: Como la intención es enviar el cambio lo más rápido posible a producción, *mergearemos* directamente contra la rama main. Es por ello que:<br>
- Debemos mantener este tipo de ramas al mínimo estrictamente necesario. Sólo para fallos que afecten gravemente al funcionamiento de producción.<br>
- Debemos asegurarnos al 100% que este cambio está probado y asegurada su función.<br>
- Debemos hacer los cambios necesarios de *strings* de versión antes de *mergear*.<br>
<br>

<strong>Develop</strong>: Para evitar que vuelva a fallar, también incorporaremos el código de esta rama *hotfix* al código de la rama *develop*.<br>

<div style="text-align: center;">
<img width="80%" src="img/posts/2023-11-10-que-es-git-flow-FIGURA-5.jpg" alt="Mergear hotfix con develop">
</div>

<br>

Por supuesto, al *mergear* esta rama haremos *squash* de los *commits*, para incorporar un solo *commit*. Una vez mergeada la rama contra master se generará un nuevo *tag* que será la versión que desplegaremos. Personalmente creo que lo mejor es llamar al *tag* **numero.de.version-hf1**. 

La rama se eliminará tras haber *mergeado* contra *develop*.

<br>

### Otras notas

Existen utilidades, [como git-flow](https://github.com/nvie/gitflow) del propio Vincent Dreissel que de alguna forma automatiza la creación de todas estas ramas. Personalmente no las recomiendo por aportar una complejidad añadida que, aunque es mínima, es innecesaria. Una vez acostumbrado al sistema Gitflow, el funcionamiento y creación de ramas manualmente es realmente intuitivo.

Y hasta aquí mi artículo sobre Gitflow. 

Recuerda que si quieres realizarnos alguna consulta, no dudes en [contactarnos.](https://www.excentia.es/contacto)

¡Hasta pronto!