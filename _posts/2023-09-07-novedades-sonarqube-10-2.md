---
layout: post
title: 'SonarQube 10.2: Novedades de la nueva versión'
description: Más seguridad, nuevas reglas... Conoce en este artículo todas las novedades de la versión SonarQube 10.2.

date: '2023-09-07T08:00:00Z'
author: Belén Casanovas
categories:

- productos
- sonar
- sonarqube
- release


cover: /img/posts/2023-09-07-novedades-sonarqube-10-2.png

---

<img width="90%" src="img/posts/2023-09-07-novedades-sonarqube-10-2.png" alt="Novedades SonarQube 10.2">

Sonar lanza la **versión 10.2 de SonarQube**. Más seguridad, nuevas reglas y la actualización de su interfaz, son algunas de las mejoras que encontraremos en esta versión. Desde **excentia** como partners exclusivos de Sonar en España y Lationamérica te contamos todas novedades en este artículo. 


<h2>Nuevas reglas MISRA C++</h2>

Aumenta la seguridad de tus proyectos C++ de misión crítica con las nuevas reglas MISRA C++ 2023 de SonarQube. Esta actualización incluye **43 reglas alineadas con los estándares de seguridad** de la industria de MISRA, todas integradas en el perfil de calidad de "misión crítica".  
<br>

<h2>Análisis de seguridad integrado con GitLab</h2>

Los problemas de seguridad ahora **serán visibles, de forma nativa, en tu panel de GitLab**. Cuando tu instancia de SonarQube esté configurada con GitLab, los problemas de vulnerabilidad se sincronizan automáticamente desde SonarQube a GitLab. Simplemente tienes que navegar hasta **"GitLab > Informe de vulnerabilidad"** para ver los resultados posteriores al análisis de SonarQube. Para los usuarios de la Community Edition, los problemas de vulnerabilidad se **muestran para la rama principal**, mientras que las ediciones Developer+ extienden esta función a todas las ramas.  
<br>
<br>

<h2>Detección mejorada de secretos en la nube</h2>

Ahora SonarQube es capaz de identificar secretos en **29 servicios en la nube** y detecta una gama completa de más de **60 secretos y tokens**. Tanto para los equipos de seguridad como para los desarrolladores, esta capacidad ampliada fortalecerá su código base contra posibles vulnerabilidades.
<br>
<br>

<h2>Identifica errores en las plantillas de ARM</h2>

Nuevas reglas de Sonar para **identificar configuraciones erróneas de seguridad** en las plantillas de Azure Resource Manager (ARM), creadas a través de Microsoft Bicep. Esta nueva funcionalidad detecta estos problemas directamente en las plantillas ARM. Esta característica ofrece una capa adicional de seguridad, lo que hace que tus instalaciones de Azure sean más resistentes a las vulnerabilidades.  
<br>
<br>

<h2>Soporte avanzado para matrices PHP</h2>

Soporte mejorado de SonarSecurity para matrices súper globales de PHP. Esta actualización **aumenta la precisión del análisis PHP**, reduciendo los falsos negativos. Para los desarrolladores, podrán realizar evaluaciones de código más precisas y, los equipos de seguridad, tendrán una capa adicional de confianza en la integridad de la seguridad del código. 
<br>
<br>

<h2>Sincronización de permisos desde GitHub</h2>

Elimina configuraciones complicadas o automatizaciones personalizadas para alinear tus proyectos de SonarQube con los permisos de tu repositorio de GitHub. Con esta función, los administradores pueden **mantener los niveles de acceso en ambas plataformas**, simplificando el proceso de gestión de permisos de proyectos en SonarQube.
<br>
<br>

<h2>Minimiza las interrupciones</h2>

Garantiza que los desarrolladores y administradores tienen **acceso a los proyectos y a los resultados de análisis** tan pronto como la interfaz de usuario de SonarQube esté disponible después de la actualización o la recuperación ante desastres. Al optimizar el proceso de reindexación, esta característica **elimina las interrupciones del flujo de trabajo** y reduce el tiempo de inactividad, lo que permite que sus tareas administrativas y de desarrollo continúen sin problemas.
<br>
<br>

<h2>Designación flexible de la rama principal</h2>

Cambiar la rama principal del proyecto ahora será más fácil para los que utilizan la Developer Edition o superior. Los administradores podrán **cambiar sin esfuerzo el enfoque del proyecto** designando una rama existente diferente como la principal, sin perder ninguno de los datos históricos adjuntos. 
<br>
<br>

<h2>Reglas para aprender</h2>

Encontrarás reglas mejoradas para **comprender por qué el problema es importante** (la pestaña "¿Por qué es un problema?") y cómo solucionarlo ("¿Cómo lo soluciono?"). También puedes aumentar tus conocimientos a través de una variedad de **publicaciones en el blog, documentación de estándares y principios de codificación** (disponibles en la pestaña "más información").
<br>
<br>

<h2>Mejoras en la sincronización de SonarLint y SonarQube</h2>

Ahora, antes de que SonarQube complete su análisis, podrás **silenciar los problemas** directamente desde tu entorno de VS Code a través de [SonarLint](https://www.excentia.es/sonarlint). Como desarrollador, este te permitirá clasificar un problema como "No se solucionará" o "Falso positivo". Por lo tanto, se agiliza el proceso de revisión al evitar que estos problemas etiquetados vuelvan a aparecer en el IDE y se marquen para el equipo una vez finalizado el análisis de SonarQube. 
<br>
<br>

<h2>Integración de la nueva taxonomía de Clean Code</h2>

Las páginas de "Problemas y Reglas" ahora incluyen una integración de la nueva taxonomía de Clean Code. Esta actualización tiene como objetivo **proporcionar información detallada sobre tu código**, facilitando mejoras tanto a nivel individual como de equipo. 

Como desarrollador, encontraras **cada problema clasificado** no solo por su gravedad (ahora representada como Baja, Media o Alta según las cualidades del software), sino también por los atributos de Clean Code.
<br>
<br>

<h2>Integración de la nueva taxonomía de Clean Code</h2>

Mejora la experiencia SonarQube con las actualizaciones de UI y UX en project, project onboarding y espacios de apps. Al adoptar el sistema de diseño característico de Sonar y una **identidad visual renovada**, estas actualizaciones brindan una experiencia unificada y moderna que se alinea perfectamente con SonarCloud.
<br>
<br>

<h2>Actualizaciones por idioma</h2>
<br>

**Python**

• Análisis incremental más rápido para Python.

• Genera stubs para bibliotecas Python escritas conocidas disponibles en PyPI.

• Nuevas reglas de Core Python.
<br>
<br>

**Java/Kotlin**

• Compatibilidad con Gradle Kotlin DSL + 7.
<br>
<br>

**PHP**

• Análisis incremental más rápido para PHP.
<br>
<br>

**IaC**

• Soporte mejorado de Azure Resource Manager (ARM).

• Detecta errores de configuración de seguridad en Microsoft Bicep.
<br>
<br>

**.NET**

• 9 nuevas reglas para DateTime.

• Casi todos los desarrolladores utilizan fechas y horas en sus aplicaciones y su mal uso es uno de los errores más comunes, especialmente cuando se trata de zonas horarias.
<br>
<br> 

**AcuCOBOL**

• Soporte mejorado para AcuCOBOL.

• Mejoras en el analizador y el preprocesador.
<br>
<br>

¡Siguenos para ser el primero en conocer todas las novedades de Sonar!

Este artículo es una traducción del [original](https://www.sonarsource.com/products/sonarqube/whats-new/sonarqube-10-2/) publicado por Sonar. 