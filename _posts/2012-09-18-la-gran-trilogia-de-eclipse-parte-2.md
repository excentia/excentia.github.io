---
layout: post
title: La gran trilogía de Eclipse. Parte 2.
date: '2012-09-18T09:10:00.000+02:00'
author: Míriam Luján
categories:
- plugins
- desarrollo
modified_time: '2012-09-24T09:22:16.732+02:00'
thumbnail: http://1.bp.blogspot.com/-DAJphjMZiJY/UCoNUS0uSZI/AAAAAAAAAGA/NG_G5j4cDCY/s72-c/eclipse.png
blogger_id: tag:blogger.com,1999:blog-6299073294914176200.post-7072227880446068107
redirect_from: /2012/09/la-gran-trilogia-de-eclipse-parte-2.html
---

La gran trilogía de Eclipse consiste en tres artículos sobre como convertir un plugin de eclipse en un producto standalone. En el primer artículo se explicó como construir un plugin de eclipse y convertirlo en un producto standalone desde la interfaz de gráfica de eclipse. En este segundo artículo la idea es construir el producto desde consola con la ayuda de maven sin necesidad de utilizar la interfaz gráfica de eclipse.

<h2>Convierte un plugin de eclipse a un producto standalone con maven</h2>

Tycho es un plugin de Maven que proporciona soporte Maven para construir plugins de eclipse, features, repositorios, aplicaciones RCP de Eclipse, ...

En mi artículo anterior se construyó un plugin de eclipse que se puede convertir en un producto ejecutable desde consola. Para explicar como construir ese producto desde consola en vez de desde el entorno gráfico de eclipse hay que basarse en el proyecto explicado en el artículo anterior.

Para construir un ejecutable para cada entorno es necesario definir un fichero de configuración. Por lo tanto creamos un nuevo proyecto vacío en el proyecto del artículo anterior llamado target-platform con el fichero indigo.target dentro:

```
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <version="3.6">
    <target name="eclipse 3.7.1 (indigo)" sequenceNumber="16">
     <locations>
      <location includeAllPlatforms="false" includeMode="planner" includeSource="false" type="InstallableUnit">
      <unit id="org.eclipse.rcp.source.feature.group" version="3.7.1.r37x_v20110729-9DB5FmNFnFLSFCtLxnRfMqt15A4A"/>
      <unit id="org.eclipse.equinox.sdk.feature.group" version="3.7.1.R37x_v20110907-7M7W8h8eNV4Vrz-hz01A7SL_MhZP"/>
      <unit id="org.eclipse.pde.feature.group" version="3.7.1.r37x_v20110810-0800-7b7qFVtFEx2XnmZ4jlM5mjM"/>
      <repository location="https://download.eclipse.org/releases/indigo"/>
     </location>
    </locations>
    </target>
```

Para construir el producto con maven es necesario crear un proyecto vacío que contendrá el pom.xml padre:

```
<?xml version="1.0" encoding="UTF-8"?>
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>es.excentia.eclipse.plugins</groupId>
    <artifactId>parent</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <name>Ejemplo parent</name>
    <description>Ejemplo.</description>
    <url>https://www.excentia.es</url>

    <modules>
        <module>../ejemploBaseFeature</module>
        <module>../ejemploFeature</module>
        <module>../ejemplo-plugin</module>
        <module>../ejemplo-product</module>
        <!-- here we store our target platform definition -->
        <module>../target-platform</module>
    </modules>

    <repositories>
        <repository>
            <id>eclipse-indigo</id>
            <url>https://download.eclipse.org/releases/indigo</url>
            <layout>p2</layout>
        </repository>
    </repositories>

    <properties>
        <tycho-version>0.15.0</tycho-version>
        <tycho-groupid>org.eclipse.tycho</tycho-groupid>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <build>
        <plugins>
            <!-- configure out target platform -->
            <plugin>
                <groupId>${tycho-groupid}</groupId>
                <artifactId>target-platform-configuration</artifactId>
                <version>${tycho-version}</version>
                <configuration>
                    <resolver>p2</resolver>
                    <target>
                        <!-- g:a:v:c of our custom target platform -->
                        <artifact>
                            <groupId>es.excentia.eclipse.plugins</groupId>
                            <artifactId>target-platform</artifactId>
                            <version>1.0.0-SNAPSHOT</version>
                            <classifier>indigo</classifier>
                        </artifact>
                    </target>
                    <!-- ??? -->
                    <ignoreTychoRepositories>true</ignoreTychoRepositories>

                    <!-- we build 2 versions, win32 and linux -->
                    <environments>
                        <environment>
                            <os>win32</os>
                            <ws>win32</ws>
                            <arch>x86</arch>
                        </environment>
                        <environment>
                            <os>linux</os>
                            <ws>gtk</ws>
                            <arch>x86</arch>
                        </environment>
                    </environments>
                </configuration>
            </plugin>
            <plugin>
                <groupId>${tycho-groupid}</groupId>
                <artifactId>tycho-maven-plugin</artifactId>
                <version>${tycho-version}</version>
                <extensions>true</extensions>
            </plugin>
            <!-- Testing -->
            <plugin>
                <groupId>${tycho-groupid}</groupId>
                <artifactId>tycho-surefire-plugin</artifactId>
                <version>${tycho-version}</version>
                <configuration>
                    <useUIHarness>false</useUIHarness>
                </configuration>
            </plugin>

            <plugin>
                <groupId>${tycho-groupid}</groupId>
                <artifactId>tycho-compiler-plugin</artifactId>
                <version>${tycho-version}</version>
                <configuration>
                    <source>1.6</source>
                    <target>1.6</target>
                </configuration>
            </plugin>
    </plugins>
    </build>

</project>
```

El plugin de eclipse debe especificar en el pom que es un plugin de eclipse, para ello el packaging tiene que ser eclipse-plugin:

```
    <?xml version="1.0" encoding="UTF-8"?>
    <project>
        <modelVersion>4.0.0</modelVersion>
        <parent>
            <relativePath>../ejemplo-parent/pom.xml</relativePath>
            <groupId>es.excentia.eclipse.plugins</groupId>
            <artifactId>parent</artifactId>
            <version>1.0.0-SNAPSHOT</version>
        </parent>
        <artifactId>ejemplo-plugin</artifactId>
        <packaging>eclipse-plugin</packaging>
        <name>Plugin ejemplo</name>
</project>
```

El producto debe indicar en el packaging que es un eclipse-repository para indicar que se va a convertir en un producto:
```
    <?xml version="1.0" encoding="UTF-8"?>
    <project>
        <modelVersion>4.0.0</modelVersion>
        <parent>
            <relativePath>../ejemplo-parent/pom.xml</relativePath>
            <groupId>es.excentia.eclipse.plugins</groupId>
            <artifactId>parent</artifactId>
            <version>1.0.0-SNAPSHOT</version>
        </parent>
        <artifactId>ejemplo-product</artifactId>
        <packaging>eclipse-repository</packaging>
        <name>Ejemplo producto</name>
        <build>
            <plugins>
                <plugin>
                    <groupId>${tycho-groupid}</groupId>
                    <artifactId>tycho-p2-publisher-plugin</artifactId>
                    <version>${tycho-version}</version>
                    <configuration>
                        <!-- tells p2 to publish artifacts in addition to metadata -->
                        <publishArtifacts>true</publishArtifacts>
                    </configuration>
                </plugin>
                <plugin>
                    <groupId>${tycho-groupid}</groupId>
                    <artifactId>tycho-p2-director-plugin</artifactId>
                    <version>${tycho-version}</version>
                    <executions>
                        <execution>
                            <id>materialize-products</id>
                            <goals>
                                <goal>materialize-products</goal>
                            </goals>
                        </execution>
                        <execution>
                            <id>archive-products</id>
                            <goals>
                                <goal>archive-products</goal>
                            </goals>
                        </execution>
                    </executions>
                    <configuration>
                        <products>
                            <product>
                                <!-- This should match the 'id' attribute on the overview tab of the
                                    .product file -->
                                <id>ejemplo-product</id>
                            </product>
                        </products>
                    </configuration>
                </plugin>
            </plugins>
        </build>
    </project>
```

En el pom de la base feature se debe especificar que es una eclipse-feature:
```
    <?xml version="1.0" encoding="UTF-8"?>
    <project>
        <modelVersion>4.0.0</modelVersion>
        <parent>
            <relativePath>../ejemplo-parent/pom.xml</relativePath>
            <groupId>es.excentia.eclipse.plugins</groupId>
            <artifactId>parent</artifactId>
            <version>1.0.0-SNAPSHOT</version>
        </parent>
        <artifactId>ejemploBaseFeature</artifactId>
        <packaging>eclipse-feature</packaging>
        <name>Ejemplo Base Feature</name>
    </project>
    Al igual que en el pom de la otra feature:
    <?xml version="1.0" encoding="UTF-8"?>
    <project>
        <modelVersion>4.0.0</modelVersion>
        <parent>
            <relativePath>../ejemplo-parent/pom.xml</relativePath>
            <groupId>es.excentia.eclipse.plugins</groupId>
            <artifactId>parent</artifactId>
            <version>1.0.0-SNAPSHOT</version>
        </parent>
        <artifactId>ejemploFeature</artifactId>
        <packaging>eclipse-feature</packaging>
        <name>Ejemplo Feature</name>
    </project>
```

Por último el pom.xml del target-plaform:
```
    <?xml version="1.0" encoding="UTF-8"?>
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
        <modelVersion>4.0.0</modelVersion>
        <artifactId>target-platform</artifactId>
        <packaging>pom</packaging>
        <name>RCP Target Definition</name>
        <parent>
            <artifactId>parent</artifactId>
            <groupId>es.excentia.eclipse.plugins</groupId>
            <version>1.0.0-SNAPSHOT</version>
        </parent>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.codehaus.mojo</groupId>
                    <artifactId>build-helper-maven-plugin</artifactId>
                    <version>1.3</version>
                    <executions>
                        <execution>
                            <id>attach-artifacts</id>
                            <phase>package</phase>
                            <goals>
                                <goal>attach-artifact</goal>
                            </goals>
                            <configuration>
                                <artifacts>
                                    <!-- the .target file defines our tp -->
                                    <artifact>
                                        <file>indigo.target</file>
                                        <type>target</type>
                                        <classifier>indigo</classifier>
                                    </artifact>
                                </artifacts>
                            </configuration>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </project>

```

Con todos los pom.xml correctamente podemos ejecutar mvn clean install en ejemplo-parent para obtener el producto en el target del producto.

En el target del producto podemos encontrar un directorio llamado products con un zip para linux y otro para windows. Además, dentro del 
directorio ejemplo-product encontraremos un directorio para cada sistema operativo con un ejecutable. Al ejecutar el de linux debemos obtener de nuevo Hello RCP World! por consola.

En conclusión, la diferencia principal con el artículo anterios es que en este caso hemos podido obtener el producto desde consola con la orden mvn clean install. No necesitamos el entorno de eclipse para obtener el producto ni para ejecutarlo.

Para cerrar esta trilogía de artículos sobre plugins de eclipse en el próximo artículo explicaré como testear el proyecto implementado en estos artículos.