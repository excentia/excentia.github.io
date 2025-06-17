---
layout: post
title: ¿Por qué SonarQube 9.9 es imprescindible para los desarrolladores de PHP?
description: Traducimos este post de Sonar en el que explican la importancia de SonarQube 9.9 para los desarrolladores de PHP

date: '2023-07-17T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: /img/posts/2023-07-17-post-sonarqube-lts-portada.jpg

---

**Colin Mueller, Community Manager de Sonar**, publicó [este artículo](https://www.sonarsource.com/blog/sonarqube-99-lts-php-developers) sobre la importancia de SonarQube 9.9 LTS para los desarrolladores de PHP. Desde excentia, como partners exclusivos en España y en Latinoamérica, nos hacemos eco de este artículo y te lo traducimos. ¡Vamos a ello!

El Clean Code en el mundo del desarrollo de software es algo imprescindible y, es ahí donde entra en juego SonarQube. Esta solución está diseñada para ayudarte a ti y a tu equipo a escribir un código apto para el desarrollo y la producción. 

En este artículo, hablaremos de **SonarQube 9.9 LTS**, ya que cuenta con un poderoso **análisis de PHP y más de 275 reglas** diseñadas específicamente para desarrolladores de PHP. Profundizaremos en las características y mejoras destacadas que lo convierten en una actualización imprescindible con respecto a las versiones anteriores, incluido el SonarQube 8.9 LTS al final de su vida útil. 

<h2>Actualizaciones del motor de análisis</h2>

**Velocidad de análisis sobrealimentada**

SonarQube 9.9 LTS acelera significativamente el **análisis para los usuarios de ediciones comerciales de SonarQube** a través de la introducción de un análisis incremental para solicitudes de incorporación de cambios. Esta característica se centra en analizar únicamente los cambios introducidos en una solicitud de extracción en lugar de todo el código base.  

**Soporte para PHP 8.1 y 8.2**

El nuevo SonarQube LTS incluye **soporte para nuevas versiones de idioma**, lo que significa que han actualizado el análisis para comprender la nueva sintaxis y actualizar las reglas sobre cómo se aplican a los nuevos elementos del idioma. 

Manteniéndose al día con el ecosistema PHP en evolución, SonarQube 9.9 LTS ahora extiende su soporte a PHP 8.1 y 8.2, lo que significa soporte para:

•	Enumeraciones 

•	Tipos de intersección 

•	Propiedades de solo lectura 

•	Sintaxis intocable de primera clase

•	Notación numérica octal explícita 

•	Constantes de clase finales 

•	Clases de solo lectura 


**Importar informes de Psalm y PHPStan**

Cuando se usan varias herramientas para informar problemas en el código, puedes generar un **flujo de trabajo inconexo** si todos los resultados no están en un solo lugar. Ser capaz de importar estos problemas de informes a SonarQube significa que ya no tendrás que pasar de una herramienta a otra, solo tendrás una vista clara e integrada del estado de tu código para abordar los problemas directamente.

**Psalm y PHPStan**, analizadores ampliamente reconocidos en la comunidad de PHP, ahora se pueden integrar de forma más fluida con SonarQube 9.9 LTS. Estas soluciones ofrecen la posibilidad de importar informes de problemas directamente a SonarQube como problemas externos

<img width="100%" src="/img/posts/2023-07-17-post-sonarqube-lts-src.jpg">

**Menos falsos positivos**

Sonar se esfuerza para asegurarse de que solo se planteen problemas reales, y sus desarrolladores siempre están revisando los problemas planteados por las reglas para asegurarse de que sean precisos y relevantes. También reciben informes de la comunidad y a través de canales comerciales de apoyo.
SonarQube 9.9 LTS corrige **los falsos positivos informados por la comunidad**, como asegurarse de que S1313 (el uso de direcciones IP codificadas es sensible a la seguridad) no se genere en direcciones IP reservadas y S3699 (la salida de funciones que no devuelven nada no debe usarse) no se eleva en las funciones de flecha.

<h2>Nuevas reglas</h2>

**Sube de nivel tu desarrollo de complementos de WordPress**

Wordpress sigue siendo un CMS muy popular en 2023: según algunas estimaciones, actualmente impulsa el 40% de los sitios web en Internet! Wordpress está escrito en PHP, por lo que su ecosistema de complementos también se desarrolla con PHP. En el pasado, garantizar la capacidad de mantenimiento y la seguridad de estos complementos fue un desafío debido a la documentación dispersa. Con la **introducción de 9 nuevas reglas dirigidas específicamente a los desarrolladores de complementos de Wordpress**, SonarQube 9.9 LTS ayuda a garantizar el desarrollo de complementos de WordPress más fáciles de mantener y más seguros.

Además de estas nuevas reglas, Sonar ha adaptado su **análisis de seguridad avanzado (disponible en las ediciones comerciales de SonarQube)** para conocer las fuentes, los sumideros y los desinfectantes de Wordpress. Ahora puedes estar seguro de que solo se transmiten datos fiables a través de tu código, evitando ataques como la inyección de rutas y SQL y la redirección de URL.

**Escribe expresiones regulares, limpias y sin errores** 

Las expresiones regulares (regex) son **secuencias de símbolos y caracteres** que expresan una cadena o patrón para buscar dentro de un texto más largo. Regex es una buena herramienta para expresar condiciones que de otro modo requerirían muchas líneas de código para captar el mismo patrón. 

La escritura de expresiones regulares es **propensa a errores** y son difíciles de documentar bien. Una vez que están escritos, identificar errores en ellos puede ser extremadamente difícil. No solo son difíciles de escribir, sino que, debido a su tamaño y complejidad, a menudo son complicados de leer y comprender.

Por ejemplo la siguiente expresión: 

re = '/[a-z\:\/\/\.]+(youtube|youtu)\.(com|be)\/(watch\?v=|embed\/|.+\?v=)?([^"&?\s]{11})?/m'.
<br>

Esta expresión regular está destinada a hacer coincidir la URL como https://www.youtu.be/watch?v=dQw4w9WgXcQyhttps://www.youtube.com/embed/dQw4w9WgXcQ.

El tercer grupo de captura en esta expresión regular para tener en cuenta las variaciones en el formato de URL es el siguiente:

(watch\?v=|embed/|.+\?v=)?

Es posible que no hayas notado que la tercera alternativa en este grupo de captura, .+\?v= es redundante, porque ya está cubierta en la primera alternativa watch\?v= y nunca se aplicará a /embed/las URL.

Entonces, esta expresión regular se puede simplificar eliminando el grupo alternativo redundante, brindándonos un poco más legible:
$re = '/[a-z\:\/\/\.]+(youtube|youtu)\.(com|be)\/(watch\?v=|embed\/|)?([^"&?\s]{11})?/m';

Esto habría sido difícil de detectar por un desarrollador. Sin embargo, no es nada difícil para SonarQube.

<img width="100%" src="/img/posts/2023-07-17-post-sonarqube-lts-redundant.jpg">

Los desarrolladores de Sonar introdujeron en SonarQube 9.9 LTS **25 nuevas reglas para ayudar a los desarrolladores de PHP a escribir expresiones regulares eficientes, sin errores, seguras y más simples**. Puedes encontrar [aquí todas las reglas de PHP](https://www.rules.sonarsource.com) relacionadas con las expresiones regulares.