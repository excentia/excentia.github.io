---
layout: post
title: 'Calidad de código y seguridad en tu flujo de trabajo'
description: SonarQube se integra con las cuatro herramientas ALM  más importantes
date: '2021-01-15T08:00:00.000+01:00'
author: Anna Torres
categories: 
- sonarsource
- calidad

cover: /img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-thumb.png
modified_time: '2021-01-15T08:00:00.000+01:00'
---


Los desarrolladores de hoy pasan mucho tiempo en sus entornos de repositorio / SCM como GitHub, Bitbucket, Azure DevOps y GitLab (ALM). ALM es el corazón del flujo de trabajo y ofrece aplicaciones de calidad de manera eficiente y consistente.

Un flujo de trabajo optimizado y automatizado es muy valioso pero **no es suficiente**. La _calidad_ de la salida importa tanto como la de entrada.

Una hermosa cocina equipada con electrodomésticos costosos no se traduce automáticamente en una deliciosa comida. Si no estas alimentando el flujo de trabajo de desarrollo con código limpio y seguro, no obtendrás aplicaciones de calidad.

## SonarQube: calidad en salida y en entrada

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-1.png" alt="Ventajas de SonarQube" width="70%">

Hoy en día, los desarrolladores codifican en su **ALM** y ese es el lugar perfecto para agregar valor con comentarios sobre la calidad del código.

El ALM es donde los desarrolladores envían los cambios para su revisión y activan las implementaciones. Por eso tiene sentido que SonarQube se integre estrechamente aquí y no hay mejor punto focal que la solicitud de extracción (Pull Request - PR). Además es el lugar perfecto para enviar comentarios al desarrollador sobre la calidad del código.

Por esto SonarQube se integra estrechamente con las cuatro herramientas ALM  más importantes: GitHub, Azure DevOps, Bitbucket, GitLab. Y está respaldado por más de 10 años de ingeniería de productos y experiencia. 

## SonarQube y la metodología [Clean as You Code](https://www.sonarqube.org/features/clean-as-you-code/) (CAYC)

La metodología en resumen:

-   Los desarrolladores solo deben centrarse en el código nuevo / modificado;
-   No dejar problemas para que otros los descubran en el futuro;
-   Establecer un estándar de seguridad y calidad de código y solo confirmar el código que lo cumpla o supere

El gráfico a continuación demuestra cómo el concepto CAYC se cruza con el flujo de trabajo, lo que permite a SonarQube proporcionar la **información** _correcta_, en el **momento** _correcto_ y en el **lugar** _correcto_:

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-2.png" alt="Ventajas de SonarQube" width="70%">

## Mejora el flujo de trabajo, sin aumentar las interrupciones

El siguiente diagrama describe una integración típica del flujo de trabajo de SonarQube.

A partir de tu IDE, SonarLint detecta errores, vulnerabilidades y code smells (es mejor solucionar los problemas tan pronto como se creen.

Una vez terminado de escribir el código y abrir una solicitud de extracción, se activa automáticamente un análisis de SonarQube como parte del proceso de compilación.

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-3.png" alt="SonarQube - Proceso de compilación y full request" width="70%">

Los resultados del análisis vuelven en el PR para que conozcas de inmediato el estado de calidad de tu nuevo código. Una métrica clave y superpoderosa incluida es un [Quality Gate](https://www.sonarqube.org/features/quality-gate/) (QG).

Con Quality Gate, sabrás de un vistazo si el código de tu PR cumple con los estándares de calidad establecidos por tu equipo. Si tu QG es **VERDE** , puede fusionarse con confianza pero si es **ROJO**, tienes trabajo por hacer.

Aquí hay un ejemplo en GitHub para que puedas ver el flujo de trabajo:

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-4.png" alt="SonarQube - Quality Gate y el flujo de trabajo" width="70%">

Al abrir un PR en GitHub se inició un análisis de SonarQube. En la pestaña Verificaciones de GitHub, podemos ver un Quality Gate fallido. En este caso, hay un punto de acceso de seguridad no revisado y el QG elegido para este proyecto requiere una revisión del 100% como parte de los criterios de aprobación. Cada decoración incluye un enlace que abre el proyecto en SonarQube y muestra un resumen completo de las métricas de relaciones públicas.

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-5.png" alt="Proyectos en SonarQube y el resumen de las métricas" width="70%">

A partir de ahí, es fácil profundizar en los problemas que causan la falla del QG. Si bien encontrar problemas de calidad del código es excelente, solucionarlos es realmente lo importante, por lo que SonarQube también brinda ayuda contextual y recomendaciones.

En nuestro ejemplo, SonarQube detectó un Security Hotspot que es una vulnerabilidad potencial. Apartado rápido: un punto de [acceso de seguridad](https://blog.sonarsource.com/security-hotspot-review) es un fragmento de código sospechoso que podría ser una vulnerabilidad o nada de qué preocuparse; necesita ser revisado y clasificado antes de que pueda fusionarse de manera segura. La idea es que el desarrollador que acaba de escribir el código está en la mejor posición para determinar si Security Hotspot es una vulnerabilidad legítima o inofensiva.

Para ayudar con las revisiones de Security Hotspot, creamos una **interfaz de usuario dedicada en SonarQube** para que el proceso sea efectivo y esto se vincula directamente con el principio de antes: la **información** _correcta_, en el **momento** _correcto_, en el **lugar** _correcto_ .

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-6.png" alt="SonarQube - Interfaz de usuario dedicada de SonarQube Security Hotspot" width="70%">

SonarQube solo debe invocarse si hay un QG defectuoso. Esto significa distracciones mínimas y menos cambios de contexto.

A medida que resuelves los problemas que causan la falla del QG, SonarQube actualiza dinámicamente el estado en tu ALM. Esto mantiene informado a todo el equipo sobre el estado del proyecto y el progreso continuo. Cuando QG es verde, ¡puede fusionar con confianza su PR!

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-7.png" alt="SonarQube y el Quality Gate" width="70%">

### Solicitud de extracción de GitHub - Decoración de branch con SonarQube (video de 3 minutos)

Aquí está el [ejemplo completo](https://www.youtube.com/watch?v=zVzwuV92r6M) de decoración de solicitud de extracción de GitHub como un video corto para que pueda verlo 'en vivo'.

<iframe width="560" height="315" src="https://www.youtube.com/embed/zVzwuV92r6M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ¿Utilizas Bitbucket, Azure DevOps y GitLab? Ningún problema

También ofrecemos el mismo valor para los usuarios de Atlassian Bitbucket, Microsoft Azure DevOps y GitLab.

### Decoración de Bitbucket Pull Request

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-8.png" alt="SonarQube y Bitbucket" width="70%">

### Decoración de solicitud de extracción de Azure DevOps

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-9.png" alt="SonarQube y Azure DevOps" width="70%">

### Decoración de solicitud de fusión de GitLab

<img src="/img/posts/2021-01-15-calidad-de-codigo-y-seguridad-con-sonarqube-sonarcloud-10.png" alt="SonarQube y GitLab" width="70%">

Si quieres ver una demostración en directo con tu ALM favorito dirígete al canal de [YouTube SonarSource](https://www.youtube.com/channel/UCS5-gTYteN9rnFd98YxYtrA).

## Creado por desarrolladores, para desarrolladores 

Desde principios de 2008, los productos **SonarSource han sido fabricados por desarrolladores para desarrolladores**. El objetivo final no ha cambiado: que cada desarrollador y equipo de desarrollo tenga las herramientas para escribir código limpio, seguro y de calidad.

Es por eso que SonarSource inverte tiempo y dedicación para integrarse con GitHub, Bitbucket, Azure DevOps y GitLab, para lograr lo mejor de ambos mundos.

<sub><sub>(Fuente: [SonarSource Blog](https://blog.sonarsource.com/sonarqube-alm_good-vibes))</sub></sub>


<br/>
<hr>
<br/>

<div id="contact-form-hubspot">
	<h1>¿Necesitas ayuda en tu camino de inspección continua?</h1>
	<p>Si necesitas ayuda a poner en marcha SonarQube con las mejores prácticas u otra gestión, contactanos sin compromiso y te responderemos en menos de 24 horas.</p>
<br/>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	portalId: "7892756",
	formId: "88c36f66-edb7-403c-8200-d4518c6329cc"
});
</script>
</div>

