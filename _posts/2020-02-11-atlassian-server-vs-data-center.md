---
layout: post
title: 'Diferencias entre Server y Data Center en Atlassian'
description: ¿Qué diferencias encontramos entre Server y Data Center? ¿Qué opción es mejor para tu equipo? Lo repasamos en este post, traducción y adaptación de los consejos compartidos por Atlassian en su blog.
date: '2020-02-11T08:00:00.000+01:00'
author: Adaptación y traducción por Andrea Crespo. Artículo original por Maggie Roney.
categories: 
- atlassian


cover: /img/posts/
modified_time: '2018-10-01T08:00:00.000+01:00'
---


En post anteriores, ya tratamos con detalle las [diferencias entre la oferta Cloud y Server de Atlassian](https://www.excentia.es/atlassian-cloud-vs-server).

Si dados ciertos requerimientos legislativos o corporativos, necesitas tener control sobre tus datos e infraestructura, sabrás que el Cloud no es la opción más adecuada para ti. Es momento entonces de valorar entre Server y Data Center, cual es la opción que mejor se ajusta a tus necesidades. 

Para ello, hemos decidido traducir y adaptar la información que Atlassian pone a nuestra disposición. 
Si prefieres leer el post original, lo tienes disponible en el [blog de Atlassian](https://www.atlassian.com/blog/jira-software/server-vs-data-center-whats-right).

---

## Server vs. Data Center: ¿qué es mejor para tí?

Muchos equipos eligen los productos Server de Atlassian porque quieren o necesitan tener control sobre sus datos e infraestructura. Pero ¿sabías que Atlassian ofrece otra opción para que puedas desplegar sus productos en tu propia infraestructura?

La alternativa es **[Atlassian Data Center](https://www.atlassian.com/enterprise/data-center), nuestra oferta empresarial autogestionada, que proporciona la misma funcionalidad que conoces y te gustan en nuestros productos Server, pero tiene capacidades adicionales para servir mejor a las grandes organizaciones empresariales.** Las ediciones Data Center están disponibles para Jira Software, Confluence, Bitbucket, Jira Service Desk y Crowd.

## Diferencias entre Atlassian Data Center y Server

Pero en realidad, **¿cuál es la diferencia entre Server y Data Center?**

La versión corta: Atlassian Data Center está diseñado para organizaciones empresariales en crecimiento o en una fase madura de su ciclo de vida. 

A medida que las instancias de tus servidores crecen y la capacidad de tu organización para construir productos y ofrecer servicios les impone una carga cada vez más exigente, es posible que necesites una mejor manera de mantenerte a la vanguardia. Para muchos, no sólo el ritmo de crecimiento de la organización es demasiado para que un entorno Server lo soporte, sino que a medida que la organización continúa creciendo, se enfrentan a una lista creciente de características que su software necesita para cumplir con los requisitos de la empresa.

A continuación, se presenta un desglose por producto de las características adicionales a las que tendrá acceso al migrar desde Server a Data Center:

<a target="_blank"><img class="center" width="70%" alt="Funcionalidades adicionales en Atlassian Data Center desglosadas por producto y categoría en una tabla" title="Funcionalidades adicionales en Atlassian Data Center" src="/img/posts/DataCenter%20features.png"></a>


## ¿Cuándo debería considerar una migración a Data Center?

Para determinar si Server o Data Center es el adecuado para tí, hemos esbozado algunos criterios para ayudarte en la toma de decisiones:

### **Usuarios**
¿Cuántos usuarios acceden a tus aplicaciones Atlassian cada día? ¿Este número está creciendo? Nuestros estudios concluyen que los clientes de Jira Software, Confluence y Bitbucket normalmente necesitan más estabilidad cuando su base de usuarios llega a 500 - 1.000. 

El 45% de los actuales clientes del Data Center se han actualizado a esta edición en el pack de 500 o 1.000 usuarios. En el caso de Jira Service Desk, encontramos que el 50% de los clientes de Data Center se actualizan cuando llegan a 50 agentes. La tasa de crecimiento de tu equipo también debe ser tomada en consideración.

### **Rendimiento**
A medida que escalas, ¿obtienes el mismo nivel de rendimiento? Para los clientes más grandes, las bajadas de rendimiento suelen ocurrir bajo una carga alta o en horas punta. Esto es aún más común para las organizaciones en las que los equipos en múltiples ubicaciones geográficas trabajan en línea al mismo tiempo. 

A veces, la bajada del rendimiento se produce simplemente debido a la gran cantidad de datos que se han acumulado en la aplicación. Y a veces los trabajos en ejecución, como las llamadas o consultas a la API, son los culpables. Considera la posibilidad de implementar el monitoreo u otras formas de medir el rendimiento para mantenerte un paso por delante y hacer el traslado a Data Center antes de que tus equipos comiencen a quejarse.

### **Tiempo de inactividad**
Para muchas organizaciones, una sola hora de inactividad puede [costar miles de dólares](https://www.atlassian.com/enterprise/data-center/business-value-calculator). Cuando estés evaluando si debes pasar a Data Center, considera si tu organización puede permitirse tiempo de inactividad.


Normalmente hay dos causas principales de tiempo de inactividad: del lado de la aplicación y del lado del servidor.

- Los problemas de aplicación son a menudo causados por errores de la JVM. Lo más común es que este tipo de fallo ocurra cuando la memoria dedicada en el servidor para ejecutar la aplicación se llena demasiado, o cuando la conexión de la base de datos está sobrecargada por las solicitudes.

- Las interrupciones o caídas del servidor pueden ser causadas por una variedad de cosas, incluyendo mantenimiento planeado, actualizaciones o instalaciones no planeadas, o recursos tales como CPU, RAM, o almacenamiento en un servidor que está siendo sobrecargado. Cualquier tipo de interrupción tiene como resultado la pérdida de productividad dada la imposibilidad de trabajar de sus empleados, por lo que es importante considerar cuántos de sus empleados confían en los productos de Atlassian para hacer su trabajo y lo que ese tiempo de inactividad puede costarle.

Atlassian Data Center no sólo te permite habilitar *clustering* para una alta disponibilidad limitando así estos tipos de interrupciones, sino que también cuenta con herramientas adicionales como el modo de sólo lectura, las actualizaciones de cero tiempo de inactividad y *rate limiting* para fortalecer aún más la estabilidad y la fiabilidad de su(s) producto(s) Atlassian.

### **Administración**
Es posible que estés utilizando un entorno federado u optimizando tu servidor único para satisfacer tus necesidades, pero la complejidad y el tiempo necesarios para hacer cualquiera de estas dos cosas puede ser bastante demandante. 

Data Center ofrece características administrativas que facilitan la vida de los administradores. Tal vez quieres reducir el tiempo de los administradores dedicado a las actualizaciones, o desbloquear algunas de las capacidades de automatización disponibles usando nuestro soporte para AWS o Azure Quickstarts. 

Tal vez quieras reducir el tiempo que pasas ajustando el entorno de tu servidor para mejorar el rendimiento y, en su lugar, archivar los asuntos o proyectos en sólo unos pocos clics para obtener mejoras de rendimiento similares. 

O tal vez estés gestionando varias instancias de Server y quieras consolidarlas en una sola instancia de Data Center para centralizar y simplificar las tareas de tu equipo de administración.

### **Seguridad y cumplimiento**
A medida que las organizaciones maduran, los requisitos de seguridad y cumplimiento se vuelven cada vez más complejos. Ya sea por protocolos de autenticación más seguros o de auditorías avanzadas para cumplir con las políticas internas, lo tenemos cubierto. Seguimos invirtiendo en nuevas formas de proporcionar a las organizaciones empresariales capacidades de seguridad, cumplimiento y gobernanza.



## Descubre más sobre Data Center
Hay muchos factores que hacen que Data Center sea una gran opción para los clientes de Server, ya que sus necesidades cambian. Lee toda la información adicional que ponemos a tu disposición en nuestro [apartado web exclusivo](https://www.excentia.es/atlassian-data-center).







