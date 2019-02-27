---
layout: post
title: 'Seguridad de aplicaciones, a la manera de SonarSource'
description:  SonarQube refuerza su análisis de código desde la perspectiva de la seguridad de aplicaciones con un un nuevo tipo de evidencia, los security hotspots 
date: '2019-02-27T08:00:00.000+01:00'
author: Traducción, interpretación y ampliación de Andrea Crespo. Artículo original de SonarSource
categories: 
- sonarsource
- calidad

cover: /img/posts/2019-02-27-security-hotspots-sonarqube.png
modified_time: '2019-02-27T08:00:00.000+01:00'
---

*Traducción del [artículo original](https://blog.sonarsource.com/pragmatic-application-security) publicado en el blog de SonarSource por [Clint Cameron](https://twitter.com/clintcameron?lang=es)* 


El objetivo en SonarSource es hacer posible que los desarrolladores de todo el mundo liberen un código limpio y de calidad. Específicamente, nos referimos a minimizar errores, *code smells* y vulnerabilidades. Si destacamos las vulnerabilidades, puede ser difícil mantenerse a la vanguardia y los esfuerzos por gestionar la seguridad pueden parecer un juego de [Whack-a-Mole](https://www.minijuegos.com/juego/whack-a-mole). Os entendemos y creemos que existe una forma efectiva de desarrollar aplicaciones más seguras.


# ¿Por qué nos importa la seguridad de las aplicaciones?

Con todas las amenazas ocultas ahí fuera, la seguridad de las aplicaciones sigue siendo un tema prioritario. A pesar de esa preocupación, el número de violaciones de seguridad continúa aumentando junto con el número de cuentas comprometidas que contienen datos de usuarios. ¿Por qué sucede esto incluso con todo el énfasis aplicado en mejorar la seguridad? ¡La respuesta simple es que no es fácil! El desafío es mejorar la seguridad sin interrumpir la integración continua existente o ralentizar la velocidad de entrega. Reducir las vulnerabilidades en las aplicaciones requiere dedicación, persistencia y un plan de acción efectivo.

Habiendo innumerables artículos sobre este tema, ¿en qué se diferencia este artículo y por qué te estamos hablando de esto ahora? Simplemente pensamos que la comunidad de desarrollo ha madurado y hemos alcanzado un hito importante en cómo abordar el problema. **En SonarSource, abogamos por un enfoque pragmático que involucre la detección de *[Security Hotspots](https://docs.sonarqube.org/7.4/user-guide/security-reports/)*. Los *hotspots* son piezas de código sensibles a la seguridad a través de las cuales puede fluir una vulnerabilidad. Requieren una evaluación por parte de un experto en seguridad para determinar si son verdaderas vulnerabilidades.**


<a target="_blank"><img class="center" width="100%" alt="SonarQube Demo Project" title="SonarQube Demo Project - Security Hotspots" src="/img/posts/security_hotspot_detection_sonarqube_7.4.png"></a> 


Es decir, SonarQube incorpora un nuevo tipo de evidencia indicativa del nivel de seguridad, los Security Hotspots. Estas evidencias son un paso previo a las evidencias de tipo vulnerabilidad - creando así una doble capa o filtro para asegurar la seguridad de las aplicaciones. Un experto en seguridad evaluará los *Security Hotspots* detectados con el fin de determinar si se tratan efectivamente de vulnerabilidades que pongan en peligro la seguridad. 

A este nuevo tipo de evidencia, se incorpora un nuevo informe. **Los informes de seguridad han sido diseñados para mostrar de manera visual el estado general de la seguridad de tus aplicaciones, con categorías y subapartados mostrando tu posición con respecto a estándares de [OWASP Top 10](https://www.owasp.org/index.php/Top_10-2017_Top_10), [SANS Top 25](https://www.sans.org/top25-software-errors) y [CWE](http://cwe.mitre.org/).**



<a target="_blank"><img class="center" width="100%" alt="SonarQube Demo Project" title="Nuevos informes de seguridad en SonarQube" src="/img/posts/security-report-sonarqube.PNG"></a> 

Puedes ver toda la información sobre los informes de seguridad en la [documentación oficial de SonarQube](https://docs.sonarqube.org/7.4/user-guide/security-reports/)


# Cómo ayudan los Security Hotspots

Los *Security Hotspots* se contrastan con vulnerabilidades conocidas, como inyecciones de defectos. Los *Security Hotspots* pueden ser igual de peligrosos, pero requieren de una revisión dedicada para determinar si representan un problema. Piensa en la detección de *hotspots* de la misma manera que el marcado con banderas en áreas de preocupación para que se pueda investigar adecuadamente por un experto. Sin la detección de *hotspots*, el equipo de desarrollo podría pasar semanas explorando el código sin saber dónde enfocar sus esfuerzos.

Si tratamos el problema detectando vulnerabilidades conocidas y también marcando puntos de acceso como vulnerabilidades potenciales, entonces se despeja el camino hacia una mejor seguridad. Las vulnerabilidades conocidas son responsabilidad del equipo de desarrollo, que debe corregirlas. Los *Security Hotspots* son tratados por una persona o equipo que está total o parcialmente dedicado a revisar y confirmar las vulnerabilidades y comunicarlas al equipo de desarrollo. Cuando empiezas a corregir vulnerabilidades de seguridad y revisas *Security Hotspots, estás creando un proceso de [ciclo de vida de desarrollo de software seguro (S-SCLD)](https://betabeers.com/blog/ciclos-vida-del-software-seguro-s-sdlc-346/).

En la práctica, este enfoque tiene varios beneficios:

* Puede mantenerse en el tiempo. No es una solución cortoplazista a un problema futuro.
* No afecta, ni interrumpe en tu proceso de desarrollo
* No te arruinarás

La recompensa de un enfoque de S-SCLD es ahorrar un tiempo y dinero considerables, al detectar problemas en las primeras fases del proceso. 

<a target="_blank"><img class="center" width="100%" alt="Gráfico costes de resolución de errores software por fases" title="Gráfico costes de resolución de errores software por fases" src="/img/posts/coste-solucionar-defectos-codigo.png"></a> 


# Encajando en el punto de vista de la seguridad de aplicaciones

Retrocedamos por un momento y hablemos sobre por qué un enfoque pragmático tiene sentido. Un elemento clave es que se requieren técnicas complementarias para lograr una cobertura integral y, en última instancia, un código más seguro. A nivel completo, el tratamiento de la seguridad de las aplicaciones puede dividirse en técnicas [SAST](https://en.wikipedia.org/wiki/Static_program_analysis), [DAST](https://en.wikipedia.org/wiki/Dynamic_program_analysis) y [SCA](https://en.wikipedia.org/wiki/Static_program_analysis). 

En SonarSource, actualmente estamos enfocados en SAST, pero con un ojo en SCA como un enfoque de desarrollo futuro. Esto no quiere decir que el DAST no sea valioso; sino que su enfoque está más centrado en la relevancia y el contexto de los flujos de inspección y despliegue continuo. DAST se basa en testing de caja negra y se implementa en sentido descendente al equipo de desarrollo. Por el contrario, una estrategia eficaz de SAST puede adaptarse perfectamente a su proceso de desarrollo. 

Si somos honestos, no hay ninguna razón legítima por la que los equipos de desarrollo no adopten y automaticen una metodología SAST. Esto se alinea convenientemente con todas las filosofías de "cambio a la izquierda" que tanto hemos escuchado. Se resume de manera sencilla: si las vulnerabilidades son malas, ya que los desarrolladores son los que las introducen deben ser ellos también quienes las detecten y eliminen. Entonces, ¿por qué esto no está sucediendo realmente en la práctica? Las razones más relevantes son:

* Puede ser muy caro eliminar todos esos asuntos.

* No puedes "moverlo todo a la izquierda". Por alguna razón existen los expertos en seguridad. 

* Mejorar la detección de vulnerabilidades es muy probable que tenga efectos secundarios.


No puedes evitar estos hechos, pero aún puedes implementar una herramienta y método de control de seguridad efectivo y significativo. Y eso nos devuelve a un enfoque pragmático en el que creemos que las *Security Hotspots* mantienen a raya los efectos secundarios y ayudan a mantenerse enfocado en el desarrollo.

# Teniendo todos estos enfoques en cuenta...

Una estrategia efectiva combina los siguientes conceptos:

* Actúe inmediatamente ante las vulnerabilidades definidas que [nuestros productos](https://www.sonarsource.com/products/sonarqube/) pueden detectar con técnicas específicas como el [*taint analysis*](https://en.wikipedia.org/wiki/Taint_checking).

* Soluciona el problema en el entorno de desarrollo, no después

* Emplea el análisis con *Security Hotspots* para centrarte en revisar lo necesario.

* Emplea a alguien concreto de tu equipo para revisar los *Security Hotspots*. Esta persona puede ser un miembro del equipo de desarrollo que esté más familiarizado con problemas de seguridad o alguien externo al equipo con conocimientos específicos de revisión de seguridad (al que desde ahora se le ha provisto con una buena forma de colaborar eficientemente con los desarrolladores)

* Haz a los desarrolladores conscientes de los riesgos de seguridad asociados a cada tipo de *hotspot* (por ejemplo empleando una herramienta "educacional" para aumentar la consciencia sobre la seguridad)


Seguir estas técnicas, tendrá como resultado la obtención de aplicaciones más seguras. Sí, tomará algo de tiempo y dedicación, pero se puede lograr y mantener con el tiempo. Es una oportunidad para reducir su exposición a la vulnerabilidad, al mismo tiempo que mantiene el espíritu de su equipo de desarrollo. ¡Todo es realmente bueno!

*La detección de *Security Hotspots^* está disponible ahora en SonarQube y SonarCloud para PHP, C#, T-SQL, VB.NET, Java y Swift. La detección de inyecciones de defectos está disponible en SonarQube Developer Edition y en SonarCloud, para Java y C#.*

*Se agregan continuamente nuevas reglas y lenguajes: visite el sitio rules.sonarsource.com para obtener un listado completo y actualizado*
