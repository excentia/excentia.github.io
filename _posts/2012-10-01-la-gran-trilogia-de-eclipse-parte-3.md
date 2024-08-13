---
layout: post
title: La gran trilogía de Eclipse. Parte 3.
date: '2012-10-01T08:47:00.000+02:00'
author: Míriam Luján
categories:
- sonarqube
- plugins
- testing
- desarrollo
modified_time: '2012-10-01T08:47:14.854+02:00'
thumbnail: http://1.bp.blogspot.com/-DAJphjMZiJY/UCoNUS0uSZI/AAAAAAAAAGA/NG_G5j4cDCY/s72-c/eclipse.png
blogger_id: tag:blogger.com,1999:blog-6299073294914176200.post-7024054879364871358
redirect_from: /2012/10/la-gran-trilogia-de-eclipse-parte-3.html
---

La gran trilogía de Eclipse consiste en tres artículos sobre como convertir un plugin de eclipse en un producto standalone. En el primer artículo se explicó como construir un plugin de eclipse y convertirlo en un producto standalone desde la interfaz de gráfica de eclipse. En el segundo artículo se construyó el producto desde consola con la ayuda de maven sin necesidad de utilizar la interfaz gráfica de eclipse. Por último y para terminar esta trilogía de artículos he escrito un artículo para explicar como testear el proyecto implementado en los artículos anteriores.

<h2>Como testear un plugin de eclipse</h2>

Para realizar un test de un plugin de eclipse es necesario implementar un plugin de eclipse con los test y una feature con el plugin de test.
Creamos un nuevo plugin de eclipse desde eclipse "Plug-in Project".

Hay que añadir como dependencia del plugin de test el plugin a testear. Creamos una feature desde eclipse poniendo como dependencia el plugin anterior al crear la feature.

En el producto hay que añadir como dependencia la nueva feature. Ahora los test que implementemos se podrán ejecutar como JUnit Plug-in Test desde el entorno gráfico de eclipse.

Para lanzar los test desde consola tendremos que añadir un pom.xml a la feature.
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
    <artifactId>ejemploTestsFeature</artifactId>
    <packaging>eclipse-feature</packaging>
    <name>Ejemplo Test Feature</name>
</project>

```
Pom.xml del plugin de tests:

```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <relativePath>../ejemplo-parent/pom.xml</relativePath>
        <groupId>es.excentia.eclipse.plugins</groupId>
        <artifactId>parent</artifactId>
        <version>1.0.0-SNAPSHOT</version>
    </parent>

    <artifactId>ejemplo-plugin-tests</artifactId>
    <packaging>eclipse-test-plugin</packaging>
    <name>Tests of plugin</name>

    <build>
        <plugins>
            <!-- Enabling use of jacoco -->
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>${jacoco.version}</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                        <configuration>
                            <!-- Where to put jacoco coverage report -->
                            <destFile>${basedir}/../target/reports/jacoco.exec</destFile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>

```

Al pom.xml del padre hay que añadirle una serie de plugins, quedando finalmente como:

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
        <module>../ejemploTestsFeature</module>
        <module>../ejemplo-plugin</module>
        <module>../ejemplo-plugin-tests</module>
        <module>../ejemplo-product</module>
        <!-- here we store our target platform definition -->
        <module>../target-platform</module>
    </modules>

    <repositories>
        <repository>
            <id>eclipse-indigo</id>
            <url>http://download.eclipse.org/releases/indigo</url>
            <layout>p2</layout>
        </repository>
    </repositories>

    <properties>
        <tycho-version>0.15.0</tycho-version>
        <tycho-groupid>org.eclipse.tycho</tycho-groupid>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <sonar.core.codeCoveragePlugin>jacoco</sonar.core.codeCoveragePlugin>
        <sonar.dynamicAnalysis>reuseReports</sonar.dynamicAnalysis>
        <sonar.jacoco.reportPath>${basedir}/../target/reports/jacoco.exec
        </sonar.jacoco.reportPath>
        <jacoco.version>0.5.9.201207300726</jacoco.version>
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

            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <version>${jacoco.version}</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                        <configuration>
                            <!-- Where to put jacoco coverage report -->
                            <destFile>${sonar.jacoco.reportPath}</destFile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
        <pluginManagement>
            <plugins>
                <!-- Testing -->
                <plugin>
                    <groupId>${tycho-groupid}</groupId>
                    <artifactId>tycho-surefire-plugin</artifactId>
                    <version>${tycho-version}</version>
                    <configuration>
                        <!-- <appArgLine>arguments</appArgLine> -->
                        <useUIHarness>false</useUIHarness>
                        <!-- Kill test JVM if tests take more than 10 minutes (600 seconds) 
                            to finish -->
                        <forkedProcessTimeoutInSeconds>600</forkedProcessTimeoutInSeconds>
                    </configuration>
                </plugin>
            </plugins>
        </pluginManagement>

    </build>

</project> 

```

Al ejecutar mvn clean install en el directorio del padre también se ejecutaran los test que se hayan implementado. La cobertura de estos test se puede ver con plugins de eclipse como el eCobertura o el plugin de sonar JaCoCo.

En conclusión, con esta trilogía de artículos sobre eclipse espero haber ayudado a todo aquel que empieza en el mundo de la programación de plugins de eclipse.