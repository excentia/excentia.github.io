---
layout: post
title: 'Architecture as Code: la nueva forma de controlar la arquitectura en SonarQube'
description: Una nueva funcionalidad en SonarQube que te permite alinear tu diseño con la implementación real del sistema.
date: '2025-04-12T08:04:00Z'
author: Belén Casanovas
categories:

- sonarqube
- calidad
- devops

cover: /img/posts/2025-04-12-arquitectura-como-codigo-sonarqube.png

---

El equipo de Sonar ha incorporado en SonarQube una funcionalidad que permite a los equipos <strong>definir formalmente su arquitectura y verificarla automáticamente</strong>. ¡Te lo contamos!

## ¿Cuál es el problema?
Los sistemas de software son cada vez más complejos.

Cuando un nuevo desarrollador se incorpora a un proyecto, suele <strong>acudir a la documentación existente</strong> o preguntar a compañeros con más experiencia, quienes muchas veces acaban dibujando un esquema rápido en una pizarra. En algunos equipos se va un paso más allá y se utilizan herramientas <strong>como Miro, Lucid, Mermaid o PlantUML</strong> para representar gráficamente cómo está compuesto el sistema. Aunque esto puede ser útil, lo cierto es que estas descripciones informales rara vez reflejan fielmente la realidad.

Con el tiempo, las diferencias entre el diseño original y la implementación real se acumulan. Esta falta de alineación complica la planificación del trabajo, ya que cualquier cambio, por pequeño que parezca, puede <strong>generar efectos inesperados por no comprender del todo las dependencias del sistema</strong>. Esto se traduce en retrasos, más presión para entregar, y decisiones rápidas que añaden complejidad innecesaria, dificultando aún más el desarrollo futuro.

Incluso para desarrolladores experimentados, comprender por completo una base de código se vuelve imposible cuando esta supera varios <strong>cientos de miles de líneas</strong>. Y como el código está en constante evolución, cualquier modelo mental bien formado tiende a desmoronarse con cada nuevo commit.

Este modelo mental —la forma en la que conceptualizas la estructura del sistema— no es otra cosa que la arquitectura del software. En la mayoría de los equipos, la <strong>documentación arquitectónica</strong> se va quedando obsoleta. A esto se le conoce como erosión arquitectónica, cuando el diseño deseado y la implementación real se distancian cada vez más.

## Mantener el código alineado con tu modelo mental
Existen herramientas que ayudan a evitar esta erosión arquitectónica mediante la definición de <strong>reglas arquitectónicas</strong> formales y su verificación constante.

Un ejemplo es ArchUnit, una librería que permite escribir tests específicos para validar tu arquitectura y ejecutarlos como parte del pipeline, asegurando que tu diseño se mantiene intacto. Es mejor que nada, pero rápidamente te encontrarás con limitaciones.

Algunos inconvenientes de este enfoque son:

<strong>Dependencia del lenguaje</strong>: Si tu stack está compuesto por varios lenguajes, necesitarás una herramienta distinta para cada uno, lo que complica la configuración y el mantenimiento.

<strong>Las reglas no sustituyen al modelo</strong>: Un conjunto de reglas no proporciona una visión clara de alto nivel de la arquitectura. A diferencia de un diagrama, que muestra de un vistazo la estructura del sistema, con este enfoque tienes que leer el código de test para entender el diseño.

También existen herramientas comerciales más avanzadas, pero suelen ser costosas y difíciles de escalar para su uso diario en múltiples equipos.

## ¿Cómo ayuda Sonar?
Para ofrecer una solución más accesible y escalable, en SonarQube hemos introducido Architecture as Code: un enfoque declarativo e independiente del lenguaje que permite a los equipos definir la arquitectura, almacenarla junto al código y verificarla automáticamente durante el análisis en CI/CD.

Con Architecture as Code, ahora puedes:

- Definir la arquitectura como código, usando archivos YAML o JSON como modelo declarativo.

- Analizar automáticamente la estructura del código durante el análisis estático de Sonar, sin modificar el código fuente ni requerir configuraciones adicionales.

- Detectar divergencias arquitectónicas entre el modelo definido y el código real, generando incidencias en el código afectado.

- Modelar distintas perspectivas del sistema, como por ejemplo capas, funcionalidades o límites de dominio.

## Verificación continua de la arquitectura
Esto permite verificar de forma continua las restricciones arquitectónicas en tus pipelines, asegurando que cualquier cambio de código esté alineado con el modelo definido. Cualquier desviación se marcará como una incidencia asociada a las líneas de código que la provocan.

Architecture as Code <strong>está disponible en SonarQube Server</strong> a partir de la versión 2025 Release 2. Actualmente, esta funcionalidad permite detectar erosión arquitectónica en código Java. En SonarQube Cloud, también se admite para JavaScript y TypeScript. El soporte para Python y C# está en camino, y C++ está bajo evaluación. Puedes solicitar soporte para otros lenguajes.

## Definiendo la arquitectura: un ejemplo práctico
Una forma común de estructurar aplicaciones es mediante una <strong>arquitectura en capas</strong>, donde cada capa (como API, lógica de negocio y acceso a datos) debe mantenerse aislada. En Sonar, puedes definir esta estructura mediante perspectivas y restricciones.

Definir una perspectiva por capas
Este ejemplo define tres capas y garantiza su independencia, evitando dependencias no deseadas:

<pre><code>
perspectives:
  - label: "Layers"
    description: "Defines application layers and enforces separation of concerns."
    groups:
      - label: "API"
        patterns: ["**/api/**"]
      - label: "Business Logic"
        patterns: ["**/service/**"]
      - label: "Data Access"
        patterns: ["**/repository/**"]
    constraints:
      - from: ["Business Logic"]
        to: ["API"]
        relation: deny
        message: "Business logic should not depend on API layer."
      - from: ["Data Access"]
        to: ["Business Logic"]
        relation: deny
        message: "Data access should not depend on business logic."
</code></pre>

## Añadir una perspectiva por funcionalidades
Además de las capas, muchos equipos organizan el código por funcionalidades. Puedes añadir otra perspectiva que refleje esta estructura:

<pre><code>
perspectives:
  - label: "Features"
    description: "Defines feature-based boundaries."
    groups:
      - label: "User Management"
        patterns: ["**/features/user/**"]
      - label: "Payments"
        patterns: ["**/features/payments/**"]
    constraints:
      - from: ["User Management"]
        to: ["Payments"]
        relation: deny
        message: "User management should not depend on payments."
</code></pre>

Al definir múltiples perspectivas, tu equipo <strong>gana flexibilidad para modelar</strong> y reforzar tanto la estructura técnica (por capas) como la estructura funcional (por funcionalidades), permitiendo un control más completo del diseño del sistema.

Así, el equipo puede describir el sistema con sus propios términos, mientras Sonar se encarga de verificar que todo esté bajo control.

## Próximamente: Visualización interactiva
Definir la arquitectura como código está genial... ¿pero y si pudieras verla gráficamente?

Sonar está trabajando en una nueva funcionalidad para <strong>visualización de arquitectura en SonarQube</strong>, eliminando la necesidad de mantener diagramas manuales que se quedan obsoletos rápidamente.

Muy pronto, podrás explorar visualmente la estructura de tu código, interactuar con los elementos arquitectónicos definidos y comprobar si tu implementación sigue el diseño deseado, todo desde un mismo lugar. Se usará el mismo formato de arquitectura como código para definir, verificar y visualizar la arquitectura.

¡Y hasta aquí este artículo de hoy! Es una traducción del [blog de Sonar](https://www.sonarsource.com/blog/introducing-architecture-as-code-in-sonarqube/){:target="_blank"}. 
