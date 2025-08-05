---
layout: post
title: 'SonarQube Server 2025 v4.1 novedades en seguridad, rendimiento y cumplimiento'
description: Explora las mejoras de SonarQube Server 4.1 SAST para Go, análisis avanzado, informes normativos y detección continua de vulnerabilidades.
date: '2025-08-02T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: img/posts/2025-08-02-sonarqube-server-2025-release-4.png

---

SonarQube Server 2025 versión 4.1 ya está disponible y trae consigo **actualizaciones de seguridad y rendimiento**. Con nuevas capacidades como SAST para Go, análisis de flujo de datos para VB.NET y JS/TS, detección de secretos líder en el sector e informes normativos mejorados, esta versión refuerza la calidad del software y acelera la entrega en entornos empresariales exigentes.

Si trabajas en DevSecOps, lideras un equipo de desarrollo o buscas cumplir estándares de seguridad y auditoría, esta guía te resume las principales novedades y cómo aprovecharlas para mantener tu código seguro y optimizado.

- SAST para Go y VB.NET: detección avanzada de vulnerabilidades en tiempo real. <br>

- Detección de secretos mejorada: soporte para 248 servicios cloud y archivos YAML/JSON. <br>

- Informes normativos personalizables en PDF/CSV: con soporte OWASP, PCI, CWE, STIG. <br>

- Mayor cobertura y reglas MISRA C++:2023: cumplimiento acelerado en IDEs. <br>

- Análisis más rápido de C/C++: reducción del 33% en tiempos de análisis de pull request. <br>

- Compatibilidad con Java 23 y Java 24 y Dart 3.8: soporte para nuevas características del lenguaje. <br>

<h2>Seguridad reforzada en el núcleo</h2>

**SAST para Go**
<br>

Se incorpora el **Static Application Security Testing (SAST)** con análisis de flujo de datos (taint analysis) para **proyectos en Go**. Esta funcionalidad permite detectar automáticamente vulnerabilidades críticas directamente en el flujo de trabajo, reduciendo el esfuerzo manual y entregando aplicaciones más seguras.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

**Taint analysis para VB.NET**
<br>

Los proyectos en **VB.NET ahora cuentan con análisis de flujo de datos**, aprovechando la misma infraestructura utilizada en C#. De esta forma se detectan vulnerabilidades complejas en el flujo de datos, lo que garantiza una postura de seguridad coherente en todas las aplicaciones .NET. Al aprovechar la misma infraestructura SAST que ha demostrado su eficacia en C#, los desarrolladores pueden encontrar y corregir vulnerabilidades en el flujo de datos, como los ataques de inyección, directamente en tu flujo de trabajo de desarrollo.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

**Mejoras en JS/TS taint analysis**
<br>

El **motor de análisis para JavaScript y TypeScript** ha sido completamente renovado. Como nuevo motor exclusivo para JS/TS, mejora la precisión y la cobertura de las reglas de seguridad. Para los desarrolladores, esto se traduce en resultados de seguridad más precisos y prácticos con orientación directa, lo que les ayuda a detectar problemas sofisticados con mayor eficiencia y reduce el riesgo de fallos críticos en sus aplicaciones web.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

**Detección de secretos líder**
<br>

Con la capacidad de detectar más de **400 patrones secretos utilizando más de 340 reglas** y una cobertura de **248 servicios en la nube**, SonarQube detecta más secretos que cualquier otra herramienta. Esta versión mejora la detección de secretos en **Kotlin**, sin necesidad de configuración. Agiliza el cumplimiento de las normas de seguridad y ayuda a mantener la integridad del código base mediante la identificación y protección precisa de los datos confidenciales, lo que ahorra un tiempo considerable a los desarrolladores.

Además, SonarQube ahora **detecta secretos en archivos YAML y JSON**. Esto es crucial porque la información confidencial se almacena cada vez más en estos archivos de configuración (por ejemplo, para la configuración de aplicaciones, canalizaciones CI/CD e infraestructura como código), que a menudo pasan desapercibidos para otras herramientas de detección de secretos que se centran principalmente en el código fuente. Al escanear estos archivos en busca de cadenas codificadas no nulas, SonarQube ayuda a los desarrolladores a reducir el riesgo de violaciones de seguridad y de cumplimiento normativo.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

<h2>Cumplimiento normativo simplificado</h2>

**Mayor cobertura MISRA C++:2023**
<br>

Los desarrolladores de C++ ahora tienen acceso a las **reglas de MISRA C++:2023 directamente en sus IDEs** (VSCode, Visual Studio, CLion). Los equipos pueden detectar y resolver problemas relacionados con MISRA mucho antes, con comentarios inmediatos mientras se escribe el código. Esta integración directa agiliza los esfuerzos de cumplimiento, reduce la necesidad de reelaboraciones y garantiza que sus bases de código C++ cumplan con los estándares de seguridad desde el principio.
 
Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.


**Informes de seguridad y normativos más completos**
<br>

Los informes de seguridad a nivel de proyecto ahora permiten **exportar archivos PDF personalizables** que pueden **incluir o excluir información basada en normas de seguridad** específicas como PCI, OWASP, CWE, STIG y CASA. Esta funcionalidad mejora la visibilidad de los datos de seguridad y normativos, reduce la elaboración manual de informes y mejora la alineación con las normas de cumplimiento y auditoría. 

Además, Sonar ha mejorado los informes normativos. Tienen un mejor formato y el contenido, por lo que da lugar a informes más prácticos, fáciles de usar y completos, que agilizan el proceso de obtención de información sobre el estado del código para las revisiones de auditoría y cumplimiento mediante resúmenes PDF mejorados, una navegación más clara con hipervínculos y resultados completos en archivos CSV descargables.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.

<h2>Mejora en la calidad y rendimiento del código</h2>

**Mejoras para Python y Java**
<br>

Las **nuevas reglas de Python** para corrutinas y comprensiones están diseñadas para ayudar a los desarrolladores a escribir **código asíncrono de alta calidad** utilizando bibliotecas populares como asyncio y aiohttp. Identifican errores comunes como palabras clave await olvidadas, código bloqueante dentro de corrutinas y problemas con el manejo de estados y errores.

Para los **desarrolladores de Java** que se enfrentan a aplicaciones sensibles al rendimiento, SonarQube ofrece ahora nuevas reglas para identificar y resolver los cuellos de botella en el rendimiento. Esta iniciativa señala los posibles problemas, proporciona explicaciones claras e incluso ofrece soluciones rápidas automatizadas.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

**Análisis más rápido en C/C++**
<br>
Sonar ha mejorado significativamente la **velocidad de análisis de C y C++** con un nuevo mecanismo de almacenamiento en caché de ejecución simbólica (SE) basado en funciones. Esta mejora está diseñada para reducir drásticamente los tiempos de reanálisis, especialmente para cambios menores en header files muy utilizados o unidades de compilación grandes. Además, Sonar también confirma que reduce en un 33% en el tiempo medio de análisis para las pull request de C/C++.

**Compatibilidad con Java 23 y Java 24 y Dart 3.8**
<br>
Esta versión incluye **compatibilidad de primer nivel con Dart 3.8**, lo que garantiza la compatibilidad sintáctica total y la aplicación adecuada de las reglas existentes y nuevas, lo que permite a los desarrolladores crear aplicaciones Flutter aprovechando el análisis automatizado. 

SonarQube Server también ofrece **compatibilidad con Java 23 y Java 24** con nuevas reglas, diseñadas específicamente para ayudar a los desarrolladores a utilizar correctamente las últimas características del lenguaje y garantizar que las reglas existentes funcionen según lo previsto. Además, se está implementando un análisis sin errores para Java 24, lo que permite analizar correctamente los archivos fuente de Java 24 y gestionar adecuadamente sus nuevas características, garantizando una información precisa sobre la calidad del código.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

**Mejoras para la detección de errores en Java**
<br>

Las reglas del analizador Java existentes se están sustituyendo por las reglas DBD más sofisticadas. Estas sustituciones proporcionan a los desarrolladores Java la potencia del motor de reglas interprocedimentales de DBD, lo que permite **detectar problemas más complejos** que se desarrollan a lo largo de múltiples llamadas a funciones y que suelen ser más difíciles de encontrar mediante simples revisiones de código. Una ventaja clave es la mejora de las ubicaciones secundarias y los reproductores, lo que agiliza la corrección de estos intrincados errores.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

**Control más granular con NOSONAR en Python**
<br>

Los desarrolladores de Python ahora tienen un control más detallado sobre las comprobaciones de calidad del código. Sonar **amplía la capacidad de NOSONAR** para que no solo se pueda omitir el análisis de una línea completa, sino también impedir que se utilicen reglas específicas para analizar una línea de código. Así se mejora el flujo de trabajo al reducir el ruido y garantizar que solo se destaquen los problemas relevantes, lo que da lugar a revisiones de código más centradas y eficaces. También se han introducido **nuevas reglas** para ayudar a los desarrolladores a realizar un seguimiento del uso correcto de estos comentarios de supresión.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.

<h2>Seguridad avanzada</h2>

**Detección continua de vulnerabilidades sin necesidad de volver a analizar el código**
<br>

El **análisis de composición de software (SCA)** incluido en [SonarQube Advanced Security](/aumenta-seguridad-codigo-sonarqube-advanced-security){:target="_blank"} detecta automáticamente nuevas vulnerabilidades en las dependencias del proyecto sin necesidad de volver a analizar todo el código base. Esta función **actualiza continuamente** los riesgos de las dependencias en las ramas permanentes cada vez que se descubren nuevas vulnerabilidades o cambian las existentes (por ejemplo, la puntuación CVSS), lo que da lugar a un nuevo cálculo de la gravedad y del estado Quality Gate. 

Como resultado, los **usuarios de SCA**, incluidos los administradores de proyectos y carteras, **recibirán automáticamente la información** más reciente sobre los riesgos de las dependencias sin necesidad de intervención manual ni análisis programados. Esto garantiza una visibilidad continua y actualizada de su postura de seguridad, lo que ahorra un tiempo valioso y permite responder de forma proactiva a las amenazas cambiantes dentro de sus componentes de terceros.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.

**Gravedad del riesgo personalizable para SCA**
<br>

El **análisis de composición de software (SCA)** de SonarQube permite a los usuarios personalizar la gravedad de los riesgos de dependencia identificados, lo que proporciona a los desarrolladores y al personal de seguridad la flexibilidad necesaria para ajustar el impacto de un riesgo de dependencia en la calidad del software. Esta funcionalidad permite priorizar los problemas en función de la implementación específica de la aplicación, el uso de bibliotecas vulnerables y el contexto del proyecto. La ventaja directa es que los desarrolladores y los equipos de seguridad pueden **centrar sus esfuerzos de corrección** en los riesgos de dependencia más críticos relevantes para su entorno específico, lo que conduce a mejoras de seguridad más eficientes y con mayor impacto alineando las prioridades de vulnerabilidad con el contexto real de la aplicación.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.

**Informes SCA legibles por máquina**
<br>

SonarQube incluye un **informe legible por máquina** sobre los riesgos de dependencia para proyectos, aplicaciones y carteras a través de una API, disponible en formatos JSON y CSV. Este informe completo incluye detalles cruciales como información sobre el proyecto y la cadena de dependencia, títulos de riesgos, ID de CVE/CWE, tipos de riesgos, gravedad, fechas de detección, estados e información sobre correcciones. 

Esta capacidad permite a los equipos de seguridad y a los responsables de ingeniería **integrar los datos de SCA** en sus herramientas de inteligencia empresarial, hojas de cálculo y otras integraciones existentes, lo que permite la generación de informes automatizados y personalizados sobre el estado de los riesgos de dependencia a lo largo del tiempo.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.

**Compatibilidad con dependencias PHP para SCA**
<br>

El equipo de Sonar está ampliando la **compatibilidad del SCA de SonarQube** a proyectos PHP que utilizan Packagist/Composer para la gestión de dependencias. Esta mejora permite a los desarrolladores PHP **identificar automáticamente vulnerabilidades** públicas, gestionar licencias y generar entradas en una lista de materiales de software (SBOM) para sus dependencias PHP. Al ser un lenguaje que depende en gran medida de paquetes de código abierto, esta nueva compatibilidad integral con SCA proporciona a los desarrolladores de PHP una mayor confianza en la seguridad de sus proyectos, lo que se traduce en aplicaciones PHP más seguras y conformes con las normas.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.

**Riesgos de dependencia SCA en el IDE**
<br>

Los resultados del análisis SCA **serán visibles para los desarrolladores directamente en su IDE** para Visual Studio, IntelliJ y VSCode (previsto para agosto). Esta integración agiliza el flujo de trabajo al permitir a los desarrolladores gestionar las dependencias y resolver problemas sin salir de su IDE, lo que en última instancia ahorra tiempo y mejora la seguridad y la productividad generales del código.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.

Por último te dejamos el artículo original del anuncio de la [web de Sonar](https://www.sonarsource.com/products/sonarqube/whats-new/2025-4/){:target="_blank"}.

¿Quieres saber cómo actualizar a la versión 4.1 o necesitas asesoría para implementar Advanced Security en tu empresa? Contacta con nuestro equipo de expertos en SonarQube y lleva la calidad de tu software al siguiente nivel a través del [siguiente enlace](/contacto){:target="_blank"}. 