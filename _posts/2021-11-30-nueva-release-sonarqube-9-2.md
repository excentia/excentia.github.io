---
layout: post
title: 'SonarQube 9.2'
description: Todas las novedades de la nueva versión de SonarQube.
date: '2021-11-30T08:00:00.000+01:00'
author:  Sonsoles Cabrera
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/2021-11-30-nueva-version-sonarqube-9-2.png
modified_time: '2021-11-30T08:00:00.000+01:00'
---


**Soporte de IaC: analiza CloudFormation, seguridad de Terraform** 

En la versión 9.2, SonarQube añade soporte para analizar archivos CloudFormation y Terraform. Con estos dos nuevos lenguajes, SonarQube ayuda a los desarrolladores a proteger no solo su código, sino también sus implementaciones. 

Porque simplemente migrar a la nube, **no convierte tu aplicación en segura**. Aunque AWS administre la seguridad de la nube, aún depende de ti lo que pongas ahí. Y eso significa proteger no solo el código, sino también cómo se implementa. 

Entre los dominios de CloudFormation y Terraform se encuentra la seguridad de tus Buckets de AWS S3, los permisos, la trazabilidad y el cifrado en reposo y en tránsito. 

Adicionalmente, se admite la importación de informes de Cfn-Lint, el linter oficial de CloudFormation de Amazon.

**Análisis de contaminación para Python AWS Lambdas**

A medida que más y más lógica empresarial se traslada a la arquitectura nativa de la nube, protegerla se convierte cada vez en más urgente. 

Después de asegurar tu configuración con el análisis de CloudFormation y Terraform, aún tendrás que asegurarte de que el código que implantas en la nube es seguro. Es por eso que proporcionamos un análisis de contaminación innovador de tus AWS Lambdas. 

SonarQube 9.1 añadió análisis de contaminación para AWS Lambdas escrito en JavaScript. Con la versión 9.2, SonarQube detecta una gama completa de problemas de análisis de contaminación para Python Lambdas configurados para AWS SAM y aplicaciones de marco sin servidor para ayudarlo a mantener seguros a sus usuarios y sus activos.

**Desarrollo de Android más fácil, más seguro en todos los idiomas**

Los desarrolladores de Android tienen mucho que esperar de 9.2, con una gran cantidad de nuevas reglas en todos los lenguajes y un mejor soporte en el flujo de trabajo de desarrollo subyacente.

Hay muchas configuraciones sensibles a la seguridad en una aplicación de Android, y no siempre es evidente cómo deben configurarse. Cuatro nuevas reglas implementadas para Kotlin y Java, y cinco nuevas reglas para XML ayudan a los desarrolladores a garantizar que los datos de sus usuarios estén debidamente protegidos.

En 9.1, SonarQube añadió reglas para ayudar a los desarrolladores de Kotlin a cumplir con los requisitos de privacidad y almacenamiento de datos de MASVS. Ahora, las mismas reglas aportan paridad para los desarrolladores de Android Java.

En el tema de la paridad, dos reglas de vulnerabilidad y dos reglas de Security Hotspot implementadas previamente para Java para garantizar la seguridad de Android o JVM general han sido trasladadas a Kotlin para una mejor seguridad de Android en todos los idiomas. Otras dos reglas de Code Smell y cinco nuevas reglas Bug también se trasladaron de Java a Kotlin, ya que las trampas que cubren tienen una correspondencia 1:1 en todos los idiomas.

Por último, para completar el soporte de desarrolladores móviles, trabajan con Codemagic para soportar la detección “auto(code)magic" de ramas y PRs en esa plataforma CI/CD. A partir de ahora, no hay una lógica YAML compleja, solo un análisis mágicamente fácil.

**Reglas avanzadas de expresiones regulares para Kotlin y Python**

El invierno pasado se desarrollaron reglas de expresiones regulares novedosas para Java. Desde entonces, se han extendido estas nuevas reglas importantes a PHP y JavaScript / TypeScript en SonarQube 9.1 y ahora a Kotlin y Python en 9.2. 

Con estas nuevas reglas, ahora más que nunca, SonarQube ayuda a los desarrolladores de Kotlin y Python a escribir el código que pretendían.

**Precisión del análisis de contaminación, mejora de la claridad**

La precisión en todas las facetas del análisis es la estrella guía de SonarSource, y en ningún sitio lo es más que en las reglas relacionadas con la seguridad. Con la versión de SonarQube 9.2, se ha actualizado sutilmente varios aspectos del análisis de contaminación para una mejor experiencia general. 

Primero, los falsos negativos se eliminaron diferenciando entre validadores (desinfectar el argumento y devolver un booleano) y desinfectantes (devolver un único argumento desinfectado). Las actualizaciones adicionales incluyen:

-   Distinguir entre la inyección de comandos del OS y la inyección de argumentos del OS.
-   Detección de división de la inyección de reflexión a partir de la detección de la inyección de código.

En ambos casos, en SonarQube 9.2 se plantean aproximadamente los mismos problemas que antes, pero ahora con reglas potencialmente diferentes. La ventaja es la claridad para los desarrolladores que intentan comprender el problema basándose en la descripción de la regla. Ahora se presentará una descripción más apropiada en cada caso.

Además, la regla para detectar la división de respuestas HTTP, S5167, ha quedado obsoleta porque ya no es relevante en los contextos web modernos. En su lugar, se han implementado reglas que protegen las redirecciones de solicitudes HTTP y las respuestas HTTP.

**Encuentra automáticamente - ¡y corrige! – issues en IDE**

SonarLint da un aviso temprano sobre tu análisis de SonarQube al plantear los mismos issues en IDE. Y ahora la extensión IDE gratuita incluso ofrece soluciones rápidas para algunos problemas de Java en los IDE de Eclipse, VSCode y JetBrains y para algunos problemas de C y C ++ en CLion.

**Insignias para proyectos privados y otras características esperadas desde hace tiempo**

SonarQube 9.2 incluye una serie de esperadas funciones para ayudarte a integrar SonarQube en tu organización. Primero, con esta versión finalmente se entregaron insignias para proyectos privados. 

Luego está la nueva funcionalidad para delegar la administración de una sola Quality Gate. Antes los administradores podían delegar permisos para todas las Quality Gate; ahora pueden ser más selectivos. Hablando de delegación, la delegación de autenticación a Bitbucket Cloud ahora está integrada.

Otro elemento de la lista tan esperada es el manejo de ramas en los portfolios de Enterprise Edition. Los usuarios podrán crear nuevos portfolios para rastrear las ramas del proyecto e incluso rastrear varias ramas dentro del mismo proyecto. 

También para beneficio de los usuarios de [**Enterprise Edition**](/sonarqube-enterprise-edition), se ha agregado la capacidad de exportar proyectos desde cualquier instancia (Community Edition y versiones posteriores) para importarlos a Enterprise Edition. Eso facilitará la incorporación de todos los proyectos correctos a sus portfolios en primer lugar.

**Notificaciones de actualización de SonarQube**

Y por último, pero no por ello menos importante, se han añadido notificaciones en la aplicación que te avisan de cuándo es el momento de actualizar SonarQube. 

Para obtener las últimas funcionalidades y correcciones, es importante mantener una versión compatible: la LTS o la más reciente. Por lo tanto, a partir de la versión 9.2, recibirás una notificación cuándo se publiquen las próximas actualizaciones.

Para más información visita [www.sonarqube.org](https://www.sonarqube.org/sonarqube-9-2/).



<br/>
<hr>
<br/>
<!--Calidad de Software Contact Form-->
<div id="contact-form">
	<h1>Contáctanos</h1>
	<p>Si necesitas ayuda con SonarQube o el desarrollo de software sostenible y de calidad, rellena el formulario y te responderemos en menos de 24 horas.</p>
<br/>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "na1",
	portalId: "7892756",
	formId: "a4e2e0dd-856c-4d56-9b11-0621661fcdaf"
});
</script>
</div>


