---
layout: post
title: 'Nueva visualización para crear y editar work items en Jira Cloud'
description: Descubre la nueva experiencia de creación en Jira Cloud con Quick Create, formularios simplificados y un flujo de trabajo más ágil
date: '2026-07-06T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-07-06-nueva-vista-creacion-work-items-jira-cloud.png

---

Atlassian ha anunciado **una experiencia de creación y visualización** de los work items en Jira que ofrece un flujo de creación más rápido y centrado, manteniendo disponible el formulario completo siempre que los usuarios lo necesiten. En este artículo, desglosamos paso a paso cuáles son las principales novedades. 

<img width="80%" src="/img/atlassian-products/nueva-vista-work-item-jira-cloud.png" alt="Nueva vista work item Jira">
<br>

<h2>Nuevo diseño de la ventana de creación</h2>

El nuevo cuadro de creación admite dos modos principales: un modo **Quick Create** compacto (nuevo) y un modo **Full Form** (el de siempre, pero con un nuevo diseño).

**Quick Create como formulario predeterminado**

El cuadro de creación de work items ahora se **abre como una ventana modal centrada** que muestra los campos **más esenciales**, en lugar de presentar desde el principio la lista completa de campos. 


**Full Form**

El formulario completo **sigue estando disponible**. Puedes ampliarlo haciendo clic en el **icono de expansión**. Además, también puedes acoplar la ventana modal de creación en la **esquina inferior derecha de la pantalla**. El modo acoplado te permite seguir trabajando en otras tareas y volver para terminar de crear el elemento de trabajo cuando estés listo.

<img width="80%" src="/img/atlassian-products/nueva-ventana-creacion-work-item-jira.webp" alt="Nueva vista de creacion de work item Jira">
<br>

<h2>Área principal de entrada</h2>

**"Summary" pasa a denominarse "Title" en la interfaz de usuario**

En la interfaz de usuario, **Summary ahora aparece como Title**. Title describe con mayor precisión qué representa este campo, es decir, el nombre del elemento de trabajo.

Las **consultas JQL, las llamadas a la API y las integraciones** que hacen referencia a summary seguirán funcionando como hasta ahora. Este cambio afecta únicamente a la etiqueta que se muestra en la interfaz de usuario.

**El campo Description es adaptable**
El campo **Description** se expande verticalmente para adaptarse a descripciones largas, bloques de código, edición de tablas e imágenes pegadas.

**El campo Description admite comandos con barra (/)**
Puedes seguir utilizando / en el campo Description para insertar elementos o invocar Rovo. Al seleccionar texto, **aparecerá una barra de herramientas** de formato.

<h2>Sobre los campos</h2>

Los campos obligatorios y opcionales se **muestran por separado**.

Los **campos obligatorios aparecen primero** en el formulario Quick Create. Los campos opcionales aparecen junto a ellos. Cuando no hay campos obligatorios, la ventana modal de Quick Create muestra únicamente los campos opcionales.

El orden de los campos en las secciones de obligatorios y opcionales coincide con el **orden establecido por los administradores** en la configuración del espacio (space setting), con dos ajustes: los campos que siempre tienen un valor predeterminado del sistema (como el campo de Reporter) y los campos con los que un usuario interactúa en contadas ocasiones, se **excluyen de la vista predeterminada** para mantener el formulario centrado en lo esencial.

Estos campos seguirán **estando disponibles** mediante la opción **Show more fields**.

<h2>¿Cuándo estará disponible?</h2>

Esta actualización se implementará progresivamente para todos los clientes de Jira Cloud a **partir de mediados de julio**, coincidiendo con la [versión de verano de Jira](https://www.excentia.es/jira-ciclo-lanzamientos-estacional).

