---
layout: post
title: 'Novedades de SonarQube Server 2025 Release 5'
description: Mayor seguridad, velocidad y control en CI/CD para proteger tu código y optimizar la calidad del software.
date: '2025-09-24T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-09-24-sonarqube-server-2025-release-5.png

---

La nueva versión de **SonarQube Server 2025 Release 5** incluye nuevas funciones y mejoras importantes diseñadas para ofrecer código de calidad y seguridad con mayor velocidad y confianza. Este lanzamiento se centra en ampliar la cobertura de seguridad, mejorar la experiencia del desarrollador y del administrador, y optimizar el rendimiento.

<h2>Mejora la seguridad y la defensa de la cadena de suministro</h2>

**Detecta configuraciones de seguridad incorrectas y vulnerabilidades en GitHub Actions**

En la actualidad, prevenir ataques en la cadena de suministro es fundamental. SonarQube ayuda a fortalecer la seguridad de tus **canalizaciones de CI/CD** al proteger las GitHub Actions, un objetivo común para los atacantes. 

Esta versión **amplía las Pruebas de Seguridad de Aplicaciones Estáticas (SAST)** para identificar específicamente errores de configuración y vulnerabilidades de seguridad en los flujos de trabajo de GitHub Actions. SonarQube detecta problemas en áreas críticas, como las Pull Request en contextos privilegiados, la gestión incorrecta de secretos, las inyecciones de scripts y el uso de acciones externas sin referencias de confirmación (commit).

Beneficios:

- **Para desarrolladores de GitHub**: Escribe acciones de GitHub más seguras, reduciendo las posibilidades de ataque y las vulnerabilidades de la cadena de suministro.

- **Para equipos de seguridad y cumplimiento**: Aplica automáticamente políticas de configuración de seguridad críticas para GitHub Actions, garantizando estándares de seguridad consistentes en todos los proyectos, sin supervisión manual.

- **Para mi organización**: Mejora significativamente la seguridad general de la cadena de suministro de software, minimizando el riesgo de infracciones, robo de propiedad intelectual y daño a la reputación por canales de CI/CD comprometidos.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>


**Seguridad mejorada para JavaScript y TypeScript**

En esta versión, utilizarás el **motor de taint analysis de última generación para JavaScript y TypeScript**. Este nuevo motor ofrece mejoras significativas en precisión y velocidad en taint analysis. Esto significa que todos los proyectos JS/TS, nuevos y existentes, se adaptarán a las capacidades más avanzadas, mientras que el motor heredado para el taint analysis JS/TS se elimina.

Beneficios:

- **Para desarrolladores de JavaScript y TypeScript**: Obtén comentarios más precisos y rápidos sobre vulnerabilidades de seguridad directamente dentro del flujo de trabajo.

- **Para equipos de seguridad**: Mayor confianza en la seguridad con un motor de taint analysis más sólido y extensible.

- **Para gerentes de ingeniería y equipos de DevSecOps**: Garantiza un análisis de seguridad de alta calidad en los proyectos JS/TS en SonarQube y SonarQube Cloud.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.


**Mejora la seguridad de las aplicaciones front-end para .NET WPF**

SonarQube Server es oficialmente **compatible con Windows Presentation Foundation Framework (WPF) .NET.** Identifica vulnerabilidades de inyección que se originan en puntos de entrada específicos de WPF, como controles de interfaz de usuario (TextBox, PasswordBox), enlaces de datos y parámetros de comando.

Beneficios:

- **Para desarrolladores**: Crea aplicaciones WPF más seguras detectando vulnerabilidades rápidamente. El análisis ahora rastrea la entrada del usuario desde fuentes WPF hasta receptores sensibles, como consultas a bases de datos u operaciones con archivos, lo que previene ataques de inyección comunes.

- **Para líderes técnicos**: Protege tus aplicaciones de escritorio, reduce el riesgo organizacional y disminuye el coste al detectar y corregir fallos antes de que lleguen a producción.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>


<h2>Eficiencia y productividad para el desarrollador</h2>

**Actualizaciones sin interrupciones con una visión clara de lo que está cambiando**

Di adiós a los **fallos inesperados de Quality Gate** tras actualizar SonarQube Server. Esta innovadora función proporciona visibilidad proactiva del impacto de la actualización a la última versión en tus proyectos y ofrece un colchón para evitar que **nuevos problemas interrumpan los procesos de CI/CD**. Ahora los nuevos problemas detectados tras una actualización se pueden guardar en un 'sandbox', visible para ti pero excluido de los cálculos de Quality Gate. Ahora puedes realizar actualizaciones sin interrumpir a tus equipos.

Beneficios:

- **Para desarrolladores y líderes técnicos**: Informate sobre los nuevos problemas antes de que superen la prueba de calidad. Así comprenderás el impacto, priorizar las soluciones y abordarlas cuando te resulte conveniente.

- **Para administradores de servidores SonarQube**: Comprende los cambios en los problemas y el impacto que pueden tener en los proyectos, lo que permite administrar y comunicar actualizaciones de forma eficaz a los desarrolladores, reduciendo las solicitudes de soporte y los gastos generales operativos.

- **Para la empresa**: Permite la adopción fluida de las últimas versiones de SonarQube Server y mejoras continuas sin interrumpir ni los procesos de CI/CD ni los flujos de trabajo. Esto se traduce en una mayor productividad como desarrollador, mayor confianza y una mayor calidad y seguridad del software.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>


**Encuentra problemas en las funciones de Python sin servidor de AWS Lambda**

SonarQube Server ahora incluye **reglas de calidad de código y mantenibilidad para desarrolladores de Python** que crean aplicaciones sin servidor en AWS Lambda. Aborda directamente las ineficiencias y las mejores prácticas para funciones sin servidor, solucionando problemas como el aumento de arranques en frío, patrones ineficientes, tiempos de ejecución excesivos y optimizando la gestión de dependencias. Las **funciones Lambda** contribuyen significativamente a la alta latencia y a las ineficiencias operativas. 

Beneficios:

- **Para desarrolladores de Python**: Evita errores comunes y escribo funciones AWS Lambda más eficientes y fiables, lo que genera una ejecución más rápida, una menor latencia de la aplicación, una mejor escalabilidad y un mantenimiento más sencillo.

- **Para arquitectos de la nube**: Aplica las mejores prácticas de codificación en aplicaciones sin servidor, garantizando funciones Lambda escalables y mantenibles que puedes gestionar de manera eficaz.

- **Para equipos de DevOps y SRE**: Obtén información crítica para monitorizar y garantizar el rendimiento y la capacidad de mantenimiento óptimos de tus funciones sin servidor, evitando problemas costosos.

- **Para la empresa**: Ahorra costes al reducir el uso excesivo de memoria y los largos tiempos de ejecución en AWS, al mismo tiempo que aumenta la solidez de las aplicaciones nativas de la nube.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>


**Rendimiento mejorado del análisis de Python**

Mejora significativa del **análisis de proyectos Python** al habilitar la paralelización por defecto. El analizador de Python utilizará hasta el 90% de los núcleos de CPU disponibles (hasta 6) para analizar los archivos Python simultáneamente, lo que reduce drásticamente el tiempo de análisis. Puedes personalizar el número de trabajos paralelos configurando esta propiedad <code>sonar.python.analysis.threads</code>. Para cuando necesites profundizar en un análisis, simplemente puedes deshabilitar el procesamiento paralelo con esta propiedad <code>sonar.python.analysis.parallel</code>.

Beneficios:

- **Para desarrolladors y DevSecOps**: Obtén resultados de análisis para código Python más rápido, acelerando los pipelines de CI/CD y acortando el ciclo de retroalimentación. Esta mejora funciona sin necesidad de realizar cambios de configuración.

- **Para líderes técnicos**: Los tiempos de escaneo más rápidos significan que dedican menos tiempo a esperar la retroalimentación del pipeline y más tiempo a ofrecer funciones innovadoras.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>

**Encuentra más problemas en el código Angular**

SonarQube ahora detecta más problemas, centrándose en los más comunes del **código Angular fuera de las plantillas**, lo que garantiza la detección temprana de problemas cruciales y el mantenimiento de la base de código de alta calidad. Optimiza tu flujo de trabajo, mejora la calidad del código y reduce los gastos de mantenimiento de toda la organización de ingeniería que utiliza Angular para crear interfaces web front-end.

Beneficios:

- **Para desarrolladores**: Identifica errores comunes en Angular y fomenta patrones modernos, como la implementación incorrecta de métodos de ciclo de vida, nombres incorrectos de entrada/salida de componentes, etc. SonarQube te ayuda a escribir código Angular de mayor calidad y con mayor fluidez, alineando tus proyectos con los últimos estándares recomendados por la comunidad.

- **Para DevSecOps, gerentes de ingeniería y equipos de ingeniería de plataforma**: Reduce la complejidad de la cadena de herramientas integrando directamente el análisis esencial de Angular. Esto elimina la necesidad de que mis equipos gestionen linters externos y crea un proceso de análisis más flexible y fácil de mantener.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>

<h2>Cumplimiento y gobernanza listos para la empresa</h2>

**Detectar más problemas para mantener el cumplimiento de MISRA C++:2023**

Esta versión amplía la compatibilidad con las **últimas directrices de codificación de MISRA C++:2023**, lo que aumenta el número de problemas detectados que cumplen con este estricto requisito. SonarQube proporciona detección temprana de problemas de cumplimiento y una clara visibilidad del estado del código, lo cual es crucial para industrias donde el cumplimiento de estas directrices es un requisito obligatorio para las bases de tu código.


Beneficios:

- **Para desarrolladores de C++ en industrias críticas para la seguridad**: Identifica y resuelve de manera fácil y automática los problemas relacionados con MISRA en las primeras etapas del ciclo de desarrollo, garantizando que mi código cumpla con los más altos estándares de seguridad y confiabilidad.

- **Para líderes y gerentes de desarrollo**: Obtén una visibilidad sin precedentes del estado de cumplimiento de mis bases de código C++ con respecto a MISRA C++:2023, lo que facilita una mejor toma de decisiones y gestión de riesgos.

- **Para la empresa**: Consigue y mantén el cumplimiento crítico de la industria (por ejemplo, en automoción y dispositivos médicos), evitando auditorías costosas, repercusiones legales y acelerando el tiempo de comercialización de sistemas críticos para la seguridad.

Actualización disponible para las siguientes ediciones: **Enterprise y Data Center Edition**.
<br>

**Controla la implementación del análisis de composición de software (SCA)**

Ahora te resultará más fácil adoptar las capacidades de Análisis de Composición de Software (SCA). Puedes habilitar el SCA tanto a nivel de instancia como de proyecto individual, lo que permite activarlo cuando esté listo, facilitando una implementación más estratégica y controlada.

Beneficios: 

**Para DevSecOps y liderazgo técnico**: Incorpora el SCA a tu propio ritmo. Puedes comenzar con un equipo piloto o un pequeño grupo de proyectos antes de implementarlo en toda la organización. Esto evita la sorpresa de habilitar SCA para todos los proyectos a la vez y reduce la carga de editar manualmente los pipelines de los proyectos que deseas excluir.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>

**Los anuncios globales guían a mis equipos hacia recursos útiles**

El **banner de anuncios** pasa a ser un simple mecanismo de notificación a una herramienta de comunicación eficaz y práctica. Ahora permite **insertar enlaces** en los mensajes de anuncio que aparecen en la parte superior de tu instancia, dirigiéndote a recursos importantes como documentación interna, programas de mantenimiento o páginas de políticas de la empresa.

Beneficios :

- **Para DevSecOps y líderes técnicos**: Proporciona acceso directo a información crítica, lo que mejora la adopción de políticas internas, aumenta la concienciación sobre el mantenimiento del sistema y reduce la sobrecarga de soporte.

- **Para desarrolladores**: En lugar de simplemente leer una notificación sobre una nueva política interna o un próximo periodo de inactividad, puedes hacer clic en un enlace para obtener el contexto completo al instante, ahorrando tiempo y reduciendo la fricción cuando se anuncian cambios importantes que afectan a mi trabajo.

Actualización disponible para las siguientes ediciones: **Developer, Enterprise y Data Center Edition**.
<br>

¡Y hasta aquí todas las novedades! Si quieres el anuncio oficial de Sonar puedes acceder a través de [este enlace](https://www.sonarsource.com/products/sonarqube/whats-new/2025-5/){:target="_blank"}. 

Recuerda, si necesitas asesoramiento sobre SonarQube, puedes ponerte en contacto con nuestor equipo a través del [siguiente formulario](/contacto). 