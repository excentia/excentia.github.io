---
layout: post
title: 'Guía del pago por uso en Atlassian (UBP): qué cambia, qué se paga y cómo prepararte'
description: Descubre cómo funciona el pago por uso de Atlassian, qué está incluido, qué consume créditos y cómo controlar el consumo desde Atlassian Administration.
date: '2026-09-08T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-09-08-pago-por-uso-atlassian.png

---

Atlassian está introduciendo un **nuevo modelo de pago por uso (Usage-Based Pricing)** que complementa el modelo tradicional basado en el número de usuarios o seats. El cambio afecta a **diferentes capacidades de sus aplicaciones** y supone que, además de las licencias contratadas, las organizaciones tendrán asignaciones mensuales de uso para determinados servicios.

En la práctica, esto significa que **algunas capacidades de IA de Atlassian, Automation, Assets, Bitbucket y Customer Service Management (CSM)** pasan a gestionarse mediante diferentes medidores de consumo. Pero ¿qué está incluido en cada plan? ¿Qué funcionalidades consumen créditos o unidades de uso? ¿Qué ocurre cuando se supera la asignación? ¿Y dónde puede consultar un administrador cuánto está utilizando su organización? En **esta guía** explicamos cómo funciona el nuevo modelo de pago por uso de Atlassian y qué debes tener en cuenta en cada aplicación.
Este cambio se produce además en un contexto en el que Atlassian también ha anunciado una subida de precios de sus licencias Cloud. Si quieres conocer todos los detalles de ese cambio, puedes consultar nuestra [guía sobre la subida de precios de Atlassian](/actualizacion-precios-atlassian-2027).

<h2>¿Cómo funciona el nuevo modelo de pago por uso de Atlassian?</h2>

La mayoría de los planes Cloud de pago incluyen asignaciones mensuales de uso sin coste adicional, cuya cantidad depende del nivel del plan y del número de usuarios contratados. Estas asignaciones se renuevan mensualmente y el uso no consumido no se acumula para el periodo siguiente.

Además, algunas capacidades que **anteriormente eran ilimitadas** en determinados planes, como Automation y Bitbucket en Enterprise, pasan a contar con una asignación mensual definida.

El modelo se aplica **mediante diferentes medidores (meters)**, que permiten conocer cuánto consume cada organización de una determinada capacidad. Entre los principales medidores se encuentran: 

- Créditos de Rovo.
- Pasos de Automation.
- Objetos de Assets.
- Minutos de compilación y otros medidores de Bitbucket.
- Resoluciones de agentes de IA de Customer Service Management.

<h2>¿Qué ocurre cuando se supera la asignación incluida?</h2>

Superar la asignación mensual no significa necesariamente que una funcionalidad deje de estar disponible. Las organizaciones **pueden gestionar el uso adicional de diferentes maneras** mediante las siguientes opciones: 

- **Subir de plan o migrar a una Collection**, que puede ofrecer una capacidad de uso superior.
- Adquirir **paquetes de uso prepagados** (prepaid usage packs).
- Utilizar **consumo adicional (extra usage / pay-as-you-go)**, que permite continuar utilizando determinadas capacidades y **facturar el consumo que supere** la asignación incluida.

<h2>¿Qué es gratis y qué tiene coste en cada aplicación de Atlassian?</h2>

Cada aplicación tiene sus propios medidores y reglas. Algunas funcionalidades consumen una asignación incluida y otras siguen disponibles sin consumir ese medidor.

<h2>Rovo: créditos para las funcionalidades de IA</h2>

Rovo utiliza Rovo credits como unidad de medida para determinadas capacidades de IA.

Las consultas y acciones que consumen créditos se descuentan de la asignación mensual incluida en la organización. Cuando se supera esa asignación, el uso adicional puede ser facturable.

Entre las capacidades que pasan a consumir créditos se encuentran:

- Rovo Chat.
- Agentes de Rovo.
- Búsquedas con el modelo Think Deeper.
- Coding Agent.
- Determinadas llamadas a APIs de terceros (3P API calls).

**¿Qué sigue siendo gratuito?**

Según el modelo descrito para estas funcionalidades, no consumen créditos:

- Rovo Search.
- Resúmenes.
- Sugerencias inline.

Por tanto, no todo el uso de Rovo equivale a consumo facturable. La diferencia está en qué funcionalidades utilizan el medidor de créditos de Rovo.

Los **planes gratuitos no reciben asignaciones para los medidores** relacionados con IA. Los créditos de Rovo solo están incluidos en las suscripciones de pago de Jira, Confluence, Service Collection y Teamwork Collection, por lo que un plan Free no tiene una asignación de créditos de Rovo.

<h2>Automation: de ejecuciones a pasos</h2>

Hasta ahora, el consumo se podía entender en términos de ejecuciones completas del flujo (flow runs). Con el nuevo modelo, el **consumo se mide mediante pasos individuales** (automation steps).

Aquí tienes un ejemplo: 

- Una automatización sencilla que ejecuta 2 pasos.
- Una automatización compleja que ejecuta 20 pasos.

Con un modelo basado en ejecuciones, ambas podrían contabilizarse como una única ejecución. Con el nuevo modelo basado en pasos, **cada componente ejecutado se contabiliza individualmente**, es decir, una acción, una condición, una bifurcación (branch) o un bucle (loop) ejecutado cuenta como un paso.

**¿Qué tiene coste en Automation?**

El consumo corresponde a **los pasos ejecutados por las automatizaciones**. Por tanto, cuanto más compleja sea una automatización y más acciones ejecute, mayor será su consumo.

Además, los planes Enterprise dejan de disponer de automatización ilimitada y pasan a contar con una asignación mensual.

<h2>Assets: los objetos almacenados pasan a medirse</h2>

Assets se incorpora al modelo de uso mediante el medidor de Assets objects. La mayoría de los planes Cloud de pago incluyen una cuota mensual de objetos de Assets sin coste adicional, determinada por el plan y el número de usuarios contratados. Para los clientes de Service Collection, la asignación y los precios no cambian, aunque el consumo pasa a tener visibilidad centralizada en Atlassian Administration.

<h2>¿Qué consume la cuota de Assets?</h2>

El medidor contabiliza los registros de activos almacenados, como pueden ser:

- Servidores.
- Portátiles.
- Elementos de configuración o CIs.
- Licencias de software.
- Otros activos registrados en Assets.

Cuando una organización supera los objetos incluidos en su asignación, el consumo adicional <strong>puede generar un coste</strong>. Puedes consultar los límites en la <a href="https://support.atlassian.com/assets/docs/increase-the-usage-limit-for-assets/" target="_blank" rel="nofollow">documentación de Atlassian</a>.

Aquí tienes un ejemplo de dónde puedes consultar el uso de Assets: 

<img width="100%" src="/img/atlassian-products/assets-usage.png" alt="Usage Assets">
<br>

<h2>Customer Service Management: pago por resolución de IA</h2>

Customer Service Management introduce un modelo diferente al resto de medidores: AI agent resolutions. Se trata de un **modelo basado** en el resultado obtenido (outcome-based).

En este caso, **el cliente paga cuando la IA consigue resolver completamente una consulta sin intervención humana**. El precio indicado es de **1 dólar por resolución**.

Por tanto:

- Si la IA resuelve el ticket → se contabiliza una resolución.

- Si no consigue resolverlo → no se genera ese coste por resolución.

<h2>Bitbucket: también se controla el consumo</h2>

El modelo de uso también afecta a determinados recursos de Bitbucket. La gestión de los principales medidores se centraliza en Atlassian Administration, incluyendo:

- Build minutes.
- Almacenamiento Git LFS.
- Almacenamiento de paquetes.
- Red de paquetes.

En los planes mensuales, las asignaciones pasan de gestionarse a **nivel de workspace a nivel de organización**. En los planes anuales, el uso que supere la asignación incluida será facturable.

**¿Qué consume minutos de compilación?**

- Las compilaciones fallidas (failed builds) también consumen minutos de compilación.

- Los self-hosted runners, por su parte, no consumen del medidor de minutos de compilación.


| Aplicación / capacidad                | ¿Qué se mide?                                            | ¿Qué está incluido?                                                            | ¿Qué tiene coste?                                                                  |
| ------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| **Rovo**                              | Créditos de Rovo                                         | La mayoría de planes Cloud de pago incluyen una asignación mensual de créditos | Cuando se supera la asignación incluida y se utilizan capacidades que consumen créditos               |
| **Rovo Search**                       | —                                                        | **No consume créditos de Rovo**                                                | No aplica a este medidor                                                                              |
| **Rovo Chat y Agentes**               | Créditos de Rovo                                         | Uso incluido dentro de la asignación mensual                                   | Cuando se supera la asignación incluida                                                               |
| **Automation**                        | Pasos (*automation steps*)                               | Los planes incluyen una asignación mensual de pasos     | Cuando se superan los pasos incluidos                                                                 |
| **Assets**                            | Objetos de Assets                                        | La mayoría de planes Cloud de pago incluyen una asignación mensual de objetos  | Cuando se supera el número de objetos incluidos                                                       |
| **Customer Service Management (CSM)** | Resoluciones de agentes de IA                            | No se cobra por una consulta que no sea resuelta por la IA                     | **$1 por resolución** cuando el agente de IA resuelve completamente el ticket sin intervención humana |
| **Bitbucket**                         | Build minutes, Git LFS, almacenamiento y red de paquetes | Los planes incluyen asignaciones según el modelo de suscripción                | El uso que supere la asignación incluida puede ser facturable                                         |


<h2>Fechas clave del nuevo modelo de pago por uso</h2>

La implantación del nuevo sistema se realiza de forma progresiva. Estas son las fechas principales que debes conocer:

- **1 de septiembre de 2026**: Atlassian comunica públicamente el cambio a los clientes y pone a disposición la visibilidad del consumo en Atlassian Administration.

- **3 de diciembre de 2026**: Comienza la facturación por uso adicional (extra usage billing) para la mayoría de los medidores.

<h2>¿Dónde puedo consultar mi consumo de Atlassian?</h2>

Los administradores de la instancia disponen de un punto centralizado para consultar y gestionar el consumo: Atlassian Administration. Si eres administrador y quieres consultar el consumo, puedes seguir los siguientes pasos: 

1 - Accede a <a href="https://admin.atlassian.com/" target="_blank" rel="nofollow">Atlassian Administration</a>.<br>

2 - Selecciona tu organización. <br>

3 - En el menú de navegación, entra en **Insights** (Información). <br>

4 - Selecciona **Platform usage** (Uso de la Plataforma). <br>

5 - Elige el medidor que quieres consultar. <br>

<img width="100%" src="/img/atlassian-products/insights-plataform-usage.png" alt="Consulta los limites por app en la Administracion de Atlassian">
<br>


<h2>¿Cómo puedo controlar el consumo y evitar sorpresas?</h2>

El nuevo modelo hace que la monitorización del consumo sea especialmente importante para los administradores. Atlassian Administration **permite supervisar el uso, hacer previsiones y establecer límites** para los diferentes medidores. Además, Atlassian utiliza alertas para avisar cuando una organización alcanza determinados niveles de consumo. Los administradores reciben notificaciones cuando se alcanza el **80% y el 100%** de una asignación o de un límite configurado.

Si trabajas con un **Partner de Atlassian** o estás pensando en contar con uno, también puedes apoyarte en él para revisar tu consumo, configurar los límites y recibir asesoramiento sobre cómo gestionar el uso de las diferentes capacidades. Desde excentia, como Gold Partner de Atlassian, podemos ayudarte a analizar las necesidades de tu organización y a gestionar estos límites para que el consumo se ajuste a tus necesidades.