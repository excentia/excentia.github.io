---
layout: post
title: 'Lanzando ‘Secret Detection’ para mantener tus ‘Secretos’ Cloud a salvo'
description: Aprende como los desarrolladores pueden salvaguardar sus secretos de la nube de filtraciones masivas y mejorar la seguridad con SonarLint

date: '2022-05-12T08:00:00Z'
author: Sonsoles Cabrera<br><br>(artículo original Kirti Joshi)<br>
categories:

- productos
- sonarsource

cover: /img/posts/2022-05-12-secret-detection.png

---

<img width="100%" src="/img/posts/2022-05-12-secret-detection.png">

La mayoría de las aplicaciones digitales en las que trabajamos requieren algún tipo de credenciales, para conectarse a
una base de datos con un nombre de usuario/contraseña, para acceder a programas informáticos a través de tokens
autorizados o claves API para invocar servicios de autenticación. 

Las credenciales, también conocidas como **“Secretos”**,
son piezas de **información confidencial** a nivel del usuario o del sistema que deben protegerse cuidadosamente y ser
accesibles solo para usuarios legítimos. Y todos reconocemos que salvaguardar estos activos es de suma importancia para
evitar el uso indebido de la cuenta y posibles infracciones.

> **Check de realidad**: ¿con qué frecuencia tomas medidas de manera proactiva para mantener seguros estos activos? Apostamos a
> que pocas veces.

Con la misión de permitir que los desarrolladores se hagan cargo de su propia seguridad de código está disponible
una nueva función en **[SonarLint](https://www.sonarlint.org)** que ayuda a los desarrolladores a identificar y prevenir fugas de credenciales de
autenticación a nivel de sistema o de usuario de AWS antes de que se comprometan en un repositorio y se filtren desde
el código fuente local del usuario o los archivos.

Si no estás familiarizado con **[SonarLint](https://www.sonarlint.org)**, es una extensión de IDE gratuita y de código abierto que permite a los
desarrolladores detectar y solucionar instantáneamente los problemas de calidad y seguridad del código mientras escriben
el código.

¿Suena interesante? Pues sigue leyendo para obtener más información.

## Primero, ¿por qué debería importarte?

Antes de profundizar en los detalles de esta nueva función de **[SonarLint](https://www.sonarlint.org)**, vamos a retroceder 
un poco y ver por qué debería importarte.

Es posible que a lo largo de tu vida cotidiana te hayas encontrado con un escenario donde hayas utilizado tu tarjeta de
crédito para una transacción más grande de lo normal y el banco se haya puesto en contacto contigo de inmediato para
verificar si realmente tenías la intención de realizar esta transacción. Si lo hiciste, no hay problema, todo está bien.
De lo contrario, se detectó una actividad fraudulenta antes de que se completara la transacción, lo que te ahorró tanto
a ti como al banco el problema de tener una cuenta comprometida.

Lo mismo se aplica al desarrollo de código.

Como parte del desarrollo y la entrega de su código, podría haber una conexión recurrente a una base de datos basada en
la nube o acceso a una API de terceros mediante credenciales. Posiblemente hayas codificado temporalmente las
credenciales para facilitar su uso, o un colega añadió información confidencial para una prueba local rápida y luego
envió accidentalmente esos archivos a un repositorio público. 

Y... esos cambios temporales se convirtieron en permanentes.

Incluso con la eliminación del código después de los hechos, todavía existe la posibilidad de que alguien haya hecho una
copia de tu secreto antes de la limpieza.

Lo siguiente que sabes es que la cuenta está comprometida o, peor aún, este pequeño lapso de seguridad le dio a alguien
el acceso para realizar una infracción de infraestructura más grande.

Estas infracciones son más comunes y potencialmente catastróficas de lo que se imagina. [StackOverflow](https://stackoverflow.blog/2021/01/25/a-deeper-dive-into-our-may-2019-security-incident/), 
[Uber](https://awsinsider.net/articles/2017/11/21/uber-aws-data-breach.aspx), y más
recientemente, [Shopify](https://latesthackingnews.com/2021/07/30/critical-shopify-vulnerability-exposed-github-access-token-and-shopify-repos/) 
son ejemplos de incidentes de seguridad de alto nivel en los que los secretos esparcidos en
archivos visibles públicamente causaron estragos. Piensa en el caos de reputación de marca que podría haber creado.
El error humano ocurre y seguirá ocurriendo, pero con las comprobaciones correctas en el momento adecuado, el error se
puede prevenir desde el primer momento. 

En el caso anterior, si la exposición de `secretos´ se hubiera señalizado en el momento de introducirla, es decir, 
en tiempo real durante la codificación o cuando estás a punto de enviar tu código, podrías
haberte ahorrado muchos problemas.

A estas alturas, seguramente ya te has dado cuenta de que el mejor lugar para detectar y abordar estos problemas en tu
flujo de trabajo de desarrollo es al principio, es decir, en tu IDE.

## Reglas avanzadas que detectan secretos de AWS en IDE

**[SonarLint](https://www.sonarlint.org)** ahora incluye nuevas reglas para proteger las credenciales de autenticación
de AWS y las credenciales de Amazon Marketplace Web Service (MWS) para que no se filtren públicamente. 

Específicamente, se han agregado dos nuevas reglas para [salvaguardar tokens de autorización MWS](https://rules.sonarsource.com/secrets/RSPEC-6292) y 
[salvaguardar claves de acceso MWS, así como ID de claves y tokens de sesión](https://rules.sonarsource.com/secrets/RSPEC-6290).

**[SonarLint](https://www.sonarlint.org)** actúa como tu primera línea de defensa para detectar y evitar cualquier fuga
pública de credenciales. Al marcar los problemas en el punto en el que se introducen (es decir, desplanzando la detección de
problemas más a la izquierda _-shift left-_), puedes tomar medidas inmediatas y prevenir la fuga en primer lugar.

Eso es importante porque las cuentas comprometidas no tienen únicamente ramificaciones individuales o de nivel de
recursos, como posible piratería de cuentas, sino que también pueden ser perjudiciales para la confidencialidad de tus
clientes. Por ejemplo, los tokens MWS comprometidos se pueden usar para obtener acceso ilícito a bases de datos que
contienen información del cliente, como número de tarjetas de crédito, correo electrónico, direcciones de envío y
registros de ventas.

Con **[SonarLint](https://www.sonarlint.org)** instalado en tu IDE, estas reglas de detección de `secretos´ te permitirán
detectar la presencia de tales
credenciales en el primer punto de entrada, es decir, en el código fuente o en archivos independientes de configuración o
idioma (por ejemplo, xml, yaml, json) antes de que estén comprometidos con el repositorio.

<img width="100%" src="/img/posts/2022-05-12-secret-detection-sonarlint.png">

SonarLint no solo señala estos problemas, sino que también puede proporcionar una guía clara en contexto para abordarlos. 
Luego, tienes total flexibilidad para tomar medidas y abordar el código que se está marcando; acercándote un paso más 
a la entrega de código seguro.

## Empezando en tu IDE

Actualmente, esta función es compatible con VS Code, Eclipse, IntelliJ IDEA, PyCharm, CLion, WebStorm, PHPStorm, Rider 
y pronto estará disponible para otros IDE. Para comenzar a proteger tu base de código, puedes descargar **[SonarLint](https://www.sonarlint.org)** para 
tu editor de código favorito. Los usuarios actuales de **[SonarLint](https://www.sonarlint.org)** pueden simplemente 
actualizar el complemento a la última versión para obtener acceso a esta nueva función.

## El comienzo de una nueva puerta de enlace para la detección de secretos

El siguiente paso es extender la funcionalidad de detección de `secretos´ en SonarLint a otros proveedores de nube
pública. Más adelante, puedes esperar que **[SonarLint](https://www.sonarlint.org)** admita más proveedores de nube, productos SaaS y proveedores de
bases de datos.

Estate atento para saber cuándo se planean estas funciones para **[SonarLint](https://www.sonarlint.org)** en 
la [hoja de ruta del producto SonarLint](https://portal.productboard.com/sonarsource/4-sonarlint/tabs/9-coming-soon).

Si usas [SonarQube](https://www.sonarqube.org) o [SonarCloud](https://sonarcloud.io), esta es una gran oportunidad para 
extender tu experiencia de seguridad de código a tu
IDE. Al instalar SonarLint de forma gratuita, no solo puedes beneficiarte inmediatamente de funciones potentes como la
detección de secretos, sino que también puedes mejorar la calidad general del código y la seguridad de tu base de código
al compartir reglas y configuraciones de análisis de [SonarQube](https://www.sonarqube.org) o [SonarCloud](https://sonarcloud.io) 
a **[SonarLint](https://www.sonarlint.org)** para unir a todo tu equipo en una única definición de salud del código.


---
<br>
_Artículo original: [Launching ‘Secret Detection’ to keep your Cloud ‘Secrets’ safe](https://blog.sonarsource.com/sonarlint-cloud-secret-detection/)_
