---
layout: post
title: La seguridad empieza con el Clean Code
description: Te contamos como las SAST de Sonar permiten entregar código limpio mientras desarrollas tu software. 

date: '2023-09-06T08:00:00Z'
author: Belén Casanovas
categories:

- sonar
- sonarqube
- sonarcloud
- SATS

cover: /img/posts/2023-09-06-seguridad-clean-code-sonar.png

---

La entrega de código seguro es esencial para garantizar el <strong>éxito de tu software</strong> y va más allá de corregir vulnerabilidades. Las soluciones de Sonar (SonarQube, SonarCloud y SonarLint) permiten a los equipos de desarrollo aplicar <strong>prácticas de Clean Code</strong> y pruebas de seguridad de aplicaciones estáticas (SAST) para detectar errores antes de que se conviertan en un problema de seguridad. 

Por ello, a lo largo de este artículo, vamos a hablar de lo que aportan estas soluciones de Sonar para <strong>entregar código limpio</strong> y los beneficios que tienen para <strong>mantener la seguridad de tus proyectos</strong>.
<br>
<br>

<h2>¿Qué ofrece Sonar al desarrollo de código limpio?</h2>

Las soluciones de Sonar <strong>ofrecen una revisión de código automatizada</strong> y técnicas avanzadas de análisis estático, como el <strong>análisis de contaminación estática</strong> y la ejecución simbólica. 

Estas herramientas están diseñadas para detectar y solucionar una amplia gama de problemas de calidad de código, errores y vulnerabilidades de seguridad para más de 30 lenguajes de programación y marcos.
<br>
<br>

<h2>¿Por qué es importante entregar código limpio?</h2>

El código mal escrito y sin mantenimiento es propenso a sufrir ataques. En la actualidad, se pierde mucho tiempo en solucionar problemas que han pasado por alto. Además, pedir a los desarrolladores que depuren el código y que solucionen problemas en el código puede ser frustrante. 

Sin lugar a dudas, es mejor abordar los problemas de seguridad a medida que se escribe el código. Por ello, Sonar proporciona un enfoque de Clean Code para la seguridad con una combinación de <strong>productos, educación y metodologías,</strong> haciendo que la entrega de código seguro sea rápida y fácil. Con una estrecha integración en el flujo de trabajo de DevSecOps, los productos Sonar permiten a los desarrolladores detectar, comprender y remediar problemas a medida que codifican.

<img width="90%" src="img/sonarsource-products/sonarqube-development-workflow.webp" alt="Workflow SonarQube">

<h2>¿Cuáles son las ventajas de trabajar con Sonar?</h2>

En este apartado te explicamos algunas funcionalidades de Sonar que son útiles durante el desarrollo de código:

- <strong> Detección de problemas</strong> a medida que el código se desarrolla en el IDE y durante la compilación y confirmación, donde el desarrollador revisa las solicitudes de extracción en la plataforma DevOps antes de fusionar el código. 

- Los <strong>errores se explican</strong> en el contexto del código que se está desarrollando. El desarrollador obtiene una clara comprensión y orientación sobre por qué es un problema y cómo pueden solucionarlo de inmediato. 

- Los <strong>problemas abordados por adelantado</strong> eliminan la necesidad de una selección adicional por parte del equipo de seguridad.

- El análisis es rápido y preciso, con menos falsos positivos. Solo los problemas que deben solucionarse de inmediato <strong>se plantean como críticos</strong>.

El [SAST de Sonar](https://www.sonarsource.com/solutions/security/) permite a las organizaciones identificar y resolver problemas de código originados por interacciones con bibliotecas de código abierto de terceros. Esta capacidad única impulsa el motor SAST existente de Sonar para rastrear el flujo de datos dentro y fuera de las bibliotecas. Así se descubren <strong>vulnerabilidades de seguridad ocultas </strong>que otras herramientas no pueden detectar. 

Con esta tecnología, las organizaciones pueden abordar con confianza los desafíos de seguridad de códigos, lograr una seguridad de aplicaciones robusta y disfrutar de los beneficios de una base de código fiable y reforzada. Disponible hoy en día para <strong>Java, C#, y TypeScript</strong>, el SAST de Sonar soporta miles de bibliotecas de código abierto de uso común, incluyendo sus dependencias posteriores.

<img width="90%" src="img/sonarsource-products/deeper-sast-excentia.png" alt="Deeper SAST Sonar">

<h2>Funcionalidades de seguridad que ofrece Sonar</h2>

A continuación, desglosamos los puntos fuertes de las herramientas de Sonar que te permitirán mantener la seguridad del código de tu producto: 

- **Analizadores de seguridad ajustados**: Los analizadores de seguridad de Sonar se mejoran continuamente  por nuestros expertos y la comunidad para mantener la precisión, velocidad y cobertura. Detectan fallos para todo el código y a veces superan la tasa positiva verdadera (TPR) del 90%. 

- **Capacidades avanzadas SAST integradas**: Las funcionalidades SAST están disponible de forma predeterminada con SonarQube y SonarCloud. Se ejecutan como parte del análisis de código y se integra perfectamente con los conductos CI/ CD.

- **Capacidades avanzadas de análisis**: Sonar admite el análisis completo y detallado de ramas y solicitudes de extracción (RP), proporcionando resultados de análisis en minutos. El análisis incremental incorporado y el almacenamiento en caché del lado del servidor permiten que el motor reconozca y analice solo los archivos modificados.

- **Amplia cobertura de reglas de seguridad**: Sonar cubre más de 5.100 reglas que detectan problemas que pueden conducir a vulnerabilidades, puntos de acceso y errores en 30 lenguajes de programación y tecnologías de infraestructura. La cobertura de seguridad incluye todas las amenazas comunes, como el scripting a través del sitio, la inyección SQL, la inyección de rutas, la detección secreta, las configuraciones erróneas de IaC, el phishing y muchas otras. 

- **Informes empresariales específicos de seguridad**: Los informes rastrean la seguridad del código de la aplicación contra estándares como OWASP Top 10, OWASP ASVS, CWE Top 25 (2021, 2020 y 2019) y PCI DSS.

<img width="90%" src="img/sonarsource-products/issue-types-sonar-excentia.png" alt="Issue Types Sonar">


<h2>Beneficios de trabajar con las soluciones de Sonar</h2>

Por último, solo nos queda nombrarte los beneficios de trabajar con una de las [soluciones de Sonar](https://www.excentia.es/sonarsource):

- **Acelera el desarrollo seguro**: El uso de las SAST de Sonar en la fase de desarrollo permite encontrar y corregir vulnerabilidades y errores de seguridad ocultos a antes de que los atacantes puedan explotarlos. 

- **Reduce el riesgo de violaciones de seguridad**: Evita ataques maliciosos y protege la información confidencial con reglas de seguridad que detectan credenciales y secretos codificados en el código. Esta detección de secretos descubre contraseñas no deseadas, tokens, claves de acceso a la nube o claves de API en los proveedores de nube más populares. 

- **Racionaliza la solución de problemas**: Mejora la postura de seguridad general de tu software con el análisis automático y reduce la dependencia de las revisiones manuales del código. 

- **Garantiza la seguridad y el cumplimiento del código**: Realiza un seguimiento del cumplimiento de la seguridad del código y evalúa los riesgos en los activos de software a nivel empresarial con informes detallados.
 
Esperamos que te haya sido útil este post. Si quieres seguir teniendo noticias, no te olvides de visitar nuestro blog. 