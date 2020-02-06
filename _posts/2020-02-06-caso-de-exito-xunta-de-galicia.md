---
layout: post
title: 'Migración y actualización de SonarQube para la Axencia para a Modernización Tecnolóxica (Amtega)'
description: Detallamos el caso de Amtega, organismo perteneciente a la Xunta de Galicia, en el que realizamos una compleja migración y actualización de versión de SonarQube acompañada del establecimiento de una política de calidad basada en inspeccción continua de código. 
date: '2020-01-30T08:00:00.000+01:00'
author: Andrea Crespo. 
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/
modified_time: '2018-10-01T08:00:00.000+01:00'
---

La [Agencia para la Modernización Tecnológica de Galicia](https://amtega.xunta.gal/es/objetivos) (AMTEGA), adscrita a la Presidencia de la [Xunta de Galicia](https://www.xunta.gal/portada) tiene como objetivos básicos la definición, el desarrollo y la ejecución de los instrumentos de la política de la Xunta de Galicia en el campo de las tecnologías de la información y la comunicación, la innovación y el desarrollo tecnológico.
Entre sus objetivos concretos, destacan los de transformar mediante el uso de las TIC, la administración pública autonómica, y el de poner a disposición de la ciudadanía y las empresas gallegas, contenidos y servicios públicos digitales avanzados. 

La agencia aglutina las áreas tecnológicas de todas las consellerías, con el consiguiente volumen en gestión de herramientas TIC y proyectos de software. Desde el departamento de seguridad y calidad, se encargan de la gestión de la calidad y el aseguramiento de todo ello, usando entre otras múltiples herramientas, SonarQube. 


Amtega contaba con un completo ecosistema de inspección continua de código que, sin embargo, había quedado obsoleto y que por tanto, no respondía eficientemente ni avanzaba al mismo ritmo que las aplicaciones que trata de analizar y de las que trata de asegurar su calidad. 

Es una situación recurrente, que en excentia observamos tanto en las herramientas de Atlassian como en SonarQube. Es sorprendente que en un sector tan avanzado y de cambio constante como el del software, se siga siendo tan reacio a mantener y actualizar aplicaciones y herramientas clave para el negocio. 
Con este caso, queremos exponer los argumentos necesarios para justificar una actualización por compleja que ésta sea, y cuales son las consecuencias de no hacerlo, o desarrollarlo de manera inadecuada.


## Renovación y actualización de versión: un salto en calidad

Tras el [cambio](https://www.excentia.es/novedades-importantes-en-sonarsource) en el modelo de licenciamiento llevado a cabo por SonarSource a finales de 2017, excentia emprendió una iniciativa informativa para la actualización de versiones de SonarQube, dados los beneficios que las nuevas funcionalidades introducidas suponían para las organizaciones.

Fue durante esta iniciativa, cuando nos pusimos en contacto con los responsables de calidad de Amtega. Su respuesta fue inmediata: estaban satisfechos con el uso de SonarQube pero echaban en falta ciertas funcionalidades. Entre ellas, algunas reglas específicas para análisis de lenguajes. Cuando seguimos avanzando en la conversación averiguamos el por qué: usaban una versión de SonarQube 4.5.6 (cuando la LTS disponible era ya una 6.7).

Muchas de las reglas que creían que tendriamos que desarrollar para ellos de manera personalizada, ya estaban disponibles en SonarQube por defecto. Además, el concepto de calidad había cambiado por completo: SonarQube ya había incorporado el análisis de seguridad y clasificaba los asuntos como vulnerabilidades, code smells y bugs. Los Quality Gates y los Quality Profiles eran una novedad para el equipo. 

En resumen, Amtega, una organización pública avanzada en el uso TIC y con grandes profesionales dispuestos a seguir avanzando y mejorando la calidad de sus entregas, se estaba encontrando con dificultades para poder hacerlo, debido a una herramienta y una metodología antigua. Si no seguimos construyendo casas con paja y barro, ¿por qué seguimos midiendo la calidad con herramientas desfasadas? Si no ponemos a disposición de un obrero y de un arquitecto la tecnología y las herramientas adecuadas, sus construcciones se vienen abajo. 

El cambio que estábamos a punto de emprender era radical y complejo. Toma tiempo y riesgos. Pero como en toda decisión de negocio es la inversión a medio y largo plazo que vamos a obtener a cambio, la que debe determinar nuestras decisiones. En Amtega podrían seguir entregando mucho software, pero mantener éste y su deuda técnica a rajatabla se estaba convirtiendo en una misión imposible y poco rentable.
La buena disposición y la profesionalidad de los responsables del proyecto, ha conseguido que haya sido todo un éxito. Al proyecto tuvo que sumarse por estas razones, otra dimensión añadida: era necesario establecer una política de calidad, un manual de uso de SonarQube basado en el nuevo paradigma Fix the Leak, y evangelizar prácticas basadas en el análisis continuo, mentalidad *shift left* y DevOps. 

## Migración y actualización de SonarQube y el ecosistema de inspección continua

¿Qué acciones hemos realizado? Os las contamos de manera resumida: 

* Migración del histórico de métricas y los proyectos que existían en el SonarQube de la Amtega. 

* Actualizar la versión de SonarQube a la última LTS disponible (7.9), poniendo a disposición toda una nueva suite de funcionalidades y análisis extendidas. Todo ello, sin tener que recurrir a un licenciamiento comercial de la herramienta. Amtega apuesta por el uso de herramientas OS como la versión Community de SonarQube, integrada con Jenkins. 

* Configuración del ecosistema de CI con Jenkins. Integración avanzada de ambas herramientas.

* Documentación de SonarQube y establecimiento de política de calidad. 

* Implantación de OWASP usando la potencia propia de la herramienta y añadiendo la capacidad de plugins externos. La seguridad ha sido sin duda, uno de los grandes beneficios obtenidos con la actualización de la versión. 

* Creación de un sistema de alertas ante eventos que se produzcan durante la ejecución de SonarQube.

* Incrementar el número de reglas. Ampliar los perfiles de calidad y adaptar el nivel de exigencia con respecto a la calidad del código en la organización. 

* Formación presencial tanto al equipo de Amtega como al conjunto de proveedores y desarrolladores de aplicaciones de código.


## Mirando hacia el futuro: la calidad software es un trayecto, no un destino

Han sido muchos los cambios introducidos y mucho el trabajo que ahora tienen en la Amtega para asimilarlos y adaptarlos. 

Quedan por delante futuros proyectos, esta vez sí, para incorporar reglas más específicas de arquitectura y complejidad más avanzada. De la misma manera, se quiere trabajar hacia la obtención de un portfolio estructurado de proyectos y quizás extender más el uso que se realiza de SonarQube. 

En el camino de mejora continua, no se toman desvíos, ni siquiera existe un fin de trayecto, a pesar de la proximidad de la sede de Amtega a Finisterre, todos sabemos que ese no es el final, ni siquiera de la tierra.

Grazas pola acollida, galegos!

