---
layout: post
title: 'Cómo asignar tareas de Jira a Cursor'
description: Aprende cómo funciona la integración entre Jira y Cursor. Descubre cómo asignar tareas y a configurar esta integración.
date: '2026-07-08T08:00:00Z'
author: Belén Casanovas
categories:

- atlassian
- noticias


cover: /img/posts/2026-07-09-como-asignar-incidencias-jira-cursor.png

---

Atlassian ha presentado la **integración entre Jira y Cursor**, una nueva funcionalidad que permite asignar tareas directamente a un agente de IA con todo el contexto necesario para empezar a trabajar. En este artículo te explicamos cómo configurar esta integración paso a paso para comenzar a utilizar Cursor desde Jira.

<h2>Qué puedes hacer con esta integración</h2>
Además de acceder a todo el contexto de tu equipo en Jira mediante el MCP (Model Context Protocol), con esta integración, ahora también puedes:

- **Asignar trabajo a Cursor** directamente desde la interfaz de usuario.
- Mencionar a **Cursor en los comentarios** para colaborar y recibir actualizaciones sobre el estado del trabajo.
- **Configurar flujos de trabajo** para que Cursor inicie tareas automáticamente.
- Puedes **seguir el progreso directamente desde la propia incidencia**, sin necesidad de consultar otra herramienta.

<h2>Requisitos previos</h2>

Antes de **instalar la integración de Jira y Cursor**, asegúrate de disponer de lo siguiente:

- **Rovo habilitado** en tu instancia de Jira. 
- Acceso de **administrador a la instancia de Jira** donde deseas instalar la aplicación.
- **Permisos de administrador en Cursor** para el equipo que quieres conectar.
- Una cuenta de **GitHub o GitLab** conectada a Cursor para acceder a los repositorios y gestionar las pull requests.
- La integración de Jira con Cursor **no es compatible** actualmente con las instancias de Atlassian que utilizan **HIPAA o FedRAMP** (incluido Government Cloud).

Para ampliar la información sobre los requerimienos puedes consultar [esta página](https://cursor.com/docs/integrations/jira#requirements) de Cursor. 

<h2>Proceso de instalación</h2>

Como administrador de Cursor:

- Ve a **Integrations en Cursor**.
- Haz clic en **Connect junto a Jira**.
- Continúa hasta la página de la aplicación **Cursor en Atlassian Marketplace**.
- Haz clic en **Get it now**.
- Selecciona el sitio de **Jira donde deseas instalar Cursor** y haz clic en Review.
- Revisa la aplicación y pulsa **Get it now**.
- Cuando la instalación finalice en Jira, haz clic en **Configure en la ventana emergente** que aparecerá en la esquina inferior izquierda.

¿Qué hacer si no ves la ventana emergente?
- Ve a **Administration > Connected Apps**. 
- Selecciona la **aplicación Cursor**. 
- Abre la pestaña **Connections**.
- Haz clic en Configure desde el menú de los **tres puntos (⋯)**.

- Conecta el sitio de **Jira con tu equipo de Cursor**.
- Completa la configuración restante de **Cloud Agent en Cursor**:
- Conecta **GitHub o GitLab** si todavía no has vinculado un proveedor de repositorios.
- Activa la **facturación basada en el uso (usage-based pricing)**.
- **Confirma la configuración** de privacidad.
- Selecciona un repositorio predeterminado, el modelo de IA y la rama base desde la configuración de Cloud Agents en el panel de Cursor.

¡Ya lo tienes! Vuelve a Jira y empieza a utilizar Cursor desde cualquier work item.