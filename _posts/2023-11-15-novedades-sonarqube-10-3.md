---
layout: post
title: 'SonarQube 10.3: Novedades de la nueva versión'
description: Actualizaciones en la taxonomía de Clean Code, añadido el informe 2023 CWE Top 25,abre issues directamente en tu IDE... Te contamos todas las novedades de la versión 10.3.
date: '2023-11-15T08:00:00Z'
author: Belén Casanovas
categories:

- productos
- sonar
- sonarqube
- release


cover: /img/posts/2023-11-15-novedades-sonarqube-10-3.png

---

<img width="100%" src="img/posts/2023-11-15-novedades-sonarqube-10-3.png" alt="Novedades SonarQube 10.3">

SonarQube 10.3 ya está disponible. Como cada actualización que lanzan desde Sonar, te vamos a explicar en qué consisten las nuevas funcionalidades. ¡Empezamos!
<br>
<br>

## Actualizaciones de taxonomía de Clean Code 

Sonar ha lanzado más actualizaciones para la **taxonomía de Clean Code**. Esta taxonomia es un framework que reúne la tecnología más moderna para hacer que tu código sea lo mejor posible. 
Veamos a continuación las actualizaciones correspondientes a este apartado:
<br>
<br>

### Simplificación del atributo de Clean Code en las Pull Requests para todas las plataformas CI Platforms 

Para indicar que tu código puede que no esté limpio, en *PR In-product Summary* y *PR Decoration* se indicará únicamente la condición *issues* para la taxonomía Clean Code, que sustituye a *reliability*, *security*, and *maintainability*.

Este cambio se ve reflejado en **todas las plataformas CI**: GitHub, GitLab, Bitbucket, and Azure DevOps. 

Developer Edition | Enterprise Edition | Data Center Edition

### Las issues externas ya se clasifican con la taxonomía de Clean Code 

Las *issues* externas que sean importadas a través de la API se clasificaran con la taxonomía de Clean Code.

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Las actualizaciones de las reglas de taxonomía de Clean Code se aplican a todos los proyectos y a todas las issues

La nueva taxonomía de Clean Code y las correspondientes actualizaciones de las reglas publicadas se aplican automáticamente a **todos los problemas en todos los proyectos**, tanto para analizar el código antiguo y como el nuevo.

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Excluir una regla heredada de un perfil de un Quality Profile

Ahora tienes la opción de **excluir reglas** que no quieras de un *Quality Profile* heredado. 

Recordemos que, antes de esta actualización, tenías que usar todas las reglas del *Quality Profile* heredado en SonarQube. Por lo que, si una o varias reglas heredadas no eran relevantes para tu proyecto, la única solución era **copiar el *Quality Profile* principal y eliminar las reglas** que no eran necesarias. De esta forma, se perdían todos los beneficios de un perfil heredado. 

Recuerda que para poder utilizar esta nueva funcionalidad, tienes que habilitar la opción de *Enable desactivation of inherited rules* en el área de Administración. 


Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

## Mejoras Clean as You Code 

Ya sabes que con la **metodología Clean as You Code** todo el código recién desarrollado está limpio y carece de cualquier problema. A continuación, desglosamos las mejoras de esta área

### Nuevo criterio para Sonar way Quality Gate

The *Sonar way Quality Gate* ya no muestra de forma individual las categorías de *bugs, vulnerabilities*, and *code smells*. La nueva categoría individual que muestra es la de *issues*.

<img width="100%" src="img/posts/quality-gate-sonar-way-legacy.png" alt="Quality Gate Sonar Way">

Recuerda también que el nuevo *Sonar way Quality Gate* y el *Sonar way Legacy* Quality Gate, pueden configurarse como predeterminados. 

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Abre una issue en tu IDE

Cuando estés conectado con [SonarLint](/sonarlint.html) podrás abrir una *issue* desde SonarQube directamente en tu IDE.

Todas las *issues* que muestra SonarQube tendrán un botón que, al hacer clic, abrirá SonarLint en tu IDE y te mostrará el **código que está causando el problema**. Te dejamos a continuación esta imagen para que lo veas: 

<img width="100%" src="img/posts/abrir-issue-IDE.png" alt="Abrir issue en IDE">

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Resuelve issues externas en SonarQube

Ahora puede resolver *issues* externas dentro de SonarQube en el mismo lugar donde aparecen las *issues* planteados por SonarQube. 

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

## Mejoras en las funciones de SonarQube

### Detección de secretos

El **nuevo motor de detección de secretos** de Sonar te ayuda a mantenerlos fuera de tu código mientras desarrollas en tu IDE con SonarLint.

A diferencia de otras herramientas que solo escanean tu repositorio, SonarQube **elimina los secretos en un enfoque de shift left en la fuente**, protegiendo tu canalización de CI/ CD. 
Sonar detecta el top 100 patrones comunes que contienen los secretos más sensibles/tokens.

Además, las empresas que quieran protegerse contra fugas de secretos exclusivos de su organización, en la edición **Enterprise Edition y Data Center Edition**, podrán crear sus propias reglas personalizadas.

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Evalúe el riesgo en relación con el informe 2023 CWE Top 25 

La página de informes de seguridad de SonarQube ahora contiene los datos del **informe 2023 CWE Top 25**. 

<img width="100%" src="img/posts/report-cwe-top-25-2023.png" alt="Abrir issue en IDE">

Enterprise Edition | Data Center Edition

### Sincronización de informes entre GitLab y SonarQube

Con esta actualización, los **cambios de estado de las *issues* en el informe de vulnerabilidad de GitLab** se replican automáticamente a la *issues* correspondiente en SonarQube en el análisis posterior, eliminando cualquier discrepancia entre los dos sistemas.

Esta funcionalidad completa una **sincronización automática bidireccional** de las *issues* de problemas entre Sonar y el informe de vulnerabilidad de GitLab.

Developer Edition | Enterprise Edition | Data Center Edition

### Soporte mejorado para Dockerfiles

Sonar te ayuda a **crear Dockerfiles** claros y consistentes mediante la ampliación de la cobertura de las reglas de Dockerfiles. 

El soporte para Dockerfiles ahora incluye más seguridad y otros atributos de Clean Code gracias a las **20 nuevas reglas añadidas**. 

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Principales solicitudes de problemas de seguridad

A continuación, indicamos las **principales solicitudes de mejora** de la seguridad que se incluyen en la versión de SonarQube 10.3.

1. El seguimiento de alias se mejora durante la ramificación para evitar la pérdida de un alias. <br>
2. El análisis de contenido de código PHP se mejora mediante el soporte de variables globales.<br>
3. Todos los operadores de comparación en Java, JavaScript, Python y C# se consideran validados.<br>

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Nuevas bibliotecas de ciencia de datos soportadas en Python

Sonar ya ofrece soporte para **Jupyter Notebooks en VS Code** y nuevas reglas para soportar las bibliotecas **NumPy y Pandas Python**. 

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

## Easy Onboarding 

### Provisión de proyectos GitHub con facilidad y flexibilidad 

Ahora el usuario podrá **crear y configurar automáticamente** un proyecto de SonarQube cuando un análisis se activa desde GitHub, incluyendo el **autocompletado de PR Decoration** y del nombre de la rama principal. Además, también se puede automatizar la configuración del proyecto SonarQube a través de la API.

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### Sincronizar equipos entre GitHub y SonarQube

Para las empresas con permisos de proyectos complejos, podrán configurar SonarQube para **sobrescribir la asignación de permisos predeterminada** y sincronizar automáticamente los usuarios, permisos y grupos de GitHub. 

Developer Edition | Enterprise Edition | Data Center Edition

### Soporte para Blazor Framework

Sonar ha añadido soporte para el **Blazor front-end web framework** para la el desarrollo de aplicaciones front-end y C# para aplicaciones back-end en proyectos .NET.

Al aprovechar **.NET, C#, HTML, plantillas de Razor y SonarQube** de forma conjunta se pueden construir aplicaciones web que contengan código limpio. 

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

## Mejoras operacionales de SonarQube 10.3

### Mensajes informativos

Después de actualizar a la nueva versión y con las nuevas reglas, es posible que existan cambios en los resultados de los análisis. Para ayudarte a entenderlos, los detalles de cada cambio **aparecerán en la secuencia de actividades** para explicar lo que ha pasado como resultado de la actualización.

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition

### UI Actualizaciones  

Con respecto a la **interfaz de usuario** se han actualizado las siguientes áreas:
1. Página de *Quality Gate*. 
2. Página de reglas. 
3. Página de perfiles de calidad. 
4. La configuración modal de la plataforma DevOps será visible durante el proyecto onboarding.

Community Edition | Developer Edition | Enterprise Edition | Data Center Edition


## Actualizaciones de idioma


### JavaScript/TypeScript

1. Soporte de primera clase de React con más de 60 reglas, incluyendo:<br>
 * Prevenir malas prácticas comunes (17 nuevas reglas).<br>
 * Identificar API obsoletas (5 nuevas reglas).<br>
 * Mejorar la accesibilidad (20 nuevas normas).<br>
 * Diagnóstico mejorado de problemas de memoria.<br>
<br>

### Java/Kotlin

- Soporte de Maven 4.0. <br>
- Actualización de todos los analizadores de linters externos para obtener sus últimas reglas.<br>
- Añadido soporte para espacio de nombres de Jakarta.<br>
- Añadidas las trampas más comunes de Spring Boot.<br>
<br>

### C/C++

- Adición de nuevas reglas MISRA C++ 2023<br>
<br>

### NET

- Soporte de LTS . NET 8 y C#12<br>
- Agregado el soporte para código C# en plantillas .NET con sintaxis Razor, que se puede usar en aplicaciones ASP .NET y Blazor<br>
<br>

### Python

- Compatibilidad con la nueva sintaxis de Python 3.12, nuevas reglas y análisis sin errores.<br>
- Adición de reglas para las mejores bibliotecas utilizadas por Data Scientists: <br>
- NumPy.<br>
- Pandas.<br>
<br>

Este artículo está realizado a partir de una traducción y resumen del [original](https://www.sonarsource.com/products/sonarqube/whats-new/sonarqube-10-3/) publicado por Sonar. 