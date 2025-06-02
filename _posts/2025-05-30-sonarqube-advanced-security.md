---
layout: post
title: 'SonarQube Advanced Security ya está disponible'
description: La nueva solución de seguridad ya está disponible para las ediciones de SonarQube Enterprise y Data Center. 
date: '2025-05-30T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube server
- sonarqube advanced security
- IA


cover: img/posts/2025-05-30-sonarqube-advanced-security.png

---

Sonar ha anunciado la disponibilidad general de **SonarQube Advanced Security** para las ediciones **Enterprise y Data Center**. Esta solución te permite corregir los problemas de calidad del código propio, el generado por la IA y las dependencias de código open source. En este artículo, te contamos en qué consiste esta nueva solución y sus principales beneficios.

## ¿Qué es SonarQube Advanced Security?

**SonarQube Advanced Security** es una **solución integral y unificada de análisis de seguridad del código** que incorpora análisis SAST avanzado, SCA (Software Composition Analysis), detección de secretos, escaneo de IaC y soporte para código generado por IA y dependencias open source.

A diferencia de las herramientas de seguridad fragmentadas, **SonarQube Advanced Security** se integra directamente en el flujo de trabajo del desarrollador, desde el IDE hasta el CI/CD, permitiendo **identificar y corregir vulnerabilidades** de forma precisa, ágil y sin fricción. Ofrece detección profunda de riesgos reales, minimiza los falsos positivos y cumple con los principales estándares de seguridad y cumplimiento normativo, como OWASP, CWE, NIST o PCI DSS.

Esta solución convierte la seguridad del software en una responsabilidad compartida y natural dentro del ciclo de desarrollo, sin sacrificar la productividad.

## ¿Qué incluye SonarQube Advanced Security?

- **Software Composition Analysis (SCA)**: Escanea automáticamente las dependencias de código abierto para detectar vulnerabilidades conocidas (CVEs) y gestionar el cumplimiento de licencias. Genera SBOMs (Software Bill of Materials) para facilitar la trazabilidad y auditorías de seguridad.

- **Taint Analysis**: Realiza un análisis profundo del flujo de datos para detectar vulnerabilidades como inyecciones SQL, XSS, SSRF o deserialización insegura. Tiene conocimiento del framework, lo que mejora la precisión y reduce falsos positivos.

- **Advanced SAST**: Amplía las capacidades del análisis estático tradicional, detectando vulnerabilidades complejas y ocultas, especialmente al interactuar con bibliotecas de terceros. Soporta Java, C#, JavaScript y TypeScript.

- **Static Application Security Testing (SAST)**: Detecta automáticamente cientos de tipos de vulnerabilidades. Compatible con Java, JavaScript, TypeScript, Python, PHP, C, C++, C# y más. Incluye guías de corrección, reglas personalizadas y funcionalidades avanzadas como **CodeFix** basado en IA.

- **Secrets Detection**: Ayuda a prevenir la exposición accidental de claves API, tokens o contraseñas. Opera desde el IDE y CI/CD, con más de 300 patrones integrados y opción de crear patrones personalizados.

- **IaC Scanning (Infrastructure as Code)**: Detecta errores de configuración y riesgos en definiciones de infraestructura antes del despliegue. Compatible con Terraform, CloudFormation, Kubernetes, ARM y Ansible.

## ¿Necesitas una licencia adicional para utilizar SonarQube Advanced Security?

Sí, para utilizar **SonarQube Advanced Security** necesitas una licencia adicional, cuyo coste depende del número de líneas contratadas. Está disponible exclusivamente como **add-on** de las ediciones **Enterprise** y **Data Center**.

### Resumen de disponibilidad

**SonarQube Advanced Security** está disponible como licencia adicional para SonarQube Server Enterprise o Data Center Edition [2025.3](/sonarqube-server-2025-release-3){:target="_blank"}. Próximamente, también estará disponible para **SonarQube Cloud Enterprise**, pero tendremos que esperar unos meses más. <br>


Y hasta aquí este artículo sobre **SonarQube Advanced Security**. Recuerda que en la página oficial de Sonar tienes una [sección de documentación](https://docs.sonarsource.com/sonarqube-server/latest/){:target="_blank"} donde se amplía la información técnica sobre esta solución.





