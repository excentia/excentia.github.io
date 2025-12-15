---
layout: post
title: 'Novedades de SonarQube Server 2025.6'
description: Conoce esta nueva release que incluye análisis más rápidos, integración con Slack y actualización en lenguajes.
date: '2025-12-10T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2025-12-10-sonarqube-server-2025-release-6.png

---

¡Ya está disponible la **nueva versión de SonarQube Server 2025.6**! Esta release, tal y como indica **Sonar**, "te ayuda a adoptar la filosofía *vibe, then verified*" con análsis más rápidos, actualizaciones en lenguajes populares. A continuación, te explicamos cuáles son estas novedades. 

Todas las funcionalidades descritas están disponibles en las ediciones de **SonarQube Server Developer, Enterprise y Data Center**, salvo que se indique explícitamente lo contrario.

<h3>Integración con Slack</h3>

La **integración con Slack** permite enviar el estado del Quality Gate directamente a los **canales del equipo**. Cuando un Quality Gate falla, o pasa de fallido a aprobado, la notificación llega en tiempo real, facilitando una reacción rápida y coordinada desde la principal herramienta de comunicación del equipo.

<h3>Análisis JS/TS hasta un 40 % más rápido</h3>

La optimización del motor de análisis ofrece hasta un **40% de mejora de rendimiento** en proyectos grandes de JavaScript y TypeScript. Menos tiempo de espera significa ciclos de feedback más cortos, revisiones de código más ágiles y mayor velocidad de desarrollo.

<h3>Nuevas correcciones rápidas en el IDE para JavaScript y TypeScript</h3>

SonarQube for IDE incorpora **58 nuevas quick fixes** para JavaScript y TypeScript. Estas correcciones permiten resolver incidencias directamente desde el IDE **con un solo clic**, reduciendo el esfuerzo y el tiempo necesario para mantener el código limpio.

<h3>Visibilidad del nivel de madurez de las reglas</h3>

Las incidencias muestran ahora claramente **si están basadas en reglas BETA**. Esta información ayuda a priorizar mejor, permitiendo decidir con criterio cuándo actuar de inmediato y cuándo evaluar con más calma una incidencia basada en reglas experimentales.

<h3>Mensajería dinámica dentro del producto</h3>

SonarQube 2025.6 introduce un sistema de **mensajería dinámica dentro de la interfaz**. Las novedades y actualizaciones relevantes se muestran directamente al iniciar sesión, facilitando que los usuarios estén siempre al día sin necesidad de consultar fuentes externas.

<h2>Ampliación de la cobertura de lenguajes</h2>

Esta versión amplía de forma notable la cobertura de lenguajes y frameworks, mejorando la precisión del análisis y adaptándose a la evolución de los lenguajes de mayor crecimiento.

<h3>Soporte completo para Swift 5.9 a 6.1</h3>

SonarQube 2025.6 ofrece soporte completo para **Swift 5.9, 5.10, 6.0 y 6.1**, incluyendo macros, genéricos variádicos y nuevas características de sintaxis. También incorpora soporte para SwiftUI, SAST para Swift y detección de secretos, permitiendo desarrollar aplicaciones iOS modernas con menos errores y menos vulnerabilidades de seguridad.

<h3>Soporte para Python 3.14</h3>

El análisis se actualiza para detectar **incidencias en la sintaxis de Python 3.14**, incluyendo funcionalidades como el nuevo compilador JIT y la instrucción defer. Esto facilita adoptar la nueva versión del lenguaje de forma segura y aprovechar sus mejoras de rendimiento.

<h3>Soporte para PyTorch</h3>

SonarQube detecta ahora **problemas específicos al utilizar la librería PyTorch**, ayudando a escribir código de Machine Learning más eficiente y fiable. Esta cobertura aporta garantías adicionales en proyectos de IA y ML, evitando errores que pueden generar resultados engañosos o un consumo innecesario de recursos.

<h3>Análisis de Shell y Bash</h3>

La versión 2025.6 permite **detectar y corregir problemas de calidad en scripts Shell/Bash**, un lenguaje clave en la automatización de infraestructuras. Esto mejora la cobertura global del código y refuerza la calidad en entornos DevOps.

<h3>Ampliaciones en Apex, Go y Ruby</h3>

- **Apex**: se amplía significativamente la detección de problemas de calidad y seguridad, ofreciendo información específica y alineada con las mejores prácticas actuales en desarrollos Salesforce.

- **Go**: se añaden más de 40 nuevas reglas de calidad de código, orientadas al ecosistema cloud-native.

- **Ruby**: se incrementa la detección de incidencias en Ruby y Ruby on Rails en un 50 %, manteniendo los falsos positivos por debajo del 5 %, lo que aporta análisis más profundos y realmente útiles.

<h2>Seguridad y cumplimiento integrados desde el diseño</h2>

La seguridad y el cumplimiento normativo son otro pilar central de SonarQube 2025.6, con mejoras orientadas a estándares del sector y a la seguridad de la cadena de suministro de software.

<h3>Soporte para STIG V6R3</h3>

SonarQube se alinea con la **Security Technical Implementation Guide (STIG) V6 Release 3**, ofreciendo detección de incidencias y recomendaciones basadas en referencias de seguridad gubernamentales críticas.

<h2>Alineación con OWASP Top 10 2025</h2>

Con mapeos, documentación e informes actualizados, SonarQube se adapta al nuevo **OWASP Top 10 2025**, ayudando a anticiparse a las amenazas web más relevantes.
Disponible únicamente en Enterprise y Data Center.

<h2>Cumplimiento completo de MISRA C++:2023</h2>

Las **ediciones Enterprise y Data Center** cubren las **179 directrices** de MISRA C++:2023, ofreciendo detección completa de problemas de calidad y seguridad en entornos críticos, con resultados de cumplimiento integrados directamente en el flujo de trabajo.

<h2>Detección de configuraciones inseguras en Bash</h2>

SonarQube identifica permisos **inseguros, comandos peligrosos y secretos codificados en archivos .sh**, ayudando a proteger pipelines y automatizar la revisión de scripts críticos.

<h2>Importación de SBOM</h2>

La **importación de SBOM en formato CycloneDX y SPDX** permite detectar vulnerabilidades en aplicaciones, contenedores y proyectos C/C++. Esta funcionalidad ofrece una visión completa de dependencias y componentes de terceros antes opacos. Disponible únicamente en **SonarQube Advanced Security**.

<h2>Advanced SAST ampliado y optimizado</h2>

- Top **1.000 librerías** de C# y Java: análisis SAST optimizado para detectar vulnerabilidades relevantes en librerías de uso masivo.

- Top **100 librerías de Python**: análisis de alta precisión que reduce falsos negativos y mejora la seguridad del código.

- Ambas capacidades están disponibles exclusivamente en **SonarQube Advanced Security**.

Por último te dejamos el artículo original del anuncio de la [web de Sonar](https://www.sonarsource.com/products/sonarqube/whats-new/2025-6/){:target="_blank"}.

Si quieres actualizar de versión o necesitas más información, puedes ponerte en contacto con nuestro equipo a través del [siguiente enlace](/contacto){:target="_blank"}. 