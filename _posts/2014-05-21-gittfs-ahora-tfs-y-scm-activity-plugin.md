---
layout: post
title: GitTfs. ¡TFS y SCM Activity Plugin ya pueden ser amigos!
date: '2014-05-21T14:42:00.000+02:00'
author: Alejandro Piera
categories:
- sonarqube
- plugins

---

Actualmente, el plugin **[SCM Activity](https://docs.codehaus.org/display/SONAR/SCM+Activity+Plugin)** de **[SonarQube](http://www.sonarqube.org/)** no soporta oficialmente **[Team Foundation Server](http://www.visualstudio.com/en-us/products/tfs-overview-vs.aspx)** (TFS), por lo que, hasta ahora, era imposible acceder a este repositorio para extraer la información que SCM Activity puede proporcionar.

En este artículo explicamos cómo poder extraer la información necesaria sobre los commits, utilizando **[GitTfs](https://github.com/git-tfs/git-tfs/blob/master/README.md)**. Esta herramienta es un puente entre nuestro servidor TFS y SCM Activity Plugin, y para utilizarlo debemos seguir los siguientes pasos.

**La instalación, configuración y uso de GitTfs se ha realizado en sistemas operativos Windows.**

## Instalación de Git


* Descargar **[Git](http://git-scm.com/download/win)** de la página oficial.
* Con la instalación por defecto funciona correctamente.
* Añadir a la variable de entorno `PATH` varias rutas:

  * `<Git path>\bin`
  * `<Git path>\cmd`

## Instalación de GitTfs

Para realizar esta tarea existen dos formas de instalar esta herramienta, desde la página oficial o a través de la aplicación Chocolatey. Ambas formas de instalar GitTfs son muy sencillas, por lo que utilizar una u otra dependerá de nuestras preferencias. En excentia hemos probado las dos opciones y hemos conseguido que la herramienta funcione a la perfección en ambas. Explicamos las distintas opciones a continuación.

### Desde la página oficial

* Descargar [GitTfs](https://github.com/git-tfs/git-tfs/releases) y descomprimirlo en una carpeta.
* Añadir a la variable de entorno `PATH` la ruta donde se ha descomprimido:

  * `<GitTfs path>`

### Con Chocolatey

Para quien no conozca esta aplicación, [Chocolatey](http://chocolatey.org/) es un gestor de paquetes similar a apt-get de Linux, pero pensado para Windows.

Si queremos utilizar este sistema debemos seguir los siguientes pasos:

* Instalar Chocolatey desde la página oficial (http://chocolatey.org/) o ejecutar el siguiente comando desde nuestra consola:

```bash
@powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin
```

* Una vez instalado Chocolatey, instalaremos [GitTfs Chocolatey package](http://chocolatey.org/packages/gittfs) como indica en la página oficial (http://chocolatey.org/packages/gittfs) o ejecutar el siguiente comando desde nuestra consola:

```bash
cinst gittfs
```

## Utilización de GitTfs

Lo primero que se debe hacer es **clonar** nuestro repositorio TFS en el directorio deseado. Para ello, debemos ejecutar desde línea de comandos la siguiente instrucción:

```bash
git tfs clone <serverPath> <projectPath> <localPath> -u=<username> -p=<password>
```

Esta tarea puede durar desde unos pocos minutos hasta varias horas, todo depende del tamaño de nuestro repositorio y de la cantidad de commits que se han realizado en él, porque con este comando se extrae toda la información posible del repositorio (fecha de cada commit, usuario de cada commit, comentario de cada commit, ficheros por commit, etc.).

**Aquí tienes un ejemplo:**

```bash
git tfs clone http://123.45.67.89:8080/tfs $/GlobalProject/Project C:\TfsRepository\GlobalProject\Project -u=user -p=password
```

Una vez hecho esto, cada vez que haya un nuevo commit en el repositorio, nosotros también querremos tener este nuevo cambio, por lo que deberemos actualizar a la última versión. Para ello, haremos un **pull**, para que así solo se descarguen los últimos commits realizados en el repositorio. Ejecutaremos desde línea de comandos la siguiente instrucción:

```bash
cd <localPath>
git tfs pull
```

**Aquí tienes un ejemplo:**

```bash
cd C:\TfsRepository\GlobalProject\Project
git tfs pull
```

Si seguimos todos estos pasos, tendremos un repositorio TFS sincronizado en Git para poder realizar los análisis y extraer la información de los desarrolladores, algo que hasta ahora no podíamos hacer.

## Análisis del proyecto

Si vamos a realizar el análisis desde el directorio en el que tenemos el repositorio de Git, sonar-runner reconocerá el tipo de control de versiones utilizado y tan solo deberemos añadir los parámetros `sonar.scm.enabled` y `sonar.scm-stats.enabled` y asignarlos a `true`.

**Aquí tienes un ejemplo:**


```properties
sonar.scm.enabled=true
sonar.scm-stats.enabled=true
```

En definitiva, si seguimos los pasos descritos en el artículo, podremos llegar a conectar **[Team Foundation Server](http://www.visualstudio.com/en-us/products/tfs-overview-vs.aspx)** con **[SCM Activity Plugin](https://docs.codehaus.org/display/SONAR/SCM+Activity+Plugin)** a través de **[Git](http://git-scm.com/)**, consiguiendo además que nuestro DevTeam Plugin muestre información detallada de los desarrolladores.

## Enlaces de interés

Por último, incluimos una serie de enlaces que pueden resultar de utilidad para completar y complementar la información de este artículo:

* [Git](http://git-scm.com/)
* [GitTfs](https://github.com/git-tfs/git-tfs/blob/master/README.md)
* [Chocolatey](http://chocolatey.org/)
* [GitTfs Chocolatey package](http://chocolatey.org/packages/gittfs)
* [SCM-Activity Plugin](https://docs.codehaus.org/display/SONAR/SCM+Activity+Plugin)

