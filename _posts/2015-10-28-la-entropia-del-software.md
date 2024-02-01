---
layout: post
title: La entropía del software
description: ¿Qué es la entroía del software? En este artículo hablamos de ella. ¡No te lo pierdas!
date: '2015-10-28T12:10:00.003+01:00'
author: Alejo López
categories:
- deuda
- calidad
- desarrollo

cover: img/posts/2015-10-28-la-entropia-del-software.png

---
<img width="100%" src="img/posts/2015-10-28-la-entropia-del-software.png" alt="¿Qué es la entropía del software">

“Medida del desorden de un sistema”. Esta es la definición que la RAE nos ofrece de entropía. Y en 1992 en el libro **Object-Oriented Software Engineering**: A Use Case Driven Approach , aparece el término de entropía del software: “La segunda ley de la termodinámica parece plausible para los sistemas de software; Cuando un sistema es modificado, su desorden o entropía, siempre aumenta. Esto es conocido como entropía del software”. (Wikipedia)

El software, aun no siendo un ser vivo, con el tiempo envejece, deteriorándose y muriendo cuando se vuelve obsoleto, siendo sustituido por otro software más “joven” y **mejor adaptado al entorno**.

En principio hay diversos factores, que influyen en esta entropía o envejecimiento, ciertos autores hablan de la **podredumbre del software**, y posiblemente sea una definición más visual de lo que en realidad sucede durante la vida útil de un producto.

Un software que depende del **entorno en el que se ejecuta**, puede dejar de funcionar o bajar su rendimiento por cambios en el mismo. Pensemos en una base de datos que es migrada de máquina y la conexión está “harcoded” dentro del código, esta aplicación dejara de funcionar hasta que no se vuelva a generar una nueva versión. O pensemos en una aplicación que para imprimir depende de un determinado tipo de impresora. Este tipo de** dependencia con el entorno** puede ser un mal necesario en determinadas circunstancias, pero la normalidad y lo más sensato es que no sea así. Disponer de ficheros de configuración que nos permitan cambiar los parámetros de conexión de base de datos, a un servidor de correo o la configuración de una nueva impresora por ejemplo, nos evitará muchos problemas.

Esto nos lleva a otro factor que interviene en esta degradación. Imaginemos que se **realizó una configuración inicial del sistema** y durante algunos años no se ha cambiado. Puede darse el caso que sea necesario realizar modificaciones y el usuario o bien no quiere realizar esta configuración, porque fue “dolorosa” en su momento y no sabe dónde acceder para realizarla, o bien le falta información para configurar correctamente el sistema, puesto que por ejemplo no conoce credenciales correctas, no conoce las rutas a otros sistemas, etc.

El código sin usar puede darnos algún que otro dolor de cabeza. Este es un código, ejecutado rara vez, que puede contener **errores difíciles de localizar** y es muy fácil que pasen desapercibidos por el usuario. Uno de los grandes riesgos de este tipo de código es que, con la modificación de los requisitos del sistema, se introduzcan defectos que a la larga permanecerán agazapados hasta que se vuelva a ejecutar la funcionalidad; y por supuesto esto ocurrirá en un momento crítico. Pensemos en una carga de datos: una modificación de los requisitos acordó que el campo email, tenía que ser obligatorio a nivel de base de datos, se modificó el formulario asociado, pero nadie se acordó del proceso de carga de datos, en el que nadie nos **garantiza que existan datos** para el campo email.

Por último están las actualizaciones. En un **sistema compuesto** por múltiples módulos e integraciones, la modificación de una parte puede afectar al resto del sistema. Esto es conocido como el infierno de las dll o infierno de los jar, según la tecnología que se use. Seguramente estos infiernos dan para más de un artículo y de un problema.

Para resumir, podríamos clasificar todos estos problemas en dos tipos de degradación:

- **Degradación inactiva**: básicamente significa dejar morir el software sin ningún tipo de mantenimiento evolutivo, por lo que en algún momento dejará de ser útil al no haber actualizaciones.

- **Degradación activa**: un software que es continuamente modificado para satisfacer nuevos requerimientos se volverá cada vez más complejo y que incluso puede perder el objetivo principal para el que fue desarrollado.

Para retrasar la inevitable **obsolescencia del software**, es imprescindible un buen análisis de las necesidades y un buen diseño del mismo. Y tanto o más necesario es la aplicación de buenas prácticas durante el desarrollo, como el desarrollo de pruebas unitarias, de integración y funcionales que al menos cubran la funcionalidad crítica. Una buena documentación técnica y de usuario también colabora en que nuestras aplicaciones tengan una vida larga y plena.
