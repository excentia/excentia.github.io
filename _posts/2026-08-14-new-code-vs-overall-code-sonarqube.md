---
layout: post
title: 'Diferencias clave entre New Code y Overall Code en SonarQube'
description: Aprende a diferenciar estos conceptos para gestionar tu deuda técnica y mejorar la calidad de tu código.
date: '2026-08-14T08:00:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops
- noticia


cover: /img/posts/2026-08-14-new-code-vs-overall-code-sonarqube.png

---

Dentro de un proyecto de SonarQube vamos a encontra una pestaña de **New Code** y otra de **Overall Code** (Código Total). La diferencia no es solo técnica, sino metodológica porque define cómo un equipo gestiona su deuda técnica. En este artículo profundizamos en los conceptos básicos que rodean el new code y overwall code y algunas recomendaciones para trabajar con ellos. 


<h2>Definición de conceptos</h2>

Vamos a resumir en dos lineas los conceptos de los que vamos a hablar.

- **New Code (Código Nuevo):** hace referencia a los cambios recientes hechos en un periodo definido. El objetivo es que el código que escribes *hoy* sea de alta calidad.
- **Overall Code (Código Total):** es la fotografía completa de todo el proyecto, incluido código escrito hace años

En lugar de exigir que todo el proyecto sea perfecto, Sonar pone el foco en que [cada nueva línea](https://docs.sonarsource.com/sonarqube-server/2025.5/user-guide/about-new-code) que entra al repositorio cumpla con altos estándares de calidad.

<h2>Tabla comparativa de las características de New Code vs Overall Code</h2>

| Característica | New Code (Código Nuevo) | Overall Code (Código Total) |
|---|---|---|
| **Definición** | Código modificado o añadido dentro de un "periodo de código nuevo" (New Code Period) | La suma de todo el código fuente analizado en el proyecto |
| **Enfoque** | Preventivo: evita que entre nueva deuda técnica al proyecto | Informativo/Histórico: muestra el estado de salud global y la deuda acumulada |
| **Quality Gate** | Las condiciones suelen ser estrictas (ej. 0 Bugs, >80% Cobertura) | Se usa para monitorizar, pero no suele ser el foco principal para "bloquear" un pipeline |
| **Métricas** | Solo muestra problemas introducidos en las líneas cambiadas | Muestra el acumulado total de Issues, Duplicaciones y Cobertura |

---

<h2>¿Cómo se define el "New Code Period"?</h2>

Esta es la parte donde muchos equipos fallan en la configuración. En SonarQube Server y Cloud puedes definir qué se considera "nuevo" de varias formas:

- **Previous Version (recomendado para Server):** todo lo que ha cambiado desde la última vez que se modificó el número de versión (`sonar.projectVersion`). Ideal para ciclos de release tradicionales.
- **Number of Days:** por ejemplo, los últimos 30 días. Útil si no se usan versiones formales.
- **Specific Analysis:** comparar contra un análisis concreto realizado en el pasado.
- **Reference Branch (recomendado para Cloud/DevOps):** compara tu rama actual contra una rama de referencia (normalmente `main` o `master`). Todo lo que difiera de la rama principal se considera "New Code".

<h2>¿Hay diferencias en función de la edición y el producto?</h2>

El comportamiento del New Code varía según la edición o el producto de SonarQube que se utilice:

- **SonarQube Community:** permite definir el periodo de código nuevo a nivel de proyecto.
- **SonarQube Developer / Enterprise / Data Center:** introducen el concepto de **Pull Request Analysis**. En una PR, el "New Code" es exactamente lo que se ha cambiado en esa rama respecto a la rama destino.
- **SonarQube Cloud:** funciona de forma nativa con el modelo de **Reference Branch**, siendo muy eficiente para entornos de integración continua rápida.


<h2>¿Por qué deberías ignorar  el Overall Code?</h2>

Si heredas un proyecto con **10 años de antigüedad** y **5.000 bugs**, intentar arreglar el Overall Code de golpe es frustrante y costoso. La deuda técnica acumulada durante años no se resuelve en un sprint.

Nuestra recomendación es la siguiente: 

1. **Configura un Quality Gate estricto para el New Code:** exige, por ejemplo, un 80% de cobertura y 0 bugs nuevos. Si el desarrollador toca una línea, esa línea debe quedar perfecta.
2. **Usa el Overall Code solo como KPI de tendencia:** observa cómo, al mantener limpio el código nuevo, la calidad global (Overall) mejora orgánicamente con el tiempo a medida que se refactoriza el proyecto.


<h2>Preguntas frecuentes FAQ</h2>

**¿Cuál es la diferencia principal entre New Code y Overall Code en SonarQube?**
New Code mide solo los cambios recientes dentro de un periodo definido, con un enfoque preventivo para evitar nueva deuda técnica. Overall Code mide todo el proyecto histórico, con un enfoque informativo sobre la salud global del código.

**¿Debo aplicar el Quality Gate al New Code o al Overall Code?**
Se recomienda aplicar las condiciones estrictas del Quality Gate al New Code. El Overall Code se debe usar principalmente como indicador de tendencia, no como bloqueo de pipeline.

**¿Cómo se define qué es "nuevo" en SonarQube?**
Mediante el New Code Period, que puede configurarse como Previous Version, Number of Days, Specific Analysis o Reference Branch, según la edición y el flujo de trabajo del equipo.

**¿Qué diferencia hay entre SonarQube Community y las ediciones superiores respecto al New Code?**
Community permite definir el periodo de código nuevo a nivel de proyecto. Developer, Enterprise y Data Center añaden el análisis de Pull Requests, donde el New Code es lo cambiado en la rama respecto a la rama destino. SonarCloud usa de forma nativa el modelo de Reference Branch.

**¿Por qué falla el Quality Gate en proyectos legados y cómo evitarlo?**
Suele fallar porque se aplican condiciones estrictas (como 80% de cobertura) al Overall Code de un proyecto con baja calidad histórica (ej. 10% de cobertura). La solución es enfocar esas condiciones estrictas en el New Code y dejar el Overall Code solo como métrica de seguimiento.

Si necesitas más información sobre estos conceptos o quieres que te ayudemos con nuestra instancia de SonarQube, puedes ponerte en contacto con nuestro equipo a través del [siguiente formulario](/contacto). 
