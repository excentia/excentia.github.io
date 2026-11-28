---
layout: post
title: 'Reflexiones sobre el impacto de la IA en el sector'
description: ¿Qué ha cambiado? ¿Adopción de la IA actual? ¿Realmente somos más productos? ¿Cuáles son los riesgos? ¿Qué podemos plantear de cara al futuro?
date: '2026-11-30T08:00:00Z'
author: Antonio Calero
categories:

- atlassian
- sonar
- devops
- opinion

cover: /img/posts/2026-11-30-reflexiones-impacto-IA.png

---

Durante el **Sonar Connect 2026** en Madrid tuve la oportunidad de participar en una mesa redonda para compartir experiencias en cuanto a cómo está la IA impactando en las organizaciones. Las conversaciones fueron muy interesantes durante toda la jornada y es por eso que quería compartir todas esas reflexiones para los diferentes bloques de contenidos que abordamos en la mesa.


## ¿Qué está cambiando con la llegada de la IA en el desarrollo de software?

En **excentia** llevamos muchos años intentando ayudar a las organizaciones a hacer las cosas mejor. Nuestro lema lo define muy bien, **tu mejora, nuestra motivación**. Trabajamos principalmente en dos ámbitos que están muy relacionados: la calidad y seguridad del software, por un lado, y la gestión de los procesos y la colaboración de los equipos, por otro.

Trabajamos con organizaciones de sectores muy diferentes, desde banca y energía hasta administraciones públicas y empresas tecnológicas. Además, tenemos nuestra propia línea de desarrollo de productos software para el Marketplace de Atlassian, por lo que muchos de los problemas que nos cuentan nuestros clientes también los vivimos nosotros como desarrolladores.

Lo interesante es que, durante años, hemos ayudado a las organizaciones a automatizar la verificación del software que escribían sus desarrolladores. ¿Y qué pasa ahora? Pues que ahora nos encontramos con que hemos añadido un **nuevo integrante en el equipo**: la inteligencia artificial.


Y resulta que es un desarrollador extraordinariamente rápido, que no se cansa, que trabaja las 24 horas del día y que, cuando se equivoca, puede hacerlo con una seguridad en sí mismo impresionante.

<blockquote>
<strong>La llegada de la IA y de estos nuevos agentes que participan en los procesos y en la generación de código no cambia nuestra misión, pero sí cambia enormemente la escala del problema</strong>. 
</blockquote>

Antes el reto era ayudar a los desarrolladores a escribir mejor código. Ahora además de eso también tenemos que ayudarles a gestionar, entender y verificar todo el código que son capaces de generar con IA.


## Adopción y madurez en las organizaciones

Estamos viviendo una situación bastante curiosa, porque la velocidad de adopción individual de la inteligencia artificial es mucho mayor que la velocidad de adopción de las organizaciones.

Nos encontramos con empresas que todavía están debatiendo si permiten o no utilizar IA, mientras que probablemente muchos de sus desarrolladores ya la están utilizando de alguna manera.

También encontramos organizaciones que han adquirido licencias corporativas de asistentes de código y consideran que, por ese motivo, ya han adoptado la inteligencia artificial.

Pero comprar licencias de IA no significa transformar tu proceso de desarrollo, de la misma forma que comprar una licencia de Jira no te convierte automáticamente en una organización ágil o comprar SonarQube no hace que tu software sea seguro.

Desde nuestro punto de vista, podemos diferenciar cinco niveles de madurez:

<blockquote style="border-left: 4px solid lightgray;">
<h4 style="margin-top:0px">Nivel 1. Prohibido/Limitado</h4>
<p>
Las organizaciones tienen dudas en el uso de la IA. (principalmente por privacidad y seguridad) y restringe o bloquea su utilización.
</p>
</blockquote>

<blockquote style="border-left: 4px solid gray;">
<h4 style="margin-top:0px">Nivel 2. Adopción individual</h4>
<p>
Cada desarrollador experimenta por su cuenta. Sin que nadie lo sepa está usando IA con sus cuentas personales y empezándole a sacar partido. Esto se conoce como IA en la sombra (Shadow AI).
</p>
</blockquote>

<blockquote style="border-left: 4px solid black;">
<h4 style="margin-top:0px">Nivel 3. Adopción corporativa</h4>
<p>
La organización da un paso al frente y apuesta por la IA. Define herramientas autorizadas, licencias y políticas de uso.
</p>
</blockquote>

<blockquote style="border-left: 4px solid green;">
<h4 style="margin-top:0px">Nivel 4. Integración en procesos</h4>
<p>
IA integrada en el ciclo de desarrollo, con controles y métricas o en otros procesos de la organización.
</p>
</blockquote>

<blockquote style="border-left: 4px solid darkgreen;">
<h4 style="margin-top:0px">Nivel 5. Agentes autónomos</h4>
<p>
Agentes que ejecutan tareas con autonomía, límites y verificación, y no dependen de ningún usuario que les pida lo que hacer.
</p>
</blockquote>


La diferencia que considero más importante entre las organizaciones que avanzan y las que se quedan experimentando no es necesariamente la tecnología que utilizan, sino cómo la incorporan a sus procesos.

Las que avanzan dejan de preguntarse qué herramienta de IA deben comprar y empiezan a preguntarse **qué problemas quieren resolver** con ella.

Además, estas organizaciones establecen unas reglas del juego claras: qué información se puede compartir, qué herramientas están autorizadas, qué controles debe superar el código y quién es responsable del resultado final.

Y esto no es algo que solo ocurra en nuestros clientes. Nosotros mismos hemos tenido que afrontar estas cuestiones al incorporar la IA en nuestros procesos internos, establecer políticas de uso corporativo y explorar el desarrollo de nuestros propios agentes.

¿Y qué pasa en aquellos lugares donde se ha frenado la adopción? No creo que prohibir completamente la IA sea una estrategia sostenible a largo plazo. Pero permitirla sin ningún tipo de control tampoco es una estrategia. **La alternativa a la IA gobernada puede terminar siendo la IA invisible.**

## Productividad frente a calidad 

La IA permite generar código a una velocidad sin precedentes, pero ¿estamos preparados para revisarlo, verificarlo y mantenerlo? ¿Estamos acelerando el desarrollo o simplemente desplazando los cuellos de botella?

Creo que estamos cometiendo un error bastante importante al confundir la velocidad de generación de código con la productividad del desarrollo de software.

Escribir código es solo una pequeña parte del ciclo de vida del software. Después hay que revisarlo, probarlo, desplegarlo, mantenerlo, corregirlo y garantizar que es seguro.

> **El código no es el producto. El producto es el valor que entregamos a nuestros usuarios.**

El problema de la productividad instántanea se explica fácilmente con una metafora. Supongamos que estamos en un sistema de fabricación industrial (automóviles por ejemplo) y de repente de un día para otro la velocidad de la cadena de construcción se multiplica por 100 pero sin embargo se mantiene exactamente igual la cadena de verificación. 

¿Qué hemos conseguido? ¿Somos cien veces más productivos porque la construcción se ha acelerado? ¿O simplemente tenemos un parking lleno de coches pendientes de revisión?

Con la IA nos puede estar pasando exactamente eso en el mundo del desarrollo de software. Con la IA hemos facilitado de repente toda la construcción del código, que era el cuello de botella que hemos tenido a lo largo de la historia. Y ahora ese cuello de botella se desplaza hacia la fase de verificación.

> **Si automatizamos la generación de código, pero no su verificación, simplemente estamos automatizando la creación de problemas potenciales.**

Además, hay un segundo problema. El código que no has escrito tú puede resultar más difícil de revisar porque no necesariamente conoces todas las decisiones que se han tomado para generarlo con la IA.

Y si revisar código generado por IA requiere más esfuerzo, podemos terminar ahorrando tiempo en la escritura, pero perdiéndolo en la revisión y el mantenimiento.

**Por eso creo que el siguiente gran reto del desarrollo de software es industrializar la verificación.**

Si hemos automatizado la generación de código, tenemos que automatizar también, en la medida de lo posible, su verificación.

Y esto no significa que no debamos confiar en la IA. Significa que tenemos que establecer mecanismos objetivos para saber cuándo podemos confiar en su resultado.

> **No necesitamos generar más código. Necesitamos entregar mejor software.**


## Seguridad y riesgos 

A medida que los desarrolladores delegan más tareas en la IA y los agentes adquieren mayor autonomía aparecen nuevos riesgos, y algunos pueden pasar desapercibidos.

Debemos diferenciar dos tipos de riesgos: **los riesgos del código generado por la inteligencia artificial** y **los riesgos derivados del propio uso de la inteligencia artificial**.

En cuanto al código, muchos de los problemas que nos encontramos no son nuevos. Seguimos hablando de vulnerabilidades, problemas de control de acceso, exposición de información sensible, dependencias inseguras o errores de diseño.

Lo que cambia es la velocidad y la escala a la que podemos introducir esos problemas.

Pero hay algo que me preocupa especialmente: **nuestra percepción de confianza**.

Cuando una IA genera código, lo presenta de una forma muy convincente. Está bien estructurado, tiene comentarios, incluye documentación y parece profesional. Eso puede transmitirnos una sensación de seguridad que no necesariamente está justificada.

**El hecho de que un código parezca correcto no significa que sea correcto.**

Una aplicación puede funcionar perfectamente desde el punto de vista técnico y, sin embargo, permitir que un usuario haga algo que nunca debería poder hacer.

> **El mayor riesgo no es que la inteligencia artificial se equivoque. Es que dejemos de comprobar si se ha equivocado.**

Por otro lado, estamos empezando a pasar de asistentes que nos sugieren código a agentes capaces de actuar sobre nuestros sistemas.

Ya no estamos hablando únicamente de una herramienta que genera respuestas. Hablamos de agentes que pueden acceder a repositorios, ejecutar comandos, modificar archivos, utilizar APIs o interactuar con otras aplicaciones.

Eso cambia completamente el modelo de seguridad.

Debemos gestionar los accesos de un agente con el mismo rigor con el que gestionamos los de un empleado o una cuenta de servicio para evitar esos riesgos. No tiene sentido darle acceso a todo simplemente porque puede ser más productivo.

Necesitamos aplicar principios que conocemos desde hace muchos años: mínimo privilegio, segregación de funciones, trazabilidad, revisión de acciones y aprobación humana cuando el impacto lo requiere.

**La tecnología es nueva, pero muchas de las buenas prácticas de seguridad ya las conocemos.**

Y yendo más allá, a utilización de IA para desarrollar un producto no elimina la responsabilidad de la organización que lo comercializa. Para los fabricantes de productos software sujetos a normativas, sigue siendo necesario gestionar la seguridad y las vulnerabilidades durante su ciclo de vida.

> **La IA puede escribir el código, pero no podemos delegar en ella la responsabilidad sobre ese código.**

## Gobernanza y entrega de valor

Las organizaciones deberían empezar por establecer algo muy sencillo: las reglas del juego deben ser las mismas independientemente de quién escriba el código.

No deberíamos necesitar un estándar de calidad para el código escrito por humanos y otro diferente para el código escrito por inteligencia artificial.

> **La calidad del software no debería depender de quién ha escrito el código, sino de los controles que ese código ha superado.**

Si tenemos una política que establece que no podemos introducir nuevas vulnerabilidades, que debemos mantener determinados niveles de cobertura de pruebas o que el software debe superar unos controles antes de llegar a producción, esos controles deberían aplicarse siempre.

Y aquí creo que tenemos una ventaja. Las organizaciones que llevan años trabajando con prácticas de <a href="https://www.excentia.es/clean-as-you-code-codigo-limpio-que-es-conceptos-basico" target=_blank>Clean as You Code</a>, <a href="https://www.excentia.es/vocabulario-clave-devops" target=_blank>integración continua</a>, <a href="https://www.excentia.es/que-es-un-quality-gate-sonarqube" target=_blank>Quality Gates</a> y <a href="https://www.excentia.es/Beneficios-de-adoptar-devops" target=_blank>DevSecOps</a> ya tienen una parte importante del camino recorrido.

No necesitan reinventar completamente su proceso de desarrollo. Necesitan adaptar sus controles a un escenario donde el volumen de código y el grado de autonomía pueden ser mucho mayores.

En cuanto a cómo demostrar el valor, creo que tenemos que tener muchísimo cuidado con las métricas.

Si compramos una herramienta de IA y medimos su éxito por el número de licencias activadas, los tokens consumidos, el número de prompts realizados o el porcentaje de código generado, estamos midiendo utilización, pero no necesariamente valor.

Lo que realmente nos interesa saber es si entregamos funcionalidades antes, si reducimos los defectos, si disminuye el esfuerzo de mantenimiento, si mejora la seguridad y si nuestros desarrolladores pueden dedicar más tiempo a resolver otros problemas o retos más importantes.

Y, para medir una mejora, necesitamos conocer nuestro punto de partida.

Si no sabemos cuánto tardábamos en entregar una funcionalidad antes de incorporar IA, difícilmente podremos demostrar que ahora somos más rápidos.

Lamentablemente muchas organizaciones no son capaces de medir la entrega de valor en sus procesos actuales, así que lo tendrán mucho más difícil cuando entre en juego la IA en sus procesos.

## El futuro que nos espera

Si tuviera que recomendar una sola acción a los responsables tecnológicos de las organizaciones, les diría que inviertan tanto en la capacidad de verificar software como en la capacidad de generarlo.

Estamos dedicando mucho tiempo a evaluar modelos de inteligencia artificial, herramientas de generación de código y agentes. Queremos saber cuál es más rápido, cuál genera mejor código o cuál es capaz de realizar más tareas de forma autónoma.

Pero creo que deberíamos dedicar al menos la misma atención a responder otra pregunta: **¿cómo vamos a saber que el resultado es correcto?**

Las organizaciones que sean capaces de responder a esa pregunta podrán aprovechar mucho mejor la inteligencia artificial, porque podrán proporcionar mayor autonomía a sus equipos y a sus agentes sin perder el control.

Durante mucho tiempo hemos valorado a los desarrolladores por su capacidad de escribir código. Cada vez será más importante su capacidad para entender problemas, diseñar soluciones, proporcionar contexto a los agentes, tomar decisiones y verificar resultados.

Y eso no significa necesariamente que vayamos a necesitar menos conocimiento técnico. Al contrario, para poder determinar si una solución generada por una IA es buena, necesitamos entender qué hace que una solución sea buena.

Las empresas que tendrán una ventaja competitiva no serán necesariamente las que más código puedan generar con inteligencia artificial, sino las que sean capaces de convertir esa capacidad de generación en software fiable y en valor para sus clientes.

> **Cuanto más fácil sea escribir código, más valioso será saber qué código merece la pena escribir.**


## Reflexión final 

Durante décadas, uno de los grandes retos de la industria del software ha sido nuestra capacidad limitada para desarrollar todas las soluciones que necesitábamos.

La inteligencia artificial está empezando a eliminar esa limitación. 

Pero ahora nos enfrentamos a una nueva: nuestra capacidad para entender, verificar y confiar en todo lo que somos capaces de generar.

Estamos viviendo uno de los momentos más interesantes de la historia del desarrollo de software. Hay que ser optimista respecto a las posibilidades de la inteligencia artificial, pero debemos ser inteligentes también a la hora de utilizarla.

Las organizaciones que triunfen no serán necesariamente las que generen más código, sino aquellas que sean capaces de generar más valor con un software en el que podamos confiar.

Experimentad, innovad, utilizad la inteligencia artificial, pero nunca dejéis de verificar.
