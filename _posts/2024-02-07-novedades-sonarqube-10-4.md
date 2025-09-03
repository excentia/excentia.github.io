---
layout: post
title: 'SonarQube 10.4: Novedades de la nueva versión'
description: ¡Nuevas visualizaciones, mejoras en la integración de SonarQube y SonarLint, nuevo soporte para Helm Charts y mucho más!
date: '2024-02-07T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: /img/posts/2024-02-07-novedades-sonarqube-10-4.png

---

<img width="100%" src="img/posts/2024-02-07-novedades-sonarqube-10-4.png" alt="Novedades SonarQube 10.4">


¡SonarQube 10.4 ya está disponible! El equipo de Sonar ha sacado una nueva release y aquí estamos para contarte todas las novedades. La versión de **SonarQube 10.4** trae como novedades **nuevas visualizaciones** de la metodología Clean as You Code, tiempos de escaneado más rápidos, mejoras en la conexión de SonarLint y nuevo soporte para Helm Charts. ¡Empezamos!
<br>
<br>

## Nuevas visualizaciones de Clean Code y de la metodología Clean as You Code

Ahora los usuarios podrán ver **qué issues van a ser resueltas** antes de mergear una Pull Request en el apartado 'Overview' de SonarQube. De esta forma, se **eliminan las dudas** de lo que se está arreglando en el new code con esta nueva vista de las issues corregidas. Esta nueva vista está disponible para las cuatro plataformas CI (GitLab, GitHub, Azure DevOps y Bitbucket). 

<img width="80%" src="img/sonarsource-products/fixed-issues.png" alt="Pull Request SonarQube">
<br>
<br>

Opciones disponibles para las ediciones **Developer, Enterprise y Data Center**. 


## Nuevas visualizaciones del resumen de rama y overall code

Por su parte, el resumen de la rama ahora **muestra la Clean Code Taxonomy** con un solo recuento de problemas, en lugar de las categorías anteriores. A continuación, vemos un ejemplo de la pestaña 'Overall Code' en **SonarQube 10.3**: 


<img width="80%" src="img/sonarsource-products/overall-code-sonarqube-10-3.png" alt="Pull Request SonarQube">
<br>
<br>

Y la puedes comparar con la imagen de la versión **SonarQube 10.4** aquí:
<img width="80%" src="img/sonarsource-products/overall-code-sonarqube-10-4.png" alt="Pull Request SonarQube">
<br>
<br>

La pestaña de 'Overall Code' ahora muestra la calidad del software y un recuento de issues de alta (H), media (M) y baja severidad (L).

Opciones disponibles para las ediciones **Developer, Enterprise y Data Center**.

<img width="80%" src="img/sonarsource-products/branch-summary.png" alt="Branch Summary SonarQube">
<br>
<br>


## Nueva forma de marcar las issues

En la versión 10.4 de SonarQube los developers podrán **marcar una issue como 'Accepted'** en lugar de 'Won't fix'. Además, podrán incluir comentarios que expliquen **cómo va a afectar a la deuda técnica** la aceptación de la issue. 

SonarQube **realiza un seguimiento de las issues aceptadas** y mostrará el número de las mismas en el resumen de la rama y en la **vista de la Pull Request** en la plataforma DevOps CI del usuario.

Por otro lado, al hacer clic en el recuento de issues aceptadas, se mostrarán en una lista junto al detalle de por qué lo son. Esta nueva vista permitirá que los developers entiendan la deuda técnica, a aceptar las issues y a saber cómo afectan a la deuda técnica. 

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>

## Mayor velocidad de escáner

Ahora SonarQube ha reducido los tiempos de escaneo y ancho de banda. Ahora el escáner solo descarga los analizadores necesarios para el proyecto que está analizando, en fnción de los archivos e idiomas del proyecto. 

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>

## Sincronizar usuarios y grupos de GitLab

Primeras actualizaciones para que **SonarQube sea compatible con la autoconfiguración de GitLab**, como ya se hizo con GitHub. En esta nueva versión se pueden sincronizar usuarios y grupos de GitLab en SonarQube, reduciendo el tiempo para configurar y administrar la autenticación con GitLab. 
<br>
<br>

## Mejoras en la vinculación de SonarQube y SonarLint

Si no tienes vinculado SonarQube y SonarLint y clicas sobre el **botón de ver issue** en tu IDE, SonarQube te guiará para que realices la conexión. 

Además, en la **Enterprise Edition** se descargarán tus reglas de secretos personalizadas en SonarLint. SonarLint resaltará esos secretos a medida que el desarrollador codifica, evitando que sean empujados inadvertidamente a su repositorio.

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>

## Soporte para Helm Charts

Ahora SonarQube adminite el **escaneo de Helm Charts** para implementaciones de Kubernetes basadas en Helm utilizando las mismas reglas de Kubernetes que se aplican a otros archivos YAML. 

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>

## Nuevo archivo de registro que muestra APIs obsoletas y sus parámetros

Ahora SonarQube incluye un archivo de registro que contiene detalles de cuando se llama a una **API web obsoleta** y/o usa parámetros de **API web obsoletos**. Este nuevo archivo de registro se puede descargar desde la sección de administración en SonarQube y se puede acceder directamente en el sistema de archivos.

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>

## Nuevo atributos de reglas que adoptar la Clean Code Taxonomy

Los atributos de las nuevas reglas que se **crean a partir de una plantilla** adoptarn la Clean Code Taxonomy. 

Anteriormente, la Clean Code Taxonomy y los atributos heredados **se mostraban al crear las reglas**. Ahora, solo se muestra el valor Clean Code Taxonomy al generar una regla.

Las plantillas para crear nuevas reglas contienen la asignación predeterminada del atributo 'Legacy 'al valor de Clean Code Taxonomy, con el objetivo de mostrar lo que Sonar aconseja como el nuevo valor de Clean Code Taxonomy. Sin embargo, no es necesario usar el valor predeterminado. Puedes establecer la regla en cualquier atributo de Clean Code Taxonomy que elijas. 

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>


## Mejoras Learn as You Code

Se han actualizado **1.700 reglas** con mejoras a las secciones de '¿Cómo puedo arreglarlo?' y 'Más información'. También se incluye **información útil** que explica los vínculos entre los code smells y las issues más graves. 

Opciones disponibles para las ediciones **Community, Developer, Enterprise y Data Center**.
<br>
<br>

## Actualizaciones de idioma
<br>
<br>

### JavaScript/TypeScript:

18 Reglas de accesibilidad para React.js
El analizador Javascript/TypeScript/CSS vendrá incluido con la versión correcta de Node.js, eliminando la necesidad de instalar y actualizar Node.js en su entorno de escaneo.
Fin del soporte para NodeJS v14
<br>
<br>

### Java/Kotlin:

- 10 nuevas reglas para el arranque de primavera, con lo que el total de hasta 40
- Replicado las 30+ reglas de Javax a Yakarta para que ambos paquetes ahora tienen la misma cobertura
<br>
<br>

### C/C++

- 12 nuevas reglas MISRA C++ 2023
- Detectar problemas en macros de C++
- Añadido soporte para el compilador ccarm de Wind River
<br>
<br>

###  NET 

- 5 nuevas reglas de Blazor
- 30 actualizaciones de reglas de .NET, incluyendo falsos positivos, falsos negativos y mejoras de rendimiento
<br>
<br>

### Python

- Alcanzó el 90% de True Positive Rate (TPR) en los 3 mejores Python SAST Benchmarks: DVGA, DSVW y skf-labs-python
- Añadido soporte para Graphene (GraphQL para Python)
- Añadido soporte para FastAPI framework, completando nuestro soporte de los 3 mejores frameworks de API para Python, incluyendo Flask y Django


Y hasta aquí todas las novedades de SonarQube 10.4 ha publicado [en su web](https://www.sonarsource.com/products/sonarqube/whats-new/sonarqube-10-4/).

Si necesitas más información de SonarQube puedes ponerte en contacto través [de este formulario](https://www.excentia.es/contacto?utm_source=post&utm_medium=post&utm_campaign=Contacto).