---
layout: post
title: 'Una fuga de agua cambia el juego en la Gestión de la Deuda Técnica'
Description: Traducimos al español este interesante artículo de Olivier sobre la gestión de la deuda técnica. ¡No te lo pierdas!
date: '2015-07-24T13:56:00.000+02:00'
author: Olivier Gaudin
categories:

- sonarqube
- calidad

---
Hace unos meses, al final de una presentación a un cliente sobre el ‘Cambio de paradigma de la Calidad de la Calidad de Código’, se me acercó un representante y me dijo: "He estado siguiendo SonarQube y SonarSource durante los últimos 4 ó 5 años y estaba preguntándome cómo era posible que no supiera nada sobre los conceptos que usted acaba de presentar. ¿Dónde publicáis este tipo de información?". Le dije que todo estaba en nuestro blog y wiki y que yo le enviaría los enlaces. Bien pues...

Cuando lo miré unos días más tarde, me di cuenta de que en realidad no había mucho disponible, sólo pequeñas piezas como el anuncio de 2011 de SonarQube 2.5, la discusión de cómo utilizar el panel vistas diferenciales de 2013, el libro blanco sobre inspección continua de 2013, y el anuncio de SonarQube 4.3 del año pasado. Bien pues (de nuevo)... para un concepto que está en el centro de la serie 4.x de SonarQube, que hemos presentado a cada cliente y en cada conferencia en los últimos 3 años, y que utilizamos a diario para apoyar nuestro desarrollo en SonarSource, esas pocas menciones no son mucho.

Permítanme extenderme en esto y explicar cómo se puede gestionar de forma sostenible la deuda técnica, sin dolor, sin complejidad añadida, sin batallas interminables y casi sin coste. ¿Suena atractivo? ¡Comencemos!

En primer lugar, ¿por qué necesitamos un nuevo paradigma? Necesitamos un nuevo paradigma para la gestión de la calidad de código y la deuda técnica debido a que el enfoque tradicional es demasiado doloroso, y ha fracasado en general desde hace muchos años. Lo que yo llamo un enfoque tradicional es un enfoque donde se revisa periódicamente la calidad del código por un equipo de QA (control de calidad) o similar, generalmente justo antes de la liberación, y que se traduce en resultados sobre los que los desarrolladores deberían actuar antes de la liberación. Este enfoque puede funcionar a corto plazo, sobre todo bien respaldados por la gestión, pero falla constantemente a medio y largo plazo, debido a que:

- La revisión de código llega demasiado tarde en el proceso, y ninguna de las partes interesadas está dispuesta a corregir el problema; todo el mundo quiere entregar la nueva versión. <br>

- Los desarrolladores normalmente se retrasan porque un equipo externo hace recomendaciones sobre su código sin saber el contexto del proyecto. Y por cierto, el código está ya obsoleto. <br>

- Existe una clara falta de apropiación de la calidad del código con este enfoque. ¿Quién es responsable de la calidad? ¡Nadie! <br>

- Lo que se revisa es la aplicación entera antes de que entre a producción y, obviamente, no es posible aplicar los mismos criterios para todas las aplicaciones. Tendrá que haber una negociación para cada proyecto, lo cual drenará toda la credibilidad del proceso. <br>


Todo esto hace prácticamente imposible hacer cumplir un Umbral de Calidad, es decir, una lista de criterios para la decisión de enviar o no enviar una aplicación a producción.

Para alguien que trata de mejorar la calidad con un enfoque de este tipo, esto se traduce en algo así como: la cantidad total de nuestra deuda técnica es deprimente, ¿invertimos presupuesto para arreglarlo? En lugar de preguntar "¿por qué no es correcto en primer lugar?". La compañía podría decir que sí a la inversión. Pero luego hay otro problema: ¿cómo solucionar la deuda técnica sin caer en problemas de regresión? Esto no es divertido precisamente...

En SonarSource pensamos que varios parámetros de esta ecuación deben cambiar:

- Primero y más importante, los desarrolladores deben ser los propietarios de la calidad y ser los responsables últimos de ella. <br>

- El circuito de retroalimentación debe ser mucho más corto y se les debe avisar a los desarrolladores de los defectos de calidad tan pronto como se detecten. <br>

- El umbral de la calidad debería estar unificado para todas las aplicaciones. <br>

- El coste de la implementación de un enfoque de este tipo debe ser insignificante, y no debe requerir la validación de alguien de fuera del equipo. <br>

- Incluso cambiando estos parámetros, sigue siendo necesaria la revisión de código, ¡pero creo que puede y debe ser más divertido! ¿Cómo lo logramos? <br>


Cuando tienes una fuga de agua en casa, ¿qué haces primero? ¿Detener la fuga o secar y fregar el piso? La respuesta es muy sencilla e intuitiva: detener la fuga. ¿Por qué? Porque sabes que cualquier otra acción será inútil y que es sólo cuestión de tiempo que la misma cantidad de agua esté de nuevo en el suelo.

Así que ¿por qué tendemos a comportarnos de manera diferente con la calidad del código? Cuando analizamos una aplicación con SonarQube y averiguamos que tiene una gran cantidad de deuda técnica, por lo general lo primero que queremos hacer es secar y fregar – eso, o idear un plan de remedio. ¿Por qué no aplicamos la lógica simple que usamos en casa al manejar nuestra calidad del código? No sé por qué, pero sí sé que el enfoque de remediar primero no es nada bueno y conduce a todos los desafíos enumerados anteriormente.

El arreglo de la fuga significa poner toda la atención en el código "nuevo", es decir, el código que se ha añadido o cambiado desde la última versión. Entonces, todo es más fácil:
El umbral de calidad se puede ejecutar cada día, y pasarlo es posible. No hay sorpresa en el momento de la liberación.

Es muy difícil para un desarrollador retirar los problemas que tuvo el día anterior. Y, por cierto, creo que estará muy contento con la oportunidad de solucionar los problemas, mientras el código está fresco todavía. 

Hay una responsabilidad clara de la calidad del código.

Los criterios para liberar o no, son consistentes en todas las aplicaciones y compartidos entre los equipos. En efecto, el código nuevo es código nuevo, independientemente de la aplicación en la que se hace.
El coste es insignificante porque es parte del proceso de desarrollo.

Como beneficio adicional, el código que se ha cambiado más, tiene mayor capacidad de mantenimiento, mientras que el código que no se ha cambiado, tiene un mantenimiento más bajo; lo cual tiene mucho sentido.

Estoy seguro de que te estás preguntando: ¿y luego qué? ¡Luego nada! Debido a la naturaleza del software y el hecho de que seguimos haciendo cambios en él (los clientes afirman generalmente que el 20% de su base de código cambia cada año), se reducirá la deuda técnica de un modo natural. Y de donde no hay, no se puede sacar :)