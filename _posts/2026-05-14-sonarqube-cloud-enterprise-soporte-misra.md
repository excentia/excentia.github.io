---
layout: post
title: 'SonarQube Cloud Enterprise incorpora soporte completo para MISRA C++:2023'
description: SonarQube Cloud Enterprise incorpora soporte completo para MISRA C++:2023 con 179 directrices, validación CI/CD y análisis avanzado en C++17
date: '2026-05-14T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-05-14-sonarqube-cloud-enterprise-soporte-misra.png

---

Sonar ha anunciado la incorporación de compatibilidad completa **con el estándar MISRA C++:2023 en SonarQube Cloud Enterprise**. La actualización amplía las capacidades de análisis y compliance de la plataforma para entornos donde la seguridad y la fiabilidad del software son requisitos críticos, como la automoción, los dispositivos médicos o los sistemas embebidos.

Con esta incorporación, SonarQube Cloud Enterprise pasa a ofrecer las siguientes características: 

- **Cobertura completa**: Soporte para las 179 directrices del estándar MISRA C++:2023. <br>

- **Feedback inmediato en el IDE**: Próximamente, los desarrolladores recibirán avisos en tiempo real directamente en su entorno de desarrollo gracias a SonarQube for IDE, evitando que los errores lleguen más adelante en el ciclo de desarrollo. <br>

- **Adopción segura de C++17**: Permite usar características modernas de C++17, como structured bindings, pero dentro de un marco seguro y controlado definido por MISRA. <br>

- **Menos falsos positivos**: El análisis está ajustado para detectar problemas reales y reducir alertas incorrectas. <br>

- **Validación automática en CI/CD**: Las comprobaciones de cumplimiento pueden ejecutarse automáticamente en ramas y pull requests, garantizando que el código cumple el estándar antes de fusionarse. <br>

**MISRA C++:2023** surge como respuesta a la creciente **adopción de funcionalidades modernas de C++17** en aplicaciones críticas. El estándar integra además prácticas alineadas con AUTOSAR y está diseñado para ayudar a organizaciones que deben cumplir normativas funcionales como ISO 26262 o IEC 62304.

Según explica Sonar, la integración del estándar en SonarQube busca **facilitar la validación continua del código dentro del ciclo de vida de desarrollo software (SDLC)**, automatizando las comprobaciones de compliance directamente en ramas y pull requests mediante pipelines CI/CD.

Desde Sonar señalan que estas validaciones pueden aplicarse **tanto a código desarrollado manualmente** como a código generado con **asistencia de inteligencia artificial**.

Aquí te dejamos [el artículo original de Sonar](https://www.sonarsource.com/blog/achieve-misra-c-2023-compliant-source-code/) donde explica este anuncio. 

