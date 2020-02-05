---
layout: post
title: 'Software quality assurance on Hofmann software products'
description: Working on software product quality implies making many changes that are not always easy, perhaps especially in a company that does not develop software or whose benefit does not come directly from it. Discover the keys of a successful continuous inspection system implementation at Hofmann. 
date: '2020-01-30T08:00:00.000+01:00'
author: Andrea Crespo. 
categories: 
- sonarsource
- calidad
- devops

cover: /img/posts/
modified_time: '2018-10-01T08:00:00.000+01:00'
---
[Hofmann](https://www.hofmann.es/) is a leader in digital albums and personalized products. Founded in 1923, the company has contributed to the memories of many generations of families in Spain. From the frames that our grandmothers have to the current personalized digital albums, Hofmann has been present in the photographic history of our country. 

The Valencian company excelled in adapting to the new era and in 2005 they were already making their first digital albums. Innovation, its capacity to adapt demonstrated throughout its long [history](https://www.lasprovincias.es/economia/201412/28/historia-hoffman-imprimir-libros-20141228120556.html?ref=https%3A%2F%2Fwww.google.com%2F) and its undisputed brand presence and market leadership, led Photobox (European leader) to acquire the Valencian company, resulting in a unique alliance. 

Behind all this innovation, there are multiple software projects that needed to be analyzed to ensure the operation of business. Quality is precisely a differentiating element in Hofmann's products. 

Mobile and desktop apps that users download to create their customized products, e-commerce (back office and gateway), a production dashboard, internal use applications, the entire suite for the production factory, etc., are some examples of the software handled by Hofmann. Developments in Visual Basic, C and C#, Java, PHP, NodeJS, Swift, Kotlin, etc., hosted in 30 Git/GitHub repositories. 

On top of that, we have to add one more level of complexity: the software is developed through external companies. 


## How did the need to measure code quality arise?

Hofmann had no control over his code, it was totally unknown. Without code, there was no way to measure the quality of the software, nor of the suppliers' projects. 
This situation, in which there wasn't internal involvement in much of the development, also caused a sense of frustration in Hofmann's team. They did not feel useful as they weren't able to participate in software development.

In addition, this situation also resulted in decentralization and lack of control. There wasn't a single place where the company's software applications resided. 

The first step was to centralize the control and management of all that software. 
Until now, Hofmann did not have its own code available! This, in addition to the lack of control mentioned above, also meant a very slow response to errors and very poor bug reporting. 

The first action was to move from sending binaries to Hofmann's FTP, to a shared SVN. Version control was slowly incorporated, being this the key and necessary part of the quality and continuous integration environment that was about to be introduced. 

Once this initial situation was overcome (a basic condition to be able to measure, is to have the element to be measured, also in software quality!) new challenges were presented to be overcome. 

One of the main challenges was to change the paradigm that until that moment was running the quality department and its relationship with the suppliers. Testing used to take place at the end of the software lifecycle, following a traditional framework. This was expensive, not very useful and effortless (there was hardly any time left between delivery and production). 
Non-agile testing had many consequences. Updates to the desktop application are critical and its downtime is very costly to the business (the time the user cannot create albums or products, is the same time during which orders aren't received). 

Development was out of control, with constant patches and new versions to "get going". Hofmann's applications were becoming large, business-critical projects, constantly changing without any control. Any error or change could have a big impact. 

With the incorporation of version control, the aim is not only to improve management and transparency in the code, but also to provide the technical team with a versioning system that allows them to improve the code of their applications without having a negative and direct impact on the business. A clear commitment to work on quality from the beginning, in a scalable and transparent way. 

## Why did they choose excentia and bet on continuous inspection?

Centralizing the code and getting a basic use of version control tools, is relatively simple. But Hofmann's aspirations were stronger, and that's why they needed help to manage the whole process and provide a complete environment. 

With excentia, Hofmann found a colleague to share a journey of continuous inspection. Specialized in SonarQube (we are exclusive partners in Spain and Latin America) with a clear philosophy in mind (*shift left* !), we helped them in the implementation of SonarQube and its integration with tools like Jenkins, creating a complete system of continuous inspection of code. 

In the words of Hofmann's quality department 

> Having the support of excentia is very useful to us. They provide us with new ideas based on all their experience. They presented us a structured project in very well identified phases that gives us a lot of confidence. Their incorporation has been enriching for all the agents involved, both for Hofmann and for the external suppliers. 

## Improving code quality is possible

What have we done together with Hofmann to improve the quality of the code?

- Code migration to Git/GitHub repositories.

- Building a continuous quality and integration environment that allows early issues detection, based on Git/GitHub + Jenkins + SonarQube + automatic unit testing.

- Implementation and configuration of SonarQube and SonarLint for static code analysis.

- Define a multi-branch pipeline and pipeline strategy. 

- Define test strategies and test plans.

- Evangelization of "Fix the Leak" [(now "Clean as you Code")](https://www.excentia.es/limpia-tu-codigo) to work with legacy code and critical applications. 


With all these actions, little by little, Hofmann is getting to know his code better, error detection has been refined and as a consequence they are more concrete when reporting bugs. 

After an initial analysis, they have been able to identify blocking or critical bugs and focus on repairing them, thus better prioritizing their tasks. The initial photo shows good code quality with very good indicators about maintainability, and adequate qualifications in security and reliability. However, a high percentage of duplicate code has been detected. With all this information, Hofmann knows its strengths and weaknesses, the code and the quality of it offered by its suppliers, and can work under a defined and argued methodology, without affecting the operation of the business. 

## Looking to the future

There's still a long way to go. Quality is a work of continuous improvement that never stops. 
However, even being in an initial stage of the implementation and improvement of the ecosystem proposed by excentia, Hofmann already highlights many benefits and results obtained. 

The success has been such that Photobox and after checking the work of their colleagues in Spain, has manifested interest in incorporating these tools and methodology.


In the path that is about to be developed, we will continue working on the evangelization of quality, in more technical aspects such as the adaptation of rules to reduce the number of false positives or the creation of tailored rules to their particular requirements and needs. 

