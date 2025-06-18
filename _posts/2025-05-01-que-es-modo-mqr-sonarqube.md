---
layout: post
title: '¿Qué es el Modo MQR de SonarQube?'
description: Te contamos en qué consiste el modo de análisis MQR de SonarQube y qué diferencias tiene frente al Modo Estándar
date: '2025-05-01T08:04:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: img/posts/2025-05-01-que-es-modo-mqr-sonarqube.png

---
Las soluciones de SonarQube incluyen **dos modos de análisis: el Modo Estándar y el Multi-Quality Rule (Modo MQR)**. En este artículo nos adentramos en la definición de este último modo y te contaremos los diferentes tipos de severidades, issues y su comparación con respecto al modo estándar. 

<h2>¿Qué es el Modo MQR de SonarQube?</h2>

El **Modo MQR** es una configuración para el análisis del código que ayuda a representar con mayor precisión el **impacto de un problema en todas las cualidades del software**. Para ello, asigna una **severidad distinta a una regla** para cada calidad del software que podría afectar. Este enfoque se centra en garantizar que el impacto en todas las cualidades del software sea claro, no solo en la más grave. 

<h2>Modo Estandar vs Modo MQR</h2>

A continuación, se muestra una comparación detallada entre los dos modos de análisis en SonarQube: Modo Estándar vs Modo MQR. Empezamos con una tabla comparativa de **clasificación de severidades**:

| ESTÁNDAR |   |  MQR |  |
| GRAVEDAD | DEFINICIÓN  | GRAVEDAD | DEFINICIÓN |
|:----------|:----------|:----------|:----------|
| **Blocker**    | 🛑 Problemas con alta probabilidad de consecuencias graves (como caídas en producción o fallos de seguridad). Requieren corrección inmediata   | **Blocker** | 🛑 Problemas críticos que pueden causar fallos en producción o vulnerabilidades de seguridad graves. Deben corregirse de inmediato. |
| **Critical**    | ⚠️ Problemas con impacto crítico. Deben corregirse lo antes posible.   | **High** | ⚠️ Problemas con alto impacto en la aplicación. Requieren solución lo antes posible. |
| **Major**   | 🔧 Problemas con impacto importante en la aplicación   | **Medium** | 🔧 Impacto medio. Requiere atención, pero no es urgente. |
| **Minor**   | ℹ️ Problemas con impacto menor   | **Low** | ℹ️ Impacto bajo. Puede corregirse en el tiempo disponible. |
| **Info**  | 📘 Sin impacto esperado. Solo con fines informativos   | **Info** | 📘 Sin impacto esperado. Solo con fines informativos. |


<br><br>
Los siguientes datos que desglosamos pertenecen a la **terminología en el tipo de issues**: 


**Tipos de issues en el Modo Estándar** 

🐞 Bugs <br>
🌪️ Code Smells <br>
🔐 Vulnerabilities <br>
🔥 Security Hotspot <br>

**Tipos de issues en el Modo MQR**

✅ Reliability <br>
🧹 Maintainability <br>
🔐 Security <br>
🔥 Security Hotspot <br>

Aquí te dejamos un vídeo donde hacemos una comparativa entre los dos modos y te enseñamos a activar el MQR:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WYksFNBRHZ8?si=jZKaczPpaBNKiKpB&amp;controls=0" title="Activate MQR on SonarQube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br><br>
¿Estás listo para mejorar la calidad de tu código con **Modo MQR**? Si necesitas ayuda no dudes en ponerte en contacto con nuestro equipo a través de [nuestro formulario](/contacto). 
