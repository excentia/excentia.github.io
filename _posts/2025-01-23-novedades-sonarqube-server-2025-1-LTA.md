---
layout: post
title: 'Novedades de SonarQube Server 2025.1 LTA'
description: Menores tiempos de escaneo, innovaciones de seguridad, mejoras en el soporte de varios idiomas... ¡Te contamos todas las mejoras de esta LTA!
date: '2025-01-23T08:00:00Z'
author: Belén Casanovas
categories:

- sonar
- sonarqube server
- LTA

cover: img/posts/2025-01-23-novedades-sonarqube-server-2025-1-LTA.png

---

<img width="100%" src="img/posts/2025-01-23-novedades-sonarqube-server-2025-1-LTA.png" alt="Novedades SonarQube Server 2025.1">


¡La **última versión de SonarQube Server** ya está aquí! Y además, estrenando nombre. Hace unas semanas te contamos en nuestro blog el cambio en las nomenclaturas ([aquí tienes el artículo](/nueva-nomenclatura-versiones-sonarqube) donde están explicados estos cambios) y ahora las nuevas versiones se llaman SonarQube Server Relase 1 LTA, aunque de forma abreviada se dirá **SonarQube Server 2025.1 LTA**. Además, las LTA (Long-term Active) son las versiones que antes conocías como LTS. 

Como **partners exclusivos en España de Sonar**, en este artículo te vamos a contar en qué consisten estas novedades. ¡Empezamos!

<br>
<h2> Mejoras de la IA de SonarQube </h2>

- SonarQube detecta el **código generado por IA** de GitHub Copilot de forma automática. <br>

- El usuario podrá **visualizar fácilmente** los proyectos con código IA y los que están protegidos por AI Code Assurance y el estado de calidad en tiempo real. <br> 

- Compara **cómo se protegen los proyectos con AI Code Assurance** frente a otros proyectos en un portfolio. <br>

- AI Code Assurance **incluye una configruación masiva** a través de la API para múltiples proyectos. <br>


<br>
<h2>Mejoras de IA de alto impacto </h2> 


**Código generado por la IA de calidad y seguro**: En esta nueva versión, SonarQube Server puede autodetectar código creado por GitHub - Copilot dentro de proyectos de GitHub. SonarQube Server proporciona evaluaciones de calidad en tiempo real y etiquetas de aprobación o rechazo para proyectos con código generado por IA.<br>


**Acelera la resolución de problemas con AI CodeFix**: Con esta nueva funcion tendrás soluciones para los problemas detectados por SonarQube Server con solo un clic, aumentando la productividad de los desarrolladores al automatizar resoluciones comunes. Abre rápidamente las sugerencias de AI CodeFix y aplícalas directamente en IntelliJ, VS Code, Visual Studio y Eclipse.

**Construye aplicaciones seguras de alta calidad con IA**: SonarQube Server proporciona reglas únicas para detectar problemas en las principales bibliotecas de Python: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, e incluso en código incrustado en Jupyter Notebooks. Protege tus aplicaciones IA/ML de errores comunes en el código y asegúrate de que están listas para producción.

<br>
<h2>Innovaciones de seguridad en SonarQube </h2>

**Detección avanzada de secretos**: La detección de secretos de Sonar permite proteger tu código con más de 120 reglas que cubren más de 160 patrones de secretos y más de 110 servicios en la nube, tanto públicos como privados. Detecta secretos en tu IDE y evita que lleguen a tu repositorio. Las Ediciones Enterprise y Data Center te permiten configurar reglas personalizadas para proteger los secretos específicos de tu empresa.

**Nuevos informes de seguridad**: Nuevos informes para los estándares CWE Top 25 2022 y 2023, STIG y los informes de riesgos de seguridad CASA que te ayudan a evaluar tu base de código contra vulnerabilidades comunes.

**Análisis Deeper SAST mejorado para Java, Spring y Dockerfiles**: El Deeper SAST de Sonar ahora cubre más de 2.000 bibliotecas públicas de Java, lo que aumenta significativamente su capacidad para encontrar vulnerabilidades ocultas. Con las nuevas actualizaciones en nuestro motor de análisis de seguridad de Java, tienes una tasa de verdaderos positivos del ~90% en las principales evaluaciones. La incorporación de más de 200 reglas de seguridad para Sring Framework lo mueven a la categoría de cobertura completa. Finalmente, se añade soporte para más de 40 reglas de mejores prácticas para eliminar malas configuraciones de seguridad en Dockerfiles para despliegues Docker seguros.

**Sincroniza problemas de seguridad con tu IDE y GitLab**: SonarQube for IDE ahora sincroniza el estado de los hotspots de seguridad con SonarQube Server en tiempo real (solo para VSCode e IntelliJ). Los cambios de estado de los problemas realizados en el IDE se reflejan al instante en SonarQube Server.

<br>
<h2>Impulsa la productividad de los desarrolladores</h2>

**Análisis más rápido y mejoras en los tiempos de escaneado**: Los tiempos de escaneado y el uso del ancho de banda se han reducido significativamente porque el escáner ahora solo descarga los analizadores específicos requeridos para el proyecto, según los archivos y lenguajes del mismo.

**Modos de operación duales**: Ahora puedes ejecutar SonarQube Server en uno de dos modos de operación. En el modo Standard Experience conservarás las cualidades y severidades de reglas y problemas familiares para los usuarios de LTA 9.9 y anteriores. El en modo Multi Quality Rule (MQR) tienes múltiples cualidades por isues y reglas. El MQR introduce una nueva taxonomía centrada en escribir mejor código, previniendo los resultados de software mal desarrollado, incluidas nuevas cualidades de software, niveles de severidad y severidades independientes por calidad. También puedes priorizar reglas para hacer cumplir los estándares de código de la empresa y evitar desarrollos que no cumplan con tus estándares.

**Mejor experiencia de usuario para desarrolladores**: Sonar ha diseñado una nueva interfaz de usuario para mejorar la productividad de los desarrolladores y reducir la fatiga de los mismos, ofreciendo una mejor experiencia. Puedes abrir las issues directamente en tu IDE con un solo clic, eliminando el tiempo que lleva encontrarlas en tu código. También han mejorado la guía Clean as You Code (CaYC) y la experiencia de los Quality Gates, mostrando, por ejemplo, la cantidad de problemas encontrados y aceptados en el nuevo código. 

<br>
<h2>Excelencia empresarial y operativa </h2>

**Eleva la seguridad de tu servidor**: SonarQube Server optimiza la gestión de usuarios y grupos con soporte SCIM para SAML/Azure AD y SAML/Okta en las Ediciones Enterprise y Data Center. El aprovisionamiento y sincronización automáticos con GitHub y GitLab elimina la gestión manual de usuarios/grupos y asegura permisos consistentes en todos los entornos. Ahora podrás crear roles personalizados y asignación de permisos que sobrescriban los valores predeterminados para adaptarse a las necesidades de tu empresa. 

SonarQube Server ahora admite su ejecución en entornos con FIPS activados, autenticación moderna con Microsoft SMTP Server, y aplica políticas de contraseñas más estrictas para cuentas locales, mejorando la seguridad y el cumplimiento general.

**Actualizaciones predecibles y más fáciles**: Las actualizaciones de SonarQube Server ahora son más rápidas y predecibles, con tiempo de inactividad mínimo y sin interrupciones en tu flujo de trabajo. Sonar ha optimizado el proceso de reindexación, añade estimaciones de tiempo de actualización y proporciona registros detallados de actividad para rastrear los cambios. Además, un nuevo archivo de registro te ayudará a identificar las API web y parámetros obsoletos para actualizaciones más suaves.

**Simplificación de la incorporación de proyectos**: AutoConfig para C y C++ elimina la necesidad de Build Wrapper y Compilation Database, admitiendo la mayoría de los compiladores desde el inicio.

**Potenciando implementaciones en Kubernetes**: Ahora disfrutarás de la autoscalabilidad horizontal de los pods de la aplicación para un análisis más rápido y un uso optimizado de los recursos. Además, ahora SonarQube Server soporta, oficialmente, implementaciones en Red Hat OpenShift.

<br>
<h2>Soporte de lenguajes extenso</h2>

Y como en cada actualización, desglosamos aquí las mejoras relacionadas con los lenguajes. 

**Python**: Python 3.12, Django Web Framework, FastAPI Web Framework, Graphene-Python Library. 

**Java/Maven**: Java 20, Java 21 LTS, Maven 4.0.

**JavaScript/TypeScript**: TypeScript 5, React Library.

**C/C++**: C++23, MISRA C++ 2023.

**C#/.NET**: LTS .NET 8, C#12, Blazor Framework.

**Others**: Kotlin multi-platform projects (KMP) for cross-platform code development. Accessibility rules for HTML.

**New languajes**: Dart/Flutter, Helm Charts, Azure Resource Manager (ARM) IaC, Ansible IaC, Job Control Language (JCL).

¡Y hasta aquí este artículo! Esta es una traducción la [nota que ha publicado Sonar](https://www.sonarsource.com/products/sonarqube/whats-new/sonarqube-server-2025-1-lta-whats-new/). Recuerda que si tienes dudas, puedes ponerte en [contacto](/contacto){:target="_blank"} con nuestro equipo y preguntarnos lo que necesites. 