---
layout: post
title: 'SonarQube migration and update for Axencia para a Modernización Tecnolóxica (Amtega)'
description: Discover the details of the complex migration and version update of SonarQube in Amtega, a public organization of Galicia, where we also develop a quality plan based on continuous code inspection. 
date: '2020-01-30T08:00:00.000+01:00'
author: Andrea Crespo. 
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/
modified_time: '2018-10-01T08:00:00.000+01:00'
---
The [Agency for the Technological Modernisation of Galicia](https://amtega.xunta.gal/es/objetivos) (Amtega), attached to the Presidency of [Xunta de Galicia](https://www.xunta.gal/portada) has as it core foundation the definition, development and execution of the instruments of the policy of Xunta de Galicia in the field of information and communication technologies, innovation and technological development.
Its specific objectives include transforming the regional public administration through the use of ICT and making advanced digital content and public services available to Galician citizens and companies. 

The agency brings together the technological areas of all the Regional Ministries, with the consequent volume in management of ICT tools and software projects. Security and quality department is in charge of quality management and assurance of all of these applications, using among other tools, SonarQube. 


Amtega had a complete ecosystem of continuous code inspection which, however, had become obsolete and therefore did not respond efficiently at the same pace as the applications it was trying to analyse.

This is a recurring situation, which we have observed in both Atlassian and SonarQube tools. It is surprising that in an industry as advanced and constantly changing as the software industry, people are still so reluctant to maintain and update key business applications and tools. 
With this case, we want to put forward the arguments needed to justify an update, however complex it may be, and what are the consequences of not doing so, or developing it in an inappropriate way.

## Renewal and version upgrade: a leap in quality

Following the licensing model [renewal](https://www.excentia.es/novedades-importantes-en-sonarsource) carried out by SonarSource at the end of 2017, excentia undertook an information initiative to update versions of SonarQube, given the benefits that the new functionalities introduced brought to organisations.

It was during this initiative when we contacted Amtega's quality managers. Their response was immediate: they were satisfied with the use of SonarQube, but they were missing certain functionalities. Among them, some specific rules for language analysis. As we continued our conversation we found out why: they were using a SonarQube 4.5.6 version (when the available LTS was already a 6.7).

Many of the rules they thought we would have to specifically develop for them were already available on SonarQube by default. In addition, the concept of quality had changed completely: SonarQube had already incorporated security analysis and classified issues such as vulnerabilities, code smells and bugs. Quality Gates and Quality Profiles were new to the team too.

In short, Amtega, a public organisation quite experienced in the use of ICT and with great professionals willing to continue advancing and improving the quality of their deliveries, was finding it difficult to do so, due to an old tool and methodology. If we do not continue to build houses with straw and mud, why do we continue to measure quality with outdated tools? If we do not provide an architect with the right technology and tools, their constructions will fall apart.

The change we were about to undertake was radical and complex. It takes time and risks. But as in every business decision, it is the medium and long term investment we will get in return that should determine our decisions. At Amtega they could still deliver a lot of software, but keeping it and its technical debt on duty was becoming an impossible and unprofitable mission.

The willingness and professionalism of the project managers, has made it a success. For these reasons, another dimension had to be added to the project: it was necessary to establish a quality policy, a manual for using SonarQube based on the new Fix the Leak paradigm, and to evangelize practices based on continuous analysis, *shift left* mentality and DevOps.

## SonarQube and Continuous Inspection Ecosystem Migration and Upgrade

What actions have we taken? In a nutshell:

*Migration of the metric history and the projects that existed in Amtega's old SonarQube.

* Updating the SonarQube version to the latest available LTS (7.9), thus making available a whole new suite of extended features and analysis. All this, without having to purchase a commercial licence Amtega is committed to using Open Source tools such as the Community version of SonarQube, integrated with Jenkins.

* Configuration of the CI ecosystem with Jenkins. Advanced integration of both tools.

* Documentation of SonarQube and establishment of quality policy.

* Deployment of OWASP using the power of the tool itself and adding more power using external plugins. Security has been one of the major benefits of the version upgrade.

* Creation of an alert system for events that occur during the execution of SonarQube.

* Increase the number of rules. Expand quality profiles and adapt the level of demand with respect to the quality of the code in the organization.

* On-site training for Amtega's team and for all code application providers and developers.

## Looking ahead: software quality is a journey, not a destination

Many changes have been introduced and much work is now done by Amtega to assimilate and adopt them.

Future projects are ahead, to incorporate more specific rules of architecture and more advanced complexity. We also want to work towards obtaining a structured portfolio of projects and perhaps extend the use made of SonarQube.

In the path of continuous improvement, no detours are taken, there is not even an end to the journey. Despite the proximity of the Amtega headquarters to Finisterre, we all know that this is not the end, not even of the earth.


