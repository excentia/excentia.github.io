---
layout: post
title: 'Clean as you code: qué es el código limpio y como funciona'
description: Conceptos básicos del Clean As You Code, Quality Profiles y Quality Gates
date: '2021-11-11T08:00:00.000+01:00'
author:  Sonsoles Cabrera
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-thumb.png
modified_time: '2021-11-11T08:00:00.000+01:00'
---

## ¿Qué son los Quality Profiles y las Quality Gates?

En este blog, abordaremos las reglas, los Quality Profiles y las Quality Gates. Estos elementos son los pilares de una estrategia efectiva de “Clean As You Code”. Después de leer este artículo, no tendrás dudas de qué son y cómo debes usarlos para obtener un código limpio y de calidad.

**Panorama General**

Antes de meternos de lleno en los Quality Profiles y las Quality Gates, es importante entender por qué se crearon estos pilares en primer lugar. La respuesta es simple: los necesitamos para poder responder una pregunta súper fundamental e importante: HAS ESCRITO UN CÓDIGO NUEVO/MODIFICADO – ¿ES ACEPTABLE?

Y sí, hay una manera definitiva de poder determinarlo. 

**Reglas, Quality Profiles y Quality Gates**

Las reglas son los elementos más básicos de un Quality Profile (QP). Cada lenguaje requiere un QP. Para un lenguaje determinado, hay reglas que podremos querer aplicar en el análisis y otras que no. 

El QP es un repositorio de reglas que determina qué reglas están activas y utilizadas durante el análisis y cuales están desactivadas. 

La elección de qué reglas aplicar es tuya y de tus compañeros de equipo. 

Hay dos caminos para ello: (1) Utilizar el QP incorporado por defecto llamado Sonar way o (2) Personalizar un QP. 

Mientras que el QP incorporado es genial, sentarte con tu equipo para debatir y llegar a un consenso común sobre qué aspecto tiene la calidad y seguridad del código, dentro de tu contexto, trae dos beneficios:

1. Si nunca has realizado este ejercicio, es una oportunidad excelente para tener una conversación ad-hoc e ir todos en la misma línea y obtener expectativas claras de una codificación limpia y segura.

2. Establece las reglas de juego para construir un QP personalizado para cada lenguaje que releje el ideal de tu equipo.

Por ejemplo, si tu equipo está menos preocupado por los code smells, puedes utilizar las facetas y las capacidades de filtrado en la pestaña de reglas de SonarQube/SonarCloud para limitar o ampliar las reglas que se activan en tus Quality Profiles.

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-2.png" width="100%">

Este es el Quality Profile incorporado en Sonar way para Java. Puedes ver que incluye un subconjunto del recuento general de reglas de Java.

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-3.png" width="35%">

Ahora tenemos el repositorio de reglas, uno para cada lenguaje, llamado un Quality Profile.  Cada vez que se ejecuta un análisis en un lenguaje concreto, todas las reglas activas en ese lenguaje del Quality Profile se aplican al código que está siendo analizado. 

En el “backstage”, la autodetección, a través de la extensión del nombre del archivo, garantiza que tanto el QP como el analizador de lenguaje adecuado estén presentes durante el análisis.

Cualquier regla que se infrinja es señalizada en los resultados como “issues”. No obstante, simplemente señalizando los problemas detectados en tu código no se resuelve el problema. En este punto, no se tiene la suficiente información para poder contestar la cuestión original, si se debería fusionar tu código nuevo/modificado o no.

Necesitamos una manera de comparar los resultados del análisis con un conjunto de criterios de aceptación (o condiciones).  Aquí es donde la Quality Gate (QG) entra en acción. En términos de SonarSource, la aplicación de estas condiciones se llama Quality Gate, y es de naturaleza binaria – lo supera o no.

## Quality Gate

La Quality Gate te permite determinar tus propias condiciones de calidad y seguridad del código, seleccionando una métrica y posteriormente configurando el umbral de superada/no superada. Si no se supera alguna de las condiciones en la QG, el conjunto del análisis de la QG fallará, y sabrás que no debes fusionar tu código hasta que soluciones la situación. La QG se actualiza dinámicamente, para que sepas inmediatamente si tras una corrección te da luz verde.

Igual que con el QP, puedes utilizar la Quality Gate incorporada llamada Sonar way o personalizar la tuya propia basada en la definición de codificación limpia y segura de la que hablábamos anteriormente. Vamos a ver un ejemplo para poder entenderlo mejor. La gráfica de abajo muestra cómo el ratio de fiabilidad (de bugs) está calculado.

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-4.png" width="100%">

Piensa en una QG como un informe con una recomendación de aprobado o no. La naturaleza del superado o no es clave porque se quiere dejar absolutamente clara la decisión de Continuar/No continuar. El código, bien está aprobado desde la perspectiva de calidad de seguridad de código o no lo está. La idea de que el código es “aceptable” o “lo arreglaré después” no funciona. El gráfico a continuación muestra la QG aplicada al periodo de New Code en el Analizador de Código Java de SonarSource.

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-5.png" width="100%">

¡Ya lo tienes! Ahora eres un experto en Quality Profiles y Quality Gates.

Esta es la clave: se apuesta por un proceso fiable, eficiente y repetible que se integre en el flujo de trabajo de tu equipo. Monitorizar la QG en tu código nuevo/modificado se convertirá en algo tan natural que ya no podrás comprender cómo antes no lo hacías.

## Aplicación de la Quality Gate

**New Code Period**

La Quality Gate se utiliza en varios escenarios. Uno de los importantes es el análisis de código nuevo. SonarQube/SonarCloud utiliza el concepto llamado New Code Period por defecto, que está configurado como “versión anterior” en SonarQube. El New Code Period está pensado para que cubra en lo que estás trabajando a corto plazo. Quizás, esto sea el sprint actual o una próxima versión de tu App.

Mientras SQ/SC puede analizar tu código base completo, esta información, a pesar de interesante, no es inmediatamente útil ya que no es muy procesable. Probablemente no vayas a parar lo que estás haciendo y refactorizar tu código base. De hecho, después de escanear inicialmente todos tus proyectos, los informes de vuelta pueden ser bastante deprimentes. Pero tranquilo, ¡Roma no se construyó en un día! Tu equipo no puede solucionar los problemas de semanas o incluso años de la noche a la mañana.

No obstante, el código asociado a tu versión de software actual o sprint actual es muy procesable. Aquí deberías focalizar tus esfuerzos de corrección de la calidad del código. Hay varias formas de definir New Code Period, como compararlo con una rama de referencia, un análisis previo o especificando un número de días (por ejemplo, duración del sprint) para adaptarse a la forma de trabajar de tu equipo.

Este enfoque resalta la belleza de la metodología Clean As You Code: afirma que al centrarse en el New Code Period y sólo comprometer el código de paso, eventualmente refactorizarás y limpiarás todas las partes de tu código base que importan.

**Pull | Merge Requests**
  
Otro uso valioso de la Quality Gate es contra los Pull / Merge Requests. Se ha establecido que solo las métricas procesables son relevantes para la calidad del código y una Pull Request es un lugar ideal para utilizar un QG. Así es como se ve una Quality Gate integrada en tu flujo de trabajo:

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-6.png" width="100%">

La “decoration” de la QG de SonarQube/SonarCloud es compatible con GitHub, Bitbucket, Azure DevOps y GitLab. Para verlo en acción para la plataforma DevOps que elijas, visita la página de YouTube de SonarSource, donde hay vídeos de demostración para cada plataforma. A continuación, vemos una bonita verde “decoration” Quality Gate en un Pull Request de GitHub.

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-7.png" width="70%">

Los PR son súper procesables y representan el código más inmediato que estás creando/cambiando, por lo que mantener ese código limpio y seguro es lo principal que puedes hacer para mejorar la calidad y la seguridad en sus proyectos y aplicaciones.

 ## Mantenimiento del Quality Profile

Si bien una discusión exhaustiva sobre el cuidado y la alimentación del QP está más allá del alcance de este artículo, es útil revisar los conceptos básicos. Si eliges seguir con los perfiles de calidad integrados de Sonar way, entonces no hay nada que mantener. Instalando la última versión de SonarQube se actualizan automáticamente todos los QP de idiomas integrados. Para SonarCloud, los QP se actualizan periódicamente por SonarSource.

Cualquiera de sus QP personalizados, que retienen la herencia, también se actualizan (cubierto en “ampliar Quality Profile” a continuación).

Por otro lado, si tú y tu equipo decidís personalizar algunos de vuestros QP de idioma, hay algunas consideraciones de mantenimiento importantes a tener en cuenta. Hay dos formas de personalizar un Quality Profile: copiar o ampliar.

**Copia del Quality Profile**

Para realizar una copia, simplemente copia un perfil integrado, asígnale un nombre único y hazlo tuyo. Cuando copias un QP, eres libre de activar/desactivar las reglas contenidas en el QP original. Cuando copias un QP, estás rompiendo la herencia con el perfil integrado y cualquier cambio futuro en el QP principal NO será recogido por el QP copiado. Para remediar esto, deberá realizar una verificación periódica con el QP integrado de ese idioma para actualizar todo. Se incluye una función de comparación en SQ / SC para hacer que esta sincronización periódica sea más eficiente.

_Recuerda: si sigues la ruta de la copia, te estás inscribiendo para recibir atención y alimentación periódicas de QP. Es decir, si no mantienes tus QP, se volverá cada vez más desactualizado con cada lanzamiento / actualización del producto._

**Extensión Quality Profile**

Cuando se extiende un QP, los cambios futuros en el QP principal son recogidos por el QP secundario, sin embargo, no puedes desactivar las reglas. 

Ampliar un QP es útil cuando deseas ampliar un QP de referencia y heredar los cambios de él. Por ejemplo, quieres un QP organizacional, pero quieres heredar nuevas reglas agregadas a Sonar way (el QP incorporado) en el futuro, lo extenderás en lugar de copiarlo. Cuando amplías un QP, puedes activar reglas que no están activas en los perfiles que ha heredado. Es una forma de ser más estricto, no una forma de relajar las reglas que vienen de los principales.

Si crees que desactivar algunas reglas tiene sentido para tu organización, un enfoque puede ser crear un perfil de nivel superior como una copia de “Sonar way”. Copiar te permite desactivar lo que creas que no encaja. A partir de esta copia, puedes ampliar para crear perfiles de nivel de departamento / equipo específico según sea necesario. 

Este enfoque “anidado” ofrece lo mejor de ambos mundos: la copia del QP te permite hacer cumplir los estándares de toda la organización y la extensión QP te permite ser más granular para los equipos. 

Debido a la forma en que se configura la herencia, solo tienes que sincronizar periódicamente el perfil de copia principal y las actualizaciones se enviarán en cascada a los de la extensión del QP. El siguiente ejemplo muestra cómo puedes anidar perfiles de calidad para satisfacer las necesidades de tu equipo.

<img src="/img/posts/2021-11-11-clean-as-you-code-codigo-limpio-que-es-conceptos-basicos-8.png" width="70%">

En cualquier caso, si eliges personalizar un QP, es imperativo considerar el impacto que los cambios tendrán en el equipo de desarrollo y el ruido que generará. Por ejemplo, activar demasiadas reglas podría hacer que los desarrolladores ignoren los “issues” y socaven la efectividad de la herramienta. Para obtener más información sobre la funcionalidad de la Quality Gate, visita la página de documentación del [Quality Profile](https://docs.sonarqube.org/latest/instance-administration/quality-profiles/)  de SonarQube.

## Conclusión

Para terminar, te instamos a recordar lo que hemos enfatizado todo el tiempo: **una práctica de seguridad y calidad de código efectiva debe convertirse en algo esencial y estar bien integrada en el flujo de trabajo de tu equipo**. 

No debería ser disruptivo ni requerir que los desarrolladores se conviertan en expertos en seguridad y calidad de código. 

Una Quality Gate aporta esta consistencia junto con una clara señal de Continuar / No-continuar en el flujo de trabajo.

Texto original: [blog.sonarsource.com](https://blog.sonarsource.com/clean_coding-quality_profile_quality_gate_guidance)


<br/>
<hr>
<br/>
<!--Calidad de Software Contact Form-->
<div id="contact-form">
	<h1>Contáctanos</h1>
	<p>Si necesitas ayuda con SonarQube o el desarrollo de software sostenible y de calidad, rellena el formulario y te responderemos en menos de 24 horas.</p>
<br/>
        <form action="https://formspree.io/f/xaygrdqg" method="POST">
          <div class="col-md-12 col-sm-12">
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <input type="text" name="name" class="form-control" placeholder="Tu nombre" id="name" required data-validation-required-message="Por favor escribe tu nombre.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <input type="email" name="email" class="form-control" placeholder="Correo electrónico" id="email" required data-validation-required-message="Por favor escribe tu dirección de correo.">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div>
              <input type="text" name="_gotcha" style="display:none"/>
            </div>
            <div class="row control-group">
              <div class="form-group-2 col-xs-12 floating-label-form-group controls">
                <textarea name="message" class="form-control" rows="3" placeholder="Tu mensaje" id="message" required
                          data-validation-required-message="Por favor escribe un mensaje."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="row control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <p><strong>excentia</strong> se compromete a respetar tu privacidad, y solo usaremos tu información para proporcionar productos, servicios y contenido que pueda ser de interés para tí.</p>
                <input type="checkbox" name="agreement" class="form-check-input" id="agreement" value="accept" required data-validation-required-message="Por favor lee y acepta la política de privacidad y los términos y condiciones">
                <label class="form-check-label" for="agreement">He leído y acepto la <a href="https://www.excentia.es/privacy" target="_blank">política de privacidad</a> y los <a href="https://www.excentia.es/pdf/excentia-terms-and-conditions.pdf" target="_blank">términos y condiciones</a></label>
              </div>
            </div>
            <div id="success"></div>
            <div class="block">
              <button type="submit" class="btn btn-warning btn-xl">Enviar mensaje</button>
            </div>
          </div>
        </form>

</div>


