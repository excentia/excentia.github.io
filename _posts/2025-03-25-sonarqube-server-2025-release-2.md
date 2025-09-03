---
layout: post
title: 'SonarQube Server 2025 Release 2'
description: Mejoras en AI CodeFix, seguridad para Golang, protección para el código IA/ML... ¡Te contamos las novedades de la nueva versión de SonarQube Server!
date: '2025-03-25T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia

cover: /img/posts/2025-03-25-sonarqube-server-2025-release-2.png

---

Ya tenemos disponible la nueva versión de **SonarQube Server 2025 Release 2**. Este lanzamiento incluye la ampliación de la cobertura de las reglas de **AI CodeFix** y que ahora puedes usar tu propio **LLM para AI CodeFix**. Pero no se quedan ahí las nuevas funcionalidades. A continuación, como Gold Partners de Sonar te traducimos las novedades de esta nueva versión. 

<h2>Mejoras en AI CodeFix</h2>

Ahora puedes utilizar tu **propio servicio Azure OpenAI para AI CodeFix**. Mantén el control sobre el acceso a AI CodeFix gracias a un punto de conexión LLM seguro en tu entorno de Azure, lo que mejora la privacidad y la seguridad de los datos. Usar tu propio servicio Azure OpenAI te brinda un mayor control sobre el rendimiento y la escalabilidad de AI CodeFix, garantizando así el cumplimiento de las normativas de privacidad de datos y las políticas de seguridad internas.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

Aquí te dejamos un artículo que escribímos sobre el lanzamiento de [AI CodeFix](/que-es-sonar-ai-codefix){:target="_blank"}. 
<br>

<h2>Deriva arquitectónica</h2>

Ahora, cuando el código se desvía de las restricciones especificadas, **SonarQube Server plantea issues que los desarrolladores** deben abordar para que el código vuelva a cumplir con las restricciones arquitectónicas definidas. Recordemos que una arquitectura deficiente genera deuda técnica arquitectónica. La introducción de Sonar a las reglas de arquitectura ayudan a los desarrolladores a detectar código ineficiente debido a dependencias circulares entre clases en código Java, que ahora también se ha ampliado para detectar ciclos en Javascript y Typescript. Por ejemplo, esto ocurre cuando la clase A hace referencia a la clase B, la clase B a la clase C y la clase C a la clase A. Este tipo de dependencias puede ser difícil de encontrar, y ahora **SonarQube Server ayuda a los desarrolladores a descubrir y corregir** estos problemas tanto en Java como en JS/TS.


Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>

<h2>Mayor protección para el código de IA/ML</h2>

SonarQube Server ahora incluye **más de diez reglas** para ayudarte a encontrar y solucionar problemas al usar la biblioteca de **Python PySpark**. Si utilizas Jupyter Notebooks en PyCharm, en esta versión, SonarQube for IDE encontrarás la detección de problemas en PyCharm, lo que facilita la creación de código Python en las celdas de código dentro de Jupyter Notebooks. 

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

<h2>Métricas de pruebas a nivel de archivo para .NET</h2>

Los **desarrolladores .NET** verán métricas relacionadas con las pruebas hasta el nivel de archivo en sus proyectos .NET. SonarScaner para .NET **calculará y enviará al servidor** las métricas por archivo de sus pruebas unitarias, proporcionando a los desarrolladores .NET la información esencial sobre los resultados de sus pruebas unitarias directamente en la interfaz de usuario de SonarQube.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

<h2>Mayor protección</h2>

Sonar ha añadido alrededor de una **docena de nuevas reglas para 53 reglas en SonarQube** para ayudar a los desarrolladores a evitar errores comunes en el código Java cuando usan **la marco Spring** para crear aplicaciones listas para las empresas.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

<h2>Seguridad para Golang</h2>

Sonar ha añadido **24 nuevas reglas de seguridad** para la cobertura básica de SAST en Go. Estas nuevas reglas abordan problemas de seguridad, como errores de configuración criptográfica y de seguridad, como cookies, algoritmos hash y el envío de información en texto plano.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>

<h2>Últimas versiones de Dart y Kotlin</h2>

Sonar ha actualizado su analizador Dart para que sea compatible con **Dart 3.6 y 3.7**. Para los desarrolladores de Kotlin, Sonar ha reconstruido más de 80 para que sean compatibles con **Kotlin 2.0 y el nuevo compilador K2**. Como resultado, el análisis de Kotlin ahora es un **50% más rápido que antes** de esta versión. Los desarrolladores de Kotlin ahora no solo pueden usar Sonar para analizar Kotlin 2.0 y versiones posteriores, sino que también ofrece un rendimiento superior.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

<h2>Infraestructura IPv6</h2>

Ahora SonarQube Server puede operar en un entorno **exclusivamente IPv6**. Esto beneficia a las empresas que operan entornos grandes con cargas de trabajo que ocupan un gran número de direcciones IP, como aplicaciones sin servidor y de contenedores.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

Y hasta aquí todas las novedades de SonarQube Server 2025 Release 2. Este artículo es una traducción de la [comunicación oficial de Sonar](https://www.sonarsource.com/products/sonarqube/whats-new/2025-2/){:target="_blank"}. 

